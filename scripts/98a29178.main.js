var MainRouter=Backbone.Router.extend({routes:{"poler/:videos":"polerVideo"},initialize:function(){this.videos=new VideosCollection,this.videos.on("add",function(a){new MainView({model:a}),console.log("show the money 2")})},polerVideo:function(){this.videos.fetch({success:function(){console.log("fetch complete")},error:function(a){console.log("error: ",a)}}),console.log("show me the money honey")}}),Video=Backbone.Model.extend({}),VideosCollection=Backbone.Collection.extend({model:Video,url:"http://vimeo.com/api/v2/polerstuff/videos.json?callback=?"}),MainView=Backbone.View.extend({className:"container-two",createTemplate:_.template($("#videos-template").text()),initialize:function(){console.log("view is showing"),$(".marketing").append(this.el),this.render(),console.log("render is rendering")},render:function(){this.$el.html(this.createTemplate(this.model))}});$(document).ready(function(){router=new MainRouter,Backbone.history.start()});