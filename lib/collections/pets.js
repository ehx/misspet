Pets = new Mongo.Collection('pets');

Pets.attachSchema(new SimpleSchema({
  idUser: {
    type: String,
    autoValue: function(){
      return Meteor.userId();
    }
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
    type: String,
    label: 'Localidad',
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Localidad'
    },
    max: 50
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