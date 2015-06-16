Template.userSettings.helpers({
  userActual : function() {
    return UserProfile.findOne({idUser:Meteor.userId()});
  },
});

Template.userSettings.events({
  'click [data-action=showLoading]': function (event, template) {
    IonLoading.show({
      customTemplate: '<h3>Guardando…</h3>',
      duration: 3000
    });
  },
  'click .photo': function (event, template) {
    MeteorCamera.getPicture({ 
      quality: 100,
    }, function(error, data){
      var person = UserProfile.findOne({idUser:Meteor.userId()});
      UserProfile.update({_id: person._id}, {$set:{avatar:data}});
    });
  }
});