<template>
  <q-page padding>
    <h4>Membros</h4>

    <!-- Botão Adicionar Membro -->
    <q-btn @click="openAddMembroModal" color="positive">Adicionar Membro</q-btn>

    <!-- Tabela de Membros -->
    <q-table :rows="membros" :rows-per-page-options="[5, 10, 20]" row-key="id">
      <!-- ... (código da tabela) ... -->
    </q-table>

    <!-- Modal para Adicionar Membro -->
    <q-dialog v-model="addMembroModal" position="top">
      <q-card>
        <q-card-section>
          <q-form @submit="addMembro">
            <q-input v-model="novoMembro.nome" label="Nome" />
            <q-input v-model="novoMembro.telefone" label="Telefone" />
            <q-input v-model="novoMembro.morada" label="Morada" />
            <q-btn label="Adicionar" type="submit" color="positive" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const membros = ref([]);
    const addMembroModal = ref(false);
    const novoMembro = ref({ nome: "", telefone: "", morada: "" });

    const openAddMembroModal = () => {
      addMembroModal.value = true;
    };

    const addMembro = () => {
      // Valide os dados, adicione o novo membro à lista e feche o modal
      membros.value.push({ id: membros.value.length + 1, ...novoMembro.value });
      addMembroModal.value = false;
      // Limpe os campos do formulário
      novoMembro.value = { nome: "", telefone: "", morada: "" };
    };

    // Resto do código...

    return {
      membros,
      addMembroModal,
      novoMembro,
      openAddMembroModal,
      addMembro,
      // Resto das variáveis e métodos...
    };
  },
};
</script>
