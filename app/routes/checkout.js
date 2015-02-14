import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      checkout: jarvisAPI.find('checkouts', params.checkout_id),
      checkout_items: jarvisAPI.find('checkout-items', { 'checkout': params.checkout_id })
    });
  },
  actions: {
    reload: function(){
      this.refresh();
    }
  }
});
