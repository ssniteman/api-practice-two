var Video = Backbone.Model.extend({

});

var VideosCollection = Backbone.Collection.extend({

	model: Video,

	url: "http://vimeo.com/api/v2/polerstuff/videos.json?callback=myFunction"
})