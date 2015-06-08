Template.petsInLocation.helpers({
  pets: function () {
    return Pets.find({ idUser: Meteor.userId() , location: Meteor.user().profile.location });
  }
});