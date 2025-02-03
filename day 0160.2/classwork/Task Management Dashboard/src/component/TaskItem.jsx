import { useEffect, useState } from 'react';

const TaskItem = ({ setCurUser, task }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [newTaskName, setNewTaskName] = useState(task.taskName);

    useEffect(() => {
        console.log(newTaskName);
    }, [newTaskName])
    
    const handleClick = () => {
        if(isEdit) {
            setCurUser(prev => {
                const taskList = [...prev.taskList].map(curValue => {
                    if(curValue.id === task.id) {
                        curValue.taskName = newTaskName;
                    }

                    return curValue;
                });
                return { ...prev, taskList }
            });
            setIsEdit(false);
            return;
        }

        setIsEdit(true);
    }

    const handleChange = ({ target }) => {
        setNewTaskName(target.value);
    }


    const handleDelete = () => {
        setCurUser(prev => {
            return {
                ...prev,
                taskList: prev.taskList.filter(curValue => curValue.id !== task.id)
            }
        });
    }

    return (
        <tr>
            <td>{task.id}</td>
            <td>{!isEdit ? task.taskName : <input type="text" value={newTaskName} onChange={handleChange} />}</td>
            <td><button onClick={handleClick}>{!isEdit? "Change" : "Save"}</button></td>
            <td><button onClick={handleDelete}>Del</button></td>
        </tr>
    );
}

export default TaskItem;