TestData = new Meteor.Collection("testdata");

if (Meteor.isClient) {
  Template.test.getLinkWithHash = function(){
    return Router.routes['test'].path()+"#random-number-"+Math.random();
  };
  Template.test.getLinkWithParam = function(){
    return Router.routes['test'].path({param:"test-param"});
  };
  Template.test.events({
    "click .router-go-link":function(){
      Router.go(Router.routes['test'].path()+"#random-number-"+Math.random());
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(!TestData.findOne()){
      for(var i=0; i<400; i++){
        TestData.insert({text:Math.random().toString(36).replace(/[^a-z]+/g, '')});
      }      
    }
    Meteor.publish('test-data', function(){
      return TestData.find();
    });        
  });  
}
