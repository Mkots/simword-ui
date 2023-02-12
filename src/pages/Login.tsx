import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import Card from "../components/common/Card";
import { AuthContext } from "../contexts/AuthContext";

interface LoginFields {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFields>();
  const { state, login } = useContext(AuthContext);
  const { isLoginPending, loginError, isLoggedIn } = state;

  const onSubmit = (data: LoginFields) => {
    login(data.login, data.password);
  };

  return (
    <div className="flex items-center justify-center mx-auto px-4 w-full h-screen">
      <Card testId="Login" title="Login">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control text-black"
        >
          <label className="label" htmlFor="Login">
            <span className="label-text">Login</span>
            <input
              type="text"
              placeholder="Login"
              {...register("login")}
              id="Login"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="label" htmlFor="Password">
            <span className="label-text">Password</span>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              id="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <input
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-3"
          />
          {isLoginPending && <div>Please wait...</div>}
          {isLoggedIn && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </form>
      </Card>
    </div>
  );
};

export default Login;
