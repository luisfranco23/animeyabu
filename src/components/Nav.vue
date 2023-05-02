<script setup></script>

<template>
    <nav class="bg-purple-300 w-1/4 text-white p-8">
        <div class="md:flex hidden items-center gap-3 mb-8">
            <img src="/icon.svg" alt="icon yabu">
            <h2 class="text-white font-extrabold">anime<span class="text-purple-100 font-extrabold">yabu.</span></h2>
        </div>
        <h2 class="font-bold">Categorías</h2>
        <ul class="list-disc ml-10 cursor-pointer">
            <li class="hover:underline">Ver todas</li>
            <li class="hover:underline">Crear</li>
        </ul>
        <h2 class="font-bold cursor-pointer" @click="deleteSesion">Cerrar sesión</h2>
    </nav>
</template>