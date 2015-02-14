import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(params){
    return jarvisAPI.find('people', params.person_id);
  }
});
