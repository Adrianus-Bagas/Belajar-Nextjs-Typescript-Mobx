import { configure, makeAutoObservable } from "mobx";

configure({
  enforceActions: "never",
});

interface ILogin {
  id: string;
  username: string;
  image: string;
  token: string;
  route: string;
}

class LoginStore {
  initState: ILogin = {
    id: "",
    username: "",
    image: "",
    token: "",
    route: "/",
  };
  authData: ILogin = this.initState;

  logout() {
    this.authData = this.initState;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const loginStore = new LoginStore();
export default loginStore;
