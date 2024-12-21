import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (dato) => {
        console.log(dato);
    }

    return <div className='Login'>
        <h2>Te damos la bienvenida a Pinterest</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Correo electrónico</label>
                <input type="email" {...register('email')}/>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="contra" {...register('contra')}/>
            </div>
            <button type="submit">Enviar</button>
        </form>

    </div>
}

export default Login;