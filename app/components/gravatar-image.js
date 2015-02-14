import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: function(){
    var email = this.get('email');
    var size = this.get('size') * window.devicePixelRatio;
    return 'https://gravatar.com/avatar/%@?s=%@&d=mm'.fmt(md5(email), size);
  }.property('email', 'size')
});