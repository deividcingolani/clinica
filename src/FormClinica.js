import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormClinica() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Paciente" {...register("Paciente", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Servicio" {...register("Servicio", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Habitacion" {...register("Habitacion", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Cama" {...register("Cama", {required: true, maxLength: 12})} />
      <input type="text" placeholder="Cirujano" {...register("Cirujano", {required: true})} />
      <input type="number" placeholder="Matricula Cirujano" {...register("Matricula Cirujano", {required: true})} />
      <input type="text" placeholder="Anestesia Empleada" {...register("Anestesia Empleada", {})} />
      <input type="text" placeholder="Diagnostico Operatorio" {...register("Diagnostico Operatorio", {})} />

      <input {...register} type="radio" value="Grave" />
      <input {...register} type="radio" value="Mediano" />
      <input {...register} type="radio" value="Leve" />
      <input type="text" placeholder="Operacion Practicada" {...register("Operacion Practicada", {})} />

      <input {...register} type="radio" value="Cirugia" />
      <input {...register} type="radio" value=" Media" />
      <input {...register} type="radio" value=" Intermedia" />
      <input {...register} type="radio" value=" Mayor A" />
      <input {...register} type="radio" value=" Mayor B" />
      <input {...register} type="radio" value=" Mayor C" />
      <input {...register} type="radio" value=" Gran Cirujia" />
      <textarea {...register("Detalle de operacion", {})} />

      <input type="submit" />
    </form>
  );
}