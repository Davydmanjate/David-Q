<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">


      <q-card
        class="my-card text-white position-center;"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section class="section-1">
          <div class="col-12 text-h6 text-center text-h6">RECUPERAR SENHA</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section class="section-2">
          <div class="q-pa-md" style="height: 200px; width: 400px;">
            <q-form class="row justify-center" @submit.prevent="">
              <div class="col-sm-12 col-sm-12 col-xs-12 g-gutter-y-md">

                <q-input
                  filled
                  type="email"
                  v-model="email"
                  placeholder="exemplo@email.com"
                  label="E-mail"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo E-mail obrigatório',
                    (val) => (val > 0 && val < 100) || 'Campo obrigotório',
                  ]"
                />

                <div>
                  <q-btn
                    class="full-width"
                    rounded
                    label="Continuar"
                    type="submit"
                    color="warning"
                  /><br /><br />

                  <q-btn
                    flat
                    color="primary"
                    label="Voltar" style="margin:0 auto; display: block;" to="/login" />

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
      email: ''
    })

    return {
      form,

    }
  },
});
</script>

<style>
.my-card{
  margin-bottom: 200px;
}
.section-1{
  /* background-color: #b6b926; */
}
.my-card{
  width: 420px;
  height: 300px;
  margin: 0 auto;
}
</style>
