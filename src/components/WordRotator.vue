<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  words: string[]
  interval?: number
}>()

const index = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    index.value = (index.value + 1) % props.words.length
  }, props.interval ?? 2600)
})

onBeforeUnmount(() => {
  if (timer !== undefined) {
    window.clearInterval(timer)
  }
})
</script>

<template>
  <span class="word-rotator" aria-hidden="true">
    <span class="word-rotator__stack" :style="{ transform: `translateY(-${index * 100}%)` }">
      <span v-for="word in words" :key="word" class="word-rotator__word">{{ word }}</span>
    </span>
  </span>
</template>

<style scoped lang="scss">
.word-rotator {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  color: var(--color-primary-light);
  padding-bottom: 0.06em;
  margin-bottom: -0.06em;
}

.word-rotator__stack {
  display: flex;
  flex-direction: column;
  transition: transform 560ms var(--motion-curve-out);
}

.word-rotator__word {
  line-height: 1;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .word-rotator__stack {
    transition: none;
  }
}
</style>
