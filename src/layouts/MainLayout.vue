<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="my-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>

      <!-- botao de log out -->
      <div class=" container1 q-pa-md q-gutter-sm">
    <q-btn  flat>
    <q-icon name="exit_to_app" size="60px" class="my-icon" @click="abrirModal" /> </q-btn>

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
      <!-- botao de log out -->

      <div class="q-px q-pt-xl q-mb-mb">
        <div class="text-h4">Davyd's App</div>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </div>
      <q-img
      src="public/img/mountazu.png"
      class="header-image absolute-top" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #dddddd">
          <q-list padding>

            <q-item to="/index" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item to="/despesa" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Categorias
              </q-item-section>
            </q-item>

            <q-item to="/membro" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                Membros
              </q-item-section>
            </q-item>

            <q-item to="/user" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>

              <q-item-section>
                Usuários
              </q-item-section>
            </q-item>

            <q-item to="/econo" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>
                Configurações
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="public/img/mountazu.png" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="public/img/Logo.png">
            </q-avatar>
            <div class="text-weight-bold">David Mandlate</div>
            <div>@Davydmanjate.github</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
    </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import { date, Notify } from 'quasar';

const linksList = [
]

export default defineComponent({
  name: 'MainLayout',
  components: {
  },

  setup () {
    const mostrarModal = ref(false);
    const router = useRouter();
    const modalOpen = ref(false);

    const openModal = () => {
      modalOpen.value = true;
    };
    const fecharModal = () => {
      modalOpen.value = false;
      Notify.create({
        color: 'info',
        position: 'top',
        message: 'Ação cancelada!',
      });
    };
    const confirmarAcao = () => {
      modalOpen.value = false;
      Notify.create({
        color: 'positive',
        position: 'top',
        message: 'Deslogado com sucesso!',
      });
      router.push({ name: "login" });
    };

    const abrirModal = () => {
      mostrarModal.value = true;
    };

    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      mostrarModal,
      abrirModal,
      fecharModal,
      confirmarAcao
    };

  },

  computed: {
      todaysDate() {
        let timeStamp = Date.now()
        return date.formatDate(timeStamp, 'dddd: YYYY-MMMM-DD HH:mm')
      }
    }
})
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
.container1{
  display: flex;
  justify-content: flex-end;
}
.my-icon{
  color: white;
}
.my-header{
  hei: 50%;
}
.text-h4{
  margin-bottom: 10px;
  margin-top: -120px;
  margin-left: 10px;
}
.text-subtitle{
  margin-left: 10px;
}
</style>
