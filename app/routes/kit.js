import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.RSVP.hash({
			kit: store.find('kits', params.kit_id),
			checkouts: store.find('checkouts', {'kit': params.kit_id})
		});
	}
});
