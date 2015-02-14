import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model: function(params){
    return jarvisAPI.find('search', { 'q': params.q });
  }
});
