<template>
  <NuxtLink to="#" class="flex items-center p-3 rounded-full w-min hover:bg-gray-200"  :class="defaultTransition">
    <div class="w-6 h-6">
      <slot name="icon"></slot>
    </div>
    <div class="ml-4 text-xl hidden xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>
