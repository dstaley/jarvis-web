import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Component.extend({
	days: 0,
	panel_color: function(){
		if (this.get('days') <= 2) {
			return "panel-green";
		} else if (this.get('days') < 5) {
			return "panel-yellow";
		} else {
			return "panel-red";
		}
	}.property('days'),
	didInsertElement: function(){
		var component = this;
		store.find('reports/overdue-items').then(function(response){
			component.set('days', response.max_overdue);
		});
	}
});
