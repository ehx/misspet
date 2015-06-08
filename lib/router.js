AccountsTemplates.configure({
 negativeValidation: false,
 negativeFeedback: false,
 positiveValidation: false,
 positiveFeedback: false,
 homeRoutePath: '/'
});

AccountsTemplates.configureRoute('ensureSignedIn', {
 template: 'login'
});

Router.configure({
 layoutTemplate: 'layout'
});

Router.plugin('ensureSignedIn', {
   except: ['atSignIn', 'atSignUp', 'atForgotPassword', 'chat']
});

Router.map(function() {
  
  this.route('petsList', {
    path: '/',
    layoutTemplate: 'layoutTabs'
  });
  
  this.route('petsMyList', {
    path: '/petsMyList',
    layoutTemplate: 'layoutTabs'
  });
  
  this.route('userSettings', {
    path: '/userSettings',
    layoutTemplate: 'layoutTabs'
  });
  
  this.route('petsInLocation', {
    path: '/petsInLocation',
    layoutTemplate: 'layoutTabs'
  });
  
  this.route('petShow', {
    path: '/petShow/:_id'
  });
  
  this.route('chat', {
    path: '/chat/:_chatRoom'
  });
});