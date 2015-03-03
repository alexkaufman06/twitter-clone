Twitter.Reply = DS.Model.extend({
  reply: DS.attr(),
  responder: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
