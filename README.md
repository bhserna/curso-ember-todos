# Introducción a Ember.js

## Que es Ember?

* [Home](http://emberjs.com/)
* Framework para crear aplicaciones ambiciosas.

## Quien usa Ember?

* [Ember users](http://emberjs.com/ember-users/)

## Donde lo he usado yo?

* [rides móvil](http://m.rides.com.mx)
* [aventones móvil](https://itunes.apple.com/mx/app/aventones/id870744002?mt=8)
* [rides messages](http://rides.com.mx)
* [tastify](http://tastify.com)

## Todo list

* [Planeación](http://emberjs.com/guides/getting-started/planning-the-application/)
* [Mockup estático](http://emberjs.com/guides/getting-started/creating-a-static-mockup/)
* [Dependencia](http://emberjs.com/guides/getting-started/obtaining-emberjs-and-dependencies/)
  * JQuery, Handlebars, EmberData (opcional)
* [La primera ruta](http://emberjs.com/guides/getting-started/adding-a-route-and-template/)
  * Creamos la aplicación
  * Agregamos la ruta `todos`, que hará render del template `todos`
  * Pone todo el html dentro del template `todos`
* [Modelación de datos](http://emberjs.com/guides/getting-started/modeling-data/)
  * Se agrega el modelo Todos
* [Fixtures](http://emberjs.com/guides/getting-started/using-fixtures/)
  * Configura el fixture adapter
  * Un adapter es el que comunica tu aplicación con la fuente de información.
* [Desplegando la información de los modelos](http://emberjs.com/guides/getting-started/displaying-model-data/)
  * Se agrega la ruta `todos` … antes ya existía pero ember la creaba por nosotros.
  * Se implementa el método `model` donde regresamos todos los `todos`
  * Hacemos update del template para poner la información dinámicamente.
* [Mostrando el estado de completado](http://emberjs.com/guides/getting-started/displaying-a-models-completeness/)
  * Muestra el estado de completado haciendo un binding con el método `todo.isCompleted`
* [Creando un modelo](http://emberjs.com/guides/getting-started/creating-a-new-model/)
  * Cambiamos el tag `<input>` por el helper `{{input}}` 
  * Se conecta el valor del `input` con la propiedad `newTitle` del controlador del template.
  * Se conecta la interacción (enter) con la acción `createTodo` del controlador.
  * Se implementa el controlador `TodosController` (siguiendo la convención de `todos`) con la acción `createTodo`
  * Ya se pueden crear todos!!
* [Marcando un todo como completado o no](http://emberjs.com/guides/getting-started/marking-a-model-as-complete-incomplete/)
  * Cambiamos el `<input type=“checkbox”>` por el `{{input}}` helper.
  * Hacemos que cada todo tenga su propio controlador
  * Implementamos el controlador `TodoController` para implementar el getter/setter de  `isCompleted` para guardar el record cada que se realize un cambio.
* [Desplegando el numero de todos no completados](http://emberjs.com/guides/getting-started/displaying-the-number-of-incomplete-todos/)
  * Se implementan las “computed properties” `remaining` e `inflection`
  * `remaining` es cambia cada que algún elemento cambia su propiedad `isCompleted`
  * `inflection` cambia cada que `remaining` cambia
* [Estado de edición](http://emberjs.com/guides/getting-started/toggle-todo-editing-state/)
  * Agregamos la clase `editing` al `<li>` cuando el todo esta en estado de edición
  * Cambiamos el label por un input cuando el todo esta en edición
  * Agregamos la acción `editTodo` al `<label>` y al controlador
* [Aceptar edición](http://emberjs.com/guides/getting-started/accepting-edits/)
  * Creamos una vista especial `edit-todo`
  * El valor inicial es el `todo.title`
  * Los eventos `focus-out` y `insert-newline` llamarán la acción `acceptChanges` del controlador `TodoController`
* [Borrar un modelo](http://emberjs.com/guides/getting-started/deleting-todos/)
  * Agregamos la acción `removeTodo` que ya habíamos implementado en el controlador.
* [Agregando rutas “hijas”](http://emberjs.com/guides/getting-started/adding-child-routes/)
  * Extraemos la lista de todos para hacer un templete `todos/index`
  * Agregamos un `{{outlet}}` en `todos`
  * Agregamos la ruta `TodosIndexRoute`
  * Ember hace render de `todos` al llegar a `”/“` y hace una transición hacia `todos.index`
* [Mostrar solo "todos" incompletos](http://emberjs.com/guides/getting-started/show-only-incomplete-todos/)
  * Agregamos un link a “todos.active”
  * Declaramos la ruta
  * Creamos un `TodosActiveRoute` donde solo regresamos los todos que no han sido completados.
  * Hacemos render del template `todos/index` 
  * Notar el attributo “activeClass”
* [Mostrar solo “todos” completados](http://emberjs.com/guides/getting-started/show-only-complete-todos/)
  * Lo mismo pero para mostrar los completados
* [Ahora mostrar todos los todos de nuevo](http://emberjs.com/guides/getting-started/show-all-todos-again/)
  * Agregamos el link a `todos.index`
* [Mostrar botón para remover los todos completados](http://emberjs.com/guides/getting-started/display-a-button-to-remove-completed-todos/)
  * Agregamos condicional `hasCompleted`, la acción `clearCompleted` y la propiedad `completed`
* [Indicando cuando todos los todos están completos](http://emberjs.com/guides/getting-started/show-when-all-todos-are-complete/)
  * Agregamos la propiedad `allAreDone`en el `TodosController` y lo ponemos para indicar si el checkbox `”toggle-all”` esta “checado”
* [Alternar todos los “todos” entre completados o no](http://emberjs.com/guides/getting-started/toggle-all-todos/)
  * Agregamos un setter para `allAreDone`

## Pros

* Escribes mucho menos código
* Establece convenciones en el equipo
* Comunidad grande y distribuida
* Buena documentación
* Estan trabajando en FastBoot
* No rompe el back button (o por lo menos es de los que mejor trabajo hacen)
* El url es el UI de la web
* Cambios estables

## Cons

* Es más dificil de aprender que otros como backbone
* Es una librería pesada
* Aunque son muy metódicos en los cambios que hacen, como quiera hacen muchos cambios
* Es dificil saber que tanto debe contener una aplicación
* Es más orientada a ser el que controla todas las rutas de la aplicación
* Es dificil desacoplar lógica del framwork

## Recomendaciones

* Pruebenlo
* Más acciones menos bindings
* Hagan pruebas de integración (me han ayudado mucho para los cambios de version)
* Usarlo como Framework (desacomplar tu código del framwork)
* Nunca usar angular .... =)

## Herramienta

python -m SimpleHTTPServer 8000

