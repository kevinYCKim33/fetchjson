import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  console.log(response.data);
});

// run tsc index.ts in Terminal to get it converted to index.js

// then run node index.js

// or do ts-node index.ts to do both at the same time
