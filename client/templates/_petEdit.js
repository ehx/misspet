Template._petEdit.helpers({
  pet: function () {
    var template = Template.instance();
    return Pets.findOne({_id: template.data.id});
  }
});

AutoForm.hooks({
  'pet-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
