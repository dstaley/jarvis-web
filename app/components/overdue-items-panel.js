import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Component.extend({
	items: 0,
	panel_color: function(){
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
		store.find('reports/overdue-items').then(function(response){
			component.set('items', response.overdue_items);
		});
	}
});
