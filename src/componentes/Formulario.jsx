import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, editarPaciente, setEditarPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const { nombre, propietario, email, alta, sintomas, error } =
      editarPaciente;

    if (Object.keys(editarPaciente).length > 0) {
      setNombre(nombre);
      setPropietario(propietario);
      setEmail(email);
      setAlta(alta);
      setSintomas(sintomas);
      setError(error);
    }
  }, [editarPaciente]);

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    [nombre, propietario, email, alta, sintomas].includes("")
      ? setError(true)
      : setError(false);

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (editarPaciente.id) {
      /*edita registro. El id que ya tenemos despues de crear ese registro se lo asignamos a ese nuevo obj pacienteState hace referencia 
      al nuevo state entonces retorna el nuevo obj (objetoPaciente). Identifica los que tiene el id igual entonces dice este es el que 
      estoy editando y retorno el obj paciente y si no es el que estoy modificando entonces como no es el que estoy modificando lo devuelvo tal como está
      */
      objetoPacientes.id = pacientes.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === editarPaciente.id 
        ? objetoPacientes 
        : pacienteState
      );
      setPacientes(pacientesActualizados)
      //borra lo que quedo en memoria
      setPacientes({})
    } else {
      //crea un nuevo registro. No tiene un ID, entonces lo generamos y se lo agregamos al setPacientes.
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
    }

    //reiniciar
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className=" text-3xl text-center font-black">
        Seguimientos pacientes
      </h2>

      <p className="text-lg text-center mt-5">
        {" "}
        Añade pacientes y {""}
        <span className=" text-indigo-500 font-bold text-lg">
          Administralos.
        </span>
      </p>

      <form
        className="bg-slate-100  shadow-xl ml-2 mt-5 rounded-xl py-4 px-4 mb-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={"Campos incompleto"} />}

        <div className="mb-4">
          <label
            className="block font-bold text-stone-700 uppercase"
            htmlFor="mascotas"
          >
            Nombre Mascota
          </label>
          <input
            id="mascotas"
            type="text"
            placeholder="Nombre de la Mascota "
            className="w-full border-2 p-2 mt-2 placeholder-slate-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block font-bold text-stone-700 uppercase"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario "
            className="px-2 w-full border-2 p-2 mt-2 placeholder-slate-500"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block font-bold text-stone-700 uppercase"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email "
            className="px-2 w-full border-2 p-2 mt-2 placeholder-slate-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block font-bold text-stone-700 uppercase"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="px-2 w-full border-2 p-2 mt-2"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div>
          <label
            className="block font-bold text-stone-700 uppercase"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full border-2 placeholder-slate-500 rounded-md"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="transition-all bg-indigo-500 w-full p-3 text-white rounded-md hover:bg-indigo-700 cursor-pointer font-medium uppercase hover:shadow-xl"
          value={editarPaciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
