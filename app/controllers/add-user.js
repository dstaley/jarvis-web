import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Controller.extend({
  name: null,
  email: null,
  is_admin: false,
  actions: {
    createUser: function() {
      var controller = this;
      var user_data = {
        'name': this.name,
        'email': this.email,
        'is_admin': this.is_admin
      };
      jarvisAPI.create('users', user_data)
      .then(function(response){
        controller.set('name', null);
        controller.set('email', null);
        controller.set('is_admin', false);
        controller.transitionToRoute('user', response.users[0].id);
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
