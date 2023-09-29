import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addUser } from "../redux/user/action";
import { useState } from "react";

function UserForm(props) {
  console.log("props", props);
  let [data, setData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("----->", data);
    props.dispatch(addUser(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">EMAIL : </label>
      <input id="email" {...register("email")} />
      <label htmlFor="password">PASSWORD : </label>
      <input id="password" {...register("password")} />
      <input type="submit" />
    </form>
  );
}

const toDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
// null because 1st argument is state
export default connect(null, toDispatchToProps)(UserForm);
