Template.petsList.helpers({
  pets: function () {
    return Pets.find();
  }
});