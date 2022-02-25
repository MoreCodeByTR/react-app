/* eslint-disable no-unused-vars */
import { extendObservable, action, runInAction } from "mobx"

const OBSERVABLE = {
  name: "morecode",
  age: 20,
}

class UserProp {
  constructor() {
    extendObservable(this, { ...OBSERVABLE })
  }

  @action.bound async update(params) {
    Object.assign(this, params)
  }
}

export default new UserProp()
