<template>
  <q-page padding>
    <div class="bg-blue-9 my-card">
      <q-card bordered
        class="my-card text-white position-center;"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="col-12 text-h6 text-center text-h6">REGISTER</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div class="q-pa-md" style="max-width: 400px">
            <q-form class="row justify-center" @submit.prevent="">
              <div class="col-sm-12 col-sm-12 col-xs-12 g-gutter-y-md">

                <q-input
                  filled
                  v-model="name"
                  label="Nome Completo"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Campo obrigotório',
                  ]"
                />

                <q-input
                  filled
                  type="email"
                  v-model="email"
                  label="E-mail"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo E-mail obrigatório',
                    (val) => (val > 0 && val < 100) || 'Campo obrigotório',
                  ]"
                />

                <q-input
                  filled
                  v-model="password"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Digite a senha',
                  ]"
                />

                <q-input
                  filled
                  v-model="confpassword"
                  label="Confirmar Password"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Digite a senha',
                  ]"
                />

                <div>
                  <q-btn
                    class="full-width"
                    rounded
                    label="Cadastrar"
                    type="submit"
                    color="primary"
                  /><br /><br />

                  <q-btn class="full-width"
                    outline
                    flat
                    color="primary"
                    label="Ja tens conta? Clique para Entrar"
                    to="/login"
                  />

                </div>
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'registerPage',

  setup() {

    const form = ref({
      name: '',
      email: '',
      password: '',
      confpassword: ''
    })

    return {
      form,

    }
  },
});
</script>

<style>
.my-card{
  width: 400px;
  height: 550px;
  margin: 0 auto;
}
</style>
