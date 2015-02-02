import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	name: null,
	type: null,
	location: null,
	status: "Available",
	needs_permission: false,
	permission_statement: null,
	createDisabled: function() {
		var fields = [
			this.get('name'),
			this.get('type'),
			this.get('location'),
		];
		return !(fields.every(function(element){ return element !== '' && element !== null; }));
	}.property('name', 'type', 'location'),
	actions: {
		createKit: function() {
			var controller = this;
			var kit_data = {
				'name': this.name,
				'type': this.type,
				'location': this.location,
				'status': this.status,
				'needs_permission': this.needs_permission,
				'permission_statement': this.permission_statement
			};
			store.create('kits', kit_data).done(function(response){
				controller.set('name', null);
				controller.set('type', null);
				controller.set('location', null);
				controller.set('status', "Available");
				controller.set('needs_permission', false);
				controller.set('permission_statement', null);
				controller.transitionToRoute('kit', response.kits[0].id);
			})
			.fail(function(response){
				swal({
					title: "Yikes!",
					text: response.responseJSON.message,
					type: 'error'
				});
			});
		}
	}
});
