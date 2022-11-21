import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const añadirTarea = event => {
		event.preventDefault();
		setListaTareas([...listaTareas, tarea]);
		setTarea("");
	};

	const eliminar = i => {
		let nuevoarraytareas = listaTareas.filter((element, index) => {
			if (i != index) {
				return element;
			}
		});
		setListaTareas(nuevoarraytareas);
	};

	return (
		<div>
			<form onSubmit={añadirTarea}>
				<div className="d-flex form-row align-items-center">
					<div className="col-auto m-2">
						<label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label>
						<input
							type="text"
							className="form-control mb-2"
							id="inlineFormInput"
							placeholder="Agregar tareas"
							onChange={event => setTarea(event.target.value)}
						/>
					</div>
					<div className="col-auto  m-2">
						<button type="submit" className="btn btn-success mb-2">
							Agregar tarea
						</button>
					</div>
				</div>
			</form>
			<div className="lista">
				<ul className="list-group sm">
					{listaTareas.map((element, index) => {
						return (
							<li
								className="btn btn-outline-success mb-3"
								key={index}>
								{element}
								<button
									className="btn"
									onClick={() => eliminar(index)}>
									<i className="fas fa-arrow-alt-circle-down fa-2x"></i>
								</button>
							</li>
						);
					})}
				</ul>
			</div>

			<div>
				<p>
					{listaTareas.length == 0
						? "No hay tareas"
						: "Hay tareas " + listaTareas.length}
				</p>
			</div>
		</div>
	);
};

export default Lista;
