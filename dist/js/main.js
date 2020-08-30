!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([,function(e,t,o){"use strict";o.r(t);const n=e=>({title:e,todos:[]}),r=[],c=(()=>{const e=e=>{let t="";return e.forEach(e=>{t+=`<option value="${e.title}">${e.title}</option>`}),t};return{createProjectForm:()=>{document.querySelector(".project").insertAdjacentHTML("beforeend",'<form id="form-project" class="project-form active">\n    <p>Create a Project</p>\n    <input type="text" id="proj-title" class="task-form-field" placeholder="Title"><br/>\n    <div class="project-submit">\n      <button id="btn-cancel__project" class="form-btn__cancel">Cancel</button>\n      <button id="btn-submit__project" class="form-btn__submit">Create</button>\n    </div>\n    </form>')},deleteProjectForm:()=>{const e=document.getElementById("form-project");e.parentNode.removeChild(e)},createListForm:t=>{const o=e(t),n=document.querySelector(".list-content"),r='<form id="form-list" class="project-form active">\n      <p>Add a Task to a Project</p>\n      <select name="Project-to-add" id="project-to-add" class="task-form-field">\n        %change%\n      </select><br>\n      <input type="text" id="title" class="task-form-field" placeholder="Title"><br/>\n      <textarea type="text" id="desc" class="task-form-field" placeholder="Description"></textarea><br/>\n      <input type="date" id="date" class="date task-form-field" placeholder="dueDate"><br/>\n      <select name="Priority" id="priority" class="task-form-field" >\n        <option value="Low">Low</option>\n        <option value="Medium">Medium</option>\n        <option value="High">High</option>\n      </select>\n      <div class="project-submit" >\n        <button id="btn-cancel__list" class="form-btn__cancel">Cancel</button>\n        <button id="btn-submit__list" class="form-btn__submit">Submit</button>\n      </div>\n    </form>'.replace("%change%",o);n.insertAdjacentHTML("beforeend",r)},deleteListForm:()=>{const e=document.getElementById("form-list");e.parentNode.removeChild(e)},projectList:()=>{const e=document.querySelector(".project-names"),t=document.createElement("p");e.appendChild(t),t.classList.add("project-item"),t.textContent=localStorage.getItem("project")},optionProject:e,displayProjects:e=>{const t=document.querySelector(".project-names");e.forEach((e,o)=>{const n=`<div class="div-item">\n        <div class="list-item"><p id="proj-${o}" class="title-name">${e.title}</p></div>\n        <div class="list-icon">\n          <span class="project-icons">\n            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\n          </span>\n          <span class="project-icons">\n            <i class="fa fa-trash-o" aria-hidden="true"></i>\n          </span>\n        </div>\n      </div>`;t.insertAdjacentHTML("beforeend",n)})},displayTodos:(e,t)=>{document.querySelector(".project-list__content").innerHTML="";const o=document.querySelector(".project-list__content");t.forEach((t,n)=>{t.title===e&&t.todos.forEach((e,t)=>{const r=`<div id="prj-${n}-todo-${t}" class="project-list">\n            <p>Title: &nbsp; &nbsp; &nbsp;${e.title}</p>\n            <p>Date:  &nbsp; &nbsp; &nbsp;${e.dueDate}</p>\n              <div class="todo-list__icon">\n                <span class="project-icons">\n                  <i class="todo-icons fa fa-pencil-square-o" aria-hidden="true"></i>\n                </span>\n                <span class="project-icons">\n                  <i class="todo-icons fa fa-trash-o" aria-hidden="true"></i>\n                </span>\n              </div>\n            </div>`;o.insertAdjacentHTML("beforeend",r)})})}}})(),i=n("General");function s(){const e=JSON.parse(localStorage.getItem("project"));r.splice(0,r.length),e.forEach(e=>{r.push(e)})}window.onload=()=>{0===localStorage.length?r.push(i):s(),localStorage.setItem("project",JSON.stringify(r)),console.log(localStorage),c.displayProjects(r),document.getElementById("proj-0").classList.add("project-active"),c.displayTodos(r[0].title,r)},document.querySelector(".new-list").addEventListener("click",()=>{document.getElementById("form-list")||c.createListForm(r)}),document.querySelector(".list").addEventListener("click",e=>{if(e.preventDefault(),"btn-cancel__list"===e.target.id)c.deleteListForm();else if("btn-submit__list"===e.target.id){!function(e,t){const o=JSON.parse(localStorage.getItem("project"));r.splice(0,r.length),o.forEach(o=>{o.title!==e||o.todos.push(t),r.push(o)}),localStorage.setItem("project",JSON.stringify(o))}(document.getElementById("project-to-add").value,{title:document.getElementById("title").value,description:document.getElementById("desc").value,dueDate:document.getElementById("date").value,priority:document.getElementById("priority").value}),c.deleteListForm()}}),document.getElementById("btn-create__project").addEventListener("click",()=>{document.getElementById("form-project")||c.createProjectForm()}),document.querySelector(".project").addEventListener("click",e=>{if(e.preventDefault(),"btn-cancel__project"===e.target.id)c.deleteProjectForm();else if("btn-submit__project"===e.target.id){const e=document.getElementById("proj-title").value,t=n(e);r.push(t),localStorage.setItem("project",JSON.stringify(r)),c.deleteProjectForm(),s()}}),document.querySelector(".project-names").addEventListener("click",e=>{if(/^proj-/.test(e.target.id)){document.querySelector(".project-active").classList.remove("project-active"),document.getElementById(e.target.id).classList.add("project-active");const t=e.target.id[e.target.id.length-1];c.displayTodos(r[t].title,r)}})}]);