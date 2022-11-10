import React from "react";
import {Button, Col, DatePicker, Divider, Form, Input, Row, Select} from 'antd';
import {useNavigate} from "react-router-dom";
import HtmlEditor from "./HtmlEditor";

const {Option, OptGroup} = Select;

function EmailForm() {
  const navigate = useNavigate()

  const handleAdd = (values) => {
    console.log('Success:', values);
    navigate('/')
  };

  return (
      <Form
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 23,
          }}
          layout="vertical"
          onFinish={handleAdd}
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
              <Input placeholder="Enter thread name"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
                label="Template"
                name="template"
            >
              <Select
                  placeholder="Select feedback template"
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
            >
              <Input disabled={true} defaultValue="from@mail.com"/>
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
            >
              <Select
                  mode="tags"
                  placeholder="Add recipients"
              >
                <OptGroup label="Customer">
                  <Option value="jack">customer1@mail.com</Option>
                  <Option value="lucy">customer2@mail.com</Option>
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

            >
              <Input defaultValue="Customer"/>
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
            >
              <DatePicker showTime format="MM-DD HH:mm"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
                label="Subject"
                name="subject"
            >
              <Input placeholder="Enter subject here"/>
            </Form.Item>
          </Col>
        </Row>
        <Divider/>
        <Row>
          <Col span={24}>
            <HtmlEditor/>
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