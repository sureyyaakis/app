<template>
  <div>
    <h1>My To-Do List</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a task">
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: ""
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>
