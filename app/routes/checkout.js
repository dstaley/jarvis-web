import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      checkout: store.find('checkouts', params.checkout_id),
      checkout_items: store.find('checkout-items', { 'checkout': params.checkout_id })
    });
  },
  actions: {
    reload: function(){
      this.refresh();
    }
  }
});
