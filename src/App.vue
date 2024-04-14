<script setup>
  import { onMounted, ref } from 'vue';
  import MainHeader from './components/MainHeader.vue'
  import SeasonMenu from './components/SeasonMenu.vue'
  import { getSeasons } from './service/seriesService'

  const seasons = ref([])

    onMounted(async () => {
      try {
        seasons.value = await getSeasons()
      } catch (error) {
        console.log(error)
      }
    })

</script>

<template>
  <div id="app" class="bg-lblue-tardis h-screen w-screen flex flex-col items-center">
    <MainHeader />
    <SeasonMenu 
    v-for="season in seasons" 
    :key="season.id" 
    :count="season.title" 
    :episode="season.completed" 
    />
  </div>
</template>

<style scoped>

</style>
