import { Display } from './views/display';
import { Style } from './views/displayStyle';
import { Events } from './controllers/event';
import { Operations } from './controllers/operations';

const event = Events();
const operation = Operations();

const projectArray = [];

window.onload = () => {
  operation.init(projectArray);
};

event.formList(projectArray);
event.formProject();
event.toggleProject(projectArray);
event.deleteToDos(projectArray);
event.projectFormComponent(projectArray);
event.projectNames(projectArray);
event.listContent(projectArray);
event.listFormComponent(projectArray);
event.listUpdate(projectArray);
event.projectContent(projectArray);
event.projectUpdate(projectArray);