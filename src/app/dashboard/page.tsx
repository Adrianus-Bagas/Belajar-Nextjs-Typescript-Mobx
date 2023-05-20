"use client";

import loginStore from "@/store/LoginStore";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const Logout = () => {
    loginStore.logout();
    router.push(loginStore.authData.route);
  };
  return (
    <>
      <h1 className="text-center">Halo {loginStore.authData.username}</h1>
      <div className="flex justify-center">
        <img src={loginStore.authData.image} alt="" />
      </div>
      <button onClick={() => Logout()}>Keluar</button>
    </>
  );
}

export default observer(Home);
