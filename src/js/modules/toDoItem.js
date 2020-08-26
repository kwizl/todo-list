const ToDoItem = (data) => {
  const getData = () => ({
    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
  });

  return {
    getData,
  };
};

export default ToDoItem;
