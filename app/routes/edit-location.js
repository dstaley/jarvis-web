import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      location: store.find('locations', params.location_id),
      rooms: store.find('rooms')
    });
  }
});
