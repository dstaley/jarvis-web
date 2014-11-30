import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	beforeModel: function(){
		if (!this.get('userAuthenticationService.currentUser')) {
			this.replaceWith('login');
		}
	},
	model: function(params){
		return Ember.RSVP.hash({
			kit: store.find('kits', params.kit),
			items: store.find('items', { 'kit': params.kit }),
			people: store.find('people')
		});
	}
});
