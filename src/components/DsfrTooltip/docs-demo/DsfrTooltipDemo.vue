<script lang="ts" setup>
import DsfrTooltip from '../DsfrTooltip.vue'
</script>

<template>
  <div
    class="flex flex-col justify-between w-full"
    style="height: 300px"
  >
    <div class="flex justify-between w-full">
      <DsfrTooltip
        on-hover
        content="Texte de l’info-bulle en haut à gauche qui peut être très très long"
      >
        Avec du texte ici
      </DsfrTooltip>
      <DsfrTooltip
        content="Texte de l’info-bulle en haut à droite qui peut être très très long"
      />
    </div>

    <div class="flex justify-center w-full">
      <DsfrTooltip
        content="Texte de l’info-bulle au centre qui peut être très très long"
      />
    </div>

    <div class="flex  justify-between w-full">
      <DsfrTooltip
        content="Texte de l’info-bulle en bas à gauche qui peut être très très long"
      />
      <DsfrTooltip
        content="Texte de l’info-bulle en bas à droite qui peut être très très long"
      />
    </div>
  </div>
</template>
