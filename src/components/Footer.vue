<script setup>

defineProps({
    message: String,
    route: String
})

</script>

<template>
    <footer>
        <div class="flex mt-8 gap-8 items-center justify-center">
            <div class="w-20 h-0.5 bg-white"></div>
            <p class="text-white text-sm">Logueate con RRSS</p>
            <div class="w-20 h-0.5 bg-white"></div>
        </div>
        <div class="flex items-center gap-11 justify-center mt-8">
            <img class="cursor-pointer" src="/instagram.svg" alt="Logo the instagram">
            <img class="cursor-pointer" src="/twitter.svg" alt="logo the instagram">
            <img class="cursor-pointer" src="/facebook.svg" alt="logo the facebook">
        </div>
        <p class="text-white text-sm text-center mt-8 font-roboto">Quieres registrarte?
            <span class="text-purple-200 font-roboto font-thin cursor-pointer"><router-link :to="route" >{{ message || 'Acceder' }}</router-link></span></p>
    </footer>
</template>