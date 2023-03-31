import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";
import { useState, useEffect } from "react";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [editarPaciente, setEditarPaciente] = useState({});

  //cada vez que haya un cambui en pacientes ejecute este código.

  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      console.log(pacienteLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const eliminar_paciente = pacientes.filter(
      paciente => paciente.id !== id
    );
    setPacientes(eliminar_paciente);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto md:flex mt-14">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          editarPaciente={editarPaciente}
          setEditarPaciente={setEditarPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setEditarPaciente={setEditarPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </>
  );
}

export default App;
