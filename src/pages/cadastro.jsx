import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { withMask } from 'use-mask-input'
import { number } from "zod/v4-mini";

const schema = yup
    .object({
        name: yup.string().required("O nome é obrigatorio"),
        email: yup.string().email.required("O email é obrigatório"),
        password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatória "),
        confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
        number: yup.string().min(11, "O número de telefone precisa conter 11 dígitos").max(11).required("O número de telefone é obrigatório"),
        CPF: yup.string().min(11, "O CPF deve ter pelo menos 11 dígitos").max(11).required("O CPF é obrigatório"),
        CEP: yup.string().min(8, "O CEP deve ter pelo menos 8 dígitos").max(8).required("O CEP é obrigatório"),
    })
    .required()

function cadastro() {
    const {
        register, handleSubmit, watch, formState: { errors }, } = useForm({
            resolver: yupResolver(schema),
        });

    function onSubmit(userData) {
        console.log(userData)
    }

    return (
        <form onSubmit={handleSubmit()}>
            <label>
                Nome
                <input type="text"{...register("name", { required: true })} />
                <span class="position absolute top-50px text-red-500">{errors.name?.message}</span>
            </label>
            <label>
                Email
                <input type="text"{...register("email")} />
                <span class="position absolute top-50px text-red-500">{errors.email?.message}</span>
            </label>
            <label>
                Telefone Celular
                <input type="text" ref={withMask('(99)99999-9999')} {...register("number")} />
                <span class="position absolute top-50px text-red-500">{errors.number?.message}</span>
            </label>
            <label>
                CPF
                <input type="text" ref={withMask('999.999.999-99')} {...register("CPF")} />
                <span class="position absolute top-50px text-red-500">{errors.CPF?.message}</span>
            </label>
            <label>
                CEP
                <input type="text" ref={withMask('99999-999')} {...register("CEP")} />
                <span class="position absolute top-50px text-red-500">{errors.CEP?.message}</span>
            </label>
            <label>
                Senha
                <input type="password"{...register("senha")} />
                <span class="position absolute top-50px text-red-500">{errors.password?.message}</span>
            </label>
            <label>
                Confirmar senha
                <input type="password"{...register("confirmPassword")} />
                <span class="position absolute top-50px text-red-500">{errors.confirmPassword?.message}</span>
            </label>
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}