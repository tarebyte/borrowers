import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  article:       null, // passed-in
  articleStates: null, // passed-in

  autoSave: function() {
    var article = this.get('article');

    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },

  // Getting an error
  // type error this.get(...) undefined
  //
  // setObserver: function() {
  //   this.addObserver('model.state', this, this.stateChanged);
  //   // we need to call get on the property so the observers are setup
  //   // see for more info http://cl.ly/1f0Y1v2A1G04
  //
  //   this.get('model').get('state');
  // }.on('init'),

  stateChanged: function() {
    var article = this.get('article');

    if (article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }.observes('article.state').on('init')
});
