<script setup>
  import { onBeforeMount, ref } from 'vue';
  import MainHeader from './components/MainHeader.vue'
  import SeasonMenu from './components/SeasonMenu.vue'
  import { getSeasons } from './service/seriesService'

  const seasons = ref([])

  const handleSeasons = async () => {
    seasons.value = await getSeasons()
    console.log(seasons._rawValue)
  }

    onBeforeMount(async () => {
      try {
        handleSeasons()
      } catch (error) {
        console.log(error)
      }
    })

</script>

<template>
  <div id="app" class="w-screen flex flex-col items-center bg-lblue-tardis">
    <MainHeader />
    <div class="w-full flex flex-col items-center overflow-y-auto">
      <SeasonMenu 
        v-for="season in seasons" 
        :key="season._id" 
        :seasonCount="season.seasonCount" 
        :episodes="season.episodes" 
      />
    </div>
  </div>
</template>

<style scoped>

</style>
