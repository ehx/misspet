Template.userSettings.helpers({
  userActual : function() {
    return Meteor.users.findOne(Meteor.userId());
  }
});

Template.userSettings.events({
  'click [data-action=showLoading]': function (event, template) {
    IonLoading.show({
      customTemplate: '<h3>Guardando…</h3>',
      duration: 3000
    });
  }
});