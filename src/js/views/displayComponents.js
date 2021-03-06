import { Data } from './displayData';

const Display = () => {
  const contentData = Data();

  const createProjectForm = () => {
    const projectForm = document.querySelector('.forms');
    const newHTML = `<form id="form-project" class="project-form active">
    <p>Create a Project</p>
    <input type="text" id="proj-title" class="task-form-field" placeholder="Title"><br/>
    <div class="project-submit">
      <button id="btn-cancel__project" class="form-btn__cancel">Cancel</button>
      <button id="btn-submit__project" class="form-btn__submit">Create</button>
    </div>
    </form>`;
    projectForm.insertAdjacentHTML('beforeend', newHTML);
  };

  const projectList = () => {
    const parent = document.querySelector('.project-names');
    const el = document.createElement('p');
    parent.appendChild(el);
    el.classList.add('project-item');
    el.textContent = localStorage.getItem('project');
  };

  const deleteProjectForm = () => {
    const formProject = document.getElementById('form-project');
    formProject.parentNode.removeChild(formProject);
  };

  const optionProject = (array) => {
    let html = '';
    array.forEach((current) => {
      html += `<option value="${current.title}">${current.title}</option>`;
    });
    return html;
  };

  const createListForm = (listOfProjects) => {
    const listOfOptions = optionProject(listOfProjects);
    const listForm = document.querySelector('.list-form');
    const rawHTML = `<form id="form-list" class="project-form active">
      <p>Add a Task to a Project</p>
      <select name="Project-to-add" id="project-to-add" class="task-form-field">
        %change%
      </select><br>
      <input type="text" id="title" class="task-form-field" placeholder="Title"><br/>
      <textarea type="text" id="desc" class="task-form-field" placeholder="Description"></textarea><br/>
      <input type="date" id="date" class="date task-form-field" placeholder="dueDate"><br/>
      <select name="Priority" id="priority" class="task-form-field" >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <div class="project-submit" >
        <button id="btn-cancel__list" class="form-btn__cancel">Cancel</button>
        <button id="btn-submit__list" class="form-btn__submit">Submit</button>
      </div>
    </form>`;
    const newHTML = rawHTML.replace('%change%', listOfOptions);
    listForm.insertAdjacentHTML('beforeend', newHTML);
  };

  const updateList = (projIndex, todoIndex) => {
    const listForm = document.querySelector('.list-form');
    const rawHTML = `<form id="form-list" class="project-form active">
      <p id="editing" class="${projIndex}-${todoIndex}">Edit Task</p>
      <input type="text" id="title" class="task-form-field" placeholder="Title"><br/>
      <textarea type="text" id="desc" class="task-form-field" placeholder="Description"></textarea><br/>
      <input type="date" id="date" class="date task-form-field" placeholder="dueDate"><br/>
      <select name="Priority" id="priority" class="task-form-field" >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <div class="project-submit" >
        <button id="btn-update__list" class="form-btn__submit">Update</button>
      </div>
    </form>`;
    listForm.insertAdjacentHTML('beforeend', rawHTML);
  };

  const updateProject = (projIndex) => {
    const projectForm = document.querySelector('.forms');
    const newHTML = `<form id="form-project" class="project-form active">
    <p id="edit-project" class="${projIndex}">Edit Project</p>
    <input type="text" id="proj-title" class="task-form-field" placeholder="Title"><br/>
    <div class="project-submit">
      <button id="btn-update__project" class="form-btn__submit">Update</button>
    </div>
    </form>`;
    projectForm.insertAdjacentHTML('beforeend', newHTML);
  };

  const deleteListForm = () => {
    const formList = document.getElementById('form-list');
    formList.parentNode.removeChild(formList);
  };

  const displayProjects = (listOfProjects) => {
    contentData.deleteProjectsDisplayed();
    const divNames = document.querySelector('.project-names');
    listOfProjects.forEach((current, index) => {
      const newHTML = `<div class="div-item">
        <div class="list-item"><p id="proj-${index}" class="title-name">${current.title}</p></div>
        <div class="list-icon">
          <span class="project-icons">
            <i id="edit-proj-${index}" class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </span>
          <span class="project-icons">
            <i id="delete-proj-${index}" class="fa fa-trash-o" aria-hidden="true"></i>
          </span>
        </div>
      </div>`;
      divNames.insertAdjacentHTML('beforeend', newHTML);
    });
  };

  const displayTodos = (projName, listOfProjects) => {
    contentData.deleteTodosDisplayed();
    const divList = document.querySelector('.project-list__content');
    listOfProjects.forEach((currentProject, prjIndex) => {
      if (currentProject.title === projName) {
        if (currentProject.todos.length !== 0) {
          currentProject.todos.forEach((currentTodo, todoIndex) => {
            const el = `<div id="prj-${prjIndex}-todo-${todoIndex}" class="project-list">
              <p>Title: &nbsp; &nbsp; &nbsp;${currentTodo.title}</p>
              <p>Date:  &nbsp; &nbsp; &nbsp;${currentTodo.dueDate}</p>
                <div class="todo-list__icon">
                  <span class="project-icons">
                    <i class="todo-icons fa fa-pencil-square-o" aria-hidden="true"></i>
                  </span>
                  <span class="project-icons">
                    <i class="todo-icons fa fa-trash-o" aria-hidden="true"></i>
                  </span>
                </div>
              </div>`;
            divList.insertAdjacentHTML('beforeend', el);
          });
        }
      }
    });
  };

  return {
    createProjectForm,
    deleteProjectForm,
    createListForm,
    updateList,
    deleteListForm,
    projectList,
    updateProject,
    optionProject,
    displayProjects,
    displayTodos,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Display };