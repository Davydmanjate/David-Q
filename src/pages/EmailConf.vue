<template>
  <q-page padding>
<p>
  Obrigado por se Registar
</p>
<p>
  Por favor continue para terminar o registo: {{ $route.query.email }}
</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConf'
})
</script>
