<template>
  <q-page padding>
    <br /><br /><br/>

    <q-card dark bordered class="bg-blue-9 my-card">
      <q-card-section
        style="display: flex; justify-content: center; align-items: center">
        <div
          class="q-avatar absolute-center shadow-20"
          style="margin-top: -35px; font-size: 92px"
          size="16px">
          <img src="public/img/Logo.png" />
        </div>
        <br/>
      </q-card-section>
      <div class="col-12 text-h4 text-center text-h4">LOGIN</div>

      <q-separator class="linha-grossa" dark inset />
      <div class="q-pa-md" style="max-width: 400px">
        <q-form class="q-gutter-md" @submit.prevent="handleLogin">
          <q-input
            filled
            v-model="email"
            label="E-mail"
            placeholder="Digite seu Email"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Email Inválido']" />

          <q-input
            filled
            type="password"
            v-model="senha"
            label="Senha"
            placeholder="Digite sua Senha"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Introduz a senha',
              (val) => (val > 0 && val < 100) || 'Senha Incorrecta',
            ]"/>
        </q-form>

        <div>
          <q-btn
            class="full-width"
            outline
            rounded
            color="warning"
            label="Entrar"
            @click="fazerLogin"/><br /><br />

          <q-btn
            class="full-width"
            flat
            color="warning"
            label="Esquecer a Senha clique aqui"
            to="/pass"/>
        </div>
      </div>
    </q-card>
    <br />
    <q-card bordered class="bg-blue-9 my-card1">
      <div class="q-pa-md" style="max-width: 400px">
        <div class="col-12 text-h5 text-center text-h5">
          Crie sua Conta aqui
        </div>
        <br />

        <div>
          <q-btn
            label="Registar"
            color="warning"
            class="full-width"
            outline
            to="/register"/><br /><br />

          <q-separator class="linha-grossa" dark inset />
          <q-toolbar>
            <q-toolbar-title class="toll-title">manjatedavid3@gmail.com --- David's App --- @UNISAVE,
              2023</q-toolbar-title>
          </q-toolbar>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import { Notify } from "quasar";

export default {
  setup() {
    const email = ref('');
    const senha = ref('');

    const usuarioTeste = {
      email: 'david@gmail.com',
      senha: '12345',
    };
    const router = useRouter(); 
    const fazerLogin = () => {
      if (
        email.value === usuarioTeste.email &&
        senha.value === usuarioTeste.senha
      ) {
        Notify.create({
          color: 'positive',
          position: 'top',
          message: 'Logado com Sucesso...',
        });

        router.push({ name: "index" });
      } else {
        Notify.create({
          color: "info",
          position: "top",
          message: "Falha dados incorrecto!",
        });
      }
    };

    //   const fazerLogin = () =>{
    //     const loginYes=true;
    //     if(loginYes){
    //       Notify.create({
    //         color: 'positive',
    // position: 'top',
    // message: 'Logado com sucesso'
    //       });
    //       this.$router.push({ name: 'index'});
    //     } else {
    //       Notify.create({
    //         color: 'info',
    // position: 'top',
    // message: 'Falha dados incorrecto'
    //       });
    //     }
    //   };
    return {
      email,
      senha,
      fazerLogin,
    };
  },
};
</script>

<style>
.rouned-button {
  width: 100%;
  border-radius: 50px;
}

.linha-grossa {
  border-top: 1px solid;
}
.toll-title {
  font-size: 10px;
  text-align: center;
}
.my-card {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
.my-card1 {
  width: 400px;
  height: 200px;
  margin: 0 auto;
}
.label{
  /* color: white; */
}
</style>
