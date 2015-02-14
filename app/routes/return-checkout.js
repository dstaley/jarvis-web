import Ember from 'ember';
import ProtectedRouteMixin from '../mixins/protected-route';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend(ProtectedRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      checkout: jarvisAPI.find('checkouts', params.checkout_id),
      checkout_items: jarvisAPI.find('checkout-items', { checkout: params.checkout_id })
    });
  }
});
