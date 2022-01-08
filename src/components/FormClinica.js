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
  console.log(errors);

  return (
    <>
      <h1>Sanatorio Medico Los Tilos </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h1 className="label">Paciente</h1>
          <input
            type="text"
            placeholder="Paciente"
            {...register("Paciente", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="row">
          <h1 className="label">Servicio</h1>

          <input
            type="text"
            placeholder="Servicio"
            {...register("Servicio", { required: true, maxLength: 100 })}
          />
        </div>
        <div className="row">
          <h1 className="label">Habitacion</h1>

          <input
            type="text"
            placeholder="Habitacion"
            {...register("Habitacion", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        <div className="row">
          <h1 className="label">Cama</h1>

          <input
            type="tel"
            placeholder="Cama"
            {...register("Cama", { required: true, maxLength: 12 })}
          />
        </div>
        <div className="row">
          <h1 className="label">Cirujano</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula Cirujano</h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Ayundante 1</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula </h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Ayundante 2</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula </h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Instrumentadora</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula</h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Instrumentadora</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula</h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Instrumentadora</h1>
          <input
            type="text"
            placeholder="Cirujano"
            {...register("Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Matricula</h1>

          <input
            type="number"
            placeholder="Matricula Cirujano"
            {...register("Matricula Cirujano", { required: true })}
          />
        </div>
        <div className="row">
          <h1 className="label">Anestesia Empleada</h1>

          <input
            type="text"
            placeholder="Anestesia Empleada"
            {...register("Anestesia Empleada", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Diagnostico Operatorio</h1>

          <input
            type="text"
            placeholder="Diagnostico Operatorio"
            {...register("Diagnostico Operatorio", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Grave</h1>

          <input {...register} type="radio" value="Grave" />
        </div>
        <div className="row">
          <h1 className="label">Mediano</h1>

          <input {...register} type="radio" value="Mediano" />
        </div>
        <div className="row">
          <h1 className="label">Leve</h1>

          <input {...register} type="radio" value="Leve" />
        </div>
        <div className="row">
          <h1 className="label">Operacion Practicada</h1>

          <input
            type="text"
            placeholder="Operacion Practicada"
            {...register("Operacion Practicada", {})}
          />
        </div>
        <div className="row">
          <h1 className="label">Cirugia</h1>

          <input {...register} type="radio" value="Cirugia" />
        </div>
        <div className="row">
          <h1 className="label">Media</h1>

          <input {...register} type="radio" value=" Media" />
        </div>
        <div className="row">
          <h1 className="label">Intermedia</h1>

          <input {...register} type="radio" value=" Intermedia" />
        </div>
        <div className="row">
          <h1 className="label">Mayor A</h1>

          <input {...register} type="radio" value=" Mayor A" />
        </div>
        <div className="row">
          <h1 className="label">Mayor B</h1>

          <input {...register} type="radio" value=" Mayor B" />
        </div>
        <div className="row">
          <h1 className="label">Mayor C</h1>

          <input {...register} type="radio" value=" Mayor C" />
        </div>
        <div className="row">
          <h1 className="label">Gran Cirujia</h1>

          <input {...register} type="radio" value=" Gran Cirujia" />
        </div>
        <div className="row">
          <h1 className="label">Detalle de operacion</h1>

          <textarea {...register("Detalle de operacion", {})} />
        </div>
        <input type="submit" className="button-send" />
      </form>
    </>
  );
}
