<template>
  <q-page>
    <!-- Seção de criação de grupo -->
    <q-form @submit="createGroup">
      <q-input v-model="groupName" label="Nome do Grupo" />
      <q-btn type="submit" label="Criar Grupo" />
    </q-form>

    <!-- Tabela de grupos -->
    <q-list bordered v-if="groups.length > 0">
      <q-card v-for="(group, index) in groups" :key="index">
        <q-item-section>
          <q-item-label>{{ group.name }}</q-item-label>
        </q-item-section>
        <q-card-section horizontal class="q-mb-md">
          <q-btn flat label="Add Membro" @click="openAddMemberModal(index)" />
          <q-btn flat label="View Membros" @click="toggleShowMembers(index)" />
          <q-btn flat label="Excluir Grupo" color="negative" @click="deleteGroup(index)" />
          <q-btn flat label="Editar Grupo" @click="editGroup(index)" />
        </q-card-section>

        <!-- Seção para exibir membros do grupo -->
        <q-table
          v-if="showMembers[index] && group.members.length > 0"
          :rows="group.members.map((member, memIndex) => ({ name: member.name }))"
          :columns="columns"
        >
          <template v-slot:body-cell(name)="props">
            {{ props.row.name }}
          </template>
        </q-table>
      </q-card>
    </q-list>

    <!-- Modal para adicionar membros -->
    <q-dialog v-model="addMemberModal">
      <q-card>
        <q-card-section>
          <q-input v-model="selectedMember" label="Selecionar Membro" :options="memberOptions" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn icon="cancel" flat @click="closeAddMemberModal" />
          <q-btn icon="add" flat color="primary" @click="addMemberToGroup" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: 'Nome do Membro',
          align: 'left',
          field: 'name',
          sortable: true,
        },
      ],
      groupName: '',
      groups: [],
      addMemberModal: false,
      selectedGroupIndex: null,
      selectedMember: '',
      members: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'],
      showMembers: [], // Array para rastrear se a tabela de membros deve ser exibida para cada grupo
    };
  },
  computed: {
    memberOptions() {
      const selectedGroup = this.groups[this.selectedGroupIndex];
      const usedMembers = selectedGroup ? selectedGroup.members : [];
      return this.members.filter((member) => !usedMembers.includes(member)).map((member) => ({
        label: member,
        value: member,
      }));
    },
  },
  methods: {
    createGroup() {
      const groupIndex = this.groups.findIndex((group) => group.name === this.groupName);

      if (groupIndex === -1) {
        // Grupo não existe, criar um novo
        this.groups.push({
          name: this.groupName,
          members: [],
        });

        // Inicializar a propriedade showMembers para o novo grupo
        this.showMembers.push(false);

        // Limpar campos
        this.groupName = '';
      } else {
        // Grupo já existe, exibir mensagem de erro ou realizar outra ação
        console.error('O grupo já existe!');
      }
    },
    openAddMemberModal(index) {
      this.selectedGroupIndex = index;
      this.addMemberModal = true;
    },
    closeAddMemberModal() {
      this.addMemberModal = false;
      this.selectedGroupIndex = null;
      this.selectedMember = '';
    },
    addMemberToGroup() {
      const selectedGroup = this.groups[this.selectedGroupIndex];

      if (selectedGroup && this.selectedMember) {
        const currentDateTime = new Date().toLocaleString();
        selectedGroup.members.push({
          name: this.selectedMember,
          dateTime: currentDateTime,
        });
        this.$set(this.groups, this.selectedGroupIndex, selectedGroup);
        this.closeAddMemberModal();
      }
    },
    deleteGroup(index) {
      if (index >= 0 && index < this.groups.length) {
        this.groups.splice(index, 1);
        this.showMembers.splice(index, 1); // Remover a propriedade showMembers para o grupo excluído
        this.selectedGroupIndex = null;
      }
    },
    editGroup(index) {
      // Implemente a lógica de edição do grupo conforme necessário
      // Pode abrir um modal de edição, por exemplo
      console.log('Editar Grupo', index);
    },
    toggleShowMembers(index) {
      // Toggle para ativar/desativar a visualização de membros para um grupo específico
      this.$set(this.showMembers, index, !this.showMembers[index]);
    },
  },
};
</script>
