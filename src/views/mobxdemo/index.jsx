import React from "react"
import { inject, observer } from "mobx-react"
import {
  DatePicker,
  Form,
  Input,
  Button,
  Row,
  Col,
  InputNumber,
  Space,
} from "antd"
import moment from "moment"
import "./index.css"

const { RangePicker } = DatePicker
const dateFormat = "YYYY-MM-DD"

@inject("info", "contract")
@observer
class MobxDemo extends React.Component {
  formRef = React.createRef()

  onChange = (m, s) => {
    const {
      contract: { updateTime },
    } = this.props
    console.log(m, s)
    updateTime(s)
  }

  onSubmit = () => {
    this.formRef.current.validateFields().then((allValues) => {
      console.log(allValues)
    })
  }

  render() {
    const {
      info: { name, age },
      contract: { dateArray, title },
    } = this.props
    return (
      <div>
        <p>
          mobx启用装饰器语法：
          <a href="https://zh.mobx.js.org/enabling-decorators.html">
            mobx中文官网
          </a>
        </p>
        {name}
        {age}
        <br />
        <p>{title}</p>
        <RangePicker onChange={this.onChange} />
        {dateArray.map((item, index) => {
          const { startTime, endTime } = item
          return (
            <div style={{ marginTop: "20px" }} key={startTime}>
              <p>第{index + 1}年:</p>
              <RangePicker
                disabled
                defaultValue={[
                  moment(startTime, dateFormat),
                  moment(endTime, dateFormat),
                ]}
              />
            </div>
          )
        })}

        <p>动态表单</p>
        <div className="form-container">
          <Form
            name="basic"
            ref={this.formRef}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Password">
              <Row gutter={16}>
                <Col span={7}>0 文字</Col>
                <Col span={2}>~</Col>
                <Col span={9}>
                  <Form.Item
                    name="captcha1"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input the captcha you got!",
                      },
                    ]}
                  >
                    <Input suffix="万元" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="captcha2"
                    noStyle
                    rules={[
                      {
                        required: false,
                        message: "Please input the captcha you got!",
                      },
                    ]}
                  >
                    <InputNumber
                      addonAfter="%"
                      min={80.0}
                      max={99.99}
                      step={0.01}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            
            <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
              <Form.Item
                style={{ display: "inline-block", width: "calc(30% - 8px)" }}
              >
                <div>123</div>
              </Form.Item>
              <Form.Item
                name="year"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Input birth year" />
              </Form.Item>
              <Form.Item
                name="month"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Input birth month" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="BirthDate">
              <Space>
                123 ~
                <Form.Item name="year" noStyle rules={[{ required: true }]}>
                  <Input placeholder="Input birth year" />
                </Form.Item>
                <Form.Item name="month" noStyle rules={[{ required: true }]}>
                  <Input placeholder="Input birth month" />
                </Form.Item>
              </Space>
            </Form.Item>
            <div className="item-split-line"/>
            <div className="item-split-line2"/>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" onClick={this.onSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default MobxDemo
