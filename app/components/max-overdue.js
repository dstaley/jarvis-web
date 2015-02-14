import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Component.extend({
  days: 0,
  panelColor: function(){
    var days = this.get('days');
    if (days <= 2) {
      return "panel-green";
    } else if (days < 5) {
      return "panel-yellow";
    } else {
      return "panel-red";
    }
  }.property('days'),
  didInsertElement: function(){
    var component = this;
    jarvisAPI.find('reports/overdue-items').then(function(response){
      component.set('days', response.max_overdue);
    });
  }
});
