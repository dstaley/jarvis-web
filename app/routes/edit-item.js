import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.RSVP.hash({
			'item': store.find('items', params.item_id),
			'kits': store.find('kits'),
			'locations': store.find('locations')
		});
	}
});
