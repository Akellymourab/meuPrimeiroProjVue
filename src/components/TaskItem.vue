<template>
    <li :class="{ completed: completed }" @click="toggleCompleted">
        {{ tasks.text }}
        <button @click="deleteTask">Excluir</button>
    </li>
</template>

<script>
export default {
    props: {
        tasks: Object
    },
    data() {
      return {
        completed: this.tasks && this.tasks.completed ? this.tasks.completed : false,
      };
    },
    methods: {
    toggleCompleted() {
      this.completed = !this.completed; 
    },
    deleteTask() {
      this.$emit('deleteTask');
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #777;
}
</style>