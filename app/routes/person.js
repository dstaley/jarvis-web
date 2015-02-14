import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      person: jarvisAPI.find('people', params.person_id),
      checkouts: jarvisAPI.find('checkouts', { 'person': params.person_id })
    });
  }
});
