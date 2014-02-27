var MainView = Backbone.View.extend({

	createTemplate: _.template($'#videos-template').text());

	initialize: function(){

		$('.marketing').append(this.el);
			this.render();

	},

	render: function(){

		this.$el.html(this.model.get('id'));

	}

})