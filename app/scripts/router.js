var MainRouter = Backbone.Router.extend({

	routes: {
		"poler/:videos" : "polerVideo"
	},

	initialize: function(){

		this.videos = new VideosCollection;
		this.videos.on ('add', function(video){
			new VideoView({model: video})
		})

	},

	polerVideo: function(){
		this.videos.url = "http://vimeo.com/api/v2/polerstuff/videos.json?callback=myFunction"
	}
	this.videos.fetch();






})


