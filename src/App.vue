<template>
  <div id="app">
    <Form />
    <Display />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Display from "./components/Display.vue";

export default {
  name: "App",
  components: {
    Form,
    Display,
  },
};
</script>

<style>
</style>
