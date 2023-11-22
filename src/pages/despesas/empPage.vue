<template>
<q-page padding>
  <h3>Emprestimos</h3>
  <q-form @submit="takeloan">
    <q-input v-model="loanAmount" label="Valor do Empréstimo" type="number" />
    <q-input v-model="interestRate" label="Taxa de Juro (%)" type="number" />
    <q-input v-model="loanTerm" label="Prazo em Meses" type="number" />
    <q-btn label="Solicitar Emprestimo" type="submit" color="primary" />


  </q-form>
</q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
const loanAmount = ref(0);
const interestRate = ref(0);
const loanTerm = ref(0);
// const categories = ["Alimentação", "Transporte", "Moradia", "Lazer", "Outros"];

const takeloan = () =>{
  //Enviar dados da despesa ao servior
  //realizar calculos necessario

  //Obter valores de campos
  const principal = parseFloat(loanAmount.value);
  const rate = parseFloat(interestRate.value)/100;
  const term = parseInt(loanTerm);

  //Calcular o valor do emprestimo com juros
  const interest = principal * rate * term;
  const totalLoan = principal + interest;

  // calculando valor do emprestimo
  console.log("Valor do Emprestimo com Juros: R$" + totalLoan);

  //Reinicializar os campos
  loanAmount.value = 0;
  interestRate.value = 0;
  loanTerm.value = 0;
};

return {
  loanAmount,
  interestRate,
  loanTerm,
  takeloan,
};
  },
};
</script>
