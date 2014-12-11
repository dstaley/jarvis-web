import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people');
  this.route('kits');
  this.route('person', { path: '/people/:person_id' });
  this.route('kit', { path: '/kits/:kit_id' });
  this.route('item', { path: '/items/:item_id' });
  this.route('items');
  this.route('checkout', { path: '/checkouts/:checkout_id' });
  this.route('login');
  this.route('add-person', { path: '/people/new' });
  this.route('add-kit', { path: '/kits/new' });
  this.route('add-item', { path: '/items/new' });
  this.route('search');
  this.route('add-checkout', { path: '/checkouts/new' });
  this.route('return-checkout', { path: '/return/:checkout_id' });
  this.route('edit-person', { path: '/people/:person_id/edit' });
  this.route('edit-kit', { path: '/kits/:kit_id/edit' });
  this.route('edit-item', { path: '/items/:item_id/edit' });
  this.route('overdue-items');
  this.route('users');
  this.route('user', { path: '/users/:user_id' });
  this.route('add-user', { path: '/users/new' });
  this.route('edit-user', { path: '/users/:user_id/edit' });
  this.route('locations');
  this.route('add-location');
  this.route('edit-location', { path: '/locations/:location_id/edit' });
  this.route('location', { path: '/locations/:location_id' });
});

export default Router;
