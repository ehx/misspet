AutoForm.hooks({
  'pet-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('petsList');
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
