import { createStore } from "vuex";
import productsModule from "./products";
import authUserModule from "./authUser";

export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting: "Bienvenidos a la tienda online"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule,
    authUser: authUserModule
  }
})