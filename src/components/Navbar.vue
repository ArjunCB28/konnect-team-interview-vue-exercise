<template>
    <div id="navbar">
        <h3>KONNECT</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Navbar'
})
</script>

<style lang="scss">

#navbar {
    h3 {
        text-align: left;
        margin-left: 10px;
    }
    border-bottom: 2px solid #8080801f;
}
</style>
