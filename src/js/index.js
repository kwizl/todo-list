import { ToDoItem } from './modules/toDoItem';
import { Display } from './views/display';

// const listOfProjects = [];

// const DomController = (function(){

// });

// const NewProjectController = (function (itemObj){ // this one deals with form and class
//   function newTask() {
//     const addForms = document.forms['form-project'];
//     console.log('started new task');
//   };


//   return { newTask, taskSubmit };
// }(ToDoItem()));

// const Controller = (function (DOM, Task) {
//   function newProject() {
//     // 1 - Display the form for it
//     document.querySelector('.project-form').classList.add('active');
//     // 2 - Send Information to NewProjectController (name to be redefined)
//     Task.newTask();

//     // 3 - Cast DOM 

//     // 4 - Hide Form
//   };
  
//   function setupEventListeners() {
//     document.querySelector('.new-project').addEventListener('click', newProject);
//     document.querySelector('#form-project').addEventListener('submit', Task.taskSubmit(event));
//   };

//   return {
//     init() {
//       setupEventListeners();
//     }
//   };
// }(DomController, NewProjectController));

// Controller.init();

document.getElementById('btn-create__project').addEventListener('click', () => {
  const display = Display();
  display.createProjectForm();
});

document.getElementById('btn-cancel__project').addEventListener('click', () => {
  const display = Display();
  display.deleteProjectForm();
});

