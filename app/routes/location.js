import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Route.extend({
  beforeModel: function(){
    if (!this.get('userAuthenticationService.currentUser') || !this.get("userAuthenticationService.currentUser").is_admin) {
      this.replaceWith('login');
    }
  },
  model: function(params){
    return jarvisAPI.find('locations', params.location_id);
  }
});
