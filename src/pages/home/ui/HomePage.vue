<script setup lang="ts">
import { UButton } from '@uzum/ui-kit';

import { useGrowthbook } from '$shared/helpers';

import { useFaq, useFaqEvents } from '../business';
const { faqData, isPending, isError, error } = useFaq();
const { pageView } = useFaqEvents();
const growthbook = useGrowthbook();
const isShopSSRRedirectOn = growthbook.isOn('shop_ssr_redirect');
</script>
<template>
  <div class="pt-4">
    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">Error: {{ error }}</div>
    <div v-else>
      <h1>HOME</h1>
      <h2>Shop SSR Redirect: {{ isShopSSRRedirectOn }}</h2>
      <u-button @click="pageView">Send page view event</u-button>
      <pre>{{ faqData }}</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
