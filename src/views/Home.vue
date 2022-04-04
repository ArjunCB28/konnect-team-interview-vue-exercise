<template>
  <div>
    <h4>Services</h4>
    <input-box v-model="searchText" />
    <service-list :services="services" />
    <KPagination
      :totalCount="100"
      :pageSizes="[10, 20, 30, 40]"
      :initialPageSize="initialPageSize"
      :currentPage="page"
      @pageChanged="pageChanged"
      @pageSizeChanged="pageSizeChanged"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ServiceList from "../components/ServiceList.vue";
import InputBox from "../components/InputBox.vue";
import KPagination from "@kongponents/kpagination";
import { ServiceListState } from "@/type-defs";

export default Vue.extend({
  name: "Home",
  components: {
    ServiceList,
    InputBox,
    KPagination
  },
  data() {
    return {
      show: false,
      services: [],
      searchText: "",
      filteredServices: [],
      page: 1,
      initialPageSize: 20,
      totalRecords: 1000,
      timeout: 0
    };
  },
  watch: {
    searchText() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.fetchServices();
      }, 500);
    }
  },
  mounted() {
    if (this.$store.state.serviceList?.services.length > 1) {
      console.log("load state");
      this.loadState();
    } else this.fetchServices();
  },
  beforeDestroy() {
    console.log("before destroy");
    this.storeState();
  },
  methods: {
    fetchServices(): void {
      const serviceUrl = `/api/service_packages?_limit=${this.initialPageSize}&_page=${this.page}${
        this.searchText !== "" ? "&q=" + this.searchText : ""
      }`;
      axios.get(serviceUrl).then(res => {
        this.services = res.data;
      });
    },
    loadState(): void {
      this.page = this.$store.state.serviceList.pageNumber;
      this.searchText = this.$store.state.serviceList.searchText;
      this.services = this.$store.state.serviceList.services;
    },
    storeState(): void {
      const serviceState: ServiceListState = {
        pageNumber: this.page,
        searchText: this.searchText,
        services: this.services
      };
      this.$store.dispatch("updateServiceList", serviceState);
    },
    pageChanged({ page }) {
      this.page = page;
      this.fetchServices();
    },
    pageSizeChanged({ pageSize }) {
      this.initialPageSize = pageSize;
      this.page = 1;
      this.fetchServices();
    }
  }
});
</script>

<style lang="scss">
h4 {
  text-align: left;
  margin-left: 10px;
}
</style>
