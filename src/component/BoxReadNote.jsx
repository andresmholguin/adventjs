import { useEffect, useState } from "react";

const BoxReadNote = ({ check, nota }) => {
  const [estatus, setEstatus] = useState("⚠️ Pendiente");

  useEffect(() => {
    if (check === true) {
      setEstatus("✅ Completado");
    }
  }, []);

  const handledChech = () => {
    if (check === true) {
      setEstatus("⚠️ Pendiente");
    } else {
      setEstatus("✅ Completado");
    }
  };

  return (
    <div className="flex flex-row mx-auto w-1/2 mt-4">
      <div className="bg-slate-300 basis-3/4 p-2 font-bold">
        <h1>{nota}</h1>
      </div>
      <div
        className={`${
          check ? "bg-green-300" : "bg-red-500 text-white"
        } basis-1/4 py-2 `}
      >
        <button className="my-auto" onClick={handledChech}>
          {estatus}
        </button>
      </div>
    </div>
  );
};

export default BoxReadNote;
