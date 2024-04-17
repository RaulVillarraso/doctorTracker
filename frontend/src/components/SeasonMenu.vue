<template>
  <div className="collapse bg-base-200 w-2/3 m-5">
    <input name="seasons" type="checkbox" className="peer" />
    <div
      className="collapse-title bg-dblue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis">
      {{ seasonCount }}
    </div>
    <div
      className="collapse-content bg-blue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis"
      >
      <div 
        v-for="(episode, idx) in episodes"
        :key=idx 
        >
        <div className="flex gap-3 m-2">
          <input type="checkbox" @change="handleWatch(seasonId, parseInt(episode.name.slice(0, 2)))" :checked="episode.watched"/>
          <p>{{ episode.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { checkWatched } from '../service/seriesService';

  const handleWatch = async (id, episode) => {
    await checkWatched(id, episode)
  }

  const props = defineProps({
  seasonCount: String,
  episodes: Array,
  seasonId: String
  })

</script>

<style scoped>

</style>