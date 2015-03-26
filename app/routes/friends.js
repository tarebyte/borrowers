// Assigns the default export from **ember** into the variable Ember.
//
// The default export for the ember package is a namespace that
// contains all the classes and functions for Ember that are specified in
// http://emberjs.com/api/

import Ember from 'ember';

// Defines the default export for this module. For now we will not
// add anything extra, but if we want to use a Route **hook** or
// **actions** this would be the place.

export default Ember.Route.extend({
  actions: {
    delete: function(friend) {
      var _this = this;

      friend.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }
});
