import React from "react";
import {Layout} from 'antd';
import EmailForm from "../components/Form";
import Counter from "../components/Counter";

const {Sider, Content} = Layout;

function CreatePage() {
  return (
      <Layout>
        <Content className="layout-background">
          <EmailForm/>
        </Content>
        <Sider className="layout-background">
          <Counter/>
        </Sider>
      </Layout>
  );
}

export default CreatePage;