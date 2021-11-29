<template>
  <p>{{ t('hello') }}</p>
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

<i18n>
{
  "zh": {
    "hello": "你好"
  },
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
