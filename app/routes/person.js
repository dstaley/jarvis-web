import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      person: store.find('people', params.person_id),
      checkouts: store.find('checkouts', { 'person': params.person_id })
    });
  }
});
