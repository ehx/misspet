Accounts.onCreateUser(function(options, user) {
  if(user.services.twitter) {
    UserProfile.insert({
      idUser: user._id,
      name: user.services.twitter.screenName,
      avatar: user.services.twitter.profile_image_url
    });
  }
 
  if(user.services.facebook) {
    UserProfile.insert({
      idUser: user._id,
      name: user.services.facebook.name,
      avatar: "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square",
      gender: user.services.facebook.gender,
      email: user.services.facebook.email,
    });
  }
  
  if(user.services.google) {
    UserProfile.insert({
      idUser: user._id,
      name: user.services.google.name,
      avatar: user.services.google.picture,
    });
  }
  return user;  
});