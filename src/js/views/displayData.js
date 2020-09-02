const Data = () => {
  const deleteProjectsDisplayed = () => {
    document.querySelector('.project-names').innerHTML = '';
  };

  const deleteTodosDisplayed = () => {
    document.querySelector('.project-list__content').innerHTML = '';
  };

  const projectTitle = (projectArray, splitID) => {
    document.getElementById('proj-title').value = projectArray[splitID].title;
  };

  const listViewContent = (projectArray, projID, todoID) => {
    document.getElementById('title').value = projectArray[projID].todos[todoID].title;
    document.getElementById('desc').value = projectArray[projID].todos[todoID].description;
    document.getElementById('date').value = projectArray[projID].todos[todoID].dueDate;
    document.getElementById('priority').value = projectArray[projID].todos[todoID].priority;
  };

  const listViewUpdate = (aux, projIndex, todoIndex) => {
    aux[projIndex].todos[todoIndex].title = document.getElementById('title').value;
    aux[projIndex].todos[todoIndex].description = document.getElementById('desc').value;
    aux[projIndex].todos[todoIndex].dueDate = document.getElementById('date').value;
    aux[projIndex].todos[todoIndex].priority = document.getElementById('priority').value;
  };

  return {
    deleteProjectsDisplayed,
    deleteTodosDisplayed,
    projectTitle,
    listViewContent,
    listViewUpdate,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Data };