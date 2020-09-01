import { Display } from '../views/display';
import { Style } from '../views/displayStyle';
import { Operations } from './operations';
import { Project } from '../modules/project';

const Events = () => {
  const display = Display();
  const style = Style();
  const operation = Operations();

  const formProject = () => {
    document.getElementById('btn-create__project').addEventListener('click', () => {
      if (!document.getElementById('form-project')) {
        display.createProjectForm();
        style.blur();
      }
    });
  };

  const formList = (projectArray) => {
    document.querySelector('.new-list').addEventListener('click', () => {
      if (!document.getElementById('form-list')) {
        display.createListForm(projectArray);
        style.blur();
      }
    });
  };

  const createProject = (projectArray) => {
    document.querySelector('.project-names').addEventListener('click', (event) => {
      if (/^proj-/.test(event.target.id)) {
        document.querySelector('.project-active').classList.remove('project-active');
        document.getElementById(event.target.id).classList.add('project-active');
        const projIndex = event.target.id[event.target.id.length - 1];
        display.displayTodos(projectArray[projIndex].title, projectArray);
      }
    });
  };

  const deleteToDos = (projectArray) => {
    document.querySelector('.project-list__content').addEventListener('click', (event) => {
      if (/trash/.test(event.target.classList)) {
        const splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
        const projID = splitID[1];
        const todoID = splitID[3];
        operation.deleteTodo(projectArray[projID].title, projectArray[projID].todos[todoID].title, projectArray);
      }
    });
  };

  const projectFormComponent = (projectArray) => {
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
        operation.populateArray(projectArray);
        style.unblur();
        operation.init(projectArray);
      }
    });
  };

  const listFormComponent = (projectArray) => {
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
  };

  const listContent = (projectArray) => {
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
  };


  return {
    formProject,
    createProject,
    deleteToDos,
    formList,
    projectFormComponent,
    listFormComponent,
    listContent,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Events };
