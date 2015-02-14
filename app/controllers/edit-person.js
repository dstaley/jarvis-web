import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Controller.extend({
  actions: {
    updatePerson: function(){
      var controller = this;
      var person_data = {
        'first_name': this.get('content.first_name'),
        'last_name': this.get('content.last_name'),
        'email': this.get('content.email'),
        'phone_number': this.get('content.phone_number'),
        'mylsu_id': this.get('content.mylsu_id'),
        'lsu_id': this.get('content.lsu_id')
      };
      jarvisAPI.update('people', this.get('content.id'), person_data)
      .then(function(response) {
        controller.set('first_name', null);
        controller.set('last_name', null);
        controller.set('email', null);
        controller.set('phone_number', null);
        controller.set('mylsu_id', null);
        controller.set('lsu_id', null);
        controller.transitionToRoute('person', response.id);
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
