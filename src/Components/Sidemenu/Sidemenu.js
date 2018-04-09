import React from "react";
import { Menu, Icon } from 'antd';
import ReactDOM from "react-dom";
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
    <div>
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title={<span><span>Moulding</span></span>}>
          <Menu.Item key="1">Crown Moulding</Menu.Item>
          <Menu.Item key="2">Trim Moulding</Menu.Item>
          <Menu.Item key="3">Ceiling Moulding</Menu.Item>
          <Menu.Item key="4">Wall Moulding</Menu.Item>
          <Menu.Item key="5">Doorway Moulding</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><span>Fireplace Mantels</span></span>}>
          <Menu.Item key="5">Entire Wall Mantels</Menu.Item>
          <Menu.Item key="6">Half-Wall Mantels</Menu.Item>
        </SubMenu>
       <SubMenu key="sub4" title={<span><span>Lighting</span></span>}>
          <Menu.Item key="9">Wall Light Fixture Moulding</Menu.Item>
          <Menu.Item key="10">Ceiling Light Fixture Moulding</Menu.Item>
        </SubMenu>
      </Menu>
     </div>
    );
  }
}

export default Sider;