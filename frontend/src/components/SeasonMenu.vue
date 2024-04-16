<template>
  <div class="collapse bg-base-200 w-2/3 m-5">
    <input name="seasons" type="checkbox" class="peer" />
    <div
      class="collapse-title bg-dblue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis">
      {{ seasonCount }}
    </div>
    <div
      class="collapse-content bg-blue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis"
      >
      <div 
        v-for="(episode, idx) in episodes"
        :key=idx 
        >
        <div class="flex gap-3 m-2">
          <input type="checkbox"/>
          <p>{{ episode.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
  seasonCount: String,
  episodes: Array
  })

</script>

<style scoped>

</style>