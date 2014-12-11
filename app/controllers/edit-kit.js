import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	actions: {
		updateKit: function(){
			var controller = this;
			var kit_data = {
				'name': this.get('content.kit.name'),
				'type': this.get('content.kit.type'),
				'location': this.get('content.kit.location.id'),
				'status': this.get('content.kit.status'),
				'available': this.get('content.kit.available'),
				'needs_permission': this.get('content.kit.needs_permission'),
				'permission_statement': this.get('content.kit.permission_statement')
			};
			store.update('kits', this.get('content.kit.id'), kit_data).done(function(response){
				controller.set('name', null);
				controller.set('type', null);
				controller.set('location', null);
				controller.set('status', null);
				controller.set('needs_permission', false);
				controller.set('permission_statement', null);
				controller.set('available', false);
				controller.transitionToRoute('kit', response.id);
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
