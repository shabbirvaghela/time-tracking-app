import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);

	const addProject = (projectName) => {
		setProjects([...projects, projectName]);
	};

	const addTask = (taskName, timeSpent, description) => {
		setTasks([...tasks, { name: taskName, timeSpent, description }]);
	};

	return (
		<AppContext.Provider value={{ projects, tasks, addProject, addTask }}>
			{children}
		</AppContext.Provider>
	);
};
