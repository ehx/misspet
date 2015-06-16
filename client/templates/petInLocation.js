Template.petsInLocation.helpers({
  pets: function () {
    if(profile.location) {
      return Pets.find({ idUser: Meteor.userId() , location: Meteor.user().profile.location });
    }
  }
});