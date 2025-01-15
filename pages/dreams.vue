<script setup lang="ts">
// euro * 100
const currentAmount = 1246;
const targetAmount = 440000;

const percentage = (currentAmount / targetAmount) * 100;
const percentString = percentage.toFixed(2);

const width = Math.min(percentage, 100) + "%";

const currentSplit = "75%";
</script>

<template>
  <div class="flex h-full w-full items-center justify-center px-8 py-24">
    <div class="w-full max-w-6xl text-center">
      <p class="italic">dreams come true, right?</p>

      <!-- progress -->
      <div class="mt-8 h-4 w-full overflow-hidden rounded-full bg-zinc-700">
        <div class="h-4 bg-violet-400" :style="{ width }"></div>
      </div>

      <p class="mt-4">
        currently met
        <b>{{ percentString }}%</b> (€{{ (currentAmount / 100).toFixed(2) }}) of
        my goal
      </p>

      <p class="mt-2">
        {{ currentSplit }} of my revenue goes into fulfilling this goal
      </p>
    </div>
  </div>
</template>
