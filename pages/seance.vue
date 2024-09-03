<template>
  <main class="h-screen flex flex-col gap-6 items-center justify-center p-6">
    <NuxtLink
      to="/"
      class="p-2 bg-blue-dark-800 border-2 border-blue-dark-500 absolute flex items-center gap-1 text-sm top-4 left-4 rounded-lg"
    >
      <Icon name="icon-park-outline:return" size="16" />
    </NuxtLink>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-2xl">{{ seance.name }}</h1>
      <p class="flex items-center gap-2 text-lg">
        <Icon name="material-symbols:alarm-smart-wake" size="20" />
        {{ Math.floor(seance.duration / 60) }}h{{ seance.duration % 60 }}
      </p>
    </div>
    <section
      class="bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 flex flex-col gap-4 p-3"
    >
      <h3 class="font-medium">Exercises :</h3>
      <ul class="flex flex-col gap-2">
        <li
          v-for="(exercise, index) in seance.exercise"
          :key="exercise.id"
          class="flex flex-col gap-2"
        >
          <div class="flex justify-between items-center gap-2">
            <h4 class="text-xs">{{ exercise.name }}</h4>
            <p
              v-if="exercise.serie && exercise.repetition"
              class="text-xs w-fit whitespace-nowrap"
            >
              {{ exercise.serie }} x {{ exercise.repetition }}
            </p>
          </div>
          <hr
            v-if="index !== seance.exercise.length - 1"
            class="border-blue-dark-500 w-full"
          />
        </li>
      </ul>
    </section>
    <NuxtLink
      :to="route.fullPath.replace('/preview', '')"
      class="p-2 bg-emerald-600 rounded-lg text-sm flex items-center gap-1"
      >Commencer
      <Icon name="material-symbols:arrow-right-rounded" size="23" />
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { seances } from "./data.json";

const route = useRoute();
definePageMeta({
  path: "/seance/:slug/:id(\\d+)/preview",
});

console.log(route.fullPath);

const seance = seances.find((seance) => {
  return route.params.id === seance.id.toString();
});
</script>
