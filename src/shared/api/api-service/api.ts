/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProcessJsonRecordDto {
  query_ru?: string;
  query_uz?: string;
  category_id?: number;
  filters?: ("RANGE" | "LIST")[];
}

export interface ProcessJsonDto {
  data: ProcessJsonRecordDto[];
}

export interface BaseJsonDto {
  ru: string | null;
  uz: string | null;
}

export interface FilterRange {
  min: number;
  max: number;
}

export interface FilterList {
  values: number[];
}

export interface FilterDto {
  id: number | null;
  filterType: "RANGE" | "LIST";
  range?: FilterRange | null;
  list?: FilterList | null;
}

export interface CreateListingDto {
  id?: number;
  link: BaseJsonDto;
  /** @default "ACTIVE" */
  status: string;
  category_id?: number;
  offer_id?: number;
  shop_id?: number;
  sort: string;
  filters: FilterDto[];
  seo_title: BaseJsonDto;
  seo_header: BaseJsonDto;
  seo_meta_tag: BaseJsonDto;
  query_text: BaseJsonDto;
}

export interface Listing {
  id: number;
  link: BaseJsonDto;
  status: string;
  category_id: number;
  offer_id: number;
  shop_id: number;
  sort: string;
  filters: FilterDto[];
  /** @format date-time */
  updated_at: string;
  seo_title: BaseJsonDto;
  seo_header: BaseJsonDto;
  seo_meta_tag: BaseJsonDto;
  query_text: BaseJsonDto;
}

export interface PaginatedListingResponse {
  data: Listing[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface UpdateListingDto {
  id?: number;
  link: BaseJsonDto;
  /** @default "ACTIVE" */
  status: string;
  category_id?: number;
  offer_id?: number;
  shop_id?: number;
  sort: string;
  filters: FilterDto[];
  seo_title: BaseJsonDto;
  seo_header: BaseJsonDto;
  seo_meta_tag: BaseJsonDto;
  query_text: BaseJsonDto;
}

export interface Category {
  id: number;
  path: string;
  product_amount: number;
  title: object;
  seo_header: object;
  parent_id: number | null;
  parent: Category;
  children: Category[];
}

export interface ListingsControllerGetListingsParams {
  /** @default 1 */
  page?: number;
  /** @default 10 */
  limit?: number;
  query_text?: string;
  link?: string;
  seo_title?: string;
  status?: string;
  category_id?: number;
  shop_id?: number;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title PFT SEO Service
 * @version 1.0.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  metrics = {
    /**
     * No description
     *
     * @tags Prometheus
     * @name PrometheusControllerIndex
     * @request GET:/metrics
     * @response `200` `void`
     */
    prometheusControllerIndex: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics`,
        method: "GET",
        ...params,
      }),
  };
  health = {
    /**
 * @description Check the health status of the service and database connection
 *
 * @tags health
 * @name HealthControllerCheck
 * @summary Health check endpoint
 * @request GET:/health
 * @response `200` `{
  \** @example "ok" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  \** @example {} *\
    error?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"}} *\
    details?: Record<string,{
    status: string,
    [key: string]: any,

}>,

}` The Health Check is successful
 * @response `503` `{
  \** @example "error" *\
    status?: string,
  \** @example {"database":{"status":"up"}} *\
    info?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  \** @example {"redis":{"status":"down","message":"Could not connect"}} *\
    error?: Record<string,{
    status: string,
    [key: string]: any,

}>,
  \** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} *\
    details?: Record<string,{
    status: string,
    [key: string]: any,

}>,

}` The Health Check is not successful
 */
    healthControllerCheck: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
          /** @example {} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  listings = {
    /**
     * @description Triggers the update of active listings in the database by invoking the corresponding service method.
     *
     * @tags listings
     * @name ListingsControllerUpdateDb
     * @summary Update active listings in the database
     * @request GET:/listings/update
     * @response `200` `void`
     */
    listingsControllerUpdateDb: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/listings/update`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Attempts to retry any failed Redis requests related to listings by calling the appropriate service method.
     *
     * @tags listings
     * @name ListingsControllerRetryRedisRequests
     * @summary Retry failed Redis requests for listings
     * @request GET:/listings/retry
     * @response `200` `void`
     */
    listingsControllerRetryRedisRequests: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/listings/retry`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Accepts a JSON payload, validates it, and processes the records by sending requests using the service layer.
     *
     * @tags listings
     * @name ListingsControllerProcessJson
     * @summary Process listing records from JSON
     * @request POST:/listings/process-json
     * @response `201` `object`
     */
    listingsControllerProcessJson: (data: ProcessJsonDto, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/listings/process-json`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new listing with the provided data.
     *
     * @tags listings
     * @name ListingsControllerCreateListing
     * @summary Create a new listing
     * @request POST:/listings
     * @response `201` `Listing`
     * @response `400` `void` Bad Request
     */
    listingsControllerCreateListing: (data: CreateListingDto, params: RequestParams = {}) =>
      this.request<Listing, void>({
        path: `/listings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves listings with optional search filters and pagination.
     *
     * @tags listings
     * @name ListingsControllerGetListings
     * @summary Get listings with search and pagination
     * @request GET:/listings
     * @response `200` `PaginatedListingResponse`
     */
    listingsControllerGetListings: (query: ListingsControllerGetListingsParams, params: RequestParams = {}) =>
      this.request<PaginatedListingResponse, any>({
        path: `/listings`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific listing by its ID.
     *
     * @tags listings
     * @name ListingsControllerGetListingById
     * @summary Get listing by ID
     * @request GET:/listings/{id}
     * @response `200` `Listing`
     * @response `404` `void` Listing not found
     */
    listingsControllerGetListingById: (id: number, params: RequestParams = {}) =>
      this.request<Listing, void>({
        path: `/listings/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a specific listing with the provided data.
     *
     * @tags listings
     * @name ListingsControllerUpdateListing
     * @summary Update listing by ID
     * @request PUT:/listings/{id}
     * @response `200` `Listing`
     * @response `404` `void` Listing not found
     */
    listingsControllerUpdateListing: (id: number, data: UpdateListingDto, params: RequestParams = {}) =>
      this.request<Listing, void>({
        path: `/listings/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific listing.
     *
     * @tags listings
     * @name ListingsControllerDeleteListing
     * @summary Delete listing by ID
     * @request DELETE:/listings/{id}
     * @response `200` `void`
     * @response `404` `void` Listing not found
     */
    listingsControllerDeleteListing: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/listings/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  category = {
    /**
     * @description Retrieves all categories from the database
     *
     * @tags category
     * @name CategoryControllerGetAllCategories
     * @summary Get all categories
     * @request GET:/category/get-all
     * @response `200` `(Category)[]`
     */
    categoryControllerGetAllCategories: (params: RequestParams = {}) =>
      this.request<Category[], any>({
        path: `/category/get-all`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sitemap = {
    /**
     * @description Triggers generation of all sitemap files
     *
     * @tags sitemap
     * @name SitemapControllerGenerateSitemaps
     * @summary Generate all sitemaps
     * @request GET:/sitemap/generate
     * @response `200` `void`
     */
    sitemapControllerGenerateSitemaps: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/generate`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for listings only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateListingsSitemap
     * @summary Generate listings sitemap
     * @request GET:/sitemap/listings
     * @response `200` `void`
     */
    sitemapControllerGenerateListingsSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/listings`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for products only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateProductsSitemap
     * @summary Generate products sitemap
     * @request GET:/sitemap/products
     * @response `200` `void`
     */
    sitemapControllerGenerateProductsSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/products`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for product reviews only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateReviewsSitemap
     * @summary Generate reviews sitemap
     * @request GET:/sitemap/reviews
     * @response `200` `void`
     */
    sitemapControllerGenerateReviewsSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/reviews`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for categories only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateCategoriesSitemap
     * @summary Generate categories sitemap
     * @request GET:/sitemap/categories
     * @response `200` `void`
     */
    sitemapControllerGenerateCategoriesSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/categories`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for shops only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateShopsSitemap
     * @summary Generate shops sitemap
     * @request GET:/sitemap/shops
     * @response `200` `void`
     */
    sitemapControllerGenerateShopsSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/shops`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for banners only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateBannersSitemap
     * @summary Generate banners sitemap
     * @request GET:/sitemap/banners
     * @response `200` `void`
     */
    sitemapControllerGenerateBannersSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/banners`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Generates sitemap for static pages only
     *
     * @tags sitemap
     * @name SitemapControllerGenerateStaticPagesSitemap
     * @summary Generate static pages sitemap
     * @request GET:/sitemap/static
     * @response `200` `void`
     */
    sitemapControllerGenerateStaticPagesSitemap: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sitemap/static`,
        method: "GET",
        ...params,
      }),
  };
}
