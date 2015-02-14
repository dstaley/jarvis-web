import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	actions: {
		updateLocation: function() {
			var controller = this;
			var location_data = {
				'name': this.get('content.location.name'),
				'room': this.get('content.location.room.id')
			};
			store.update('locations', this.get('content.location.id'), location_data)
			.then(function(response){
				controller.transitionToRoute('location', response.id);
			}, function(response) {
        swal({
          title: "Yikes!",
          text: response.responseJSON.message,
          type: 'error'
        });
      });
		}
	}
});
