<template>
  <div class="flex flex-col">
    <!-- Preview Card: Whats Happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="(item, index) in whatHappeningItems"
        :key="index"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md">{{ item.title }}</h2>
          <span class="text-xs text-gray-400">{{ item.count }}</span>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- Preview Card: Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="(item, index) in whoToFollows"
        :key="index"
      >
        <div class="flex flex-row justify-between p-2 items-center ">
          <div class="flex">
            <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name" />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900">{{ item.name }}</h1>
              <span class="text-xs text-gray-400">{{ item.handle }}</span>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script lang="ts" setup>
const whatHappeningItems = ref([
  {
    title: 'Space X',
    count: '18.8k Tweets',
  },
  {
    title: '#CodingIsFun',
    count: '8.8k Tweets',
  },
  {
    title: '#AtfForAll',
    count: '1.8k Tweets',
  },
]);
const whoToFollows = ref([
  {
    name: 'Bayu Setiawan',
    handle: '@bayusetiawan',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@joebiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Tiyas Akbar',
    handle: '@tiyasakbar',
    image: 'https://picsum.photos/200/200'
  },
]);
</script>
