<template>
  <q-page padding>
    <h4>Usuários</h4>

      <q-btn @click="openAddMembroModal" to="/register" color="positive">Adicionar Usuários</q-btn><br><br>

    <q-table :rows="users" :rows-per-page-options="[5, 10, 20]" row-key="id">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td :props="props" auto-width> {{ props.row.id }} </q-td>
          <q-td :props="props" auto-width> {{ props.row.name }} </q-td>
          <q-td :props="props" auto-width> {{ props.row.email }} </q-td>
          <q-td :props="props" auto-width> {{ props.row.password }} </q-td>
        </q-tr>
      </template>
    </q-table>

  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const users = ref([
      { id: 1, name: 'John Doe', email: 'john@example.com', password: '********' },
      // Add more user data as needed
    ]);

    const openAddMembroModal = () => {
      // Implement logic to open the modal for adding users
    };

    return {
      users,
      openAddMembroModal,
    };
  },
};
</script>

