<template>
  <div class="flex justify-between items-center text-white bg-green-600 py-4 px-10 shadow-md fixed top-0 left-0 right-0">
    <div class="text-3xl">
      NuxMedia
    </div>
    <div class="flex space-x-4 text-md">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
      <NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink>
    </div>
  </div>
</template>