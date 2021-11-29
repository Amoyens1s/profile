<template>
  <nav class="fixed top-0 left-0 right-0">
    <ol class="flex absolute left-0 right-0">
      <li class="flex-initial">
        <a>{{ t('nav.about') }}</a>
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
