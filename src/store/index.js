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
    }
  },
  actions: {
 
  }
});