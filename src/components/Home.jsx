import React from 'react'
import {FaCheckCircle,FaTrash} from 'react-icons/fa'
import AddTodo from './addTodo'
const Home = () => {


  return (
    <div>
      <div className='container mx-auto max-md:px-7 py-5'>
      <div className='bg-slate-300 mx-auto md:w-[75%] lg:w-[45%]  shadow-2xl border rounded-2xl p-[15px]'>
        <p className='text-[1.5em] underline'>TODO LIST</p>
        <button className='block btn btn-accent btn-xs text-white'>Add Todo</button>
        <AddTodo/>
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Go to school</td>
        <td>21-03-2023</td>
        <td>12:30</td>
        <td>
          <div className='flex items-center '>
          <FaCheckCircle color='purple' className='mx-1 cursor-pointer'/>
           <FaTrash color='red' className='cursor-pointer'/>
          </div>
        </td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Go to school</td>
        <td>21-03-2023</td>
        <td>12:30</td>
        <td>
          <div className='flex items-center '>
          <FaCheckCircle color='purple' className='mx-1 cursor-pointer'/>
           <FaTrash color='red' className='cursor-pointer'/>
          </div>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Go to school</td>
        <td>21-03-2023</td>
        <td>12:30</td>
        <td>
          <div className='flex items-center '>
          <FaCheckCircle color='purple' className='mx-1 cursor-pointer'/>
           <FaTrash color='red' className='cursor-pointer'/>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      {/* Table End */}

      </div>
      </div>
    
    </div>

  )
}

export default Home