import {
  Api,
  type BaseJsonDto,
  type CreateListingDto,
  type UpdateListingDto,
} from '../api-service/api';

const api = new Api({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
});

export const listingsApi = {
  getListings: (params: {
    page?: number;
    limit?: number;
    query_text?: string;
    link?: string;
    seo_title?: string;
    status?: string;
    category_id?: number;
    shop_id?: number;
  }) => api.listings.listingsControllerGetListings(params),

  getListingById: (id: number) => api.listings.listingsControllerGetListingById(id),

  updateListing: (id: number, data: UpdateListingDto) =>
    api.listings.listingsControllerUpdateListing(id, data),

  updateListingSeo: async (
    id: number,
    data: { seo_title?: BaseJsonDto; seo_header?: BaseJsonDto; seo_meta_tag?: BaseJsonDto },
  ) => {
    // Получаем текущие данные листинга
    const currentListing = await api.listings.listingsControllerGetListingById(id);
    const currentData = currentListing.data;

    // Создаем обновленный объект с новыми SEO данными
    const updateData: UpdateListingDto = {
      link: currentData.link,
      status: currentData.status,
      category_id: currentData.category_id,
      offer_id: currentData.offer_id,
      shop_id: currentData.shop_id,
      sort: currentData.sort,
      filters: currentData.filters,
      seo_title: data.seo_title || currentData.seo_title,
      seo_header: data.seo_header || currentData.seo_header,
      seo_meta_tag: data.seo_meta_tag || currentData.seo_meta_tag,
      query_text: currentData.query_text,
    };

    return api.listings.listingsControllerUpdateListing(id, updateData);
  },

  deleteListing: (id: number) => api.listings.listingsControllerDeleteListing(id),

  updateListingStatus: async (id: number, data: { status: string }) => {
    // Получаем текущие данные листинга
    const currentListing = await api.listings.listingsControllerGetListingById(id);
    const currentData = currentListing.data;

    // Создаем обновленный объект с новым статусом
    const updateData: UpdateListingDto = {
      link: currentData.link,
      status: data.status,
      category_id: currentData.category_id,
      offer_id: currentData.offer_id,
      shop_id: currentData.shop_id,
      sort: currentData.sort,
      filters: currentData.filters,
      seo_title: currentData.seo_title,
      seo_header: currentData.seo_header,
      seo_meta_tag: currentData.seo_meta_tag,
      query_text: currentData.query_text,
    };

    return api.listings.listingsControllerUpdateListing(id, updateData);
  },

  createListing: (data: CreateListingDto) => api.listings.listingsControllerCreateListing(data),
};
