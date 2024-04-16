<script setup>
  import { onBeforeMount, ref } from 'vue';
  import MainHeader from './components/MainHeader.vue'
  import SeasonMenu from './components/SeasonMenu.vue'
  import { getSeasons } from './service/seriesService'
import SeasonView from './views/SeasonView.vue';

  const seasons = ref([])

  const handleSeasons = async () => {
    seasons.value = await getSeasons()
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
    <SeasonView />
  </div>
</template>

<style scoped>

</style>
