import React, { useState } from "react";

function TaskForm({ onCreateTask }) {
	const [taskName, setTaskName] = useState("");
	const [timeSpent, setTimeSpent] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreateTask(taskName, timeSpent, description);
		setTaskName("");
		setTimeSpent("");
		setDescription("");
	};

	return (
		<div className="py-4">
			<h2 className="h4">Create Task</h2>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col">
						<input
							required
							className="form-control form-control-lg mb-3"
							type="text"
							placeholder="Task Name"
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
						/>
					</div>
					<div className="col">
						<input
							required
							className="form-control form-control-lg mb-3"
							type="number"
							min="1"
							max="10"
							placeholder="Time Spent (in hours)"
							value={timeSpent}
							onChange={(e) => setTimeSpent(e.target.value)}
						/>
					</div>
					<div className="col">
						<textarea
							required
							className="form-control form-control-lg mb-3"
							type="text"
							placeholder="Description"
							rows={1}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-lg btn-primary px-5">
							Create
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default TaskForm;
