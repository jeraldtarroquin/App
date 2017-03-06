import { computed, observable } from 'mobx'

export class CurrenLocation{

  @observable lat
  @observable lng

  constructor(){

    this.lat= 14.6760413
    this.lng= 121.0437003

  }
  

}

export default new CurrenLocation
