import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';
import ProtectedRouteMixin from '../mixins/protected-route';

export default Ember.Route.extend(ProtectedRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      kit: jarvisAPI.find('kits', params.kit),
      items: jarvisAPI.find('items', { 'kit': params.kit }),
      people: jarvisAPI.find('people')
    });
  }
});
