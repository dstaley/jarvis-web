import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      'kits': jarvisAPI.find('kits'),
      'locations': jarvisAPI.find('locations')
    });
  }
});
