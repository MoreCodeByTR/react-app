/* eslint-disable no-unused-vars */
import { makeObservable, observable,action, runInAction } from "mobx"
import moment from "moment"
//mobx6.0如何使用修饰器 https://www.mobxjs.com/enabling-decorators

class Contract {
  @observable startTime= ''
  @observable endTime=''
  @observable dateArray=[]
  title='never give up'
  constructor() {
    makeObservable(this)
  }

  transform=(target,arr)=>{
    for(let i=0;i<arr.length-1;i++){
      let item={"startTime":arr[i],"endTime":arr[i+1]}
      target.push(item)
    }
  }

  @action.bound async update(params) {
    Object.assign(this, params)
  }

  @action.bound async updateTime(params) {
    this.dateArray=[]
    console.log(moment(params[0]).subtract(1, "years").format("YYYY-MM-DD"))
    this.startTime=params[0]||''
    this.endTime=params[1]||''

    let arr=[]
    let index=-1
    let currentTime=moment(this.startTime).subtract(index, "years").format("YYYY-MM-DD")
    while(moment(currentTime).isBefore(this.endTime)){
      arr.push(currentTime)
      index--
      currentTime=moment(this.startTime).subtract(index, "years").format("YYYY-MM-DD")
    }
    arr.push(this.endTime)
    arr.unshift(this.startTime)

    this.transform(this.dateArray,arr)
  }
}

export default new Contract()
