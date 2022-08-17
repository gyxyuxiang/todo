<template>
  <div class="foot">
    <div>
        <input type="checkbox" v-model="all" @change="chAll"><label>全选</label>
    </div>
    <button @click="delAll">删除选中</button>
  </div>
</template>

<script>
export default {
    computed:{
        all(){
            return this.$store.state.todolist.every(item=>{
                return item.flag == true
            })
        }
    },
    methods:{
        delAll(){
            this.$store.commit("delAll")
        },
        chAll(i){
            console.log(i);
            this.$store.commit("chAll",i)
        }
    }
}
</script>

<style scoped>
.foot{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>