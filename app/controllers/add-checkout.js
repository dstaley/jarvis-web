import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

function d(){
  switch (moment().format('d')){
  case '4':
  return moment().add(4, 'days').toDate();
  case '5':
  return moment().add(3, 'days').toDate();
  default:
  return moment().add(2, 'days').toDate();
  }
}

export default Ember.Controller.extend({
  queryParams: ['kit'],
  kit: null,
  person: null,
  dueDate: d(),
  dueDateinFuture: function(){ return this.get('dueDate') > new Date(); }.property('dueDate'),
  proxiedItems: Ember.computed.map('model.items.items', function(model) {
    return Ember.ObjectProxy.create({
      name: model.name,
      id: model.id,
      available: model.available,
      checked: false
    });
  }),
  availableItems: Ember.computed.filterBy('proxiedItems', 'available', true),
  checkedItems: Ember.computed.filterBy('proxiedItems', 'checked', true),
  actions: {
    createCheckout: function(){
      var controller = this;
      if (this.get('availableItems').length === this.get('checkedItems').length) {
        jarvisAPI.create('checkouts', {
          'user': this.get('userAuthenticationService.currentUser').id,
          'kit': this.get('kit'),
          'person': this.get('person'),
          'due_date': moment(this.get('dueDate')).format('YYYY-MM-DD'),
          'items': this.get('checkedItems').map(function(item){return item.id;})}
        ).then(function(response) {
          controller.set('kit', null);
          controller.set('person', null);
          controller.set('dueDate', d());
          controller.transitionToRoute('checkout', response.checkout.id);
        }, function(error){
          swal({
            title: "Yikes!",
            text: error.jqXHR.responseJSON.message,
            type: 'error'
          });
        })
      } else {
        alert('You must select all available items.');
      }
    }
  }
});
