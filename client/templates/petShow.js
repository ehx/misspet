Template.petShow.helpers({
  pet: function () {
    return Pets.findOne({_id: Router.current().params._id});
  },
  
  id: function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for( var i=0; i < 33; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
  
  timeAgo: function() {
    return moment(this.createdAt).calendar();
  },
});

Template.petShow.events({
    'click .tab-item': function(){
      pet = Pets.findOne({_id: Router.current().params._id});
      nameUser = Meteor.user().profile.firstName + ' ' + Meteor.user().profile.lastName;
      Session.set('chapp-username', nameUser); //you could set the user name on user login
      chatRoom = pet._id;
      Session.set('chapp-docid', chatRoom); //The room identifier. Iron router's before action can be a great spot to set this.
      Session.set('chapp-historysince',new Date()); //Limit messages based on the date they were posted
      console.log(chatRoom);
    }
});
