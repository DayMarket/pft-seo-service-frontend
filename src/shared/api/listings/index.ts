import {
  Api,
  type CreateListingDto,
  type UpdateListingSEODto,
  type UpdateListingStatusDto,
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

  updateListingSeo: (id: number, data: UpdateListingSEODto) =>
    api.listings.listingsControllerUpdateListingSeo(id, data),

  deleteListing: (id: number) => api.listings.listingsControllerDeleteListing(id),

  updateListingStatus: (id: number, data: UpdateListingStatusDto) =>
    api.listings.listingsControllerUpdateListingStatus(id, data),

  createListing: (data: CreateListingDto) => api.listings.listingsControllerCreateListing(data),
};
