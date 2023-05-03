<script setup>
import Footer from './Footer.vue';
import Carousel from './Carrusel.vue'
import axios from 'axios'
import sha256 from 'js-sha256'
import { watchEffect } from 'vue'
import { ref } from 'vue'
import { useForm} from 'vue-hooks-form'
import Swal from 'sweetalert2'

const optionValue = ref('1')
const timezone = ''

watchEffect(() => {
axios.get(import.meta.env.VITE_APITIMEZONE)
    .then(res => timezone = res.data)
    .catch(err => console.log(err))
})


const signature = import.meta.env.VITE_APP_PRIVATE_KEY + "," + import.meta.env.VITE_APP_PUBLIC_KEY + "," + timezone
const signatureHash = sha256(signature)

const header = {
    Headers: {Authorization: signatureHash}
}


const{ useField, handleSubmit } = useForm({defaultValues: {}})

const name = useField('name')
const lastname = useField('lastname')
const telephone = useField('telephone')
const identity_document = useField('identity_document')
const email = useField('email')
const password = useField('password')
const password_confirmation = useField('password_confirmation')

const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.password_confirmation) {
    Swal.fire({
        title: 'Error',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

    axios.post(import.meta.env.VITE_API, data, header)
    .then(res => localStorage.setItem(user, res.data))
    .catch(err => {
        Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    })
})

</script>

<template>
    <div class="md:w-1/2 w-screen p-8 bg-gradient-to-t to-purple-100 from-black font-poppins md:to-black">
        <div class="md:flex hidden items-center gap-3 mb-8">
            <img src="/icon.svg" alt="icon yabu">
            <h2 class="text-white font-extrabold">anime<span class="text-purple-100 font-extrabold">yabu.</span></h2>
        </div>
        <RouterLink to="/"><img src="/back.svg" alt="buttom back"></RouterLink>
        <section class="flex items-center justify-center gap-4">
            <img src="/mask.svg" alt="logo tanjiro">
            <div>
                <h1 class="text-white text-5xl font-extrabold mt-4">ようこそ!</h1>
                <p class="text-white italic mt-2 text-sm font-roboto">Bienvenido(a)!</p>
            </div>
        </section>
        <div class="flex gap-4 mt-8 items">
            <p class="text-white">Tipo de persona</p>
            <input class="text-white/60" value="1" type="radio" name="natural" v-model="optionValue" id="natural">
            <label class="text-white" for="natural">Natural</label>
            <input class="text-white/60" type="radio" value="2" name="juridica" v-model="optionValue" id="juridica">
            <label class="text-white" for="juridica">Jurídica</label>
        </div>
        <form v-if="optionValue === '1'"  class="flex flex-col mt-4 mb-2 text-white" @submit="onSubmit">
            <label class="text-white">Nombre</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="text"
                placeholder="" v-model="name.value" :ref="name.ref">
            <label class="text-white mt-4">Apellido</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="text"
                placeholder="" v-model="lastname.value" :ref="lastname.ref">
            <label class="text-white mt-4">Teléfono</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="number"
                placeholder="" v-model="telephone.value" :ref="telephone.ref">
            <label class="text-white mt-4">Numero de identificación</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="number"
                placeholder="" v-model="identity_document.value" :ref="identity_document.ref">
            <label class="text-white mt-4">Email</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="email" placeholder="usuario@yabu.com" v-model="email.value" :ref="email.ref">
            <label class="text-white mt-4">Contraseña</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •" v-model="password.value" :ref="password.ref">
            <label class="text-white mt-4">Confirmar contraseña</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •" v-model="password_confirmation.value" :ref="password_confirmation.ref">
            <button type="submit" class="btn-primary">Acceder</button>
        </form>
        <form v-else-if="optionValue === '2'" class="flex flex-col mt-4 mb-2">
            <label class="text-white">Razón social</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="text"
                placeholder="">
            <label class="text-white mt-4">NIT</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="text"
                placeholder="">
            <label class="text-white mt-4">Teléfono</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="text"
                placeholder="">
            <label class="text-white mt-4">Email</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="email" placeholder="usuario@yabu.com">
            <label class="text-white mt-4">Contraseña</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •">
            <label class="text-white mt-4">Confirmar contraseña</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •">
            <button class="btn-primary">Acceder</button>
        </form>
        <Footer message="Acceder" route="/" />
    </div>
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