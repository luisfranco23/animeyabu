<script setup>
import Footer from './Footer.vue';
</script>

<template>
        <div>
        <RouterLink to="/login"><img src="/back.svg" alt="buttom back"></RouterLink>
        <section class="flex items-center justify-center gap-4">
            <img src="/mask.svg" alt="logo tanjiro">
            <div>
                <h1 class="text-white text-5xl font-extrabold mt-4">ようこそ!</h1>
                <p class="text-white italic mt-2 text-sm font-roboto">Bienvenido(a)!</p>
            </div>
        </section>
        <div class="flex gap-4 mt-8 items">
            <p class="text-white">Tipo de persona</p>
            <input class="text-white/60" type="radio" name="natural" id="natural">
            <label class="text-white" for="natural">Natural</label>
            <input class="text-white/60" type="radio" name="juridica" id="juridica">
            <label class="text-white" for="juridica">Jurídica</label>
        </div>
        <form class="flex flex-col mt-4 mb-2">
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
            <button class="w-full h-[60px] bg-purple-200 mt-4 rounded-lg font-extrabold">Acceder</button>
        </form>
        </div>
    <Footer/>
</template>