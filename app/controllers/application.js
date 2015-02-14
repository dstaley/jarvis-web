import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',
  actions: {
    login: function(user_id){ this.get('userAuthenticationService').login(user_id); },
    logout: function(){
      this.get('userAuthenticationService').logout();
      this.transitionToRoute('index');
    },
    search: function(){
      this.transitionToRoute('search', { queryParams: {q: this.get('search')}});
      this.set('search', null);
    },
    showIronman: function(){
      if ($('#iron').is(':visible')) {
        $('#iron').slideUp('slow');
      } else {
        $('#iron').slideDown('slow');
      }
    }
  }
});
