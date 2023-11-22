<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>

    </q-header>

    <q-page-container>
      <keep-alive>
      <router-view />
    </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginLayout',
  components: {
  },

  setup () {
    return {

    }
  },

})
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>
