import Ember from 'ember';
import store from '../utils/jarvis';

function get_id_if_object(d){
	if (typeof d === 'object') {
		return d.id;
	} else {
		return d;
	}
}

export default Ember.Controller.extend({
	actions: {
		updateItem: function() {
			var controller = this;
			var item_data = {
				'name': this.get('content.item.name'),
				'type': this.get('content.item.type'),
				'serial': this.get('content.item.serial'),
				'location': get_id_if_object(this.get('content.item.location')),
				'kit': get_id_if_object(this.get('content.item.kit')),
				'condition': this.get('content.item.condition'),
				'status': this.get('content.item.status'),
				'last_price_paid': this.get('content.item.last_price_paid')
			};
			store.update('items', this.get('content.item.id'), item_data)
      .then(function(response){
				controller.set('name', null);
				controller.set('type', null);
				controller.set('serial', null);
				controller.set('location', null);
				controller.set('kit', null);
				controller.set('condition', null);
				controller.set('status', null);
				controller.set('last_price_paid', null);
				controller.transitionToRoute('item', response.id);
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
