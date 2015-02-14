import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	actions: {
		updateUser: function() {
			var controller = this;
			var user_data = {
				'name': this.get('content.name'),
				'email': this.get('content.email'),
				'is_admin': this.get('content.is_admin')
			};
			store.update('users', this.get('content.id'), user_data)
			.then(function(response){
				controller.transitionToRoute('user', response.id);
			}, function(response){
        swal({
          title: "Yikes!",
          text: response.responseJSON.message,
          type: 'error'
        });
      });
		}
	}
});
