<template>
  <div class="w-full">
    <div class="w-full absolute top-36 flex flex-col items-center">
      <SeasonMenu 
        v-for="season in seasons" 
        :key="season._id" 
        :seasonCount="season.seasonCount"
        :seasonId="season._id"
        :episodes="season.episodes" 
      />
    </div>
  </div>
</template>

<script setup>
  import { onBeforeMount, ref } from 'vue';
  import SeasonMenu from './../components/SeasonMenu.vue'
  import { getSeasons } from './../service/seriesService'

  const lol = 0
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

<style scoped>

</style>