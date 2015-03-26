import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('friends/show').get('articles');
  },

  deactivate: function() {
    var model = this.modelFor('articles/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
