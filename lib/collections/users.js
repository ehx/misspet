Schema = {};

  Schema.myPet = new SimpleSchema({
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
    lost: {
      type: Boolean,
      optional: true,
      label: 'Perdido ?',
      autoform: {
        afFieldInput: {
          type: "boolean-checkbox"
        }
      }
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