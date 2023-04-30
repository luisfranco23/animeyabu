<script setup>
import Footer from './Footer.vue';
import axios from 'axios'
import {useForm} from 'vue-hooks-form'
import Swal from 'sweetalert2'
import router from '../main'

const {useField, handleSubmit} = useForm()

const email = useField('email')
const password = useField('password')

const onSubmit = handleSubmit(async(data) => {
    axios.post(import.meta.env.VITE_API, data)
        .then(res => {
            localStorage.setItem(token, res.data)
            router.push('/dashboard')
        })
        .catch(err => {
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'Cool',
            })
        })
})

</script>

<template>
    <main class="lg:px-10">
       <RouterLink to="/login"> <img src="/back.svg" alt="buttom back"></RouterLink>
        <section class="flex items-center flex-col">
            <img src="/logo.svg" alt="logo tanjiro">
            <h1 class="text-white text-5xl font-extrabold mt-4">ひさしぶり!</h1>
            <p class="text-white italic mt-2 text-sm font-roboto">¡Hola, te extrañamos!</p>
        </section>
        <form @submit="onSubmit" class="flex flex-col mt-4 mb-2">
            <label class="text-white">Email</label>
            <input class="h-[64px] rounded-lg border-2 text-white border-white bg-white/40 p-4 placeholder:text-gray-100" type="email"
                placeholder="Email" v-model="email.value" :ref="email.ref">
            <label class="text-white mt-4">Contraseña</label>
            <input class="h-[64px] rounded-lg border-2 text-white border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •" v-model="password.value" :ref="password.ref">
            <p class="text-purple-200 text-sm mt-2 text-right cursor-pointer">¿Olvido la contraseña</p>
            <button type="submit" class="btn-primary">Acceder</button>
        </form>
        <Footer/>
    </main>
</template>

<style></style>