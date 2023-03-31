const Error = ({mensaje}) => {
  return (
    <div className="bg-red-500 font-bold text-center py-3 rounded-md uppercase text-white mb-10 mt-4">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
