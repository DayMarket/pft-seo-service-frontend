<script setup lang="ts">
import {
  SVGCheckcircleoutlined24,
  SVGFlagrussiamulticolor24,
  SVGFlaguzbekistanmulticolor24,
  SVGHeartduocolor28,
  UListItem,
  USidebar,
  UTypography,
} from '@uzum/ui-kit';
import { useI18n } from 'vue-i18n';

import { getLocale } from '$shared/i18n/get-locale.ts';
import { setLocale } from '$shared/i18n/set-locale.ts';
import { ELocale } from '$shared/i18n/types.ts';

const { t } = useI18n();

const availableLocales = [
  {
    key: ELocale.RU,
    name: 'Русский (RUS)',
    icon: SVGFlagrussiamulticolor24,
  },
  {
    key: ELocale.UZ,
    name: "O'zbek (UZB)",
    icon: SVGFlaguzbekistanmulticolor24,
  },
];
</script>

<template>
  <div class="wrapper">
    <u-sidebar class="sidebar" theme="dark" v-bind="{ modelValue: false }">
      <template #content>
        <u-typography color="accented">
          {{ t('home') }}
        </u-typography>
        <div class="p-1">
          <router-link v-slot="{ navigate }" to="/" custom>
            <u-list-item theme="dark" align="center" @click="navigate">
              <template #prepend>
                <s-v-g-checkcircleoutlined24 width="20px" height="20px" />
              </template>
              Sandbox
            </u-list-item>
          </router-link>
          <router-link v-slot="{ navigate }" to="/auth" custom>
            <u-list-item theme="dark" align="center" @click="navigate">
              <template #prepend>
                <s-v-g-heartduocolor28 width="20px" height="20px" />
              </template>
              Auth
            </u-list-item>
          </router-link>
        </div>
      </template>
      <template #footer>
        <u-list-item
          v-for="locale in availableLocales"
          :key="locale.key"
          theme="dark"
          align="center"
          :active="locale.key === getLocale()"
          @click.stop.prevent="setLocale(locale.key)"
        >
          <template #prepend>
            <component :is="locale.icon" width="24" height="24" />
          </template>
          {{ locale.name }}
        </u-list-item>
      </template>
    </u-sidebar>
    <RouterView class="view" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  background: #f0f1f3;
}

.view {
  flex-grow: 1;
}

.sidebar {
  top: 0;
  position: sticky;
}
</style>
