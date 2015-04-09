window.Todos = Ember.Application.create();

Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
