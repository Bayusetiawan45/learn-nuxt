<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No tweets 😢</p>
    </div>
    <div
      v-else
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="classes"
      v-for="tweet in props.tweets"
      :key="tweet.id"
    >
      <TweetItem :tweet="tweet" compact />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TweetType } from '~~/types/Tweet';

const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const classes = `${twitterBorderColor} ${defaultTransition}`

const props = defineProps({
  tweets: {
    type: Array<TweetType>,
    required: true,
  },
});

const isEmptyArray = computed(() => props.tweets.length === 0);

</script>
