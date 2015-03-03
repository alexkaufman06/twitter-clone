Twitter.PostsController = Ember.ArrayController.extend({
  itemController: 'post',
  sortProperties: ['time'],
  sortAscending: false,
  actions: {
    save: function() {
      var time = new Date;
      var mins = time.getMinutes();
      var newTweet = this.store.createRecord('post', {
        user: this.get('user'),
        tweet: this.get('tweet'),
        time: mins,
      });
      newTweet.save();
    }
  }
});
