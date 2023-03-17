<template>
  <div class="flex flex-1 flex-col justify-between min-h-screen">
    <!-- Header -->
    <Header />
    <!-- Content -->
    <div  class="flex flex-1 bg-slate-50 pt-20 px-10">
      <slot />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>
