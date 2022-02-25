import React from "react"
import { inject, observer } from "mobx-react"
import { DatePicker } from "antd"
import moment from "moment"

const { RangePicker } = DatePicker
const dateFormat = "YYYY-MM-DD"

@inject("info", "contract")
@observer
class MobxDemo extends React.Component {
  onChange = (m, s) => {
    const {
      contract: { updateTime },
    } = this.props
    console.log(m, s)
    updateTime(s)
  }

  render() {
    const {
      info: { name, age },
      contract: { dateArray, title },
    } = this.props
    return (
      <>
        <p>123</p>
        {name}
        {age}
        <br />
        <p>{title}</p>
        <RangePicker onChange={this.onChange} />
        {dateArray.map((item, index) => {
          const { startTime, endTime } = item
          return <div style={{marginTop:'20px'}} key={startTime}>
            <p>第{index+1}年:</p>
            <RangePicker
              disabled
              defaultValue={[
                moment(startTime, dateFormat),
                moment(endTime, dateFormat),
              ]}
            />
          </div>
        })}
      </>
    )
  }
}

export default MobxDemo
