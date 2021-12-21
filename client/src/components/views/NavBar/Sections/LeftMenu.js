import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="template">
        <a href="#template">템플릿</a>
      </Menu.Item>
      <Menu.Item key="ex">
        <a href="#ex">사용 예</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;