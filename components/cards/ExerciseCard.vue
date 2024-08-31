<template>
    <div class="flex flex-col items-center bg-blue-dark-950 p-3 rounded-xl gap-2.5 shadow border-2 border-white/30 select-none">
        <p v-if="title" class="text-xl font-bold">{{ title }}</p>
    </div>
</template>


<script>
export default {
    name: "ExerciseCard",
    inheritAttrs: false,
    props: {
        icon: String,
        title: String,
    }
};
</script>
