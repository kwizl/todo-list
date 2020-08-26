import { ToDoItem } from './modules/toDoItem';
import { Project } from './modules/project';
import { Display } from './views/display';

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
    const display = Display();
    display.createListForm();
  }
});

document.querySelector('.list').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
    const display = Display();
    display.deleteListForm();
  } else if (event.target.id === 'btn-submit__list') {
    const todoItem = {
      title: document.getElementById('title').value,
      description: document.getElementById('desc').value,
      dueDate: document.getElementById('date').value,
      priority: document.getElementById('priority').value
    };

    localStorage.setItem('projects', JSON.stringify(todoItem));
  }
});

document.getElementById('btn-create__project').addEventListener('click', () => {
  if (!document.getElementById('form-project')) {
    const display = Display();
    display.createProjectForm();
  }
});

document.querySelector('.project').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__project') {
    const display = Display();
    display.deleteProjectForm();
  } else if (event.target.id === 'btn-submit__project') {
    let project_title = document.getElementById('proj-title').value;
    localStorage.setItem('project', project_title);
  };
});

