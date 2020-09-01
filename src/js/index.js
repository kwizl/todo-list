import { Display } from './views/display';
import { Style } from './views/displayStyle';
import { Events } from './controllers/event';
import { Operations } from './controllers/operations';

const event = Events();
const operation = Operations();
const display = Display();
const style = Style();

const projectArray = [];

window.onload = () => {
  operation.init(projectArray);
};

event.formList(projectArray);
event.formProject();
event.createProject(projectArray);
event.deleteProject(projectArray);
event.projectFormComponent(projectArray);
event.listContent(projectArray);
event.listFormComponent(projectArray);