<template>
    <div class="login">
        <h1 class="title">Accede a tu cuenta de usuario</h1>
        <form class="form" @submit.prevent="getToken">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input v-model.lazy="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input v-model.lazy="password" type="password" class="form-control" id="exampleInputPassword1" required>
        </div>
        <button type="submit" class="btn btn-primary">Acceder</button>
        </form>
    </div> 
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuthUser from "../composables/useAuthUser";

export default defineComponent ({
  setup() {
      const { fetchToken } = useAuthUser();
      let email = ref("");
      let password = ref("");
      const getToken = () => {
          fetchToken({email: email.value, password: password.value});
      }
      return{
          email,
          password,
          getToken
      }
  }
});
</script>

<style scoped>
.login-bg {
    background-color: #ffe9e9;
}
.title {
  font-size:2rem;
  margin: 2rem;
  font-style:inherit;
  text-align: center;
  color: #292929;
}
.form {
margin: 3rem auto;
display: flex;
flex-direction: column;
justify-content: center;
width: 20%;
min-width: 350px;
max-width: 100%;
background: #f9f9f9;
border-radius: 25px;
padding: 40px;
box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
button{
border: #30ffba;
background: #30ffba;
color: #06132b;
border-radius: 30px;
padding: 10px;
}
button:a {
cursor: pointer;
background-image: linear-gradient(80deg, #2be5a7, rgb(114, 213, 155));
}
button:hover {
cursor: pointer;
background-image: linear-gradient(80deg, rgb(43, 229, 167), rgb(114, 213, 155));
color: #06132b;
}
.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #30ffba;
    --bs-btn-border-color: #30ffba;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #30ffba;
}
</style>