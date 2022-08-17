<template>
  <div class="todo">
    <h1>todolist</h1>
    <addVue></addVue>
    <listVue></listVue>
  </div>
</template>

<script>
import addVue from './todoZ/add.vue';
import listVue from './todoZ/list.vue';
export default {
    components:{
        addVue,
        listVue
    }
}
</script>

<style scoped>

</style>