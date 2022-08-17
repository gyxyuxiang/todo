<template>
  <div class="todo">
    <h1>todolist</h1>
    <addVue></addVue>
    <listVue></listVue>
    <foot v-show="$store.state.todolist.length>0"></foot>
  </div>
</template>

<script>
import addVue from './todoZ/add.vue';
import listVue from './todoZ/list.vue';
import foot from './todoZ/foot.vue';
export default {
    components:{
        addVue,
        listVue,
        foot
    }
}
</script>

<style scoped>

</style>