const ToDoItem = (data) => {
  let title = data.title;
  let description = data.description;
  let dueDate = data.dueDate;
  let priority = data.priority;
  
  const getTitle = () => { return title };
  const getDescription = () => { return description };
  const getDueDate = () => { return dueDate };
  const getPriority = () => { return priority };

  return { getTitle, getDescription, getDueDate, getPriority };
};

// eslint-disable-next-line import/prefer-default-export
export { ToDoItem };