<template>
  <main class="h-screen flex flex-col items-center justify-center p-6">
    <ul class="flex flex-col gap-3">
      <li v-for="seance in seances" class="w-full">
        <NuxtLink
          :to="`/seance/${slugify(seance.name)}-${seance.id}`"
          class="flex justify-center p-2 rounded-lg bg-blue-dark-950 border-2 border-blue-dark-500"
        >
          {{ seance.name }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { seances } from "./data.json";

definePageMeta({
  layout: "default",
});
</script>
