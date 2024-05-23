<template>
  <div>
    <!-- <p>Some default layout content shared across all pages</p>
    <slot /> -->
    <nav class="p-6 flex items-center justify-between bg-teal-800">
      <NuxtLink to="/" class="text-xl text-white">Djob</NuxtLink>
      <div class="flex items-center space-x-4">
        <NuxtLink to="/" class="text-white hover:text-teal-300">Home</NuxtLink>
        <NuxtLink to="/browse" class="text-white hover:text-teal-300">Browse</NuxtLink>
      </div>
    </nav>
    <slot />
    <footer class="p-6 flex flex-warp items-center justify-between bg-gray-800">
      <p class="text-gray-300">Copyright (c) 2023 - Djob</p>
      <div class="flex mt-6 md:mt-0 items-center space-x-4">
        <NuxtLink to="/login" class="py-4 px-6 bg-teal-900 hover:bg-teal-700 text-white rounded-xl">Log in</NuxtLink>
        <NuxtLink to="/signup" class="py-4 px-6 bg-teal-900 hover:bg-teal-700 text-white rounded-xl">Sign up</NuxtLink>
      </div>
    </footer>
  </div>
</template>