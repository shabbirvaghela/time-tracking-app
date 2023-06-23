import React, { useState } from "react";

function ProjectForm({ onCreateProject }) {
	const [projectName, setProjectName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreateProject(projectName);
		setProjectName("");
	};

	return (
		<div className="text-center">
			<h2 className="h1">Create Project</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control bg-light mx-auto form-control-lg mb-3 mt-4"
					placeholder="Project Name"
					value={projectName}
					required
					style={{ maxWidth: "400px" }}
					onChange={(e) => setProjectName(e.target.value)}
				/>
				<button
					type="submit"
					className="btn btn-lg btn-primary px-5 text-uppercase"
				>
					Create
				</button>
			</form>
		</div>
	);
}

export default ProjectForm;
