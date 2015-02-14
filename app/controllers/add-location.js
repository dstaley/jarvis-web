import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
  name: null,
  room: null,
  actions: {
    createLocation: function() {
      var controller = this;
      var location_data = {
        'name': this.name,
        'room': this.room
      };
      store.create('locations', location_data)
      .then(function(response) {
        controller.set('name', null);
        controller.set('room', null);
        controller.transitionToRoute('location', response.locations[0].id);
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
