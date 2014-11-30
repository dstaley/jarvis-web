import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function(params) {
		return Ember.RSVP.hash({
			item: store.find('items', params.item_id),
			checkouts: store.find('checkout-items', {'item': params.item_id})
		});
	}
});
