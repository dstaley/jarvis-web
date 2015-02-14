import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	first_name: null,
	last_name: null,
	email: null,
	phone_number: null,
	mylsu_id: null,
	lsu_id: null,
	url: function() {
		return true;
	}.property(),
	createDisabled: function() {
		var fields = [
			this.get('first_name'),
			this.get('last_name'),
			this.get('email'),
			this.get('phone_number'),
			this.get('mylsu_id'),
			this.get('lsu_id')
		];
		return !(fields.every(function(element){ return element !== '' && element !== null; }));
	}.property('first_name', 'last_name', 'email', 'phone_number', 'mylsu_id', 'lsu_id'),
	updateEmail: function() {
		this.set('email', this.get('mylsu_id') + '@lsu.edu');
	}.observes('mylsu_id'),
	actions: {
		createPerson: function() {
			var controller = this;
			var form = document.getElementById('add-person-form');
			if (form.checkValidity()) {
				var person_data = {
					'first_name': this.first_name,
					'last_name': this.last_name,
					'email': this.email,
					'phone_number': this.phone_number,
					'mylsu_id': this.mylsu_id,
					'lsu_id': this.lsu_id
				};
				store.create('people', person_data)
					.then(function(response){
						controller.set('first_name', null);
						controller.set('last_name', null);
						controller.set('email', null);
						controller.set('phone_number', null);
						controller.set('mylsu_id', null);
						controller.set('lsu_id', null);
						controller.transitionTo('person', response.people[0].id);
					}, function(error){
            swal({
              title: "Yikes!",
              text: error.jqXHR.responseJSON.message,
              type: 'error'
            });
          });
			} else {
				swal({
					title: "Yikes!",
					text: "Looks like there's something wrong with the data you've entered. Check it and try again.",
					type: "error"
				});
			}
		}
	}
});
