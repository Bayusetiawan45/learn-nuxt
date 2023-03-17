<template>
  <div class="border-x min-h-screen" :class="twitterBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md">
      <h2 class="text-xl text-gray-800 font-bold">{{ props.title }}</h2>
    </div>
    <div v-if="props.loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor">
      <UISpinner />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})
const { twitterBorderColor } = useTailwindConfig()
</script>