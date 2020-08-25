import { ToDoItem } from './modules/toDoItem';
import { Display } from './views/display';

document.querySelector('.new-list').addEventListener('click', () => {
  const display = Display();
  display.createProjectForm();
});

document.querySelector('.list').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
  const display = Display();
  display.deleteListForm();
  }
});
