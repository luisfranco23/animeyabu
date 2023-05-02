<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <div class="flex w-screen h-screen">
        <Nav/>
        <div class="bg-black h-screen w-9/12">
            <div class="m-20">
                <h1 class="text-white text-4xl font-bold">Lista de Catégorias</h1>
                <div class="flex flex-wrap gap-16 mt-8"> 
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
                    <div
                        class="bg-purple-300 w-56 h-32 relative rounded-md text-white flex items-center justify-center flex-col">
                        <h2 class="font-normal text-2xl  font-poppins">Acción </h2>
                        <p class=" absolute bottom-2 right-2 hover:underline cursor-pointer">Editar</p>
                    </div>
            </div>
        </div>
    </div>
</div></template>