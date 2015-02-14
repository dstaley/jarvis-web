import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('people');
  this.route('person', { path: '/people/:person_id' });
  this.route('edit-person', { path: '/people/:person_id/edit' });
  this.route('add-person', { path: '/people/new' });

  this.route('kits');
  this.route('kit', { path: '/kits/:kit_id' });
  this.route('edit-kit', { path: '/kits/:kit_id/edit' });
  this.route('add-kit', { path: '/kits/new' });

  this.route('items');
  this.route('item', { path: '/items/:item_id' });
  this.route('edit-item', { path: '/items/:item_id/edit' });
  this.route('add-item', { path: '/items/new' });

  this.route('checkout', { path: '/checkouts/:checkout_id' });
  this.route('add-checkout', { path: '/checkouts/new' });
  this.route('return-checkout', { path: '/return/:checkout_id' });

  this.route('locations');
  this.route('location', { path: '/locations/:location_id' });
  this.route('edit-location', { path: '/locations/:location_id/edit' });
  this.route('add-location');

  this.route('users');
  this.route('user', { path: '/users/:user_id' });
  this.route('edit-user', { path: '/users/:user_id/edit' });
  this.route('add-user', { path: '/users/new' });

  this.route('login');

  this.route('search');

  this.route('overdue-items');

});

export default Router;
