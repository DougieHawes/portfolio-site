// import dependencies
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import components
import { Navlink1 } from "../../utils/links";

// redux
import { logout, reset } from "../../../redux/auth/authReducer";

// import components
// utils
import PrivateRoute from "../../utils/PrivateRoute.js";

// import styles
import "./style.min.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const content = (
    <div className="dashboard">
      <Navlink1 text="ADD-BLOG" link="/newblog" />
      <Navlink1 text="ADD-SKILL" link="/newskill" />
      <Navlink1 text="ADD-WORK" link="/newwork" />
      <Navlink1 text="UPDATE-PROFILE" link="/updateprofile" />
      <div onClick={onLogout}>LOGOUT</div>
    </div>
  );

  return <PrivateRoute content={content} title="Dashboard" />;
};

export default Dashboard;
