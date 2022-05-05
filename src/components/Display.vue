<template>
  <div>
    <p>You chose {{ $store.getters.flavor }}</p>
    <hr />
    <p>Counter: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["evenOrOdd"]),
};
</script>