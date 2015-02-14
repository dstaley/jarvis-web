import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      kit: jarvisAPI.find('kits', params.kit_id),
      items: jarvisAPI.find('items', {'kit': params.kit_id}),
      checkouts: jarvisAPI.find('checkouts', {'kit': params.kit_id})
    });
  }
});
