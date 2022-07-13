import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.scss'

const emailPattern = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const userNamePattern = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,15}$/igm;

const schema = yup.object({
    userName: yup.string()
        .matches(userNamePattern, "Deve conter no minimo 4 caracteres, no maximo 15 caracteres, podendo utilizar _ ou .")
        .required('Este campo é obrigatorio'),
    userEmail: yup.string()
        .matches(emailPattern, 'Insira um email valido ex: "daylist@email.com"')
        .required('Este campo é obrigatorio'),
    userPassword: yup.string()
        .matches(passwordPattern, 
            `Deve conter no minimo 8 caracteres, 
            um maiúsculo, um minúsculo, 
            um número e um caractere especial`
        )
        .required('Este campo é obrigatorio'),
    userConfirmPassword: yup.string()
    .oneOf([yup.ref('userPassword'), null], 'As senhas devem ser iguais')

}).required();

export default function RegisterScreen(){
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const submit = data => console.log(data);
    

    return(
        <>
            <h1 className="logo">DayList</h1>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='Nome de usuario' {...register("userName",)} />
                <span>{errors.userName?.message}</span>

                <input placeholder='Email' type="email"{...register("userEmail")} />
                <span>{errors.userEmail?.message}</span>

                <input type="password" placeholder='Senha' {...register("userPassword")} />
                <span>{errors.userPassword?.message}</span>

                <input type="password" placeholder='Confirme sua senha' {...register("userConfirmPassword")} />
                <span>{errors.userConfirmPassword?.message}</span>

                <input type="submit" value="Cadastrar-se" className='button--submit'/>
            </form>
        </>    
    )
};