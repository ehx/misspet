Template.petsMyList.helpers({
  pets: function () {
    var myPet = Meteor.user().profile.myPet;
    return Pets.find({ idUser: Meteor.userId() , location: Meteor.user().profile.location, gender: myPet.gender, type: myPet.type});
  }
});