export default class Project {
  constructor(name) {
    this.name = name;
  }

  projectStorage() {
    const nameArray = [];
    this.name = document.getElementById('proj-title').value;
    nameArray.push(this.name);
    localStorage.setItem('name', JSON.stringify(nameArray));
  }
}