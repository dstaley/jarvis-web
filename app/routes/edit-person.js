import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	model: function(params){
		return store.find('people', params.person_id);
	}
});
