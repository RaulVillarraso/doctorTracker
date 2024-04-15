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
  <div id="app" class="w-screen flex flex-col items-center">
    <MainHeader />
    <div class="w-full flex flex-col items-center overflow-y-auto">
      <SeasonMenu 
        v-for="season in seasons" 
        :key="season.id" 
        :count="season.title" 
        :episode="season.completed" 
      />
    </div>
  </div>
</template>

<style scoped>
#app{
  background-image: url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-color: '#6f8ea9';
  background-blend-mode: lighten;
  background-repeat: no-repeat;
}
</style>
