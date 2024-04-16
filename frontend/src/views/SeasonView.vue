<template>
  <div class="w-full">
    <MainHeader />
    <div class="w-full flex flex-col items-center overflow-y-auto">
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
  import MainHeader from './../components/MainHeader.vue'
  import SeasonMenu from './../components/SeasonMenu.vue'
  import { getSeasons } from './../service/seriesService'

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

<style lang="scss" scoped>

</style>