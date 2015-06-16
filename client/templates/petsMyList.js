Template.petsMyList.helpers({
  pets: function () {
    var myPet = Pets.findOne({idUser: Meteor.userId()});
    if (myPet){
      return Pets.find({ "location.city" : myPet.location.city , gender: myPet.gender, type: myPet.type});  
    }
    
    return [];
  }
});