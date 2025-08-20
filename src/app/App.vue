<script setup lang="ts">
import { SVGCheckcircleoutlined24, UListItem, USidebar } from '@uzum/ui-kit';
</script>

<template>
  <div class="wrapper">
    <u-sidebar class="sidebar" theme="dark" v-bind="{ modelValue: false }">
      <template #content>
        <div class="p-1">
          <router-link v-slot="{ navigate }" to="/" custom>
            <u-list-item theme="dark" align="center" @click="navigate">
              <template #prepend>
                <s-v-g-checkcircleoutlined24 width="20px" height="20px" />
              </template>
              Список листингов
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
