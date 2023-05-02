<script setup>
</script>

<template>
    <div id="default-carousel" class="relative w-full h-[600px]" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-auto overflow-hidden rounded-lg md:h-[600px]">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/tanjiro.svg"
                    class="absolute block w-full md:h-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="tanjiro">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/kyojuro.svg"
                    class="absolute block w-full md:h-[600px] h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="kyojuro">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/inosuke.svg"
                    class="absolute block w-full md:h-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="inosuke">
            </div>
        </div>
    </div>
</template>