<template>
  <client-only>
    <DefaultLayout v-bind="$attrs">
      <slot></slot>
    </DefaultLayout>
  </client-only>
</template>

<script setup>
  import DefaultLayout from "./default.vue"
</script>
