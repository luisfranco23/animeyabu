<script setup>
import Login from './components/Login.vue';
</script>

<template>
  <main class="flex w-screen h-screen">
    <div class="w-1/2 h-screen sm:w-screen p-8 bg-gradient-to-t to-purple-100 from-black font-poppins">
      <RouterView></RouterView>
    </div>
    <div class="sm:hidden w-1/2 h-screen bg-black"></div>
  </main>
</template>
