import React from "react";
import { useForm } from "react-hook-form";
import "./formClinica.css";

export default function FormClinica() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("Errores", errors);

  return (
    <>
      <h1>Sanatorio Medico Los Tilos </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h1 className="label">Paciente</h1>
          <input
            type="text"
            placeholder="Paciente"
            {...register("paciente", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="row">
          <h1 className="label">Servicio</h1>

          <input
            type="text"
            placeholder="Servicio"
            {...register("servicio", { required: true, maxLength: 100 })}
          />
        </div>
        <div className="row">
          <h1 className="label">Habitacion</h1>

          <input
            type="number"
            placeholder="Habitacion"
            {...register("habitacion")}
          />
        </div>
        <div className="row">
          <h1 className="label">Cama</h1>

          <input type="number" placeholder="Cama" {...register("Cama")} />
        </div>
        <div className="row">
          <h1 className="label">Cirujano</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("cirujano", { required: true })}
          />
          <h1 className="label second-column">Matricula </h1>
          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("matriculaCirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Ayundante 1</h1>
          <input
            type="text"
            placeholder="Ayundante 1"
            {...register("ayundate1", { required: true })}
          />
          <h1 className="label second-column">Matricula </h1>

          <input
            type="number"
            placeholder="Matricula Ayudante 1"
            {...register("matriculaAyudante1", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Ayundante 2</h1>
          <input
            type="text"
            placeholder="Ayundante 2"
            {...register("ayudante2", { required: true })}
          />
          <h1 className="label second-column">Matricula </h1>

          <input
            type="number"
            placeholder="Matricula Ayundante 2"
            {...register("matriculaAyudante2", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Instrumentadora</h1>
          <input
            type="text"
            placeholder="Instrumentadora"
            {...register("instrumentadora", { required: true })}
          />
          <h1 className="label second-column">Matricula</h1>

          <input
            type="number"
            placeholder="Matricula Instrumentadora"
            {...register("matriculaInstrumentadora", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Anestesista</h1>
          <input
            type="text"
            placeholder="Anestesista"
            {...register("anestesista", { required: true })}
          />
          <h1 className="label second-column">Matricula</h1>

          <input
            type="number"
            placeholder="Matricula Anestesista"
            {...register("matriculaAnestesista", { required: true })}
          />
        </div>

        <div className="row">
          <h1 className="label">Anestesia Empleada</h1>

          <input
            type="text"
            placeholder="Anestesia Empleada"
            {...register("anestesiaEmpleada", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Diagnostico Operatorio</h1>

          <input
            type="text"
            placeholder="Diagnostico Operatorio"
            {...register("diagnosticoOperatorio", {})}
          />
        </div>

        <div className="row">
          <h1 className="label">Riesgo Operatorio</h1>

          <h1 className="label">Grave</h1>

          <input {...register("riesgoOperatorio")} type="radio" value="Grave" />
          <h1 className="label">Mediano</h1>

          <input
            {...register("riesgoOperatorio")}
            type="radio"
            value="Mediano"
          />
          <h1 className="label">Leve</h1>

          <input {...register("riesgoOperatorio")} type="radio" value="Leve" />
        </div>
        <div className="row">
          <h1 className="label">Operacion Practicada</h1>

          <input
            type="text"
            placeholder="Operacion Practicada"
            {...register("operacionPracticada", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Codigo</h1>

          <input
            type="number"
            placeholder="Codigo"
            {...register("codigo", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Cirugia</h1>
          <h1 className="label">Media</h1>
          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Media"
          />
          <h1 className="label">Intermedia</h1>

          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Intermedia"
          />

          <h1 className="label">Mayor A</h1>

          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Mayor A"
          />

          <h1 className="label">Mayor B</h1>

          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Mayor B"
          />

          <h1 className="label">Mayor C</h1>

          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Mayor C"
          />

          <h1 className="label">Gran Cirujia</h1>

          <input
            {...register("categoriaOperacion")}
            type="radio"
            value=" Gran Cirujia"
          />
        </div>
        <div className="row">
          <h1 className="label">Detalle de operacion</h1>

          <textarea {...register("detalleOperacion", {})} />
        </div>
        <button type="submit">Imprimir Historia Medica</button>
      </form>
    </>
  );
}
