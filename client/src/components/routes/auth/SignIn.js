// import dependencies
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux
import { login, reset } from "../../../redux/auth/authReducer";

// import components
// utils
import PublicRoute from "../../utils/PublicRoute";
import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const content = (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Input1 label="email" onChange={onChange} value={email} />
        <Input1
          label="password"
          onChange={onChange}
          type="password"
          value={password}
        />
        <Button1 text="ENTER" />
        {isLoading ? <div>LOADING...</div> : ""}
      </form>
    </>
  );

  return <PublicRoute content={content} />;
};

export default SignIn;
