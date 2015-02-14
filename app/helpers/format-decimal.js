import Ember from 'ember';

export function formatDecimal(input, options) {
  var places = options.hash.places || 2;
  return parseFloat(Math.round(input * 100) / 100).toFixed(places);
}

export default Ember.Handlebars.makeBoundHelper(formatDecimal);
