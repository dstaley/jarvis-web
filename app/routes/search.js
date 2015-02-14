import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model: function(params){
    return store.find('search', { 'q': params.q });
  }
});
