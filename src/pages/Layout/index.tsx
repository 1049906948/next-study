import React, { useState } from 'react';
import styles from './index.module.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const Layouts: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
            <Layout>
                <Sider className={styles.trigger} trigger={null} collapsible collapsed={collapsed}>
                     <div className={styles.logo} />
                    <Menu className={styles.menu} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={
                        [
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>

                    <Header className={styles.siteLayout}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                             onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>

                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
    )
};

export default Layouts;
