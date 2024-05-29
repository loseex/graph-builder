<script setup lang="ts">
import TextAreaComponent from "@/components/TextArea/TextAreaComponent.vue";
import BannerComponent from "@/components/Banner/BannerComponent.vue";
import GraphComponent from "@/components/Graph/GraphComponent.vue";
</script>

<template>
  <div>
    <div
      class="w-full flex justify-center items-start gap-10 p-5 lg:p-10 flex-wrap-reverse lg:flex-nowrap"
    >
      <text-area-component />
      <banner-component />
    </div>
    <hr class="w-full" />
    <graph-component />
  </div>
</template>

<style></style>
