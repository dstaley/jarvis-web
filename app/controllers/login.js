import Ember from 'ember';

export default Ember.Controller.extend({
	selectedUser: null,
	filteredUsers: function(){
		var users = this.get('model.users');
		return users.map(function(user){
			return {'id': user.id, 'text': user.name, 'description': user.name };
		});
	}.property(),
	actions: {
		login: function(user_id){
			this.get('userAuthenticationService').login(user_id);
			this.replaceWith('index');
		},
		logout: function(){ this.get('userAuthenticationService').logout(); },
		selectedUser: function() { alert(this.selectedUser.id); }
	}
});
