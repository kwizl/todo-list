import { Project } from './modules/project';
import { Display } from './views/display';
import { Style } from './views/displayStyle';
import { Events } from './controllers/event';
import { Operations } from './controllers/operations';

const display = Display();
const style = Style();
const event = Events();
const operation = Operations();

const projectArray = [];

window.onload = () => {
  operation.init(projectArray);
};

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
    display.createListForm(projectArray);
    style.blur();
  }
});

document.querySelector('.list-form').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
    display.deleteListForm();
    style.unblur();
  } else if (event.target.id === 'btn-submit__list') {
    const whichProject = document.getElementById('project-to-add').value;
    const todoItem = {
      title: document.getElementById('title').value,
      description: document.getElementById('desc').value,
      dueDate: document.getElementById('date').value,
      priority: document.getElementById('priority').value,
    };
    operation.populate(whichProject, todoItem, projectArray);
    display.deleteListForm();
    style.unblur();
    operation.init(projectArray);
  }
});

event.formProject();

document.querySelector('.forms').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__project') {
    display.deleteProjectForm();
    style.unblur();
  } else if (event.target.id === 'btn-submit__project') {
    const projectTitle = document.getElementById('proj-title').value;
    const newProject = Project(projectTitle);
    projectArray.push(newProject);
    localStorage.setItem('project', JSON.stringify(projectArray));
    display.deleteProjectForm();
    operation.populateArray();
    style.unblur();
    operation.init(projectArray);
  }
});

event.createProject(projectArray);
event.deleteProject(projectArray);

document.querySelector('.project-names').addEventListener('click', (event) => {
  if (/trash/.test(event.target.classList)) {
    const splitID = event.target.id.split('-');
    const projID = splitID[2];
    operation.deleteProject(projectArray[projID].title);
  }
});

document.querySelector('.project-list__content').addEventListener('click', (event) => {
  if (/pencil/.test(event.target.classList)) {
    const splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
    const projID = splitID[1];
    const todoID = splitID[3];
    display.createListForm(projectArray);
    style.blur();
    document.getElementById('title').value = projectArray[projID].todos[todoID].title;
    document.getElementById('desc').value = projectArray[projID].todos[todoID].description;
    document.getElementById('date').value = projectArray[projID].todos[todoID].dueDate;
    document.getElementById('priority').value = projectArray[projID].todos[todoID].priority;
  }
});