const Display = () => {
  const createProjectForm = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<form id="form-project" class="project-form active">
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
        <button id="btn-cancel__project" class="btn-form__cancel">Cancel</button>
        <button id="btn-submit__project" class="btn-form__submit">Submit</button>
      </div>
    </form>`;
  };

  const deleteProjectForm = () => {
    const mainContent = document.getElementById('main-content');
    const form = document.getElementById('form-project');
    mainContent.parentNode.removeChild(form);
  };

  return { createProjectForm, deleteProjectForm };
};

// eslint-disable-next-line import/prefer-default-export
export { Display };