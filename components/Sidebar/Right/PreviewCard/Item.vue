<template>
  <div class="p-3 hover:bg-gray-100 cursor-pointer border-b" :class="wrappedClasses">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { defaultTransition, twitterBorderColor} = useTailwindConfig()
const wrappedClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>