import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos:[
        {id:1,todo:'Learn Redux',date:'2021-01-01',time:'12:00',isCompleted:false},
        {id:2,todo:'Go to ort',date:'2021-01-01',time:'12:00',isCompleted:true},
        {id:3,todo:'Go to play soccer',date:'2021-01-01',time:'12:00',isCompleted:false},
    ],
    toggle:false
  }  

const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    toggleAction :(state,action)=>{
        state.toggle = !state.toggle;
    },
    addTodo:(state,action)=>{
      const todoObj = action.payload;
      todoObj.id = Date.now();
      todoObj.isCompleted = false;

      console.log(todoObj);
      state.todos.push(todoObj);
    }
  }
})


export const {toggleAction,addTodo} = todoSlice.actions;
export default todoSlice.reducer;