import Ember from 'ember';

export function dueDate(input) {
	return new Ember.Handlebars.SafeString('<span title=\"'+moment(input).format('dddd, MMMM Do, YYYY')+'\">'+moment(input).fromNow()+'</span>');
};

export default Ember.Handlebars.makeBoundHelper(dueDate);
