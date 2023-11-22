<template>
  <q-page padding>
    <h4>Membros</h4>

    <!-- Botão Adicionar Membro -->
    <q-btn @click="openAddMembroModal" color="positive"><q-icon name="add"/></q-btn><br><br>

    <!-- Tabela de Membros -->
    <q-table :rows="tableRows" :columns="tableColumns" :rows-per-page-options="[5, 10, 20]" row-key="id">
      <template v-slot:body-cell-acao="props">
        <q-td :props="props">
          <q-btn @click="editMembro(props.row)" flat color="primary" icon="edit"></q-btn>
          <q-btn @click="confirmarExclusao(props.row)" flat color="negative" icon="delete"></q-btn>
        </q-td>
      </template>

      <!-- Configuração das colunas -->
      <q-tr :props="props">
        <q-td v-for="col in props.cols" :key="col.name">
          {{ props.row[col.name] }}
        </q-td>
      </q-tr>
    </q-table>

    <!-- Modal para Adicionar Membro -->
    <q-dialog v-model="addMembroModal" position="top">
      <q-card>
        <q-card-section>
          <q-text>Adicionar Membros</q-text>
          <q-input v-model="novoMembro.nome" label="Nome" :rules="[val => !!val || 'Campo obrigatório']" />
          <q-input v-model="novoMembro.telefone" label="Telefone" :rules="[val => !!val || 'Campo obrigatório']" />
          <q-input v-model="novoMembro.morada" label="Morada" :rules="[val => !!val || 'Campo obrigatório']" /><br>
          <q-btn icon="cancel" color="warning" @click="cancelarAdicao" />
          <q-btn icon="save" type="submit" color="positive" position="right" @click="adicionarMembro" />
        </q-card-section>
      </q-card>
    </q-dialog>

     <!-- Modal para edição de membro -->
     <q-dialog v-model="modalEdicao">
      <q-card>
        <q-card-section>
          <q-input v-model="membroEditado.name" label="Nome" />
          <q-input v-model="membroEditado.telefone" label="Telefone" />
          <q-input v-model="membroEditado.morada" label="Morada" /><br>
          <q-btn icon="save" type="submit" color="primary" @click="salvarEdicao" />
          <q-btn icon="cancel" type="submit" color="warning" @click="cancelarEdicao" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Modal para confirmação de exclusão -->
    <q-dialog v-model="modalExclusao">
      <q-card>
        <q-card-section>
          <p>Confirmas a exclusão do Membro?</p>
        </q-card-section>
        <q-card-section>
          <q-btn @click="excluirMembro" color="negative" icon="check" class="q-mr-md"/>
          <q-btn @click="cancelarExclusao" icon="cancel" class="btn-right"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from 'axios';

export default defineComponent({
  setup() {
    const tableColumns = [
      {
        name: 'id',
        label: 'Id',
        align: 'center',
        field: 'id'
      },
      {
        name: 'nome',
        label: 'Nome',
        align: 'left',
        field: 'name'
      },
      {
        name: 'telefone',
        label: 'Telefone',
        align: 'center',
        field: 'telefone'
      },
      {
        name: 'morada',
        label: 'Morada',
        align: 'left',
        field: 'morada'
      },
      {
        name: 'acao',
        label: 'Ação',
        align: 'center',
      },
    ];

    const tableRows = ref([]);
    const addMembroModal = ref(false);
    const modalExclusao = ref(false);
    const modalEdicao = ref(false);
    const novoMembro = ref({});
    const membroEditado = ref({ id: null, nome: "", telefone: "", morada: "" });
    let membroParaExcluir = null;

    const openAddMembroModal = () => {
      addMembroModal.value = true;
    };

    const adicionarMembro = () => {
      axios.post('http://localhost:3000/api/todos', {
        nome:novoMembro.value})
        .then(response => {
          console.log('Membro adicionado com sucesso:', response.data);
          tableRows.value.push(response.data);
        })
        .catch(error => {
          console.error('Erro ao adicionar membro:', error);
        })
        .finally(() => {
          novoMembro.value = {};
          addMembroModal.value = false;
        });
    };

    const cancelarAdicao = () => {
      novoMembro.value = {};
      addMembroModal.value = false;
    };

    const editMembro = (membro) => {
      membroEditado.value = { ...membro };
      modalEdicao.value = true;
    };
    const cancelarEdicao = () => {
      modalEdicao.value = false;
      membroEditado.value = {};
    };

    const salvarEdicao = () => {
      if (membroEditado.value.id !== null) {
      const { id } = membroEditado.value;
      axios.put(`http://localhost:3000/api/todos/${id}`, membroEditado.value)
        .then(() => {
          carregarDados();
          modalEdicao.value = false;
          membroEditado.value = {};
        })
        .catch(error => {
          console.error('Erro ao salvar edição:', error);
        });
      }
    };

    const confirmarExclusao = (membro) => {
      membroParaExcluir = membro;
      modalExclusao.value = true;
    };

    const excluirMembro = () => {
      if (membroParaExcluir) {
        const { id } = membroParaExcluir;
        axios.delete(`http://localhost:3000/api/todos/${id}`)
          .then(() => {
            tableRows.value = tableRows.value.filter(m => m.id !== id);
          })
          .catch(error => {
            console.error('Erro ao excluir membro:', error);
          })
          .finally(() => {
            membroParaExcluir = null;
            modalExclusao.value = false;
          });
      }
    };

    const cancelarExclusao = () => {
      membroParaExcluir = null;
      modalExclusao.value = false;
    };

    const carregarDados = () => {
      axios.get('http://localhost:3000/api/todos')
        .then(response => {
          tableRows.value = response.data;
        })
        .catch(error => {
          console.error('Error fetching Membros:', error);
        });
    };

    carregarDados();

    return {
      tableRows,
      tableColumns,
      addMembroModal,
      modalExclusao,
      modalEdicao,
      novoMembro,
      membroEditado,
      openAddMembroModal,
      adicionarMembro,
      editMembro,
      confirmarExclusao,
      excluirMembro,
      cancelarExclusao,
      salvarEdicao,
      cancelarAdicao,
      cancelarEdicao,
    };
  },
});
</script>


<style scoped>
.botoes-container {
  display: flex;
  justify-content: space-between;
}
.btn-right{
  margin-right: auto;
}
.btn-left{
  margin-left: auto;
}
</style>
