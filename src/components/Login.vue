<script setup>
import Footer from './Footer.vue';
import axios from 'axios'
import { useForm } from 'vue-hooks-form'
import Swal from 'sweetalert2'
import router from '../main'
import Carousel from './Carrusel.vue'


const { useField, handleSubmit } = useForm()

const email = useField('email',{
    required: true 
})
const password = useField('password')

const onSubmit = handleSubmit(async (data) => {
    axios.post(import.meta.env.VITE_API_LOGIN, data)
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
    <main class="md:w-1/2 w-screen h-screen p-8 bg-gradient-to-t to-purple-100 from-black font-poppins md:to-black">
        <div class="md:flex hidden items-center gap-3 mb-8">
            <img src="/icon.svg" alt="icon yabu">
            <h2 class="text-white font-extrabold">anime<span class="text-purple-100 font-extrabold">yabu.</span></h2>
        </div>
        <RouterLink to="/"> <img src="/back.svg" alt="buttom back"></RouterLink>
        <section class="flex items-center flex-col">
            <img src="/logo.svg" alt="logo tanjiro">
            <h1 class="text-white text-5xl font-extrabold mt-4">ひさしぶり!</h1>
            <p class="text-white italic mt-2 text-sm font-roboto">¡Hola, te extrañamos!</p>
        </section>
        <form @submit="onSubmit" class="flex flex-col mt-4 mb-2">
            <label class="text-white">Email</label>
            <input class="h-[64px] rounded-lg border-2 text-white border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="email" placeholder="Email" v-model="email.value" :ref="email.ref">
            <label class="text-white mt-4">Contraseña</label>
            <input class="h-[64px] rounded-lg border-2 text-white border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •" v-model="password.value" :ref="password.ref">
            <p class="text-purple-200 text-sm mt-2 text-right cursor-pointer">¿Olvido la contraseña</p>
            <button type="submit" class="btn-primary">Acceder</button>
        </form>
        <Footer message="Registrate" route="/register" />
    </main>
    <div class="md:flex hidden w-1/2 bg-purple-300 flex-col justify-center items-center">
        <div class="xl:w-[548px] xl:h-[548px] w-96 h-96 bg-purple-200 rounded-[50%] mt-4">
            <Carousel />
        </div>
        <div class="w-3/5 text-center mt-20">
            <h1 class="text-white mb-4 lg:text-7xl text-5xl font-roboto font-extrabold">anime<span
                    class="text-purple-100 lg:text-7xl text-5xl font-roboto font-extrabold">yabu.</span></h1>
            <p class="text-white font-roboto text-lg">Ver anime en línea en HD, subtitulado o doblado,
                en tu celular o computadora.
                ¡Animeyabu, tu portal de anime en línea!</p>
        </div>
    </div>
</template>

<style></style>