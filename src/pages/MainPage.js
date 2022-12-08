import React from 'react'
import {Button, Layout, Popconfirm, Space, Table} from 'antd';
import {Content, Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";

export const dataSource = []

function MainPage() {
  const navigate = useNavigate()

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
          <Space>
            <Button
                onClick={() => handleEdit(record)} className="edit-button">Edit</Button>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <Button type="primary" danger={true}>Delete</Button>
            </Popconfirm>
          </Space>
    },
  ];
  const handleEdit = (record) => {
    localStorage.setItem("key", record.key)
    localStorage.setItem("name", record.name)
    localStorage.setItem("date", record.date)
    localStorage.setItem("to", record.to)
    localStorage.setItem("template", record.template)
    localStorage.setItem("subject", record.subject)
    navigate(`/edit/${record.key}`)
  }

  const handleDelete = (key) => {
    let index = dataSource.map(function (e) {
      return e.key
    }).indexOf(key)
    dataSource.splice(index, 1);

    navigate('/')
  };

  const handleAdd = () => {
    navigate('/create')
  };

  return (
      <Layout>
        <Header>
          <div>
            <h2>Campaigns</h2>
            <div>You can communicate with your customers directly from the section.</div>
          </div>
          <Button
              onClick={handleAdd}
              type="primary"
              className="primary-button"
          >
            NEW THREAD
          </Button>
        </Header>
        <Content>
          <Table dataSource={dataSource} columns={columns}/>
        </Content>
      </Layout>
  );
}

export default MainPage;
