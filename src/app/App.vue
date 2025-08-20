<script setup lang="ts">
import {
  SVGCheckcircleoutlined24,
  SVGHeartduocolor28,
  UListItem,
  USidebar,
  UTypography,
} from '@uzum/ui-kit';
</script>

<template>
  <div class="wrapper">
    <u-sidebar class="sidebar" theme="dark" v-bind="{ modelValue: false }">
      <template #content>
        <u-typography color="accented">Домашняя страница</u-typography>
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
