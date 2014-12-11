import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	attributeBindings: ['src'],
	images: [
		'http://media.giphy.com/media/mep0oj3Htyl0c/giphy.gif',
		'http://gifs.paddy.io/boom.gif',
		'http://gifs.paddy.io/suitup2.gif',
		'http://38.media.tumblr.com/2f9ac35f78186564c02fd397f8f4cdf0/tumblr_n405j21B501qgxmqno2_250.gif',
		'http://38.media.tumblr.com/c27ce631d536999e141216a9c9365ba7/tumblr_nfbpbrY7gz1u42neto1_400.gif',
		'http://images5.fanpop.com/image/photos/32000000/Iron-Man-gifs-iron-man-3-32065653-500-282.gif',
		'http://static.comicvine.com/uploads/original/11111/111119363/3923220-1215284725-Hater.gif',
		'http://imageserver.moviepilot.com/donut-iron-man-4-robert-downey-jr-hints-that-it-will-happen.gif',
		'http://imageserver.moviepilot.com/giphy-1-iron-man-4-tony-stark-gets-the-avengers-a-delivered-to-rdj-s-office.gif',
		'http://static.tumblr.com/haht95n/j04m8ol4j/tony_wake_up_daddys_home.gif',
		'http://static.tumblr.com/slprxkn/pvVmedz66/jarvis.gif',
		'http://static.tumblr.com/byig1db/r1Jmbwbym/tumblr_m36nz9ofk21r3lmxio2_500.gif'
	],
	src: function(){
		return this.get('images')[Math.floor(Math.random() * this.get('images').length)] || '';
	}.property('images')
});
