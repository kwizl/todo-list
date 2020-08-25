const ToDoItem = (data) => {
  const { title } = data;
  const { description } = data;
  const { dueDate } = data;
  const { priority } = data;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  return {
    getTitle, getDescription, getDueDate, getPriority,
  };
};

module.exports = {
  ToDoItem,
};