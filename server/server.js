Meteor.publish('userData', function() {
  if(!this.userId) return null;
    return Meteor.users.find(this.userId, {fields: {
      permission: 1,
    }});
});

Meteor.publish("pets", function () {
  return Pets.find();
});

Meteor.publish("userprofile", function () {
  return UserProfile.find();
});
