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
			})
		},
		returnItems: function(){
			var controller = this;
			var checkout_items = this.get('checkedItems').map(function(item){
				return item.id;
			});
			store.update('checkout-items', {'checkout_items':checkout_items, 'available': this.get('makeAvailable')}).then(function(response){
				controller.transitionTo('index');
			})
		}
	}
});