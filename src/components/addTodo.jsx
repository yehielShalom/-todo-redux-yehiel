import React from 'react'
import { useForm } from 'react-hook-form'
import { addTodo } from '../redux/features/todoSlice';
import { useDispatch } from'react-redux';
const AddTodo = ({hide}) => {
    const dispatch = useDispatch();

    const { reset,resetField,register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {    
        dispatch(addTodo(_bodyData))
        hide()
        reset()
        resetField()
    }
    return (
        <div className='pb-3'>
        <form onSubmit={handleSubmit(onSub)} className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">TODO:</span>
            </label>
            <textarea rows={3} {...register('todo',{required:{value:true,message:'Todo is required...'},maxLength:{value:50,message:'Todo must be less 50 chars...'}})} type="text" placeholder="What to do..." className="h-auto input input-bordered w-full max-w-xs" />
            {errors.todo && <span className="text-red-600">{errors.todo.message}</span>}
            <label className="label">
                <span className="label-text">DATE:</span>
            </label>
            <input {...register('date',{required:{value:true,message:'Date is required...'}})} type="date" placeholder="Type here" className="text-center input input-bordered w-full max-w-xs" />
            {errors.date && <span className="text-red-600">{errors.date.message}</span>}

            <label className="label">
                <span className="label-text">TIME:</span>
            </label>
            <input {...register('time',{required:{value:true,message:'Time is required...'}})} type="time" placeholder="Type here" className="text-center input input-bordered w-full max-w-xs" />
            {errors.time && <span className="text-red-600">{errors.time.message}</span>}

            <div className='mt-2'>
                <button className="mr-2 btn btn-info btn-xs text-white">Add</button>
                <button onClick={()=>{
                    reset()
                    resetField()
                    }} type='button' className="mr-2 btn btn-error btn-xs text-white">Reset</button>
            </div>

        </form>

        </div>
    )
}

export default AddTodo