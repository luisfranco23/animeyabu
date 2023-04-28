<script setup>
import Footer from './Footer.vue';
</script>

<template>
    <main>
       <RouterLink to="/login"> <img src="/back.svg" alt="buttom back"></RouterLink>
        <section class="flex items-center flex-col">
            <img src="/logo.svg" alt="logo tanjiro">
            <h1 class="text-white text-5xl font-extrabold mt-4">ひさしぶり!</h1>
            <p class="text-white italic mt-2 text-sm font-roboto">¡Hola, te extrañamos!</p>
        </section>
        <form class="flex flex-col mt-4 mb-2">
            <label class="text-white">Email</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="email"
                placeholder="Email">
            <label class="text-white mt-4">Contraseña</label>
            <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100"
                type="password" placeholder="• • • • • • •">
            <p class="text-purple-200 text-sm mt-2 text-right cursor-pointer">¿Olvido la contraseña</p>
            <button class="w-full h-[60px] bg-purple-200 mt-4 rounded-lg font-extrabold">Acceder</button>
        </form>
        <Footer/>
    </main>
</template>

<style></style>