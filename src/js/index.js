import { ToDoItem } from './modules/toDoItem';
import { Display } from './views/display';

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
  const display = Display();
  display.createListForm();
  };
});

document.querySelector('.list').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
  const display = Display();
  display.deleteListForm();
  }
});

document.getElementById('btn-create__project').addEventListener('click', () => {
  if (!document.getElementById('form-project')) {
  const display = Display();
  display.createProjectForm();
  };
});

document.querySelector('.project').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__project') {
    const display = Display();
    display.deleteProjectForm();
  };
});