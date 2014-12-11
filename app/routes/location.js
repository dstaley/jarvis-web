import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Route.extend({
	beforeModel: function(){
		if (!this.get('userAuthenticationService.currentUser') || !this.get("userAuthenticationService.currentUser").is_admin) {
			this.replaceWith('login');
		}
	},
	model: function(params){
		return store.find('locations', params.location_id);
	}
});
