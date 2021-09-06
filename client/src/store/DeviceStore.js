import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Refregirator' },
      { id: 2, name: 'Smartphones' },
      { id: 3, name: 'Notebooks' },
      { id: 4, name: 'TVs' },
    ];
    this._brands = [
      { id: 1, name: 'Nokia' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Samsung' },
      { id: 4, name: 'Samsung' },
      { id: 5, name: 'Samsung' },
      { id: 6, name: 'Samsung' },
      { id: 7, name: 'Samsung' },
    ];
    this._devices = [
      { id: 1, name: '12 pro', price: 1200, rating: 5, img: '' },
      { id: 2, name: 'Galaxy', price: 1200, rating: 5, img: '' },
      { id: 3, name: 'Galaxy', price: 1200, rating: 5, img: '' },
      { id: 4, name: 'Galaxy', price: 1200, rating: 5, img: '' },
      { id: 5, name: 'Galaxy', price: 1200, rating: 5, img: '' },
      { id: 6, name: 'Galaxy', price: 1200, rating: 5, img: '' },
      { id: 7, name: 'Galaxy', price: 1200, rating: 5, img: '' },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand; 
  }
}