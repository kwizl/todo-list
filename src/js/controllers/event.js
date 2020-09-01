import { Display } from '../views/display';
import { Style } from '../views/displayStyle';
import { Operations } from './operations';

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

  const deleteProject = (projectArray) => {
    document.querySelector('.project-list__content').addEventListener('click', (event) => {
      if (/trash/.test(event.target.classList)) {
        const splitID = event.target.parentNode.parentNode.parentNode.id.split('-');
        const projID = splitID[1];
        const todoID = splitID[3];
        operation.deleteTodo(projectArray[projID].title, projectArray[projID].todos[todoID].title, projectArray);
      }
    });
  };

  return { formProject, createProject, deleteProject };
};

// eslint-disable-next-line import/prefer-default-export
export { Events };
