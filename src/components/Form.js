import React, {useEffect, useState} from "react";
import {Button, Col, DatePicker, Divider, Form, Input, Row, Select} from 'antd';
import {useNavigate, useParams} from "react-router-dom";
import HtmlEditor from "./HtmlEditor";
import {dataSource} from "../pages/MainPage";
import {v4 as uuid} from "uuid"

const {Option, OptGroup} = Select;

function EmailForm() {
  const {id} = useParams()
  const navigate = useNavigate()

  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("")
  const [to, setTo] = useState([])
  const [template, setTemplate] = useState("")
  const [subject, setSubject] = useState("")

  let index = dataSource.map(function (e) {
    return e.key
  }).indexOf(key)

  const handleAdd = (values) => {
    const ids = uuid()
    let uniquieId = ids.slice(0, 3)

    const newData = {
      key: uniquieId,
      name: name,
      type: "Email",
      to: values.to,
      date: date,
      template: values.template,
      subject: values.subject
    };

    dataSource.push(newData)
    navigate('/')
  };

  const handleEdit = () => {
    let data = dataSource[index]
    data.name = name
    data.date = date
    data.to = to
    data.template = template
    data.subject = subject
    navigate('/')
  }

  useEffect(() => {
    if (id) {
      setKey(localStorage.getItem("key"))
      setName(localStorage.getItem("name"))
      setDate(localStorage.getItem("date"))
      setTemplate(localStorage.getItem("template"))
      setTo(localStorage.getItem("to"))
      setSubject(localStorage.getItem("subject"))
    }
  }, [])

  return (
      <Form
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 23,
          }}
          layout="vertical"
          fields={[
            {
              name: ["name"],
              value: name,
            },
            {
              name: ["to"],
              value: to,
            },
            {
              name: ["template"],
              value: template,
            },
            {
              name: ["subjectssd"],
              value: subject,
            },
          ]}
          onFinish={id ? handleEdit : handleAdd}
      >
        <h3>Email thread</h3>
        <Divider/>
        <Row>
          <Col span={12}>
            <Form.Item
                label="Thread name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input thread name!',
                  },
                ]}
            >
              <Input placeholder="Enter thread name" value={name} name="name"
                     onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
                label="Template"
                name="template"
                initialValue={template}
            >
              <Select
                  placeholder="Select feedback template"
                  onChange={(e) => setTemplate(e.target.value)}
                  value={template}
                  allowClear
                  options={[
                    {
                      value: "1",
                      label: "Template1",
                    },
                    {
                      value: "2",
                      label: "Template2",
                    }
                  ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
                label="From"
                name="from"
                initialValue="from@mail.com"
            >
              <Input disabled={true}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
                label="To"
                name="to"
                rules={[
                  {
                    required: true,
                    message: 'Please select recipients!',
                  },
                ]}
                initialValue={[to]}
            >
              <Select
                  mode="tags"
                  placeholder="Add recipients"
                  name="to"
                  onChange={(e) => setTo(e.target.value)}
                  value={[to]}
              >
                <OptGroup label="Customer">
                  <Option value="customer1@mail.com">customer1@mail.com</Option>
                  <Option value="customer2@mail.com">customer2@mail.com</Option>
                </OptGroup>
                <OptGroup label="Receiver"/>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            <Form.Item
                label="If customer name is empty"
                name="customer_name"
                initialValue="Customer"

            >
              <Input/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
                label="Start sending"
                name="date"
                rules={[
                  {
                    required: true,
                    message: 'Please select date!',
                  },
                ]}
                valuePropName={"date"}
                initialValue={date}
            >
              <DatePicker showTime format="ll HH:mm"
                          // defaulValue={date}
                          // defaultPickerValue={date}
                          onChange={(date, dateString) => setDate(dateString)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
                label="Subject"
                name="subject"
                initialValue={subject}
            >
              <Input placeholder="Enter subject here" value={subject} name="subject"
                     onChange={(e) => setSubject(e.target.value)}/>
            </Form.Item>
          </Col>
        </Row>
        <Divider/>
        <Row>
          <Col span={24}>
            <Form.Item
                label="Content"
            >
              <HtmlEditor/>
            </Form.Item>
          </Col>
        </Row>
        <Divider/>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="primary-button">
                Send
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
  );
}

export default EmailForm;