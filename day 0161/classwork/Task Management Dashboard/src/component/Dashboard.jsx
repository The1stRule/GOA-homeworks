import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

const Dasboard = ({ curUser, setCurUser }) => {
    return (
        <>
            <TaskForm setCurUser={setCurUser} />
            <TaskList setCurUser={setCurUser} tasks={curUser.taskList} />
        </>
    );
}

export default Dasboard;