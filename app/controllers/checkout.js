import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
	allReturned: function(){
		var model = this.get('content');
		return model.checkout_items.checkout_items.every(function(checkout_item){
			return checkout_item.return_date != null
		});
	}.property('content'),
	actions: {
		renew: function(checkout_id){
			var controller = this;
			store.update('checkouts/'+checkout_id, {}).then(function(response){
				controller.get('target').send('reload');
			});
		}
	}
});
