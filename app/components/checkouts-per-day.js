import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Component.extend({
	data: [],
	options: {
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		},
		yAxis: {
			title: {
				text: 'Number of Checkouts'
			}
		},
		legend: {
			enabled: false
		},
		title: {
			text: null
		}
	},
	didInsertElement: function(){
		var component = this;
		store.find('reports/average-checkouts-per-day').then(function(response){
			component.set('data', [{name:'Checkouts', data: response.data}]);
		});
	}
});
