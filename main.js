import axios from 'axios';

async function getData() {
  const response = await axios('https://dummyjson.com/todos');
  const completedArray = [];
  response.data.todos.forEach((todo) => {
    if (todo.todo.split(' ').includes('go')) {
      if (todo.completed) completedArray.push(todo);
    }
  });
  return completedArray;
}

getData();
