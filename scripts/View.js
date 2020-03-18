class View {
  constructor(element) {
    this.element = element;
    this.list = document.querySelector(".container__polaroids");
    this.modalWindow = document.querySelector(".modal");
    this.closeButton = document.querySelector(".modal__close");
    this.container = document.querySelector(".container");
  }

  render(persons) {
    let result = "";
    persons.forEach(person => {
      result += `<div class="container__polaroid">
            <img class="container__image" src="${person.image}" alt="Person${person.id}" data-id=${person.id} width="223" height="282">
            <div class="container__likes" data-id=${person.id}>
                <i class="far fa-thumbs-up container__icon"></i>
                <p class="container__text">(<span class="container__likes-number">${person.likes} </span>likes)</p>
            </div>
        </div>`;
    });
    this.element.innerHTML = result;
  }

  renderModal(person) {
    let resultModal = "";
    resultModal += `<div class="modal-content">
        <div class="modal__body">
            <span class="modal__close">&times;</span>
            <div class="container__polaroid container__polaroid--modal">
                <img class="container__image container__image--modal" src="${person.image}" alt="Person${person.id}">
                <div class="container__likes container__likes--modal" data-id=${person.id}>
                    <i class="far fa-thumbs-up container__icon container__icon--modal"></i>
                    <p class="container__text">(<span class="container__likes-number">${person.likes} </span>likes)</p>
                </div>
                <div class="modal__buttons" data-id=${person.id}>
                    <button type="button" class="modal__button-prev" href="#">Prev</button>
                    <button type="button" class="modal__button-next" href="#">Next</button>
                </div>
            </div>
        </div>
    </div>`;
    this.modalWindow.innerHTML = resultModal;
  }

  bindIncrementLikes(handler) {
    this.container.addEventListener("click", event => {
      if (event.target.matches(".container__icon")) {
        const id = parseInt(event.target.parentElement.dataset.id);
        handler(id);
      }
    });
  }

  bindShowModal(handler) {
    this.list.addEventListener("click", event => {
      if (event.target.matches(".container__image")) {
        const id = parseInt(event.target.dataset.id);
        handler(id);
      }
    });
  }

  bindChangeoverNext(handler) {
    this.modalWindow.addEventListener("click", event => {
      if (event.target.matches(".modal__button-next")) {
        event.preventDefault();
        const id = parseInt(event.target.parentElement.dataset.id);
        handler(id);
      }
    });
  }

  bindChangeoverPrev(handler) {
    this.modalWindow.addEventListener("click", event => {
      if (event.target.matches(".modal__button-prev")) {
        event.preventDefault();
        const id = parseInt(event.target.parentElement.dataset.id);
        handler(id);
      }
    });
  }

  modalDisplay() {
    this.modalWindow.style.display = "block";
  }

  closeModalButton() {
    this.modalWindow.addEventListener("click", event => {
      if (event.target.matches(".modal__close")) {
        this.modalWindow.style.display = "none";
      }
    });
  }

  closeModalOutside() {
    this.container.addEventListener("click", event => {
      if (event.target.matches(".modal")) {
        this.modalWindow.style.display = "none";
      }
    });
  }
}
export { View };
