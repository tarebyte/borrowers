import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      // Go back to the articles page so that you get the
      // whole page
      this.transitionToRoute('articles.index', this.get('model'));
      return false;
    }
  }
});
