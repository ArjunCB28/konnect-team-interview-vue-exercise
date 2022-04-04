<template>
  <div class="catalog">
    <h4 v-if="services.length === 0">No results found</h4>
    <KCard
      v-for="service in services"
      :key="service.id"
      class="service"
      @click.native="showCardDetails(service.id)"
    >
      <template #title class="kcard-title" @click="showCardDetails(service.id)">
        {{ service.name }}
      </template>
      <template #body @click="showCardDetails(service.id)">
        <p>{{ service.description }}</p>
        <p class="kcard-version">
          <span class="kcard-version-number">{{ service.versions.length }}</span>
          <span>{{ service.versions.length === 1 ? "Version" : "Versions" }}</span>
        </p>
      </template>
    </KCard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KCard from "@kongponents/kcard";

import router from "../router";

export default Vue.extend({
  name: "ServiceList",
  components: {
    KCard
  },
  props: ["services"],
  methods: {
    showCardDetails(serviceId: number) {
      console.log(serviceId);
      router.push({ path: `/service/${serviceId}` });
    }
  }
});
</script>

<style lang="scss">
$primary-color: #1e88e5;
$primary-color-outline: #42a5f5;

.catalog {
  display: flex;
  flex-wrap: wrap;
}
.service {
  width: 200px;
  margin: 10px;
}

.kcard-version-number {
  border: 1px solid grey;
  color: #2196f3;
  border-radius: 10px;
  margin-right: 0.5rem;
  padding: 1px 8px;
}

.catalog .kong-card {
  cursor: pointer;
  .k-card-body {
    color: grey;
    font-size: 0.85rem;
    text-align: left;
    position: relative;
    height: 95%;
  }
  .k-card-header .k-card-title h4 {
    color: $primary-color;
    font-size: 1rem;
    font-weight: 600;
  }
}

.catalog .kong-card:hover {
  border: 1px solid $primary-color-outline;
}
</style>
