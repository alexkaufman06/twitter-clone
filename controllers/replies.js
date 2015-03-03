Twitter.RepliesController = Ember.Controller.extend({
  actions: {
    reply: function() {
      var time = new Date;
      var mins = time.getMinutes();
      var newReply = this.store.createRecord('reply', {
        responder: this.get('responder'),
        reply: this.get('reply'),
        time: mins
      });
      this.get('replies').pushObject(newReply);
      this.save();
    }
  }
});
