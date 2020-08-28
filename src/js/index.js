import ToDoItem from './modules/toDoItem';
import { Project } from './modules/project';
import { Display } from './views/display';

// const projectArray = localStorage.getItem('project') ? JSON.stringify(localStorage.getItem('project')) : [];
// localStorage.setItem('project', JSON.stringify(projectArray));
const list = [];
const names = [];

const projectArray = [];
var defaultProject = Project('General');

window.onload = function(){
  // localStorage.length === 0 ? console.log('length 0') : console.log('length > 0');
  // projectArray = localStorage.length === 0 ? projectArray.push(defaultProject) : projectArray.push('Hello World');
  if (localStorage.length === 0) {
    projectArray.push(defaultProject);
    localStorage.setItem('project', JSON.stringify(projectArray[0]))
  } else {
    const test = JSON.parse(localStorage.getItem('project'));
    console.log('test');
    console.log(test);
    console.log('test on 0');
    console.log(test[0]);
    test.forEach(function(current) {
      projectArray.push(current);
    });
    console.log('projectArray: ');
    console.log(projectArray);
  }
  console.log(localStorage);
  // projectArray.push(defaultProject);
  // localStorage.setItem('project', JSON.stringify(projectArray[0]));
}();

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
    const display = Display();
    display.createListForm();
  }
});

document.querySelector('.list').addEventListener('click', (event) => {
  event.preventDefault();
  const dataProject = JSON.parse(localStorage.getItem('project'));
  const display = Display();
  // console.log('data:');
  // console.log(dataProject.title);
  display.optionProject(names);
  if (event.target.id === 'btn-cancel__list') {
    display.deleteListForm();
  } else if (event.target.id === 'btn-submit__list') {
    const todoItem = {
      title: document.getElementById('title').value,
      description: document.getElementById('desc').value,
      dueDate: document.getElementById('date').value,
      priority: document.getElementById('priority').value,
    };
    // const data = ToDoItem(todoItem);
    list.push(todoItem);
    // localStorage.setItem('projects', JSON.stringify(data.getData()));
    display.deleteListForm();
  };
});

document.getElementById('btn-create__project').addEventListener('click', () => {
  if (!document.getElementById('form-project')) {
    const display = Display();
    display.createProjectForm();
  }
  console.log(list);
});

document.querySelector('.project').addEventListener('click', (event) => {
  event.preventDefault();
  const display = Display();
  if (event.target.id === 'btn-cancel__project') {
    display.deleteProjectForm();
  } else if (event.target.id === 'btn-submit__project') {

    let projectTitle = document.getElementById('proj-title').value;
    const newProject = Project(projectTitle);
    // newProject.todos.push(list);
    // localStorage.setItem('project', JSON.stringify(projectArray));
    projectArray.push(newProject);
    localStorage.setItem('project', JSON.stringify(projectArray));
    const dataProject = JSON.parse(localStorage.getItem('project'));
    names.push(dataProject.title);
    display.deleteProjectForm();
    display.projectList();
    projectTitle = '';
  }
});
