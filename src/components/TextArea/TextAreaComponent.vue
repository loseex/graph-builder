<script setup lang="ts">
import { FwbTextarea, FwbButton } from "flowbite-vue";
import { ref } from "vue";

const ValidationError = ref(false);
const state = ref({
  value: "",
});

const check = (value: string) => {
  const regexp = new RegExp(/^(\([A-Z],[A-Z],\d+\);\n?)*$/);
  ValidationError.value = !regexp.test(value.replace(/\s/g, ""));
};
</script>

<template>
  <div class="w-full lg:w-1/2 h-full">
    <fwb-textarea
      v-model="state.value"
      :rows="4"
      label="Введите входные данные"
      placeholder="Введите входные данные"
      @keyup="check($event.target.value)"
    />
    <div class="flex flex-col gap-2">
      <div
        v-show="ValidationError"
        class="w-full h-fit p-5 bg-red-100 border-red-200 border rounded-md"
      >
        <p class="font-bold mb-1">Неверный формат записи данных.</p>
        <p>Верный формат: <span class="font-bold">(A,B,10);</span></p>
      </div>
      <fwb-button
        color="purple"
        size="lg"
        class="w-full transition"
        :disabled="ValidationError || state.value.length <= 3"
      >
        <span class="font-medium">Создать</span>
      </fwb-button>
    </div>
  </div>
</template>
