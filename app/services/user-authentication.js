import Ember from 'ember';
import jarvisAPI from '../utils/jarvis';

export default Ember.Object.extend({
  currentUser: null,
  login: function(user){
    console.log(user);
    this.set('currentUser', user);
  },
  logout: function(){
    this.set('currentUser', null);
  },
  users: function(){
    return jarvisAPI.find('users');
  }.property()
});
