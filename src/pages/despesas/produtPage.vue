<template>
<q-page padding>
  <div class="q-pa-md">
    <q-table
      title="Meus Produtos"
      :rows="produt"
      :columns="columns"
      row-key="uid"
    >
    <template v-slot:top-right>
      <q-btn label="Adicionar" icon="add" color="red" :to="{ name: 'add' }" />
    </template>
    </q-table>
  </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

const columns = [
      {
        name: 'uid',
        required: true,
        label: 'Id',
        align: 'left',
        field: row => row.uid,
        sortable: true
      },
      {
        name: 'descricao',
        required: true,
        label: 'Descricao',
        align: 'left',
        field: row => row.descricao,
        sortable: true
      },
      {
        name: 'valor',
        required: true,
        label: 'Valor',
        align: 'left',
        field: row => row.valor,
        sortable: true
      }

    ]

const produt = [
  {
    uid: '01',
    descricao: 'Banana',
    valor: '50.00'
  }
]

export default defineComponent ({
  name: 'produtPage',

  setup () {
    return {
      columns,
      produt
    }
  }
})
</script>
