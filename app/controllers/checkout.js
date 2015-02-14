import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Controller.extend({
  allReturned: function(){
    var model = this.get('content');
    return model.checkout_items.checkout_items.every(function(checkout_item){
      return checkout_item.return_date != null;
    });
  }.property('content'),
  actions: {
    renew: function(checkout_id){
      var controller = this;
      jarvisAPI.update('checkouts/'+checkout_id, {})
      .then(function(){
        controller.get('target').send('reload');
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
