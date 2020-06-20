class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.bindListChanged(this.onPersonListChanged);
    this.view.bindIncrementLikes(this.handleIncrementLikes);
    this.view.bindShowModal(this.handleModal);
    this.view.bindChangeoverNext(this.handleChangeoverNext);
    this.view.bindChangeoverPrev(this.handleChangeoverPrev);
    this.onPersonListChanged(this.model.persons, null);
  }

  onPersonListChanged = (persons, id) => {
    this.view.render(persons);
    let person = this.model.getPersonForModal(id);
    this.view.renderModal(person);
  };

  handleIncrementLikes = (id) => {
    this.model.editLikes(id);
  };

  handleModal = (id) => {
    this.personModal = this.model.getPersonForModal(id);
    this.view.renderModal(this.personModal);
    this.view.modalDisplay();
    this.view.closeModalButton();
    this.view.closeModalOutside();
  };

  handleChangeoverNext = (id) => {
    this.personChangeoverNext = this.model.getPersonForChangeOver(id) + 1;
    this.view.renderModal(this.model.persons[this.personChangeoverNext]);
  };

  handleChangeoverPrev = (id) => {
    this.personChangeoverPrev = this.model.getPersonForChangeOver(id) - 1;
    this.view.renderModal(this.model.persons[this.personChangeoverPrev]);
  };
}

export { Controller };
