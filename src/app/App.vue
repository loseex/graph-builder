<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="w-full max-w-[1440px] h-full min-h-screen flex flex-col">
      <div
        class="w-full h-fit p-2 sm:p-20 flex justify-center items-start gap-2 flex-wrap-reverse sm:flex-nowrap"
      >
        <div class="w-full xl:w-1/2 *:mb-5">
          <div>
            <fwb-textarea
              v-model="state.data"
              :rows="4"
              label="Введите входные данные"
              placeholder="Введите входные данные"
            />
          </div>
          <fwb-button
            color="purple"
            size="lg"
            class="w-full"
            @click="() => submit(state.data)"
          >
            <span class="font-medium">Создать</span>
          </fwb-button>
        </div>
      </div>
      <div>
        <div>
          <!-- todo -->
          <svg class="w-full min-h-screen relative">
            <circle cx="50%" cy="50%" fill="#030303" r="10" />
            <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="#030303" />
          </svg>
          <!-- todo -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GraphService } from "@/shared/services/graph/graph.service";
import { FwbTextarea } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { ref } from "vue";

const graphService = new GraphService();

const submit = (args: string) => {
  graphService.setup(args);
};

const state = ref({
  data: "[A,B,10];[A,C,5]",
});
</script>
