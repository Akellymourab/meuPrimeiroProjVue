<template>
    <div>
        <h2>Lista de tarefas</h2>
        <ul>
            <task-item
            v-for="(tasks, index) in tasks"
            :key="index"
            :tasks="tasks"
            @deleteTask="deleteTask(index)"
            ></task-item>
        </ul>
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Adicionar nova tarefa"/>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
    components: {
        TaskItem
    },
    data() {
        return{
            tasks: [],
            newTask: '',
            completedTasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    },
    filters: {
        capitalize(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
    },
    computed: {
        completedTasksCount() {
            return this.tasks.filter(task => task.complete).length;
        }
    },
    watch: {
        completedTasksCount(newCount) {
            if (newCount === this.tasks.length) {
                alert('Todas as tarefas foram concluídas!');
            }
        }
    },   
};
</script>
