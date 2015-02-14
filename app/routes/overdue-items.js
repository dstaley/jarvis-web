import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  model: function(){
    return jarvisAPI.find('reports/overdue-items');
  }
});
