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
  </div>
</template>