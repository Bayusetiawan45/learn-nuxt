<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @on-success="handleFormSuccess" />
      </div>
      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script lang="ts" setup>
import { TweetType } from '~~/types/Tweet';

const loading = ref(false);
const homeTweets = ref<Ref | TweetType[]>([]);
const { twitterBorderColor } = useTailwindConfig();

const user = {
  profileImage: 'https://picsum.photos/200/200',
};

const tweets: TweetType[] = [
  {
    id: '1',
    text: 'What going on?',
    mediaFiles: [
      {
        id: '1',
        url: 'https://picsum.photos/200/200',
      },
    ],
    author: {
      id: '1',
      name: 'Bayu Setiawan',
      handle: 'test author',
      profileImage: 'https://picsum.photos/200/200',
    },
    replyTo: {
      id: '2',
      author: {
        id: '2',
        name: 'tiyas',
        handle: 'test reply',
        profileImage: 'https://picsum.photos/200/200',
      },
    },
    postedAtHuman: '12 jan 2022',
  },
  {
    id: '2',
    text: 'What going on?',
    mediaFiles: [
      {
        id: '1',
        url: 'https://picsum.photos/200/200',
      },
    ],
    author: {
      id: '1',
      name: 'Bayu Setiawan',
      handle: 'test author',
      profileImage: 'https://picsum.photos/200/200',
    },
    replyTo: {
      id: '2',
      author: {
        id: '2',
        name: 'tiyas',
        handle: 'test reply',
        profileImage: 'https://picsum.photos/200/200',
      },
    },
    postedAtHuman: '12 jan 2022',
  },
];

onBeforeMount(async () => {
  loading.value = true;
  try {
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

const handleFormSuccess = (tweet: TweetType) => {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}

onMounted(async () => {
  const res = await $fetch('/api/tweet/tweets')
  console.log({ res });
})
</script>
