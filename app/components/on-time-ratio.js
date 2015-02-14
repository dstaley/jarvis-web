import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Component.extend({
  ratio: 0,
  panel_color: function(){
    if (this.get('ratio') > 76) {
      return 'panel-green';
    } else if (this.get('ratio') > 50) {
      return 'panel-yellow';
    } else {
      return 'panel-red';
    }
  }.property('ratio'),
  didInsertElement: function(){
    var component = this;
    store.find('reports/on-time-ratio').then(function(response){
      component.set('ratio', (response.metrics.on_time/response.metrics.total) * 100);
    });
  }
});
