!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports={ToDoItem:e=>{const{title:t}=e,{description:r}=e,{dueDate:n}=e,{priority:o}=e;return{getTitle:()=>t,getDescription:()=>r,getDueDate:()=>n,getPriority:()=>o}}}},function(e,t,r){"use strict";r.r(t);r(0);const n=()=>({createProjectForm:()=>{document.querySelector(".project").insertAdjacentHTML("beforeend",'<form id="form-project" class="project-form active">\n    <p>Create a Project</p>\n    <input type="text" id="proj-title" class="task-form-field" placeholder="Title"><br/>\n    <div class="project-submit">\n      <button id="btn-cancel__project" class="form-btn__cancel">Cancel</button>\n      <button id="btn-submit__project" class="form-btn__submit">Create</button>\n    </div>\n    </form>')},deleteProjectForm:()=>{const e=document.getElementById("form-project");e.parentNode.removeChild(e)},createListForm:()=>{document.querySelector(".list-content").insertAdjacentHTML("beforeend",'<form id="form-list" class="project-form active">\n      <p>Add a Task to a Project</p>\n      <select name="Project" id="project" class="task-form-field" >\n        <option value="Low">Low</option>\n      </select><br>\n      <input type="text" id="title" class="task-form-field" placeholder="Title"><br/>\n      <input type="text" id="desc" class="task-form-field" placeholder="Description"><br/>\n      <input type="text" id="date" class="task-form-field" placeholder="dueDate"><br/>\n      <select name="Priority" id="priority" class="task-form-field" >\n        <option value="Low">Low</option>\n        <option value="Medium">Medium</option>\n        <option value="High">High</option>\n      </select>\n      <div class="project-submit" >\n        <button id="btn-cancel__list" class="form-btn__cancel">Cancel</button>\n        <button id="btn-submit__list" class="form-btn__submit">Submit</button>\n      </div>\n    </form>')},deleteListForm:()=>{const e=document.getElementById("form-list");e.parentNode.removeChild(e)}});document.querySelector(".new-list").addEventListener("click",()=>{n().createListForm()}),document.querySelector(".list").addEventListener("click",e=>{if(e.preventDefault(),"btn-cancel__list"===e.target.id){n().deleteListForm()}}),document.getElementById("btn-create__project").addEventListener("click",()=>{n().createProjectForm()}),document.querySelector(".project").addEventListener("click",e=>{if(e.preventDefault(),"btn-cancel__project"===e.target.id){n().deleteProjectForm()}})}]);