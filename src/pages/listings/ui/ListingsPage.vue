<script setup lang="ts">
import {
  type ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table';
import {
  UAlert,
  UButton,
  UGap,
  ULoader,
  UPaginationV2,
  USelectV2,
  UTextField,
  UTypography,
} from '@uzum/ui-kit';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import type { BaseJsonDto, Listing } from '$shared/api/api-service/api';
import { listingsApi } from '$shared/api/listings';
import BaseTable from '$shared/ui/base-table/base-table.vue';

const router = useRouter();
const listings = ref<Listing[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
const currentPage = ref(1);
const totalPages = ref(0);
const totalItems = ref(0);
const pageSize = ref(50);
const searchQuery = ref('');
const link = ref('');
const seoTitle = ref('');
const statusFilter = ref<{ value: string | null } | null>(null);
const categoryFilter = ref<number | undefined>(undefined);
const columnHelper = createColumnHelper<Listing>();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('seo_title', {
    header: 'SEO Title',
    cell: (info) => formatSeoTitle(info.getValue()),
  }),
  columnHelper.accessor('link', {
    header: 'Link',
    cell: (info) => formatLink(info.getValue()),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('category_id', {
    header: 'Category ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('updated_at', {
    header: 'Updated',
    cell: (info) => formatDate(info.getValue()),
  }),
] as ColumnDef<Listing>[];

const table = useVueTable({
  get data() {
    return listings.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
});

const loadListings = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await listingsApi.getListings({
      page: currentPage.value,
      limit: pageSize.value,
      query_text: searchQuery.value || undefined,
      link: link.value || undefined,
      seo_title: seoTitle.value || undefined,
      status: statusFilter.value?.value || undefined,
      category_id: categoryFilter.value,
    });

    listings.value = response.data.data;
    totalPages.value = response.data.totalPages;
    totalItems.value = response.data.total;
  } catch (err) {
    error.value = 'Failed to load listings';
    console.error('Error loading listings:', err);
  } finally {
    isLoading.value = false;
  }
};

const statusOptions = [
  { value: 'ACTIVE', label: 'Active' },
  { value: 'NOT_ACTIVE', label: 'Not Active' },
];

const onPageChange = (page: number) => {
  currentPage.value = page;
  loadListings();
};

const onRowClick = (listing: Listing) => {
  router.push(`/listings/${listing.id}`);
};

const applyFilters = () => {
  currentPage.value = 1;
  loadListings();
};

const clearFilters = () => {
  searchQuery.value = '';
  link.value = '';
  seoTitle.value = '';
  statusFilter.value = null;
  categoryFilter.value = undefined;
  currentPage.value = 1;
  loadListings();
};

const formatSeoTitle = (title: BaseJsonDto | null | undefined) => {
  return title?.ru || title?.uz || '-';
};

const formatLink = (link: BaseJsonDto | null | undefined) => {
  return link?.ru || link?.uz || '-';
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

onMounted(() => {
  loadListings();
});
</script>

<template>
  <div class="listings-page">
    <div class="listings-page__header">
      <u-typography variant="HeadlineLBold">Управление листингами</u-typography>
    </div>

    <u-gap size="large" />

    <div class="listings-page__filters">
      <div class="filters-grid">
        <u-text-field
          v-model="searchQuery"
          label="Search"
          placeholder="Поиск по query text..."
          @keyup.enter="applyFilters"
        />

        <u-text-field
          v-model="link"
          label="Link"
          placeholder="Поиск по ссылке..."
          @keyup.enter="applyFilters"
        />

        <u-text-field
          v-model="seoTitle"
          label="SEO Title"
          placeholder="Поиск по SEO заголовку..."
          @keyup.enter="applyFilters"
        />

        <u-select-v2
          v-model="statusFilter"
          type="single"
          :values="statusOptions"
          :filter="{ placeholder: 'Поиск статуса...' }"
          valueIdKey="value"
        />

        <u-text-field
          v-model="categoryFilter"
          label="Category ID"
          placeholder="Поиск по category ID"
          @keyup.enter="applyFilters"
        />
      </div>

      <u-gap size="medium" />

      <div class="filters-actions">
        <u-button @click="applyFilters">Применить</u-button>
        <u-button variant="secondary-neutral" @click="clearFilters">Сбросить</u-button>
      </div>
    </div>

    <u-gap size="large" />

    <div v-if="isLoading" class="listings-page__loading">
      <u-loader />
    </div>

    <u-alert v-else-if="error" variant="negative" class="listings-page__error">
      {{ error }}
    </u-alert>

    <div v-else class="listings-page__content">
      <div class="listings-page__table-header">
        <u-typography variant="HeadlineMMedium">Listings ({{ totalItems }} штук)</u-typography>
      </div>

      <u-gap size="medium" />

      <base-table
        :table="table"
        class="listings-table"
        size="medium"
        :row-clickable="true"
        @rowClick="onRowClick"
      />

      <u-gap size="large" />

      <div class="listings-page__pagination">
        <u-pagination-v2
          :model-value="currentPage"
          :total="totalItems"
          :per-page="pageSize"
          @update:modelValue="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listings-page {
  padding: 24px;

  &__header {
    margin-bottom: 24px;
  }

  &__filters {
    .filters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .filters-actions {
      display: flex;
      gap: 12px;
    }
  }

  &__loading {
    display: flex;
    justify-content: center;
    padding: 48px;
  }

  &__error {
    margin-bottom: 24px;
  }

  &__table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
