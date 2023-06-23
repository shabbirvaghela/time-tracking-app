import React from "react";

function TaskList({ tasks, selectedProject }) {
	const filteredTasks = tasks.filter(
		(task) => task.project === selectedProject
	);

	return (
		<div>
			<h2 className="h3">Task List</h2>
			{filteredTasks.length === 0 ? (
				<p>No tasks found.</p>
			) : (
				<ul className="p-0 m-0 ">
					{filteredTasks.map((task, index) => (
						<li
							key={index}
							className="mx-0 my-3 p-0 bg-light border list-style-none list-group p-3"
						>
							<strong className="h5 d-block">Task Name: {task.name}</strong>
							<span className="d-block h6">Hours: {task.timeSpent} hours</span>
							Description: {task.description}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default TaskList;
