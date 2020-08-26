const ToDoItem = (data) => {

  const getData = () => {
    return {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority
    };
  }

  return {
    getData
  };
};

export default ToDoItem;

// module.exports = {
//   ToDoItem,
// };