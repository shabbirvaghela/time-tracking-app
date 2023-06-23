// src/App.js
import React, { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DailyTotal from "./components/DailyTotal";

function App() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);

	// Load projects and tasks from localStorage on initial render
	useEffect(() => {
		const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
		const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

		setProjects(storedProjects);
		setTasks(storedTasks);
	}, []);

	// Update localStorage whenever projects or tasks change
	useEffect(() => {
		localStorage.setItem("projects", JSON.stringify(projects));
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [projects, tasks]);

	const handleProjectSelect = (project) => {
		setSelectedProject(project);
	};

	const handleProjectCreate = (projectName) => {
		setProjects([...projects, projectName]);
		setSelectedProject(projectName);
	};

	const handleTaskCreate = (taskName, timeSpent, description) => {
		const newTask = {
			project: selectedProject,
			name: taskName,
			timeSpent,
			description,
		};
		setTasks([...tasks, newTask]);
	};

	const handleClearHistory = () => {
		setProjects([]);
		setTasks([]);
		setSelectedProject(null);
	};

	return (
		<>
			<header className="bg-primary-subtle p-4">
				<div className="container"></div>
				<nav class="navbar navbar-expand-lg navbar-light justify-content-between">
					<button className="btn p-0">
						<span className="h3">Time Tracking Application</span>
					</button>

					{projects.length > 0 && (
						<button className="btn btn-danger" onClick={handleClearHistory}>
							Clear Project History
						</button>
					)}
				</nav>
			</header>
			<div className="container-fluid">
				{selectedProject && (
					<button
						className="btn btn-dark my-3"
						onClick={() => setSelectedProject(null)}
					>
						&lt; Back to Home
					</button>
				)}
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						{selectedProject ? (
							<div>
								<DailyTotal tasks={tasks} selectedProject={selectedProject} />
								<h2 class="bg-primary-subtle text-primary p-3 rounded-3 h3 mt-4">
									Project Name: {selectedProject}
								</h2>
								<TaskForm onCreateTask={handleTaskCreate} />
								<TaskList tasks={tasks} selectedProject={selectedProject} />
							</div>
						) : (
							<div className="mt-5 pt-5">
								<ProjectForm onCreateProject={handleProjectCreate} />
								<ProjectList
									projects={projects}
									onSelectProject={handleProjectSelect}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
