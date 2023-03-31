const Pacientes = ({ paciente, setEditarPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;
  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="md:mx-3 mb-5 bg-white px-5 py-10 rounded-xl shadow-xl">
      <p className="uppercase font-bold">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="uppercase font-bold">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>{" "}
      <p className="uppercase font-bold">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>{" "}
      <p className="uppercase font-bold">
        Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>{" "}
      <p className="uppercase font-bold">
        Sintomas: {""}
        <span className="font-normal normal-case ">{sintomas} </span>
      </p>
      <div className="flex justify-evenly mt-6">
        <button
          className="bg-indigo-600 px-6 py-4 text-white rounded-md shadow-md uppercase hover:bg-indigo-700"
          onClick={() => {
            setEditarPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-500 px-4 py-4 text-white rounded-md shadow-md uppercase hover:bg-red-600"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
