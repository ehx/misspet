Meteor.startup(function () {
  AutoForm.setDefaultTemplate('ionic');
});

AutoForm.hooks({
  userSettingsForm: {
    onSubmit: function (doc) {
        schemas.User.clean(doc);
        this.done();
        return false;
        IonLoading.show({
            duration: 3000
        });
    },
    onSuccess:function(operation, result, template){
        IonLoading.hide();
        Router.go('userSettings');
    },
    onError: function(operation, error, template) {
        console.log(operation,error);
    },
  }
});