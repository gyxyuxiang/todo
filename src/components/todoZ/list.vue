<template>
  <div class="list">
    <div v-for="(item,index) in todolist"  :key="index">
        <input type="checkbox" v-model="item.flag">
        <label>{{item.name}}</label>
        <span @click="del(index)">x</span>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        todolist(){return this.$store.state.todolist}
    },
    created(){
        
    },
    data(){
        return{
        }
    },
    methods:{
        del(i){
            this.$store.commit("delete",i)
        }
    }
    // watch:{
    //     todolist(newVal){
    //         console.log(newVal);
    //     }
    // }
}
</script>

<style scoped>

</style>