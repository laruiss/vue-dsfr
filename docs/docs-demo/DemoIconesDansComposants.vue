<script lang="ts" setup>
import DsfrButton from '../../src/components/DsfrButton/DsfrButton.vue'
</script>

<template>
  <div class="fr-p-2w  flex gap-4  flex-wrap">
    <DsfrButton icon="fr-icon-close-line">
      Texte avec icône Dsfr (commence par <code>'fr-'</code>)
    </DsfrButton>

    <DsfrButton icon="ri-close-line">
      Texte avec icône unocss
    </DsfrButton>

    <DsfrButton
      :icon="{ name: 'ri-close-line', color: 'green', animation: 'flash' }"
      secondary
    >
      Texte avec icône
      <code>unocss</code>
      <span style="color: green"> verte </span>
      avec animation 'flash'
    </DsfrButton>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.gap-4 {
  gap: 1rem;
}
</style>
