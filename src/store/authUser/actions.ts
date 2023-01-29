import fakePlatziApi from "@/api/fakePlatziApi";
import { AuthUser } from "@/models/authUser";
import { UserRequest } from "@/models/userRequest";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthUserState } from "./state";

const actions: ActionTree<IAuthUserState, IState> = {
    async fetchToken({commit}, body: UserRequest){
        try {
            const { data } = await fakePlatziApi.post("/auth/login", body);
            commit("setToken", data);
            localStorage.setItem("token", data.access_token);
            router.push({name: "home"});
        } catch(error: any) {
            console.error(error.message)
            alert("401 Usuario no autorizado")
        }
    },
 
    async fetchAuthUser({commit}){
        commit("setIsLoading", true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<AuthUser>>("/auth/profile");
        commit("setIsLoading", false);
        commit("setAuthUser", data);
    },

    deleteToken({commit}){
        commit("deleteToken");
        localStorage.removeItem("token");
        router.push({name: "login"});
    },
}

export default actions;