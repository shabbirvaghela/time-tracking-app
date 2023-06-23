import React from "react";

function DailyTotal({ tasks, selectedProject }) {
	const filteredTasks = tasks.filter(
		(task) => task.project === selectedProject
	);

	const calculateTotalHours = () => {
		let totalHours = 0;
		filteredTasks.forEach((task) => {
			totalHours += parseFloat(task.timeSpent);
		});
		return totalHours;
	};

	return (
		<div>
			<div className="col-6">
				<div className="card text-start shadow-lg border-0">
					<div className="card-body p-4">
						<h2 className="mb-3">Daily Total Hours</h2>
						<p className="mb-0 h5 text-secondary">
							Total: {calculateTotalHours()} hours
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DailyTotal;
