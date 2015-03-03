Twitter.PostController = Ember.ObjectController.extend({
  replyShow: false,
  actions: {
    show: function() {
    this.set('replyShow', !this.replyShow);
  },
    reply: function() {
      var time = new Date;
      var mins = time.getMinutes();
      var newReply = this.store.createRecord('reply', {
        responder: this.get('responder'),
        reply: this.get('reply'),
        time: mins
      });
      this.get('replies').pushObject(newReply);
    }
  }
});
