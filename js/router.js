Permits.Router.map(function () {
  this.resource('permits', { path: '/' });
});

Permits.PermitsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('permit');
    }
});