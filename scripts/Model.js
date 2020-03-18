class Model {
  constructor(persons) {
    this.persons = persons;
  }

  bindListChanged(callback) {
    this.onPersonListChanged = callback;
  }

  editLikes(id) {
    this.persons = this.persons.map(function(person) {
      if (person.id === id) {
        person.likes += 1;
      }
      return person;
    });
    this.persons = this.persons.sort(function(a, b) {
      return a.likes - b.likes;
    });
    this.onPersonListChanged(this.persons, id);
  }

  getPersonForModal(id) {
    return this.persons.find(person => person.id === id);
  }

  getPersonForChangeOver(id) {
    return this.persons.findIndex(person => person.id === id);
  }
}

export { Model };