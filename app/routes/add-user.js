import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if (!this.get('userAuthenticationService.currentUser') || !this.get("userAuthenticationService.currentUser").is_admin) {
      this.replaceWith('login');
    }
  }
});
