<template>
  <p>{{ t("hello") }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

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
    "about": "关于我",
    "skills": "技能",
    "experiences": "经验",
    "works": "工作",
    "contact": "联系我"
  },
  "en": {
    "about": "About",
    "skills": "Skills",
    "experiences": "Experiences",
    "works": "Work",
    "contact": "Contact" 
  }
}
</i18n>
