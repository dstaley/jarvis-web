import Ember from 'ember';
import store from '../utils/jarvis';
import ProtectedRouteMixin from '../mixins/protected-route';

export default Ember.Route.extend(ProtectedRouteMixin, {
  model: function(params){
    return Ember.RSVP.hash({
      kit: store.find('kits', params.kit),
      items: store.find('items', { 'kit': params.kit }),
      people: store.find('people')
    });
  }
});
