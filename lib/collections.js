Schema = {};

Pets = new Mongo.Collection('pets');
UserProfile = new Mongo.Collection('userprofile');

Schema.Address = new SimpleSchema({
  formattedAddress: {
    type: String,
    optional: true
  },
  geopoint: {
    type: [Number], //[longitude, latitude]
    decimal: true,
    optional: true
  },
  city: {
    type: String,
    optional: true
  },
  postalCode: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  countryName: {
    type: String,
    optional: true
  }
});



Schema.Pets = (new SimpleSchema({
  idUser: {
    type: String,
    autoValue: function(){
      return Meteor.userId();
    }
  },
  name: {
    type: String,
    label: 'Nombre'
  },
  type: {
    type: String,
    label: 'Especie',
    autoform: {
      'options' : [{
        label: 'Perro',
        value: 'dog'
      },
      {
        label: 'Gato',
        value: 'cat'
      }
      ],
      'label-type': 'Tipo mascota',
    }
  },
  gender: {
    type: String,
    label: 'Sexo',
    autoform: {
      'options' : [{
        label: 'Masculino',
        value: 'male'
      },
      {
        label: 'Femenino',
        value: 'female'
      }
      ],
      'label-type': 'Sexo mascota',
    }
  },
  location:{
    label: 'Localidad',
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input'
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  }
}));

Schema.UserProfile = new SimpleSchema({
  idUser:{
    type: String
  },
  name: {
    label: 'Nombre',
    type: String,
  },
  gender: {
    label: 'Sexo',
    optional: true,
    type: String,
    allowedValues: ['male', 'female'],
    autoform: {
      'options' : [{
        label: 'Masculino',
        value: 'male'
      },
      {
        label: 'Femenino',
        value: 'female'
      }
      ]
    },
  },
  avatar: {
    type: String,
    optional: true
  },
  location: {
    label: 'Localidad',
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input'
    }
  },
  phoneNumber: {
    label: 'Nro. Telefono',
    type: Number,
    optional: true
  }
});
  
  
Meteor.users.allow({
  update: function(userId, user){
    return true;
  },
  insert: function(userId, user){
    return true;
  }
});

Pets.attachSchema(Schema.Pets);
UserProfile.attachSchema(Schema.UserProfile);