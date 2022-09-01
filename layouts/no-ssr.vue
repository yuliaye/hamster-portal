<template>
  <DefaultLayout v-bind="$attrs">
    <client-only>
      <slot></slot>
    </client-only>
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from "./default.vue"
</script>
