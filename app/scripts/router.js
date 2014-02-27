var MainRouter = Backbone.Router.extend({

	routes: {
		"poler/:videos" : "polerVideo"
	},

	initialize: function(){

		this.videos = new VideosCollection;
		this.videos.on('add', function(video){
			new MainView({model: video})
			
			console.log('show the money 2')
		})

	},

	polerVideo: function(){
		// this.videos.url = "http://vimeo.com/api/v2/polerstuff/videos.json?callback=myFunction"
		// console.log(this.videos.url);
		this.videos.fetch({
			success: function(){
				console.log('fetch complete');
			},

			error: function(error){
				console.log('error: ', error);
			}
		});

		console.log('show me the money honey')
	}






})


