Twitter.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newTweet = this.store.createRecord('post', {
        user: this.get('user'),
        tweet: this.get('tweet')
      });
      newTweet.save();
    }

  }
});
