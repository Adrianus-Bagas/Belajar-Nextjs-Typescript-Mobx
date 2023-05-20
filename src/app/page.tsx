"use client";

import { LoginAction } from "@/service/LoginService";
import loginStore from "@/store/LoginStore";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState<string>("kminchelle");
  const [password, setPassword] = useState<string>("0lelplR");
  const router = useRouter()

  const handleLogin = async (event: any) => {
    event.preventDefault();
      const res = await LoginAction({ username: username, password: password });
      const resJson = await res.json();
      const resAuthData = {
        id: resJson.id,
        username: resJson.username,
        image: resJson.image,
        token: resJson.token,
        route: "/dashboard"
      };
      loginStore.authData = resAuthData;
      router.push(loginStore.authData.route)
  };
  return (
    <>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default observer(Login);
