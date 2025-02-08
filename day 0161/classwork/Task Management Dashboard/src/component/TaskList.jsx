import TaskItem from "./TaskItem.jsx";

const TaskList = ({ setCurUser, tasks }) => {
    
    console.log(tasks)
    return (
        <>
            {
                tasks.length > 0 ? (
                    <table border="1" style={{width: 500}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Taks Name</th>
                                <th>Change</th>
                                <th>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((curValue, index) => {
                                    return (
                                        <TaskItem key={index} setCurUser={setCurUser} task={curValue} />
                                    );
                                })
                            }
                        </tbody>
                    </table>
                ) : <p>No Tasks</p>
            }
        </>
    );
}

export default TaskList;