Twitter.Post = DS.Model.extend({
  user: DS.attr(),
  tweet: DS.attr(),
  time: DS.attr(),
  replies: DS.hasMany('reply', {async: true})
});
