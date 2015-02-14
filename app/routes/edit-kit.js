import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      kit: jarvisAPI.find('kits', params.kit_id),
      locations: jarvisAPI.find('locations')
    });
  }
});
