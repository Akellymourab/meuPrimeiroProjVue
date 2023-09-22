<script>
import TaskList from './components/TaskList.vue';

export default {
    components: {
        TaskList
        
    }
};
</script>

<template>
    <div>
        <task-list></task-list>
    </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>