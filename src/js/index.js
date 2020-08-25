import { ToDoItem } from './modules/toDoItem';

const DomController = (function(){

});

const NewProjectController = (function (){
  function newProject() {
    
  }
});

const Controller = (function (DOM, Task) {
  function setupEventListeners() {
    document.querySelector('.new-project').addEventListener('click', Task.newProject)
  };

  return {
    init(): {
      setupEventListeners();
    }
  };
}(DomController, NewProjectController));

Controller.init();