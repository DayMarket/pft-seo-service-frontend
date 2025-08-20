<script setup lang="ts" generic="T">
import { type Column, FlexRender, type RowData, type Table, UTable } from '@uzum/ui-kit';
import { computed, type CSSProperties, getCurrentInstance } from 'vue';

const props = defineProps<{
  table: Table<T>;
  rowClickable?: boolean;
  size?: 'small' | 'medium' | 'large';
}>();

const emit = defineEmits<{ rowClick: [row: T] }>();
const headerGroups = computed(() => props.table.getHeaderGroups());
const footerGroups = computed(() => props.table.getFooterGroups());
const rows = computed(() => props.table.getRowModel().rows);

const hasFooter = computed(() => {
  const hasFooterInColumns = footerGroups.value.some((group) =>
    group.headers.some((header) => header.column.columnDef.footer),
  );

  const hasFooterSlot = footerGroups.value.some((group) =>
    group.headers.some((header) => {
      const slotName = `footer-${header.column.id}`;

      return !!getCurrentInstance()?.slots?.[slotName];
    }),
  );

  return hasFooterInColumns || hasFooterSlot;
});

const getColumnStyles = <T extends RowData>(column: Column<T>): CSSProperties => {
  return {
    minWidth: column.columnDef.minSize + 'px',
  };
};

const hasSkipListingFlag = (row: any): boolean => {
  return row?.original?.no_listing === true;
};
</script>

<template>
  <u-table :size="size">
    <table>
      <thead>
        <tr v-for="headerGroup in headerGroups" :key="headerGroup.id">
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
            :style="getColumnStyles(header.column)"
          >
            <slot :name="`header-${header.column.id}`" :value="header.column">
              <flex-render :render="header.column.columnDef.header" :props="header.getContext()" />
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="rows.length">
          <tr
            v-for="row in rows"
            :key="row.index"
            :class="[
              'base-table__row',
              {
                'base-table__row--clickable': props.rowClickable,
                'base-table__row--skip-listing': hasSkipListingFlag(rows[row.index]),
              },
            ]"
            @click="emit('rowClick', rows[row.index].original)"
          >
            <td
              v-for="cell in rows[row.index].getVisibleCells()"
              :key="cell.id"
              :data-test-id="`table-cell-${cell.column.id}`"
              :style="getColumnStyles(cell.column)"
            >
              <slot
                :name="`cell-${cell.column.id}`"
                :value="cell.getValue() as RowData[keyof RowData]"
                :row="rows[row.index]"
              >
                <flex-render :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot v-if="hasFooter" class="base-table__footer">
        <tr v-for="footerGroup in footerGroups" :key="footerGroup.id">
          <td v-for="footer in footerGroup.headers" :key="footer.id" :colspan="footer.colSpan">
            <slot :name="`footer-${footer.column.id}`" :value="footer.column">
              <flex-render :render="footer.column.columnDef.footer" :props="footer.getContext()" />
            </slot>
          </td>
        </tr>
      </tfoot>
    </table>
  </u-table>
</template>

<style scoped lang="scss">
.base-table {
  &__row--clickable {
    cursor: pointer;
  }

  &__row--skip-listing {
    background-color: rgba(255, 243, 243, 0.5) !important;

    &:hover {
      background-color: rgba(255, 235, 235, 0.7) !important;
    }
  }

  &__footer {
    td {
      border-top: 1px solid var(--border-subtle);
    }
  }
}
</style>
