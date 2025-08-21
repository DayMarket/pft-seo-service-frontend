<script setup lang="ts">
import {
  type ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useVueTable,
} from '@tanstack/vue-table';
import {
  FlexRender,
  UAlert,
  UButton,
  UCheckbox,
  UGap,
  ULoader,
  UPaginationV2,
  UPopup,
  UPopupBody,
  UPopupFooter,
  UPopupHeader,
  USelectV2,
  UTable,
  UTextField,
  UTypography,
} from '@uzum/ui-kit';
import { computed, h, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import type { BaseJsonDto, Listing } from '$shared/api/api-service/api';
import { listingsApi } from '$shared/api/listings';

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
const isDeleting = ref(false);
const showDeleteConfirm = ref(false);
const rowSelection = ref({});
const columnHelper = createColumnHelper<Listing>();

const columns = [
  {
    header: ({ table: table2 }: any) => {
      return h(
        'div',
        {
          class: ['d-flex', 'justify-content-center', 'align-items-center'],
        },
        [
          h(UCheckbox, {
            modelValue: table2.getIsAllRowsSelected(),
            indeterminate: table2.getIsSomeRowsSelected(),
            onInput: (e: any) => {
              table2.getToggleAllRowsSelectedHandler()(e);
            },
          }),
        ],
      );
    },
    cell: ({ row }: any) => {
      return h(
        'div',
        {
          class: ['d-flex', 'justify-content-center', 'align-items-center'],
        },
        [
          h(UCheckbox, {
            modelValue: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            'onUpdate:modelValue': (value: boolean) => {
              row.toggleSelected(value);
            },
          }),
        ],
      );
    },
    id: 'select',
    size: 40,
    maxSize: 50,
    minSize: 40,
  },
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
  state: {
    get rowSelection() {
      return rowSelection.value;
    },
  },
  enableRowSelection: true,
  onRowSelectionChange: (updater: any) => {
    if (typeof updater === 'function') {
      rowSelection.value = updater(rowSelection.value);
    } else {
      rowSelection.value = updater;
    }
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
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

const getSelectedListingIds = computed(() => {
  return Object.keys(rowSelection.value)
    .map((index) => listings.value[parseInt(index)]?.id)
    .filter(Boolean);
});

const deleteSelectedListings = async () => {
  const selectedIds = getSelectedListingIds.value;

  if (selectedIds.length === 0) return;

  isDeleting.value = true;

  try {
    await Promise.all(selectedIds.map((id) => listingsApi.deleteListing(id)));

    rowSelection.value = {};
    await loadListings();
  } catch (err) {
    error.value = 'Failed to delete listings';
    console.error('Error deleting listings:', err);
  } finally {
    isDeleting.value = false;
    showDeleteConfirm.value = false;
  }
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
        <div v-if="getSelectedListingIds.length > 0" class="table-actions">
          <u-typography variant="BodyMRegular">
            Выбрано: {{ getSelectedListingIds.length }}
          </u-typography>
          <u-button
            variant="primary-destructive"
            :disabled="getSelectedListingIds.length === 0"
            @click="showDeleteConfirm = true"
          >
            Удалить выбранные
          </u-button>
        </div>
      </div>

      <u-gap size="medium" />

      <u-table class="listings-table" size="medium">
        <div class="u-table-wrapper">
          <table>
            <thead>
              <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :colSpan="header.colSpan"
                  :style="{ width: header.getSize() + 'px' }"
                >
                  <flex-render
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                :class="{ 'u-table__tr--active': row.getIsSelected() }"
              >
                <td v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <div
                    v-if="cell.column.id !== 'select'"
                    style="cursor: pointer"
                    @click="router.push(`/listings/${row.original.id}`)"
                  >
                    <flex-render :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                  </div>
                  <div v-else>
                    <flex-render :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </u-table>

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

    <u-popup v-model="showDeleteConfirm">
      <u-popup-header>
        <u-typography variant="HeadlineMSemibold">Подтверждение удаления</u-typography>
      </u-popup-header>
      <u-popup-body>
        <u-typography variant="BodyMRegular">
          Вы уверены, что хотите удалить {{ getSelectedListingIds.length }}
          {{ getSelectedListingIds.length === 1 ? 'листинг' : 'листингов' }}? Это действие нельзя
          отменить.
        </u-typography>
      </u-popup-body>
      <u-popup-footer>
        <u-button
          variant="primary-destructive"
          :disabled="isDeleting"
          @click="deleteSelectedListings"
        >
          {{ isDeleting ? 'Удаление...' : 'Удалить' }}
        </u-button>

        <u-gap size="small" />

        <u-button
          variant="secondary-neutral"
          :disabled="isDeleting"
          @click="showDeleteConfirm = false"
        >
          Отмена
        </u-button>
      </u-popup-footer>
    </u-popup>
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

.table-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
