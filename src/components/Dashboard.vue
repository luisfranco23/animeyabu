<script setup>

const deleteSesion = () =>{
    localStorage.removeItem(user)
    localStorage.removeItem(token)
}

const user = localStorage.getItem(user)
</script>

<template>
    <div class="flex w-screen h-screen">
        <nav class="bg-purple-300 w-1/4 text-white">
            <h2 class="font-bold">Categorías</h2>
            <ul class="list-disc ml-10 cursor-pointer">
                <li class="hover:underline">Ver todas</li>
                <li class="hover:underline">Crear</li>
            </ul>
            <h2 class="font-bold cursor-pointer" @click="deleteSesion" >Cerrar sesión</h2>
        </nav>
        <div class="bg-black h-screen w-9/12">
            <div class="m-20 flex-col">
                <h1 class="text-white text-2xl">Hola, <span class="font-extrabold">{{ `${user.name} ${user.lastname}` }}</span></h1>
                <p class="text-white mt-8">Selecciona una opción:</p>
                <button class="md:w-80 w-full btn-primary">Ver todas las categorias</button>
                <button class="md:w-80 w-full btn-primary">Crear categorías</button>
                <button class="md:w-80 w-full btn-primary" @click="deleteSesion">Cerrar sesión</button>
            </div>
        </div>
    </div>
</template>