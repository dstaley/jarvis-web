import Ember from 'ember';
import ProtectedRouteMixin from '../mixins/protected-route';
import store from '../utils/jarvis';

export default Ember.Route.extend(ProtectedRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      checkout: store.find('checkouts', params.checkout_id),
      checkout_items: store.find('checkout-items', { checkout: params.checkout_id })
    });
  }
});
