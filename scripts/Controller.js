class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.bindListChanged(this.onPersonListChanged.bind(this));
    this.view.bindIncrementLikes(this.handleIncrementLikes);
    // this.view.bindIncrementLikes(this.handleIncrementLikes.bind(this));
    this.view.bindShowModal(this.handleModal.bind(this));
    this.view.bindChangeoverNext(this.handleChangeoverNext.bind(this));
    this.view.bindChangeoverPrev(this.handleChangeoverPrev.bind(this));
    this.onPersonListChanged(this.model.persons, null);
  }

  onPersonListChanged(persons, id) {
    this.view.render(persons);
    let person = this.model.getPersonForModal(id);
    this.view.renderModal(person);
  }

  handleIncrementLikes = (id) => {
    this.model.editLikes(id);
  };

  handleModal(id) {
    this.personModal = this.model.getPersonForModal(id);
    this.view.renderModal(this.personModal);
    this.view.modalDisplay();
    this.view.closeModalButton();
    this.view.closeModalOutside();
  }

  handleChangeoverNext(id) {
    this.personChangeoverNext = this.model.getPersonForChangeOver(id) + 1;
    this.view.renderModal(this.model.persons[this.personChangeoverNext]);
  }

  handleChangeoverPrev(id) {
    this.personChangeoverPrev = this.model.getPersonForChangeOver(id) - 1;
    this.view.renderModal(this.model.persons[this.personChangeoverPrev]);
  }
}

export { Controller };
