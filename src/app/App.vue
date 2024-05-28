<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="w-full max-w-[1440px] h-full min-h-screen flex flex-col">
      <div
        class="w-full h-fit p-2 sm:p-20 flex justify-center items-start gap-2 flex-wrap-reverse sm:flex-nowrap"
      >
        <div class="w-full sm:w-1/2">
          <fwb-textarea
            v-model="state.data"
            :rows="4"
            label="Введите входные данные"
            placeholder="Введите входные данные"
          />
          <fwb-button color="purple" size="lg" class="w-full">
            <span class="font-medium">Создать</span>
          </fwb-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FwbTextarea } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { ref } from "vue";

const state = ref({
  data: "",
});
</script>
