import ToDoItem from './modules/toDoItem';
import { Project } from './modules/project';
import { Display } from './views/display';

const projectArray = [];
const display = Display();
var defaultProject = Project('General');

function populateArray() {
  const test = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  test.forEach(function(current) {
    projectArray.push(current);
  });
};

function populate(projName, todoAdding) {
  const test = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  test.forEach(function(current) {
    if (current.title !== projName) {
      projectArray.push(current);
    } else {
      current.todos.push(todoAdding);
      projectArray.push(current);
    };
  });
  localStorage.setItem('project', JSON.stringify(test));
};

function deleteProject(projName) {
  const backup = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  backup.forEach(function(current) {
    if (current.title !== projName){
      projectArray.push(current);
    };
  });
};

function deleteTodo(projName, todoName) {
  const backup = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  backup.forEach(function(currentProject) {
    if (currentProject.title === projName) {
      const aux = Project(projName);
      currentProject.todos.forEach(function(currentTodo) {
        if (currentTodo.title !== todoName) {
          aux.todos.push(currentTodo);
        };
      });
      projectArray.push(aux);
    } else {
      projectArray.push(currentProject);
    };
  });
}

window.onload = function(){
  if (localStorage.length === 0) {
    projectArray.push(defaultProject);
  } else {
    populateArray();
  }
  localStorage.setItem('project', JSON.stringify(projectArray))
  console.log(localStorage);
  display.displayProjects(projectArray);
  document.getElementById('proj-0').classList.add('project-active');
}();

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
    display.createListForm(projectArray);
  }
});

document.querySelector('.list').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
    display.deleteListForm();
  } else if (event.target.id === 'btn-submit__list') {
    const whichProject = document.getElementById('project-to-add').value;
    const todoItem = {
      title: document.getElementById('title').value,
      description: document.getElementById('desc').value,
      dueDate: document.getElementById('date').value,
      priority: document.getElementById('priority').value,
    };
    populate(whichProject, todoItem);
    display.deleteListForm();
  };
});

document.getElementById('btn-create__project').addEventListener('click', () => {
  if (!document.getElementById('form-project')) {
    display.createProjectForm();
  }
});

document.querySelector('.project').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__project') {
    display.deleteProjectForm();
  } else if (event.target.id === 'btn-submit__project') {
    let projectTitle = document.getElementById('proj-title').value;
    const newProject = Project(projectTitle);
    projectArray.push(newProject);
    localStorage.setItem('project', JSON.stringify(projectArray));
    display.deleteProjectForm();
    populateArray();
  }
});
