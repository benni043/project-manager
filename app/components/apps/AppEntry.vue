<script setup lang="ts">
import {convertFileSrc} from "@tauri-apps/api/core";

const props = defineProps<{
  app: App,
  isFavorite: boolean
}>()

const emits = defineEmits<{ setState: [newState: boolean] }>()

let active = ref(props.isFavorite)

watch(active, () => {
  emits("setState", active.value)
})
</script>

<template>
  <div class="mx-5 py-2 flex items-center">
    <img v-if="app.icon_path" class="w-12" :src="convertFileSrc(app.icon_path)" :alt="app.name">
    <div>
      <h2 class="font-bold"> {{ app.name }}</h2>
      <div> {{ app }}</div>
    </div>
    <button @click="active = !active">
      <Icon v-if="active" name="ph:star-fill" size="24"/>
      <Icon v-else name="ph:star" size="24"/>
    </button>
  </div>
</template>

<style scoped>

</style>