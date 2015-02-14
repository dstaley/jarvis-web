import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    if (!this.get('userAuthenticationService.currentUser')) {
      this.replaceWith('login');
    }
  }
});
