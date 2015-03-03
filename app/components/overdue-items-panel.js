import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Component.extend({
  itemCount: 0,
  panelColor: function(){
    if (this.get('items') === 0) {
      return 'panel-green';
    } else if (this.get('items') < 25) {
      return 'panel-yellow';
    } else {
      return 'panel-red';
    }
  }.property('items'),
  didInsertElement: function(){
    var component = this;
    jarvisAPI.find('reports/overdue-items').then(function(response){
      component.set('itemCount', response.overdue_items);
    });
  }
});
