<template>
  <div>
    <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const { postTweet } = useTweet()

const handleFormSubmit = (data: {}) => {
  postTweet(data)
}

</script>