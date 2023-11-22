<template>
  <q-page>
    <q-page-container>
      <q-card>
        <q-card-section class="q-pt-none">
          <q-btn
            color="primary"
            icon="add"
            class="q-mb-md q-mr-md"
            @click="adicionarVacina"
          >
            Adicionar Vacina
          </q-btn>

          <q-table
            :rows="vacinas"
            :columns="columns"
            row-key="id"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td :props="props" auto-width>
                  {{ props.row.id }}
                </q-td>
                <q-td :props="props" auto-width>
                  {{ props.row.nome }}
                </q-td>
                <q-td :props="props" auto-width>
                  {{ props.row.tipo }}
                </q-td>
                <q-td :props="props" auto-width>
                  <q-btn icon="edit" @click="editarVacina(props.row)" />
                  <q-btn icon="delete" @click="excluirVacina(props.row)" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      vacinas: [
        { id: 1, nome: 'Vacina 1', tipo: 'Tipo A' },
        { id: 2, nome: 'Vacina 2', tipo: 'Tipo B' },
        // Adicione mais vacinas conforme necessário
      ],
      columns: [
        { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
        { name: 'nome', label: 'Nome da Vacina', align: 'left', field: 'nome', sortable: true },
        { name: 'tipo', label: 'Tipo', align: 'left', field: 'tipo', sortable: true },
        { name: 'acao', label: 'Ação', align: 'left', field: 'acao' },
      ],
    };
  },
  methods: {
    adicionarVacina() {
      // Implemente a lógica para adicionar uma nova vacina
      console.log('Adicionar nova vacina');
    },
    editarVacina(vacina) {
      // Implemente a lógica para editar a vacina
      console.log('Editar vacina:', vacina);
    },
    excluirVacina(vacina) {
      // Implemente a lógica para excluir a vacina
      console.log('Excluir vacina:', vacina);
    },
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui se necessário */
</style>
