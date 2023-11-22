<template>
<q-page padding>
  <q-form @submit="addExpense">
    <q-input v-model="amount" label="Valor" type="number" />
    <q-select v-model="category" :options="categories" label="Categoria" />
    <q-input v-model="description" label="Descrição" />
    <q-btn label="Adicionar" type="submit" color="primary" />

  </q-form>
</q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
const amount = ref(0);
const category = ref('');
const description = ref('');
const categories = ["Amigos", "Familia", "Colegas", "Visinhos", "Outros"];

const addExpense = () =>{
  //Enviar dados da despesa ao servior
};

return {
  amount,
  category,
  description,
  categories,
  addExpense,
};
  },
};
</script>
