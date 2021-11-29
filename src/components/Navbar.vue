<template>
  <nav class="fixed top-0 left-0 right-0 bg-black">
    <ol class="flex justify-center h-16">
      <li class="flex-initial">
        <a class="animate__animated animate__bounce">{{ t('nav.about') }}</a>
      </li>
      <li class="flex-initial">
        <a>{{ t('nav.skills') }}</a>
      </li>
      <li class="flex-initial">
        <a>{{ t('nav.experiences') }}</a>
      </li>
      <li class="flex-initial">
        <a>{{ t('nav.works') }}</a>
      </li>
      <li class="flex-initial">
        <a>{{ t('nav.contact') }}</a>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style scoped>
a {
  display: inline-block;
  line-height: 64px;
  width: 64px;
  color: white;
}
</style>
