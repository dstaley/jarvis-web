import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      item: jarvisAPI.find('items', params.item_id),
      checkouts: jarvisAPI.find('checkout-items', {'item': params.item_id})
    });
  }
});
