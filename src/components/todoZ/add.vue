<template>
  <div class="add">
    <input type="text" v-model="name" placeholder="添加">
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:""
        }
    },
    methods:{
        add(){
            if(this.name == ''){
                return
            }else{
                this.$store.commit('addList',{
                    name:this.name,
                    flag:false
                })
                this.name=""
            }
        }
    }
}
</script>

<style>

</style>