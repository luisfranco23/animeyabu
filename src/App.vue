<script setup>
import Carousel from './components/Carrusel.vue'
</script>

<template>
  <main class="flex w-screen">
    <div class="md:w-1/2 w-screen p-8 bg-gradient-to-t to-purple-100 from-black font-poppins md:to-black">
      <div class="md:flex hidden items-center gap-3 mb-8">
        <img src="/icon.svg" alt="icon yabu">
        <h2 class="text-white font-extrabold">anime<span class="text-purple-100 font-extrabold">yabu.</span></h2>
      </div>
      <RouterView></RouterView>
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
  </main>
</template>
