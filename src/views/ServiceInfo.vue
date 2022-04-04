<template>
  <div>
    <h4>Service Info</h4>
    <label>Name:</label>{{serviceInfo.name}}<br/>
    <label>Description:</label>{{serviceInfo.description}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios"

export default Vue.extend({
  name: "ServiceInfo",
  data () {
    return {
      serviceInfo: {
        id: '',
        name: '',
        description: ''
      }
    }
  },
  mounted () {
    this.fetchServiceInfo()
  },
  methods: {
    fetchServiceInfo () {
      const serviceUrl = `/api/service_packages/${this.$route.params.id}`;
      axios.get(serviceUrl).then(res => {
        this.serviceInfo = res.data;
      });
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
