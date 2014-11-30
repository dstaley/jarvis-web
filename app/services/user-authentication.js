import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Object.extend({
	currentUser: null,
	login: function(user_id){
		this.set('currentUser', user_id);
	},
	logout: function(){
		this.set('currentUser', null);
	},
	users: function(){
		return store.find('users')
	}.property()
});
