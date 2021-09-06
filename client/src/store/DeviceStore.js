import {makeAutoObservable} from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Refregirator' },
      { id: 2, name: 'Smartphones' },
    ];
    this._brands = [
      { id: 1, name: 'Refregirator' },
      { id: 2, name: 'Smartphones' },
    ];
    this._devices = [
      { id: 1, name: '12 pro', price: 1200, rating: 5, img: '' },
      { id: 2, name: 'Galaxy', price: 1200, rating: 5, img: '' },
    ]
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._user = devices;
  }


  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}