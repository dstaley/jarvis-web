import Ember from 'ember';

export function numberOfDaysSince(input) {
  var then = moment(input);
  var now = moment();
  var duration = now - then;
    var duration_in_days = duration / 1000 / 60 / 60 / 24;
    return parseFloat(Math.round(duration_in_days * 100) / 100).toFixed(2);
}

export default Ember.Handlebars.makeBoundHelper(numberOfDaysSince);
