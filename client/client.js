Deps.autorun(function(){
  Meteor.subscribe('userData');
});

Meteor.startup(function(){
   GoogleMaps.load({libraries: 'places'});
});

Meteor.subscribe("pets");