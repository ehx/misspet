Meteor.startup(function() {
  
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "778408992278567",
        secret: "9ddbdc240ee21f9b935c81dfd85d1ab7"
      }
    },
    { upsert: true }
  );

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "894267741607-c7k22a9m9p6thqp0u37oig44fdp0lvbd.apps.googleusercontent.com",
        client_email: "894267741607-c7k22a9m9p6thqp0u37oig44fdp0lvbd@developer.gserviceaccount.com",
        secret: "Ak85xa-awbFtmWb2y3__OGI9"
      }
    },
    { upsert: true }
  );

  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update(
    { service: "twitter" },
    { $set: {
        consumerKey: "ys2bcxEt6KmiMnP34IFlLD71B",
        secret: "bcOcWe8ZJzefrptphlUJ8azK67UnB0gozh9bpui1PFHWeHy69Z"
      }
    },
    { upsert: true }
  );
});