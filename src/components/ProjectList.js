import React from "react";

function ProjectList({ projects, onSelectProject }) {
	return (
		<div className="py-5">
			{projects.length !== 0 && (
				<>
					<h2>Project List</h2>
					{projects.map((project, index) => (
						<div className="item border p-3 my-3 shadow rounded-3">
							<div key={index} className="row">
								<div className="col-auto">
									<h5 className="m-0">
										Project Name:
										<span className="d-block">{project}</span>
									</h5>
								</div>
								<div className="col-auto ms-auto">
									<button
										onClick={() => onSelectProject(project)}
										className="btn btn-dark px-4"
									>
										View
									</button>
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default ProjectList;
