import Ember from 'ember';
import store from '../utils/jarvis';

export default Ember.Controller.extend({
  name: null,
  type: null,
  serial: "",
  location: null,
  kit: null,
  condition: "Good",
  status: "Available",
  last_price_paid: null,
  createDisabled: function() {
    var fields = [
      this.get('name'),
      this.get('type'),
      this.get('location'),
      this.get('condition'),
      this.get('status'),
      this.get('last_price_paid')
    ];
    return !(fields.every(function(element){ return element !== '' && element !== null; }));
  }.property('name', 'type', 'location', 'condition', 'status', 'last_price_paid'),
  actions: {
    createItem: function() {
      var controller = this;
      var item_data = {
        'name': this.name,
        'type': this.type,
        'serial': this.serial,
        'location': this.location,
        'kit': this.kit,
        'condition': this.condition,
        'status': this.status,
        'last_price_paid': this.last_price_paid
      };
      store.create('items', item_data)
      .then(function(response){
        controller.set('name', null);
        controller.set('type', null);
        controller.set('serial', "");
        controller.set('location', null);
        controller.set('kit', null);
        controller.set('condition', "Good");
        controller.set('status', "Available");
        controller.set('last_price_paid', null);
        controller.transitionToRoute('item', response.items[0].id);
      }, function(error){
        swal({
          title: "Yikes!",
          text: error.jqXHR.responseJSON.message,
          type: 'error'
        });
      });
    }
  }
});
