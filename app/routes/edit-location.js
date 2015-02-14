import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      location: jarvisAPI.find('locations', params.location_id),
      rooms: jarvisAPI.find('rooms')
    });
  }
});
