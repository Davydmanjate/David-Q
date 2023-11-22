<template>
<div class="q-pa-md q-gutter-sm">
    <q-btn icon="exit_to_app" color="primary" @click="abrirModal" />

    <q-dialog v-model="mostrarModal" prevent-close>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="exit_to_app" color="primary" text-color="white" />
          <span class="q-ml-sm">Tens certeza que deseja sair?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Não" color="secundary" v-close-popup @click="fecharModal" />
          <q-btn flat label="Sim" color="primary" v-close-popup @click="confirmarAcao" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>


  <!-- Notify inicio -->
import { Notfy } from 'quasar';
this.&q.notify ({
  color: 'positive/negative/info',
  position: 'top',
  message: 'Logado com sucesso'
});

  <!-- Notify fim -->

</template>

<script>
import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup () {
    const mostrarModal = ref(false);
    const route = useRoute();
    const router = useRouter();

    const abrirModal = () => {
      mostrarModal.value = true;
    };

    const fecharModal = () => {
      mostrarModal.value = false;
      router.puh ({name: 'login'});
    };
    return {
      mostrarModal,
      abrirModal,
      fecharModal
    };
  }
};
</script>

<style>

</style>
