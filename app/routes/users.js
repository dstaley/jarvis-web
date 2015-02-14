import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  beforeModel: function(){
    if (!this.get('userAuthenticationService.currentUser') || !this.get("userAuthenticationService.currentUser").is_admin) {
      this.replaceWith('login');
    }
  },
  model: function() {
    return jarvisAPI.find('users');
  }
});