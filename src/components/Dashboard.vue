<script setup>
import { RouterLink } from 'vue-router';


const deleteSesion = () => {
    localStorage.removeItem(user)
    localStorage.removeItem(token)
}

// const user = localStorage.getItem(user)
</script>

<template>
    <div class="flex w-screen h-screen">
        <nav class="bg-purple-300 w-1/4 text-white p-8">
            <div class="md:flex hidden items-center gap-3 mb-8">
                <img src="/icon.svg" alt="icon yabu">
                <h2 class="text-white font-extrabold">anime<span class="text-purple-100 font-extrabold">yabu.</span></h2>
            </div>
            <h2 class="font-bold">Categorías</h2>
            <ul class="list-disc ml-10 cursor-pointer">
                <li class="hover:underline"><RouterLink to="/categories">Ver todas</RouterLink></li>
                <li class="hover:underline">Crear</li>
            </ul>
            <h2 class="font-bold cursor-pointer" @click="deleteSesion">Cerrar sesión</h2>
        </nav>
        <div class="bg-black h-screen w-9/12">
            <div class="m-20 flex flex-col gap-4">
                <h1 class="text-white text-2xl">Hola, <span class="font-extrabold">{{ `${user?.name} ${user?.lastname}`
                }}</span></h1>
                <p class="text-white mt-8">Selecciona una opción:</p>
                <button class="md:w-80 w-full btn-primary"><RouterLink to="/categories"> Ver todas las categorias</RouterLink></button>
                <button class="md:w-80 w-full btn-primary"><RouterLink to="/category">Crear categorías</RouterLink></button>
                <button class="md:w-80 w-full btn-primary" @click="deleteSesion">Cerrar sesión</button>
            </div>
        </div>
    </div>
</template>