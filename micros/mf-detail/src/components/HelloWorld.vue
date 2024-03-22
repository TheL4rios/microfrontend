<template>
  <div class="hello">
    <h1>{{ user ? "Sesion Iniciada" : "Por favor inice sesion" }}</h1>
    <h1 v-if="user">{{ user.name }}</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const user = ref(JSON.parse(localStorage.getItem("userData")));

onMounted(() => {
  console.log("asd1");
  window.addEventListener("storage", () => {
    console.log("asd2");
    user.value = JSON.parse(localStorage.getItem("userData"));
  });
});

onUnmounted(() => {
  window.removeEventListener("storage");
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
