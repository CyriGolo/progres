<template>
  <main class="h-screen flex flex-col gap-6 items-center justify-center p-6">
    <NuxtLink
      to="/"
      class="p-2 bg-blue-dark-800 border-2 border-blue-dark-500 absolute flex items-center gap-1 text-sm top-4 left-4 rounded-lg"
    >
      <Icon name="icon-park-outline:return" size="16" />
    </NuxtLink>
    <div
      class="flex flex-col items-start text-black bg-white p-4 pb-2 rounded-xl gap-6"
    >
      <h1 class="font-bold text-xl">
        <a
          :href="`https://www.google.com/search?q=${exercise.name.split(' ').join('+')}&source=lnms&tbm=isch`"
          target="_blank"
        >
          {{ exercise.name }}
        </a>
      </h1>
      <ul class="text-sm font-medium opacity-70">
        <li v-if="exercise.description">
          <p>{{ exercise.description }}</p>
        </li>
        <li v-if="exercise.serie" class="flex items-center gap-1">
          <Icon name="solar:clipboard-broken" size="16" />
          <p>{{ exercise.serie }} Série{{ exercise.serie > 1 ? "s" : "" }}</p>
        </li>
        <li v-if="exercise.repetition" class="flex items-center gap-1">
          <Icon name="hugeicons:equipment-bench-press" size="16" />
          <p>
            {{ exercise.repetition }} Répétition{{
              exercise.repetition > 1 ? "s" : ""
            }}
          </p>
        </li>
        <li v-if="exercise.pause" class="flex items-center gap-1">
          <Icon name="material-symbols:av-timer" size="16" />
          <p>
            {{
              Math.floor(exercise.pause / 60) >= 1
                ? `${Math.floor(exercise.pause / 60)}${
                    exercise.pause % 60
                      ? `m ${exercise.pause % 60}s`
                      : ` minute${Math.floor(exercise.pause / 60) > 1 ? "s" : ""}`
                  }`
                : `${exercise.pause % 60} seconde${
                    exercise.pause % 60 > 1 ? "s" : ""
                  }`
            }}
            de pause
          </p>
        </li>
      </ul>
      <div class="text-center w-full text-sm font-medium opacity-70">
        <p v-if="exercise.difficulty">{{ exercise.difficulty }}</p>
        <p v-if="exercise.duration">
          Temps total : {{ exercise.duration }} minute{{
            exercise.duration > 1 ? "s" : ""
          }}
        </p>
      </div>
    </div>
    <div class="flex gap-2">
      <button
        :class="{ disabled: currentExercise === 0 }"
        @click="prevExercise"
        class="p-2 bg-emerald-600 rounded-lg text-sm flex items-center gap-1"
      >
        <Icon name="material-symbols:arrow-left-rounded" size="23" />
      </button>
      <button
        v-if="currentExercise < seance.exercise.length - 1"
        @click="nextExercise"
        class="p-2 bg-emerald-600 rounded-lg text-sm flex items-center gap-1"
      >
        <Icon name="material-symbols:arrow-right-rounded" size="23" />
      </button>
      <NuxtLink
        v-else
        to="/"
        class="p-2 bg-amber-600 rounded-lg text-sm flex items-center gap-1"
      >
        Terminé ! 🏆
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { seances } from "./data.json";

const route = useRoute();
definePageMeta({
  path: "/seance/:slug/:id(\\d+)",
});

const currentExercise = ref(0);

const seance = seances.find((seance) => {
  return route.params.id === seance.id.toString();
});

const exercise = computed(() => {
  return seance.exercise[currentExercise.value];
});

const nextExercise = () => {
  if (currentExercise.value < seance.exercise.length) {
    currentExercise.value++;
  }
};

const prevExercise = () => {
  if (currentExercise.value > 0) {
    currentExercise.value--;
  }
};
</script>
