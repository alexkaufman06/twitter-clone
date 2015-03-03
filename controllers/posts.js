Twitter.PostsController = Ember.ArrayController.extend({
  sortProperties: ['time'],
  sortAscending: false,
  actions: {
    save: function() {
      var newTweet = this.store.createRecord('post', {
        user: this.get('user'),
        tweet: this.get('tweet'),
        time: new Date
      });
      newTweet.save();
    }

  }
});
