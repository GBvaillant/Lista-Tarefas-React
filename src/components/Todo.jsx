import { RiDeleteBinLine, RiCheckLine } from 'react-icons/ri'
import { MdSettingsBackupRestore } from 'react-icons/md'
import taskFetch from '../axios/config'

const Todo = ({ task }) => {

    const removeTask = async (id) => {
        await taskFetch.delete(`/task/${id}`, {

            id: id
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const completeTask = async (id) => {
        await taskFetch.put(`/updateTask/${id}`, {
            id: id,
            complete: true
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const returnTask = async (id) => {
        await taskFetch.put(`/updateTask/${id}`, {
            id: id,
            complete: false
        })
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className='todo'
                style={{ textDecoration: task.complete ? "line-through" : "" }}>
                <div className='content' key={task.id}>
                    <p>{task.text}</p>
                    <p className='category'>
                        <span></span>{task.category}
                    </p>
                </div>
                <div>
                    {
                        task.complete ? <button className='return'
                            onClick={() => returnTask(task._id)}>
                            <MdSettingsBackupRestore />
                        </button> : ""
                    }

                    <button
                        className='complete'
                        onClick={() => completeTask(task._id)}>
                        <RiCheckLine />

                    </button>

                    <button
                        className='remove'
                        onClick={() => removeTask(task._id)}>
                        <RiDeleteBinLine />

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Todo