Twitter.Router.map(function() {
  this.resource('posts', {path: '/'}, function() {
    this.resource('replies');
  });
});
