import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			'kits': store.find('kits'),
			'locations': store.find('locations')
		});
	}
});
