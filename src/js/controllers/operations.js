import { Display } from '../views/displayComponents';
import { Project } from '../modules/project';

const Operations = () => {
  const display = Display();
  const defaultProject = Project('General');

  const populateArray = (projectArray) => {
    const data = JSON.parse(localStorage.getItem('project'));
    projectArray.splice(0, projectArray.length);
    data.forEach((current) => {
      projectArray.push(current);
    });
  };

  const init = (projectArray) => {
    if (localStorage.length === 0 || localStorage.getItem('project') === '[]') {
      projectArray.push(defaultProject);
    } else {
      populateArray(projectArray);
    }
    localStorage.setItem('project', JSON.stringify(projectArray));
    display.displayProjects(projectArray);
    document.getElementById('proj-0').classList.add('project-active');
    display.displayTodos(projectArray[0].title, projectArray);
  };

  const populate = (projName, todoAdding, projectArray) => {
    const test = JSON.parse(localStorage.getItem('project'));
    projectArray.splice(0, projectArray.length);
    test.forEach((current) => {
      if (current.title !== projName) {
        projectArray.push(current);
      } else {
        current.todos.push(todoAdding);
      }
      projectArray.push(current);
    });
    localStorage.setItem('project', JSON.stringify(test));
  };

  const deleteProject = (projName, projectArray) => {
    const backup = JSON.parse(localStorage.getItem('project'));
    projectArray.splice(0, projectArray.length);
    backup.forEach((current) => {
      if (current.title !== projName) {
        projectArray.push(current);
      }
    });
    localStorage.setItem('project', JSON.stringify(projectArray));
    init(projectArray);
  };

  const deleteTodo = (projName, todoName, projectArray) => {
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
  };

  return {
    init,
    populate,
    deleteTodo,
    deleteProject,
    populateArray,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Operations };