import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    checkPermission: function() {
      var controller = this;
      var model = this.get('content');
      if (model.kit.needs_permission) {
        swal({
          title: "Look out!",
          text: model.kit.permission_statement,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Continue'
        }, function() {
          controller.transitionToRoute('add-checkout', {queryParams: {kit: model.kit.id}});
        });
      }
    }
  }
});
