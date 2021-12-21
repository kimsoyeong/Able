import { Menu, Button } from 'antd';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../_actions/user_action';


function RightMenu(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const user = useSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logoutUser())
        .then(response => {
            if(response.payload.success) {
                navigate('/login');
            } else {
                alert('Log Out Failed...');
            }
        });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <ul>
        <li><Button className="btn_login" type="primary" size="small" href="/login">로그인</Button></li>
        <li>
          <Button 
            id="btn_register"
            type="primary" 
            href="/register"
          >
            시작하기
          </Button>
        </li>
      </ul>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="#mypage">마이페이지</a>
        </Menu.Item>
        <Button
            type="primary" 
            style={{ fontSize: "12px" }}
            size="small"
            onClick={logoutHandler}
          >
            로그아웃
          </Button>
        {/* <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default RightMenu;