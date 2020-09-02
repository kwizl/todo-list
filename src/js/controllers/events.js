import { Display } from '../views/displayComponents';
import { Style } from '../views/displayStyles';
import { Operations } from './operations';
import { Project } from '../modules/project';
import { Data } from '../views/displayData';

const Events = () => {
  const display = Display();
  const style = Style();
  const operation = Operations();
  const contentData = Data();

  const formList = (projectArray) => {
    document.querySelector('.new-list').addEventListener('click', () => {
      if (!document.getElementById('form-list')) {
        display.createListForm(projectArray);
        style.blur();
      }
    });
  };

  const listFormComponent = (projectArray) => {
    document.querySelector('.list-form').addEventListener('click', (event) => {
      if (event.target.id === 'btn-cancel__list') {
        display.deleteListForm();
        style.unblur();
      } else if (event.target.id === 'btn-submit__list') {
        event.preventDefault();
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

  const formProject = () => {
    document.getElementById('btn-create__project').addEventListener('click', () => {
      if (!document.getElementById('form-project')) {
        display.createProjectForm();
        style.blur();
      }
    });
  };

  const projectFormComponent = (projectArray) => {
    document.querySelector('.forms').addEventListener('click', (event) => {
      if (event.target.id === 'btn-cancel__project') {
        display.deleteProjectForm();
        style.unblur();
      } else if (event.target.id === 'btn-submit__project') {
        event.preventDefault();
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

  const toggleProject = (projectArray) => {
    document.querySelector('.project-names').addEventListener('click', (event) => {
      if (/^proj-/.test(event.target.id)) {
        document.querySelector('.project-active').classList.remove('project-active');
        document.getElementById(event.target.id).classList.add('project-active');
        const projIndex = event.target.id[event.target.id.length - 1];
        display.displayTodos(projectArray[projIndex].title, projectArray);
      }
    });
  };

  const deleteToDos = (array) => {
    document.querySelector('.project-list__content').addEventListener('click', (event) => {
      if (/trash/.test(event.target.classList)) {
        const splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
        const projID = splitID[1];
        const todoID = splitID[3];
        operation.deleteTodo(array[projID].title, array[projID].todos[todoID].title, array);
      }
    });
  };

  const projectNames = (projectArray) => {
    document.querySelector('.project-names').addEventListener('click', (event) => {
      if (/trash/.test(event.target.classList)) {
        const splitID = event.target.id.split('-');
        const projID = splitID[2];
        operation.deleteProject(projectArray[projID].title, projectArray);
      }
    });
  };

  const projectContent = (projectArray) => {
    document.querySelector('.project-names').addEventListener('click', (event) => {
      if (/pencil/.test(event.target.classList)) {
        const splitID = event.target.id.split('-')[2];
        display.updateProject(splitID);
        style.blur();
        contentData.projectTitle(projectArray, splitID);
      }
    });
  };

  const projectUpdate = (listOfProjects) => {
    document.querySelector('.forms').addEventListener('click', (event) => {
      if (event.target.id === 'btn-update__project') {
        event.preventDefault();
        const projIndex = document.getElementById('edit-project').classList.value;
        const aux = JSON.parse(localStorage.getItem('project'));
        aux[projIndex].title = document.getElementById('proj-title').value;
        localStorage.setItem('project', JSON.stringify(aux));
        display.deleteProjectForm();
        style.unblur();
        operation.init(listOfProjects);
      }
    });
  };

  const listContent = (projectArray) => {
    document.querySelector('.project-list__content').addEventListener('click', (event) => {
      if (/pencil/.test(event.target.classList)) {
        const splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
        const projID = splitID[1];
        const todoID = splitID[3];
        display.updateList(projID, todoID);
        style.blur();
        contentData.listViewContent(projectArray, projID, todoID);
      }
    });
  };

  const listUpdate = (listOfProjects) => {
    document.querySelector('.list-form').addEventListener('click', (event) => {
      if (event.target.id === 'btn-update__list') {
        event.preventDefault();
        const splitID = document.getElementById('editing').classList.value.split('-');
        const projIndex = splitID[0];
        const todoIndex = splitID[1];
        const aux = JSON.parse(localStorage.getItem('project'));

        contentData.listViewUpdate(aux, projIndex, todoIndex);

        localStorage.setItem('project', JSON.stringify(aux));
        display.deleteListForm();
        style.unblur();
        operation.init(listOfProjects);
      }
    });
  };

  return {
    formProject,
    toggleProject,
    deleteToDos,
    formList,
    projectFormComponent,
    listFormComponent,
    projectNames,
    listContent,
    listUpdate,
    projectContent,
    projectUpdate,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Events };
