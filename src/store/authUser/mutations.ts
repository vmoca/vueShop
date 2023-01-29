import { AuthUser } from "@/models/authUser";
import { Token } from "@/models/token";
import { MutationTree } from "vuex";
import { IAuthUserState } from "./state";

const mutations: MutationTree<IAuthUserState> = {
    setToken(state: IAuthUserState, token: Token) {
        state.token = token;
    },
    setAuthUser(state: IAuthUserState, authUser: AuthUser) {
        state.authUser = authUser;
    },
    setIsLoading(state: IAuthUserState, value: boolean){
        state.isLoading = value;
    },
    deleteToken(state: IAuthUserState) {
        state.token = null;
    },
}

export default mutations;