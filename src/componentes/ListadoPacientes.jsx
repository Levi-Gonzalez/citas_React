import Pacientes from "./Pacientes";
import { useEffect } from "react";

const ListadoPacientes = ({ pacientes, setEditarPaciente, eliminarPaciente}) => {
  useEffect(() => {
    if(pacientes.length > 0){

    }
  }, [pacientes]);

  return (
    <div className="md:w-1/2 md: lg:w-3/5 overflow-y-scroll lg:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-4xl text-center">Pacientes</h2>
          <p className="mt-4 mb-6 text-center">
            Administra tus {""}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setEditarPaciente={setEditarPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-4xl text-center">No hay Pacientes</h2>
          <p className="mt-4 mb-6 text-center">
            Comienza agregando a tus pacientes y {""}
            <span className="font-bold text-indigo-600">
              Apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
