import DS from 'ember-data';
import Ember from 'ember';
import changedGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  articles: DS.hasMany('article', {async: true}),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),

  totalArticles: DS.attr('number'),

    // Currently changeGate only support one property
  capitalizedFirstName: changedGate('firstName', function(firstName) {
    return Ember.String.capitalize(firstName);
  }),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
