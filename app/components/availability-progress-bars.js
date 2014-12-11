import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Component.extend({
	kits: [],
	didInsertElement: function(){
		var component = this;
		store.find('reports/kits').then(function(response){
			var k = response.kits.map(function(kit){
				var priority = "";
				var ratio = (kit.available/(kit.available + kit.unavailable));
				if (ratio > 0.5) {
					priority = "progress-bar-success";
				} else if (ratio > 0.25) {
					priority = "progress-bar-warning";
				} else {
					priority = "progress-bar-danger";
				}
				return {
					'type': kit.type,
					'available': kit.available,
					'unavailable': kit.unavailable,
					'availability': "width: "+(ratio * 100)+"%",
					'total': kit.available + kit.unavailable,
					'priority': priority
				};
			});
			component.set('kits', k);
		});
	}
});
