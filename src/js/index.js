import { ToDoItem } from './modules/toDoItem';

const listOfProjects = [];

const DomController = (function(){

});

const NewProjectController = (function (itemObj){ // this one deals with form and class
  function newTask() {
    const addForms = document.forms['bla'];
    console.log('started new task');
  };


  return { newTask, taskSubmit };
}(ToDoItem()));

const Controller = (function (DOM, Task) {
  function newProject() {
    // 1 - Display the form for it
    document.querySelector('.project-form').classList.add('active');
    // 2 - Send Information to NewProjectController (name to be redefined)
    Task.newTask();

    // 3 - Cast DOM 

    // 4 - Hide Form
  };
  
  function setupEventListeners() {
    document.querySelector('.new-project').addEventListener('click', newProject);
    document.querySelector('#bla').addEventListener('submit', Task.taskSubmit(event));
  };

  return {
    init() {
      setupEventListeners();
    }
  };
}(DomController, NewProjectController));

Controller.init();