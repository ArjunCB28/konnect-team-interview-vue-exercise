<template>
  <input
    id="search-services"
    class="k-input"
    type="search"
    placeholder="Search"
    :model="search"
    @input="$emit('change', $event.target.value)"
  />
</template>

<script>
import Vue from "vue";

export default Vue.component("InputBox", {
  model: {
    event: "change"
  },
  props: {
    search: String
  }
});
</script>

<style lang="scss">
input {
  margin-left: 10px;
}
</style>
