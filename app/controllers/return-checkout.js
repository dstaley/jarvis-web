import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	makeAvailable: false,
	proxiedItems: Ember.computed.map('model.checkout_items.checkout_items', function(model) {
		return Ember.ObjectProxy.create({
			name: model.item.name,
			id: model.id,
			checked: false
		});
	}),
	checkedItems: Ember.computed.filterBy('proxiedItems', 'checked', true),
	actions: {
		logItems: function(){
			this.get('checkedItems').map(function(item){
				console.log(item.name);
			});
		},
		returnItems: function(){
			var controller = this;
			var checkout_items = this.get('checkedItems').map(function(item){
				return item.id;
			});
			var checkout_data = {
				'checkout_items': checkout_items,
				'available': this.get('makeAvailable'),
				'user': this.get('userAuthenticationService.currentUser').id
			};
			store.update('checkout-items', checkout_data).done(function(){
				controller.transitionToRoute('index');
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
