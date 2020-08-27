import ToDoItem from './toDoItem';

const Project = (ptitle) => {
  const title = ptitle;
  const todos = [];
  return {
    title, todos
  }
};

export { Project };