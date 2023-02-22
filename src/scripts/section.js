export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderItems.forEach((item) => {
      this._renderer(item);
    });
  }
  setItem(item) {
    this._container.prepend(item);
  }
}

