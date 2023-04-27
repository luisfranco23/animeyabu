<script setup>
</script>

<template>
  <main class="h-screen w-screen p-8 bg-gradient-to-t to-purple-100 from-black font-poppins">
    <img src="/public/back.svg" alt="buttom back">
    <section class="flex items-center flex-col">
      <img src="/public/logo.svg" alt="logo tanjiro">
      <h1 class="text-white text-5xl font-extrabold mt-4">ひさしぶり!</h1>
      <p class="text-white italic mt-2 text-sm font-roboto">¡Hola, te extrañamos!</p>
    </section>
    <form class="flex flex-col mt-4 mb-2">
      <label class="text-white">Email</label>
      <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100" type="email" placeholder="Email">
      <label class="text-white mt-4">Contraseña</label>
      <input class="h-[64px] rounded-lg border-2 border-white bg-white/40 p-4 placeholder:text-gray-100 outline-none" type="password" placeholder="• • • • • • •">
      <p class="text-purple-200 text-sm mt-2 text-right cursor-pointer">¿Olvido la contraseña</p>
      <button class="w-full h-[60px] bg-purple-200 mt-4 rounded-lg font-extrabold" >Acceder</button>
    </form>
    <div class="flex mt-8 gap-8 items-center justify-center">
      <div class="w-20 h-0.5 bg-white"></div>
      <p class="text-white text-sm">Logueate con RRSS</p>
      <div class="w-20 h-0.5 bg-white"></div>
    </div>
    <aside class="flex items-center gap-11 justify-center mt-8">
      <img class="cursor-pointer" src="/public/instagram.svg" alt="Logo the instagram">
      <img class="cursor-pointer" src="/public/twitter.svg" alt="logo the instagram">
      <img class="cursor-pointer" src="/public/facebook.svg" alt="logo the facebook">
    </aside>
    <p class="text-white text-sm text-center mt-8 font-roboto">Quieres registrarte? <span class="text-purple-200 font-roboto font-thin cursor-pointer">Registrate</span></p>
  </main>
</template>

<style>


</style>