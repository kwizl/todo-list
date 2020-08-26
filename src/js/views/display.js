const Display = () => {
  const createProjectForm = () => {
    const projectForm = document.querySelector('.project');
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

  const createListForm = () => {
    const listForm = document.querySelector('.list-content');
    const newHTML = `<form id="form-list" class="project-form active">
      <p>Add a Task to a Project</p>
      <select name="Project" id="project" class="task-form-field" >
        <option value="Low">Low</option>
      </select><br>
      <input type="text" id="title" class="task-form-field" placeholder="Title"><br/>
      <input type="text" id="desc" class="task-form-field" placeholder="Description"><br/>
      <input type="text" id="date" class="task-form-field" placeholder="dueDate"><br/>
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
    listForm.insertAdjacentHTML('beforeend', newHTML);
  };


  const deleteListForm = () => {
    const formList = document.getElementById('form-list');
    formList.parentNode.removeChild(formList);
  };

  return {
    createProjectForm, deleteProjectForm, createListForm, deleteListForm, projectList,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Display };