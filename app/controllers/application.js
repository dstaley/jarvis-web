import Ember from 'ember';

export default Ember.Controller.extend({
	search: '',
	actions: {
		login: function(user_id){ this.get('userAuthenticationService').login(user_id); },
		logout: function(){ this.get('userAuthenticationService').logout(); },
		search: function(){
			this.transitionToRoute('search', { queryParams: {q: this.get('search')}});
			this.set('search', null);
		}
	}
});
