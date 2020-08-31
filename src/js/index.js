import { Project } from './modules/project';
import { Display } from './views/display';

// const datefns = require('date-fns/sub_days');
// const now = new Date();
// console.log(now);
// console.log(datefns.addDays);

const projectArray = [];
const display = Display();
const defaultProject = Project('General');

function populateArray() {
  const test = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  test.forEach((current) => {
    projectArray.push(current);
  });
}

function populate(projName, todoAdding) {
  const test = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  test.forEach((current) => {
    if (current.title !== projName) {
      projectArray.push(current);
    } else {
      let flag = true;
      if (current.todos.length !== 0) {
        current.todos.forEach( (currentTodo, todoIndex) => {
          if (currentTodo.title === todoAdding.title) {
            current.todos[todoIndex] = todoAdding;
            flag = false;
          }
        })
      }

      if (flag) {
        current.todos.push(todoAdding);
      }
      projectArray.push(current);
    }
  });
  localStorage.setItem('project', JSON.stringify(test));
}

function deleteProject(projName) {
  const backup = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  backup.forEach((current) => {
    if (current.title !== projName) {
      projectArray.push(current);
    }
  });
  localStorage.setItem('project', JSON.stringify(projectArray));
  init();
}

function deleteTodo(projName, todoName) {
  const backup = JSON.parse(localStorage.getItem('project'));
  projectArray.splice(0, projectArray.length);
  backup.forEach((currentProject) => {
    if (currentProject.title === projName) {
      const aux = Project(projName);
      currentProject.todos.forEach((currentTodo) => {
        if (currentTodo.title !== todoName) {
          aux.todos.push(currentTodo);
        }
      });
      projectArray.push(aux);
    } else {
      projectArray.push(currentProject);
    }
  });
  localStorage.setItem('project', JSON.stringify(projectArray));
  display.displayTodos(projName, projectArray);
}

function init() {
  if (localStorage.length === 0 || localStorage.getItem('project') === "[]") {
    projectArray.push(defaultProject);
  } else {
    populateArray();
  }
  localStorage.setItem('project', JSON.stringify(projectArray));
  console.log(localStorage);
  display.displayProjects(projectArray);
  document.getElementById('proj-0').classList.add('project-active');
  display.displayTodos(projectArray[0].title, projectArray);
};

window.onload = () => {
  init();
};


function blur() {
  document.querySelector('.content').style.opacity = '0';
}

function unblur() {
  document.querySelector('.content').style.opacity = '1';
  // display.displayProjects(projectArray);
  // display.displayTodos(projectArray);
}

document.querySelector('.new-list').addEventListener('click', () => {
  if (!document.getElementById('form-list')) {
    display.createListForm(projectArray);
    blur();
  }
});

document.querySelector('.list-form').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__list') {
    display.deleteListForm();
    unblur();
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
    unblur();
    init();
  }
});

document.getElementById('btn-create__project').addEventListener('click', () => {
  if (!document.getElementById('form-project')) {
    display.createProjectForm();
    blur();
  }
});

document.querySelector('.forms').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.id === 'btn-cancel__project') {
    display.deleteProjectForm();
    unblur();
  } else if (event.target.id === 'btn-submit__project') {
    const projectTitle = document.getElementById('proj-title').value;
    const newProject = Project(projectTitle);
    projectArray.push(newProject);
    localStorage.setItem('project', JSON.stringify(projectArray));
    display.deleteProjectForm();
    populateArray();
    unblur();
    init();
  }
});

document.querySelector('.project-names').addEventListener('click', (event) => {
  if (/^proj-/.test(event.target.id)) {
    document.querySelector('.project-active').classList.remove('project-active');
    document.getElementById(event.target.id).classList.add('project-active');
    const projIndex = event.target.id[event.target.id.length - 1];
    display.displayTodos(projectArray[projIndex].title, projectArray);
  }
});

document.querySelector('.project-list__content').addEventListener('click', (event) => {
  if (/trash/.test(event.target.classList)) {
    var splitID, projID, todoID;
    splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
    projID = splitID[1];
    todoID = splitID[3];
    deleteTodo(projectArray[projID].title, projectArray[projID].todos[todoID].title);
  };
});

document.querySelector('.project-names').addEventListener('click', (event) => {
  if (/trash/.test(event.target.classList)) {
    var splitID, projID;
    splitID = event.target.id.split('-');
    projID = splitID[2];
    deleteProject(projectArray[projID].title);
  };
});

document.querySelector('.project-list__content').addEventListener('click', (event) => {
  if (/pencil/.test(event.target.classList)) {
    var splitID, projID, todoID;
    splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
    projID = splitID[1];
    todoID = splitID[3];
    display.createListForm(projectArray);
    blur();
    document.getElementById('title').value = projectArray[projID].todos[todoID].title;
    document.getElementById('desc').value = projectArray[projID].todos[todoID].description;
    document.getElementById('date').value = projectArray[projID].todos[todoID].dueDate;
    document.getElementById('priority').value = projectArray[projID].todos[todoID].priority;
  }
});