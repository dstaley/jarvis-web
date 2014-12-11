import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function(){
		return store.find('reports/overdue-items');
	}
});
