<template>
  <q-page>
    <q-page-container>
      <q-card>

    <q-btn @click="openAddBabyModal" label="Adicionar Bebê" color="primary" />

    <!-- Modal para adicionar bebê -->
    <q-dialog v-model="showAddBabyModal" @hide="resetForm">
      <q-card style="width: 50%; height: 65%;">
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input v-model="nome" label="Nome" />
            <q-select v-model="sexo" :options="sexOptions" label="Sexo" />
            <q-input
              v-model="dataNascimento"
              label="Mês/Ano de Nascimento"
              mask="MM/YYYY"
              emit-value
              format="MM/YYYY"
              :append-icon="calendarIcon"
              @click:append="openCalendar"
            />
            <q-input v-model="peso" label="Peso" />
            <q-input v-model="nomeMae" label="Nome da Mãe" />
            <q-input v-model="contacto" label="Contacto" />
            <q-input v-model="morada" label="Morada" /><br>

            <q-btn type="submit" label="Registrar" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

        <q-card-section>
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

      columns: [
        { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
        { name: 'nome', label: 'Nome do bebe', align: 'left', field: 'nome', sortable: true },
        { name: 'sexo', label: 'Sexo', align: 'left', field: 'tipo', sortable: true },
        { name: 'mes/ano', label: 'Mes/Ano nascimento', align: 'left', field: 'mes/ano' },
        { name: 'mae', label: 'Nome da mae', align: 'left', field: 'mae' },
        { name: 'contacto', label: 'Contacto', align: 'left', field: 'contacto' },
        { name: 'morada', label: 'Morada', align: 'left', field: 'morada' },
        { name: 'acao', label: 'Ação', align: 'left', field: 'acao' },
      ],

      showAddBabyModal: false,
      nome: '',
      sexo: '',
      dataNascimento: '',
      peso: '',
      nomeMae: '',
      contacto: '',
      morada: '',
      sexOptions: ['Masculino', 'Feminino'],
      calendarIcon: 'event',
    };
  },
  methods: {
    abrirModalCadastro() {
      this.$q.dialog({
        component: import('pages/CadastroBebe.vue'),
      });
    },

    openAddBabyModal() {
      this.showAddBabyModal = true;
    },
    openCalendar() {
      console.log('Abrir calendário');
    },
    resetForm() {
      this.showAddBabyModal = false;
      // Resetar os campos do formulário
      this.nome = '';
      this.sexo = '';
      this.dataNascimento = '';
      this.peso = '';
      this.nomeMae = '';
      this.contacto = '';
      this.morada = '';
    },
    submitForm() {
      // Aqui você pode enviar os dados para um servidor ou fazer o que for necessário.
      console.log('Formulário submetido com sucesso!');
      this.resetForm();
    },
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui se necessário */
</style>
