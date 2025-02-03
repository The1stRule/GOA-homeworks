
const TaskForm = ({ setCurUser }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            id: Date.now(),
            taskName: e.target.task.value
        }

        e.target.reset();

        setCurUser(prev => ({ ...prev, taskList: [...prev.taskList, taskObj] }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input type="text" name="task" id="task" placeholder="Add new Task..." required />
            <button>Add Task</button>
        </form>
    );
}

export default TaskForm;