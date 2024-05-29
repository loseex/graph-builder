<script setup lang="ts">
import { FwbTextarea } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
</script>

<template>
  <div class="w-full lg:w-1/2 h-full">
    <fwb-textarea
      :rows="4"
      label="Введите входные данные"
      placeholder="Введите входные данные"
    />
    <div class="flex flex-col gap-2">
      <fwb-button color="purple" size="lg" class="w-full transition">
        <span class="font-medium">Создать</span>
      </fwb-button>
    </div>
  </div>
</template>
