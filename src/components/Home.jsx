import React from 'react'
import {FaCheckCircle,FaTrash} from 'react-icons/fa'
import AddTodo from './addTodo'
import {useSelector,useDispatch} from 'react-redux'
import { toggleAction } from '../redux/features/todoSlice'
const Home = () => {
  const {todos,toggle} = useSelector((store)=>store.todoReducer)
  // const {todoReducer:{toggle}} = useSelector((store)=>store)
  console.log(toggle)
  const dispatch = useDispatch()
  const showHide = () =>{
    dispatch(toggleAction())
  }
  return (
    <div>
      <div className='container mx-auto max-md:px-7 py-5'>
      <div className='bg-slate-300 mx-auto md:w-[75%] lg:w-[45%]  shadow-2xl border rounded-2xl p-[15px]'>
        <p className='text-[1.5em] underline'>TODO LIST</p>
        <button onClick={showHide} className='block btn btn-accent btn-xs text-white my-3'>{toggle?'Hide':'Add Todo'}</button>
       {toggle && <AddTodo hide={showHide}/>} 
      {/* Table */}
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>TODO</th>
        <th>DATE</th>
        <th>TIME</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {todos?.map(({todo,date,time,isCompleted},index)=>(
      <tr className={(isCompleted&& 'line-through').toString()} key={index}>
      <th>{index+1}</th>
      <td>{todo}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <div className='flex items-center '>
        <FaCheckCircle color={isCompleted?'green':'purple'} className='mx-1 cursor-pointer'/>
         <FaTrash color='red' className='cursor-pointer'/>
        </div>
      </td>
    </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Table End */}

      </div>
      </div>
    <img width={'400px'} src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif" alt="" />
    </div>

  )
}

export default Home