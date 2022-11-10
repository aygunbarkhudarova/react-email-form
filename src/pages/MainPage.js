import React from 'react'
import {Button, Layout, Table} from 'antd';
import {Content, Header} from "antd/es/layout/layout";

function MainPage() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    }
  ];
  const data = [
    {
      key: '0',
      name: 'Edward King 0',
      type: 'type1',
      date: '10.11',
    },
    {
      key: '1',
      name: 'Edward King 1',
      type: 'type2',
      date: '10.11',
    }
  ]

  return (
      <Layout>
        <Header>
          <div>
            <h2>Campaigns</h2>
            <div>You can communicate with your customers directly from the section.</div>
          </div>
          <Button
              // onClick={handleAdd}
              type="primary"
              className="primary-button"
          >
            NEW THREAD
          </Button>
        </Header>
        <Content>
          <Table dataSource={data} columns={columns}/>
        </Content>
      </Layout>
  );
}

export default MainPage;
