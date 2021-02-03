import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// interface: defines structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // Response.data has properties of:
  // id
  // title
  // completed
  const todo = response.data as Todo; // cool clutch line - very applicable example Stephen!

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// helps catch prevent calling functions with wrong order of arguments
// my argument: why don't you pass in an object for functions instead??
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

/*
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
*/

// run tsc index.ts in Terminal to get it converted to index.js

// then run node index.js

// or do ts-node index.ts to do both at the same time
