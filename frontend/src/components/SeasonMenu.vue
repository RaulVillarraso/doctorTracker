<template>
  <div class="collapse bg-base-200 w-2/3 m-5">
    <input type="checkbox" class="peer" />
    <div
      class="collapse-title bg-dblue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis">
      {{ count }}
    </div>
    <div
      class="collapse-content bg-blue-tardis text-light-tardis peer-checked:bg-blue-tardis peer-checked:text-light-tardis">
      {{ episode }}
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
  count: String,
  episode: Boolean
  })

</script>

<style scoped>

</style>