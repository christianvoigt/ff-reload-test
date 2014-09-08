Router.map(function() {
	this.route('test',{
		path:'/:param?',
		waitOn:function(){
			return Meteor.subscribe("test-data");
		},
		data:function(){
			if (! this.ready()) return;
			var data = TestData.find().fetch();
			return data;
		},
		action:function(){
			if (! this.ready()) return;
			this.render();			
		}
	});
});