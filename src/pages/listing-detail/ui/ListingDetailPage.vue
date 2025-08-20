<script setup lang="ts">
import {
  UAlert,
  UButton,
  UGap,
  ULoader,
  UPopup,
  UPopupBody,
  UPopupFooter,
  UPopupHeader,
  UTextArea,
  UTextField,
  UTypography,
} from '@uzum/ui-kit';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import type { BaseJsonDto, Listing } from '$shared/api/api-service/api';
import { listingsApi } from '$shared/api/listings';

const route = useRoute();
const router = useRouter();
const listing = ref<Listing | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);
const isEditingSeo = ref(false);
const isDeleting = ref(false);
const showDeleteConfirm = ref(false);

const seoForm = ref({
  seo_title_ru: '',
  seo_title_uz: '',
  seo_header_ru: '',
  seo_header_uz: '',
  seo_meta_tag_ru: '',
  seo_meta_tag_uz: '',
});

const listingId = computed(() => {
  const id = route.params.id;

  return Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);
});

const loadListing = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await listingsApi.getListingById(listingId.value);

    listing.value = response.data;

    if (listing.value) {
      seoForm.value = {
        seo_title_ru: listing.value.seo_title?.ru || '',
        seo_title_uz: listing.value.seo_title?.uz || '',
        seo_header_ru: listing.value.seo_header?.ru || '',
        seo_header_uz: listing.value.seo_header?.uz || '',
        seo_meta_tag_ru: listing.value.seo_meta_tag?.ru || '',
        seo_meta_tag_uz: listing.value.seo_meta_tag?.uz || '',
      };
    }
  } catch (err) {
    error.value = 'Не удалось загрузить детали листинга';
    console.error('Error loading listing:', err);
  } finally {
    isLoading.value = false;
  }
};

const toggleStatus = async () => {
  if (!listing.value) return;

  try {
    const newStatus: 'ACTIVE' | 'NOT_ACTIVE' =
      listing.value.status === 'ACTIVE' ? 'NOT_ACTIVE' : 'ACTIVE';

    const statusData = { status: newStatus };
    const response = await listingsApi.updateListingStatus(listing.value.id, statusData);

    listing.value = response.data;
  } catch (err) {
    error.value = 'Не удалось обновить статус';
    console.error('Error updating status:', err);
  }
};

const saveSeoChanges = async () => {
  if (!listing.value) return;

  try {
    const seoData = {
      seo_title: {
        ru: seoForm.value.seo_title_ru || null,
        uz: seoForm.value.seo_title_uz || null,
      },
      seo_header: {
        ru: seoForm.value.seo_header_ru || null,
        uz: seoForm.value.seo_header_uz || null,
      },
      seo_meta_tag: {
        ru: seoForm.value.seo_meta_tag_ru || null,
        uz: seoForm.value.seo_meta_tag_uz || null,
      },
    };

    const response = await listingsApi.updateListingSeo(listing.value.id, seoData);

    listing.value = response.data;
    isEditingSeo.value = false;
  } catch (err) {
    error.value = 'Не удалось обновить SEO информацию';
    console.error('Error updating SEO:', err);
  }
};

const deleteListing = async () => {
  if (!listing.value) return;

  isDeleting.value = true;

  try {
    await listingsApi.deleteListing(listing.value.id);
    router.push('/listings');
  } catch (err) {
    error.value = 'Failed to delete listing';
    console.error('Error deleting listing:', err);
  } finally {
    isDeleting.value = false;
    showDeleteConfirm.value = false;
  }
};

const cancelSeoEdit = () => {
  isEditingSeo.value = false;

  if (listing.value) {
    seoForm.value = {
      seo_title_ru: listing.value.seo_title?.ru || '',
      seo_title_uz: listing.value.seo_title?.uz || '',
      seo_header_ru: listing.value.seo_header?.ru || '',
      seo_header_uz: listing.value.seo_header?.uz || '',
      seo_meta_tag_ru: listing.value.seo_meta_tag?.ru || '',
      seo_meta_tag_uz: listing.value.seo_meta_tag?.uz || '',
    };
  }
};

const formatJson = (obj: BaseJsonDto | null | undefined) => {
  if (!obj) return { ru: '-', uz: '-' };

  return {
    ru: obj.ru || '-',
    uz: obj.uz || '-',
  };
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

onMounted(() => {
  loadListing();
});
</script>

<template>
  <div class="listing-detail-page">
    <div class="listing-detail-page__header">
      <u-button variant="secondary-neutral" @click="router.push('/listings')">
        ← Назад к списку
      </u-button>
      <u-typography variant="HeadlineLBold">Детали листинга {{ listing?.id }}</u-typography>
    </div>

    <u-gap size="large" />

    <div v-if="isLoading" class="listing-detail-page__loading">
      <u-loader />
    </div>

    <u-alert v-else-if="error" variant="negative" class="listing-detail-page__error">
      {{ error }}
    </u-alert>

    <div v-else-if="listing" class="listing-detail-page__content">
      <div class="info-card">
        <div class="info-card__header">
          <u-typography variant="HeadlineMMedium">Основная информация</u-typography>
          <div class="info-card__actions">
            <u-typography variant="BodyMSemibold">{{ listing.status }}</u-typography>
            <u-button @click="toggleStatus">
              {{ listing.status === 'ACTIVE' ? 'Deactivate' : 'Activate' }}
            </u-button>
            <u-button variant="primary-destructive" @click="showDeleteConfirm = true">
              Удалить
            </u-button>
          </div>
        </div>

        <u-gap size="medium" />

        <div class="info-grid">
          <div class="info-item">
            <u-typography variant="BodyMSemibold">ID:</u-typography>
            <u-typography variant="BodyMRegular">{{ listing.id }}</u-typography>
          </div>

          <div class="info-item">
            <u-typography variant="BodyMSemibold">Category ID:</u-typography>
            <u-typography variant="BodyMRegular">{{ listing.category_id }}</u-typography>
          </div>

          <div class="info-item">
            <u-typography variant="BodyMSemibold">Offer ID:</u-typography>
            <u-typography variant="BodyMRegular">{{ listing.offer_id }}</u-typography>
          </div>

          <div class="info-item">
            <u-typography variant="BodyMSemibold">Shop ID:</u-typography>
            <u-typography variant="BodyMRegular">{{ listing.shop_id }}</u-typography>
          </div>

          <div class="info-item">
            <u-typography variant="BodyMSemibold">Sort:</u-typography>
            <u-typography variant="BodyMRegular">{{ listing.sort }}</u-typography>
          </div>

          <div class="info-item">
            <u-typography variant="BodyMSemibold">Updated:</u-typography>
            <u-typography variant="BodyMRegular">{{ formatDate(listing.updated_at) }}</u-typography>
          </div>
        </div>
      </div>

      <div class="links-card">
        <div class="query-grid">
          <div class="query-item">
            <u-typography variant="BodyMSemibold">Query на русском:</u-typography>
            <u-typography variant="BodyMRegular">
              {{ formatJson(listing.query_text).ru }}
            </u-typography>
          </div>

          <div class="query-item">
            <u-typography variant="BodyMSemibold">Query на узбекском:</u-typography>
            <u-typography variant="BodyMRegular">
              {{ formatJson(listing.query_text).uz }}
            </u-typography>
          </div>
        </div>

        <u-gap size="medium" />

        <div class="links-grid">
          <div class="link-item">
            <u-typography variant="BodyMSemibold">Link на русском:</u-typography>
            <u-typography variant="BodyMRegular">{{ formatJson(listing.link).ru }}</u-typography>
          </div>

          <div class="link-item">
            <u-typography variant="BodyMSemibold">Link на узбекском:</u-typography>
            <u-typography variant="BodyMRegular">{{ formatJson(listing.link).uz }}</u-typography>
          </div>
        </div>
      </div>

      <div class="seo-card">
        <div class="seo-card__header">
          <u-typography variant="HeadlineMMedium">SEO Информация</u-typography>
          <u-button v-if="!isEditingSeo" variant="primary-neutral" @click="isEditingSeo = true">
            Редактировать SEO
          </u-button>
        </div>

        <u-gap size="medium" />

        <div class="seo-edit">
          <div class="seo-edit-section">
            <u-typography variant="BodyLSemibold">SEO title</u-typography>
            <div class="seo-edit-inputs">
              <u-text-field
                v-model="seoForm.seo_title_ru"
                label="Русский"
                placeholder="Введите SEO заголовок на русском языке"
                :disabled="!isEditingSeo"
              />
              <u-text-field
                v-model="seoForm.seo_title_uz"
                label="Узбекский"
                placeholder="Введите SEO заголовок на узбекском языке"
                :disabled="!isEditingSeo"
              />
            </div>
          </div>

          <div class="seo-edit-section">
            <u-typography variant="BodyLSemibold">SEO header</u-typography>
            <div class="seo-edit-inputs">
              <u-text-field
                v-model="seoForm.seo_header_ru"
                label="Русский"
                placeholder="Введите SEO шапку на русском языке"
                :disabled="!isEditingSeo"
              />
              <u-text-field
                v-model="seoForm.seo_header_uz"
                label="Узбекский"
                placeholder="Введите SEO шапку на узбекском языке"
                :disabled="!isEditingSeo"
              />
            </div>
          </div>

          <div class="seo-edit-section">
            <u-typography variant="BodyLSemibold">SEO meta tags</u-typography>
            <div class="seo-edit-inputs">
              <u-text-area
                v-model="seoForm.seo_meta_tag_ru"
                label="Русский"
                placeholder="Введите SEO мета-тег на русском языке"
                :rows="3"
                :disabled="!isEditingSeo"
              />
              <u-text-area
                v-model="seoForm.seo_meta_tag_uz"
                label="Узбекский"
                placeholder="Введите SEO мета-тег на узбекском языке"
                :rows="3"
                :disabled="!isEditingSeo"
              />
            </div>
          </div>

          <u-gap size="large" />

          <div v-if="isEditingSeo" class="seo-edit-actions">
            <u-button @click="saveSeoChanges">Сохранить изменения</u-button>
            <u-button variant="secondary-neutral" @click="cancelSeoEdit">Отмена</u-button>
          </div>
        </div>
      </div>
    </div>

    <u-popup v-model="showDeleteConfirm">
      <u-popup-header>
        <u-typography variant="HeadlineMSemibold">Подтверждение удаления</u-typography>
      </u-popup-header>
      <u-popup-body>
        <u-typography variant="BodyMRegular">
          Вы уверены, что хотите удалить этот листинг? Это действие нельзя отменить.
        </u-typography>
      </u-popup-body>
      <u-popup-footer>
        <u-button variant="primary-destructive" :disabled="isDeleting" @click="deleteListing">
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
.listing-detail-page {
  padding: 24px;

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__loading {
    display: flex;
    justify-content: center;
    padding: 48px;
  }

  &__error {
    margin-bottom: 24px;
  }
}

.info-card,
.links-card,
.query-card,
.seo-card {
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--uzum-color-border-subtle);
  background-color: var(--uzum-color-background-primary);
}

.info-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.info-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.links-grid,
.query-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.link-item,
.query-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.seo-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
}

.seo-edit {
  .seo-edit-section {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .seo-edit-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 8px;
  }

  .seo-edit-actions {
    display: flex;
    gap: 12px;
  }
}
</style>
