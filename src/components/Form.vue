<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input type="text" name="flavor" @input="changed" />

    <br />

    <button type="button" @click="increment">+</button>&nbsp;
    <button type="button" @click="decrement">-</button>&nbsp;
    <button type="button" @click="incrementIfOdd">Increment if odd</button>&nbsp;
    <button type="button" @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    changed: function (event) {
      const data = event.target.value;
      console.log(data);

      this.$store.commit("change", data);
    },
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync",
    ]),
  },
};
</script>