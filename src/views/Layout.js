import React from 'react';
import { Layout, Icon } from 'antd';


import DynamicMenu from '../components/Layout/DynamicMenu'

const { Header, Sider, Content } = Layout;
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Layout className="system-body">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="menu-logo" />
                     <DynamicMenu/>
                </Sider>
                <Layout className="system-right">
                    <Header  className="system-right-header">
                        <Icon
                            className="collapsed-icon"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children || null}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Main;
