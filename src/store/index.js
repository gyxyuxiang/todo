import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    todolist:JSON.parse(localStorage.getItem('todolist'))?JSON.parse(localStorage.getItem('todolist')):[]
  },
  mutations: {
    addList(state,list){
        state.todolist.push(list)
        localStorage.setItem("todolist",JSON.stringify(state.todolist))
    },
    delete(state,i){
        state.todolist.splice(i,1)
        localStorage.setItem("todolist",JSON.stringify(state.todolist))
    },
    delAll(state){
      state.todolist = state.todolist.filter(item=>{
        return item.flag == false
      })
      localStorage.setItem("todolist",JSON.stringify(state.todolist))
    },
    chAll(state,all){
      if(all == false){
        state.todolist.map(item=>{
          item.flag = false
        })
      }else{
        state.todolist.map(item=>{
          item.flag = true
        })
      }
      localStorage.setItem("todolist",JSON.stringify(state.todolist))
    }
  },
  actions: {
 
  }
});