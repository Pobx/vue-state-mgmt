<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input type="text" name="flavor" @input="changed" />
  </div>
</template>

<script>
export default {
  methods: {
    changed: function (event) {
      const data = event.target.value;
      console.log(data);

      this.$store.commit('change', data);
    },
  },
};
</script>