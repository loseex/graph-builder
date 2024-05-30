<script lang="ts">
import { useActions } from "@/shared/hooks/redux.actions";

export default {
  mounted() {
    this.$nextTick(() => {
      const { setClientResolution } = useActions();
      const _container = this.$refs.svg;
      setClientResolution({
        width: (_container as SVGAElement).clientWidth,
        height: (_container as SVGAElement).clientHeight,
      });
    });
  },
};
</script>

<template>
  <div class="w-full h-full min-h-screen relative">
    <svg class="w-full h-full min-h-screen" ref="svg">
      <circle cx="50%" cy="50%" r="20" fill="var(--color-point-primary)" />
    </svg>
  </div>
</template>
