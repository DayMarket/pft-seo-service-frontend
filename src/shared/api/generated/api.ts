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

type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface ApiErrorResponse {
  /** Error code */
  code: string;
  /** Error message */
  message: string;
  /** @deprecated */
  detailMessage?: string;
  payload?: object;
}

export interface GenericResponseObject {
  /** Response payload */
  payload?: object;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface UpdateCustomerContactsDto {
  lastname: string;
  firstname: string;
}

export interface StorageEntryPutDto {
  key: string;
  value?: string;
}

export interface TransferShopToSellerDto {
  /** @format int32 */
  code: number;
  phone: string;
}

export interface ChangeEmployerRole {
  /** @format int64 */
  employerAccountId?: number;
  /** @format int64 */
  roleId: number;
}

export interface EmployeeDto {
  /** @format int64 */
  accountId?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  /** @format date-time */
  hiredAt?: string;
  role?: EmployeeRoleDto;
}

export interface EmployeeRoleDto {
  /** @format int64 */
  id?: number;
  title?: string;
  value?: string;
  description?: string;
  /** @uniqueItems true */
  permissions?: PermissionDto[];
}

export interface PermissionDto {
  /** @format int64 */
  id?: number;
  value?: string;
  target?:
    | "PRODUCT"
    | "SKU"
    | "PRODUCT_FILTER"
    | "PRODUCT_IMPORT"
    | "MODERATION"
    | "MARKETING"
    | "FINANCE"
    | "EXPENSES"
    | "FINANCE_REPORT"
    | "WITHDRAW"
    | "SHOP"
    | "CALENDAR_EVENT"
    | "DISCOUNT"
    | "PROMO_CODE"
    | "BUNDLE"
    | "INVOICE"
    | "EMPLOYEE"
    | "SELLER_RETURN"
    | "PRINTING"
    | "TRANSFER_PRODUCT"
    | "LEFTOVER"
    | "SERVICE_FEEDBACK"
    | "PRODUCT_REVIEW"
    | "PHOTO_REQUEST"
    | "CHAT"
    | "ANALYTICS"
    | "VOLUME_DISCOUNT"
    | "AUCTION"
    | "FBS_ORDER"
    | "FBS_INVOICE"
    | "UNDEFINED";
  action?: "CREATE" | "READ" | "UPDATE" | "DELETE" | "ARCHIVE";
}

export interface ChangeIkpuTypeDto {
  ikpuType: "SERVICE" | "PRODUCT";
}

export interface SellerVatRequestDto {
  vat: "VAT0" | "VAT12";
}

export interface SellerCompensationRequestDto {
  /** @format int64 */
  sellerId: number;
  /**
   * @format int32
   * @min 0
   */
  quantityMissings: number;
  /**
   * @format int64
   * @min 0
   */
  priceMissings: number;
  /**
   * @format int32
   * @min 0
   */
  quantityAccepted: number;
  /**
   * @format int64
   * @min 0
   */
  priceAccepted: number;
  /**
   * @format int64
   * @min 0
   */
  moneyToReturn: number;
}

export interface GenericResponseSellerCompensationResponseDto {
  /** Response payload */
  payload?: SellerCompensationResponseDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerCompensationResponseDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int32 */
  quantityMissings?: number;
  /** @format int64 */
  priceMissings?: number;
  /** @format int32 */
  quantityAccepted?: number;
  /** @format int64 */
  priceAccepted?: number;
  /** @format int64 */
  moneyToReturn?: number;
}

export interface SkuUpdateIkpuRequestDto {
  ikpu?: string;
}

export interface ProductClassificationTypeDictionaryDto {
  /** @format int64 */
  id: number;
  /**
   * @minLength 0
   * @maxLength 255
   */
  typeValue: string;
  mask?: string;
  status: "ACTIVE" | "DELETED" | "UNKNOWN";
}

export interface GenericResponseProductClassificationTypeDictionaryDto {
  payload?: ProductClassificationTypeDictionaryDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ProductClassificationTypeDto {
  /** @format int64 */
  id: number;
  /**
   * @minLength 0
   * @maxLength 255
   */
  type: string;
  title?: Record<string, string>;
  dictionaries?: ProductClassificationTypeDictionaryDto[];
}

export interface GenericResponseProductClassificationTypeDto {
  payload?: ProductClassificationTypeDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponse {
  /** Response payload */
  payload?: object;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseVoid {
  /** Response payload */
  payload?: object;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Quantity to stock for sku */
export interface SkuQuantityDto {
  /**
   * Sku id: sku.id
   * @format int64
   * @example 1
   */
  skuId: number;
  /**
   * Quantity to stock
   * @format int32
   * @min 0
   * @example 20
   */
  quantityToStock?: number;
}

/** Request of update sku stock reservation */
export interface UpdateSkuStockReservationDto {
  /**
   * Reservation key, not null
   * @example "4fe85852-6633-4f58-af7d-1e611e85bccc"
   */
  reservationKey: string;
  /**
   * Id of seller
   * @format int64
   * @example 1
   */
  sellerId: number;
  /**
   * List of skus
   * @maxItems 2147483647
   * @minItems 1
   */
  skuList: SkuQuantityDto[];
}

export interface CategoryFieldDto {
  /**
   * Id of category field, must be null for create request
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * Unique key of category field, not null
   * @minLength 0
   * @maxLength 255
   * @example "DEFAULT_TO_STOCK_AMOUNT"
   */
  key: string;
  /**
   * Description of category field
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * Type of field: PLAIN_TEXT or JSON
   * @example "JSON"
   */
  type: "PLAINT_TEXT" | "JSON";
  /**
   * Validation pattern for type PLAIN_TEXT, can be null
   * @minLength 0
   * @maxLength 500
   * @example "^"(МГТ|СГТ|КГТ)"$"
   */
  validationPattern?: string;
  /**
   * JSON schema for type JSON, can be null. https://json-schema.org/
   * @minLength 0
   * @maxLength 4000
   */
  jsonSchema?: string;
}

export interface CategoryFieldValueDto {
  /**
   * Id of category field value, for create request must be null
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * Value is recursive for children categories. Needed for parent inheritance
   * @example true
   */
  recursive: boolean;
  /**
   * ID of category
   * @format int64
   * @example 15
   */
  categoryId: number;
  /**
   * ID of category field, if fieldKey is null - required
   * @format int64
   * @example 1
   */
  fieldId?: number;
  /**
   * Category field key, if fieldId is null - required
   * @example "DEFAULT_TO_STOCK_AMOUNT"
   */
  fieldKey?: string;
  /**
   * Value of category field
   * @example ""МГТ""
   */
  value: string;
  /**
   * Status of category field value
   * @example "VISIBLE_FOR_PDP"
   */
  status: "VISIBLE_FOR_PDP" | "NOT_VISIBLE_FOR_PDP";
}

export interface CustomerContactsDto {
  phone: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  sex?: string;
  /** @format date */
  birthDate?: string;
}

export interface WithdrawChangeStatusRq {
  status: "CREATED" | "APPROVED" | "REJECTED" | "PROCESSING" | "DECLINED" | "WITHDRAWN";
  comment?: string;
}

export interface BonusProgramDto {
  ok?: boolean;
  text?: string;
  /** @format int64 */
  priceDelta?: number;
}

export interface DayScheduleDto {
  day?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  dayOff?: boolean;
  workingHours?: string;
}

export interface DeliveryDto {
  period?: string;
  /** @format date-time */
  date?: string;
  address?: string;
  apartment?: string;
  entrance?: string;
  floor?: string;
  intercom?: string;
  deliveryComment?: string;
  isTodayDelivery?: boolean;
  /** @format int64 */
  deliveryPointId?: number;
  schedule?: string;
  scheduleInfo?: ScheduleInfoDto;
  /** @format int64 */
  cityId?: number;
  /** @format int64 */
  districtId?: number;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  originalDeliveryPrice?: number;
  deliveryType?: "DELIVERY_POINT" | "POSTAMAT" | "COURIER" | "RUSSIAN_POST";
  /** @format int64 */
  deliveryOptionId?: number;
  deliveryPointKey?: string;
  /** @format int64 */
  zoneId?: number;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  deliveryStatus?: "COURIER_ASSIGNED" | "NEW" | "DELIVERED";
  /**
   * Can be either postamatId or deliveryPointId
   * @format int64
   */
  pickPointId?: number;
  ruPostDelivery?: boolean;
  /** @format int64 */
  postamatId?: number;
}

export interface ItemDto {
  /** @format int64 */
  bundleItemId?: number;
  /** @format int64 */
  purchasePrice?: number;
}

export interface LocalTime {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
  /** @format int32 */
  nano?: number;
}

export interface OrderBundleDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  amount?: number;
  items?: ItemDto[];
}

export interface OrderDiscountDto {
  bundles?: OrderBundleDto[];
  volumeDiscountsIds?: number[];
}

export interface OrderDto {
  /** @format int64 */
  commission?: number;
  contacts?: CustomerContactsDto;
  /** @format date-time */
  dateCreated?: string;
  /** @format date-time */
  dateUpdated?: string;
  /** @format date-time */
  expectedDate?: string;
  expectedTimeFrom?: LocalTime;
  expectedTimeTo?: LocalTime;
  /** @format date-time */
  storageUntil?: string;
  delivery?: DeliveryDto;
  /** @format int64 */
  deliveryPrice?: number;
  eco?: boolean;
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  items: OrderItemDto[];
  orderDiscountDto?: OrderDiscountDto;
  isManualPickup: boolean;
  paymentIntentionActions?: PaymentIntentionAction[];
  /** @format int64 */
  id?: number;
  paymentType?: string;
  paymentProvider?: string;
  paymentUrl?: string;
  promoCode?: string;
  /**
   * @format int64
   * @min 0
   */
  price?: number;
  notifyUserAboutEvents: boolean;
  returnUrl?: string;
  sign?: string;
  /** @deprecated */
  status?: string;
  orderStatus?: OrderStatus;
  cancellationAvailability?: "AVAILABLE" | "PENDING" | "FORBIDDEN";
  usedPromoCode?: BonusProgramDto;
  /** @format int64 */
  originalDeliveryPrice?: number;
  /** @format int64 */
  dshopId?: number;
  /** @format int64 */
  issueCode?: number;
  /** @format int64 */
  headOrderId?: number;
  type?: "FBO" | "FBS";
  cancellationButtonName?: string;
  ruPostDelivery?: boolean;
  postamatDelivery?: boolean;
  click_id?: string;
  payment_block_texts?: PaymentBlockTextDto[];
  installment_button?: PaymentBlockTextDto[];
}

export interface OrderItemCharacteristicDto {
  /** @format int64 */
  id?: number;
  title?: string;
  value?: string;
}

export interface OrderItemDto {
  /** @format int32 */
  amount: number;
  /** @format int32 */
  returnedAmount?: number;
  /** @format int32 */
  amountAvailable?: number;
  characteristics?: Record<string, string>;
  skuCharacteristics?: OrderItemCharacteristicDto[];
  /** @format int64 */
  fullPrice?: number;
  /** @format int64 */
  id?: number;
  /**
   * @deprecated
   * @format int64
   */
  orderItemId?: number;
  /** @format int32 */
  ownRating?: number;
  /** This field should be used only when we create order (in my offers field 'photo' will be returned) */
  photo?: PhotoDto;
  image?: string;
  /** @format int64 */
  purchasePrice: number;
  /**
   * @format int64
   * @min 0
   */
  paymentPrice?: number;
  /** @format double */
  rating?: number;
  /** @format int64 */
  skuId: number;
  status?: string;
  statusDto?: StatusDto;
  title?: string;
  isEditable?: boolean;
  /** @format date-time */
  dateBought?: string;
  sellerTitle?: string;
  hasVerticalPhoto?: boolean;
  vatString?: string;
}

export interface OrderStatus {
  title?: string;
  value?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface PaymentBlockTextDto {
  title: string;
  subtitle: string;
  type:
    | "nasiya"
    | "tezkor_ep"
    | "widget"
    | "INSTALLMENT_WIDGET"
    | "TEZKOR_VENDORS_WIDGET_RESTAURANTS"
    | "TEZKOR_VENDORS_WIDGET_GROCERY"
    | "TEZKOR_SEARCH_PRODUCTS"
    | "COURIER_DELIVERY_TYPE";
  button_text: string;
}

export interface PaymentIntentionAction {
  /** @format int64 */
  intentionId?: number;
  type?: "POST_PAID_UZUM_CHECKOUT";
  title?: string;
}

/** This field should be used only when we create order (in my offers field 'photo' will be returned) */
export interface PhotoDto {
  photo?: Record<string, PhotoQualityDto>;
  photoKey?: string;
  color?: string;
  hasVerticalPhoto?: boolean;
}

export interface PhotoQualityDto {
  "Url for high quality version of image"?: string;
  "Url for low quality version of image"?: string;
}

export interface ScheduleInfoDto {
  days: DayScheduleDto[];
}

export interface StatusDto {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface DeliveryOfferDto {
  options?: DeliveryOptionDto[];
  /** @format date-time */
  date?: string;
  textDeliveryWithShortDate?: string;
  textDeliveryWithDate?: string;
}

/** Response payload */
export interface DeliveryOffersDto {
  offers?: DeliveryOfferDto[];
}

export interface DeliveryOptionDto {
  /** @format int64 */
  id?: number;
  from?: LocalTime;
  to?: LocalTime;
  /** @format int64 */
  price?: number;
}

export interface GenericResponseDeliveryOffersDto {
  /** Response payload */
  payload?: DeliveryOffersDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CreateTinkoffPaymentDto {
  /** @format int64 */
  orderId: number;
  type?: "CARD" | "APPLE_PAY" | "GOOGLE_PAY" | "SAVED_CARD" | "INSTALLMENT" | "QR";
  cardId?: string;
  installment?: boolean;
}

export interface GenericResponsePaymentDto {
  payload?: PaymentDto | QrPaymentDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PaymentDto {
  status?: "WAITING" | "PAID" | "FAILED";
  paymentId?: string;
  url?: string;
  /** @format int64 */
  amount?: number;
  errorText?: string;
  type: string;
}

export type QrPaymentDto = PaymentDto & {
  qrData?: string;
};

export interface UzumCheckoutCreateIntentionDto {
  /** @format int64 */
  intentionId: number;
  /** @format int64 */
  orderId: number;
  successUrl?: string;
  failureUrl?: string;
}

export interface GenericResponseRegisterIntentionResponse {
  /** Response payload */
  payload?: RegisterIntentionResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface RegisterIntentionResponse {
  paymentId?: string;
  url?: string;
}

export interface UzumCheckoutCreatePaymentDto {
  /** @format int64 */
  orderId: number;
  successUrl?: string;
  failureUrl?: string;
}

export interface UzumBankCreatePaymentDto {
  /** @format int64 */
  orderId: number;
}

export interface WebhookOrderRqDto {
  transactionId: string;
  /** @format int64 */
  orderId?: number;
  /** @format int64 */
  amount?: number;
}

export interface WebhookOrderResult {
  status?: boolean;
  error?: string;
}

export interface UzumBankStatusRequest {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of request */
  params: Record<string, string>;
  /** @format date-time */
  timestamp?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
}

/** Additional parameters of response - data */
export interface DataTemplate {
  orderId?: DataTemplateInfo;
  externalId?: DataTemplateInfo;
  amount?: DataTemplateNumberInfo;
}

export interface DataTemplateInfo {
  value?: string;
}

export interface DataTemplateNumberInfo {
  /** @format int64 */
  value?: number;
}

export interface UzumBankStatusResponse {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of response - data */
  data?: DataTemplate;
  /** @format int64 */
  timestamp?: number;
  /** Response status */
  status: "OK" | "FAILED" | "CREATED" | "CONFIRMED" | "REVERSED";
  errorCode?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /**
   * Transaction id from uzum bank
   * @format int64
   */
  transTime: number;
  /**
   * Confirmation time of payment
   * @format int64
   */
  confirmTime: number;
  /**
   * Transaction id from uzum bank
   * @format int64
   */
  reverseTime: number;
  /**
   * Amount in tiyins from uzum bank
   * @format int64
   */
  amount: number;
}

export interface UzumBankReverseRequest {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of request */
  params: Record<string, string>;
  /** @format date-time */
  timestamp?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
}

export interface UzumBankReverseResponse {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of response - data */
  data?: DataTemplate;
  /** @format int64 */
  timestamp?: number;
  /** Response status */
  status: "OK" | "FAILED" | "CREATED" | "CONFIRMED" | "REVERSED";
  errorCode?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /**
   * Transaction id from uzum bank
   * @format int64
   */
  reverseTime: number;
  /**
   * Amount in tiyins from uzum bank
   * @format int64
   */
  amount: number;
}

export interface UzumBankCreateRequest {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional params */
  params: Record<string, string>;
  /** @format date-time */
  timestamp?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /**
   * Amount in tiyins from uzum bank
   * @format int64
   */
  amount: number;
}

export interface UzumBankCreateResponse {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of response - data */
  data?: DataTemplate;
  /** @format int64 */
  timestamp?: number;
  /** Response status */
  status: "OK" | "FAILED" | "CREATED" | "CONFIRMED" | "REVERSED";
  errorCode?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /** @format int64 */
  transTime?: number;
  /**
   * Transaction id from uzum bank
   * @format int64
   */
  amount: number;
}

export interface UzumBankConfirmRequest {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional params */
  params?: Record<string, string>;
  /** @format date-time */
  timestamp?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /**
   * Amount in tiyins from uzum bank
   * @format int64
   */
  amount?: number;
  /** Paymant source from uzum bank */
  paymentSource:
    | "UZCARD"
    | "HUMO"
    | "VISA"
    | "MASTERCARD"
    | "VISA_DOMESTIC"
    | "MASTERCARD_DOMESTIC"
    | "INSTALLMENT"
    | "CASHBACK"
    | "ACCOUNT"
    | "WALLET"
    | "VISAUZS"
    | "UZUM_DEBIT_VISA"
    | "UZUM_CARD";
}

export interface UzumBankConfirmResponse {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of response - data */
  data?: DataTemplate;
  /** @format int64 */
  timestamp?: number;
  /** Response status */
  status: "OK" | "FAILED" | "CREATED" | "CONFIRMED" | "REVERSED";
  errorCode?: string;
  /**
   * Transaction id from uzum bank
   * @format uuid
   */
  transId: string;
  /** @format int64 */
  confirmTime?: number;
  /**
   * Amount in tiyins from uzum bank
   * @format int64
   */
  amount: number;
}

export interface UzumBankBaseRequest {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of request */
  params: Record<string, string>;
  /** @format date-time */
  timestamp?: string;
}

export interface UzumBankBaseResponse {
  /**
   * ServiceId from uzum bank
   * @format int32
   */
  serviceId: number;
  /** Additional parameters of response - data */
  data?: DataTemplate;
  /** @format int64 */
  timestamp?: number;
  /** Response status */
  status: "OK" | "FAILED" | "CREATED" | "CONFIRMED" | "REVERSED";
  errorCode?: string;
}

export interface OrderInfoRq {
  /** @format int64 */
  orderId?: number;
}

export interface OrderInfo {
  /** @format int64 */
  orderId?: number;
  /** @format int64 */
  amount?: number;
}

export interface UzumBankOrderInfoResponse {
  status?: boolean;
  error?: string;
  data?: OrderInfo;
}

export interface CreatePaymentDto {
  /** @format int64 */
  orderId: number;
}

export interface CreateMfoPaymentDto {
  /** @format int64 */
  orderId: number;
  installmentPlanId: string;
  paymentGenesis?: "PAID_FROM_CHECKOUT" | "PAID_AS_POST_PAID";
}

export interface WebhookLimitDto {
  phone: string;
  hasLimit: boolean;
}

export interface WebhookContractStatusDto {
  status: "CONFIRMED";
  contract_id: string;
}

export interface CheckStatusRequestDto {
  paymentId: string;
}

export interface GenericResponsePaymartMfoCheckStatusRs {
  /** Response payload */
  payload?: PaymartMfoCheckStatusRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PaymartMfoCheckStatusRs {
  state?: "ACTIVE" | "NOT_ACTIVE";
}

export interface MyUzcardCreatePaymentDto {
  /** @format int64 */
  orderId: number;
}

export interface ClickCreatePaymentDto {
  /** @format int64 */
  orderId: number;
}

export interface BaseOrderResponseDto {
  /** @format int64 */
  orderId?: number;
  /** @format int64 */
  customerId?: number;
  type?: "FBO" | "FBS";
  /** @format int64 */
  recipientAmount?: number;
  /** @format int64 */
  deliveryPrice?: number;
  items?: OrderItemDto[];
}

export interface GenericResponseOrderResponseDto {
  /** Response payload */
  payload?: OrderResponseDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface OrderResponseDto {
  /** @format int64 */
  orderId?: number;
  /** @format int64 */
  customerId?: number;
  customerOrderId?: string;
  /** @format int64 */
  recipientAmount?: number;
  /** @format int64 */
  deliveryPrice?: number;
  /** @deprecated */
  items?: OrderItemDto[];
  paymentItems?: OrderItemDto[];
  orders?: BaseOrderResponseDto[];
  text?: string;
}

export interface CancelOrderDto {
  /** @format int64 */
  orderId: number;
  reason?:
    | "RANDOM_ORDER"
    | "ONE_ORDER_SEVERAL_TIMES"
    | "WRONG_ADDRESS"
    | "WANT_TO_USE_ANOTHER_PAYMENT_METHOD"
    | "PHOTO_MISMATCH"
    | "DEFECTED_IDENTIFIER"
    | "UNDER_DELIVERED"
    | "OTHER";
  reasonText?: string;
}

export interface GenericResponsePayOrderAdviceDto {
  /** Response payload */
  payload?: PayOrderAdviceDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PayOrderAdviceDto {
  info?: PayOrderInfo;
  /** @format int64 */
  totalPrice?: number;
}

export interface PayOrderInfo {
  title?: string;
  description?: string;
}

export interface Button {
  title?: string;
}

/** Response payload */
export interface CancelOrderAdviceDto {
  title?: string;
  description?: string;
  info?: CancelOrderInfo;
  buttonBlock?: CancelOrderButton;
}

export interface CancelOrderButton {
  cancel?: Button;
  success?: Button;
}

export interface CancelOrderInfo {
  title?: string;
  description?: string;
}

export interface GenericResponseCancelOrderAdviceDto {
  /** Response payload */
  payload?: CancelOrderAdviceDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface Contacts {
  lastname: string;
  firstname: string;
  phone: string;
}

export interface Delivery {
  /** @format int64 */
  deliveryPointId: number;
}

export interface GroupBuyCreateOrderRq {
  delivery: Delivery;
  items: Item[];
  contacts: Contacts;
}

export interface Item {
  /** @format int32 */
  amount?: number;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  skuId?: number;
}

export interface OrderIdDto {
  /** @format int64 */
  orderId: number;
}

export interface TezkorPushNotification {
  orderId: string;
  status: string;
  title: string;
  text: string;
  link: string;
  customerId: string;
}

export interface TezkorGeoJson {
  geoJSON: string;
  version: string;
  /** @format date-time */
  updatedTime?: string;
}

export interface SubscriptionDto {
  email: string;
  /** @format int64 */
  skuId: number;
  pushRequired?: boolean;
}

export interface CreateWithdrawDto {
  /**
   * Idempotency Key for request. Must be unique.
   * @format uuid
   */
  idempotencyKey: string;
  /**
   * Amount to withdraw in som (копейки)
   * @format int64
   */
  amount: number;
  /**
   * List of shop ids from which assets must be withdraw
   * @uniqueItems true
   */
  shopIds: number[];
  /**
   * The settlement account to which the assets will be deposited
   * @format int64
   */
  settlementAccountId: number;
}

export interface WithdrawTicketDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  amount?: number;
  status?: "CREATED" | "APPROVED" | "REJECTED" | "PROCESSING" | "DECLINED" | "WITHDRAWN";
  /** @format date-time */
  createdAt?: string;
  canBeCanceled?: boolean;
}

export type SimplePolynomialVolumeDiscountParameters = UtilRequiredKeys<
  VolumeDiscountParameters,
  "type" | "minAmount" | "maxDiscount" | "minDiscount" | "maxAmount"
> & {
  /** @format double */
  degree: number;
  /**
   * @format int32
   * @min 1
   */
  minAmount: number;
  /**
   * @format int32
   * @min 2
   */
  maxAmount: number;
};

export type StepVolumeDiscountParameters = UtilRequiredKeys<VolumeDiscountParameters, "type"> & {
  steps: Record<string, number>;
};

export interface VolumeDiscountEditDto {
  /** @format int64 */
  productId: number;
  /** @format date-time */
  dateStart: string;
  endOnLastItem: boolean;
  parameters: SimplePolynomialVolumeDiscountParameters | StepVolumeDiscountParameters;
  /** @format int64 */
  id: number;
}

export interface VolumeDiscountParameters {
  type: "STEP" | "SIMPLE_POLYNOMIAL" | "SIMPLE_POLYNOMIAL_CONVEX";
  /** @format int32 */
  minAmount?: number;
  /** @format double */
  maxDiscount?: number;
  /** @format double */
  minDiscount?: number;
  /** @format int32 */
  maxAmount?: number;
}

export interface VolumeDiscountDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  productId?: number;
  /** @format date-time */
  dateCreated?: string;
  /** @format date-time */
  dateUpdated?: string;
  /** @format date-time */
  dateStart?: string;
  active?: boolean;
  parameters?: SimplePolynomialVolumeDiscountParameters | StepVolumeDiscountParameters;
}

export interface VolumeDiscountCreateDto {
  /** @format int64 */
  productId: number;
  /** @format date-time */
  dateStart: string;
  endOnLastItem: boolean;
  parameters: SimplePolynomialVolumeDiscountParameters | StepVolumeDiscountParameters;
}

export interface UpdateInvoiceTimeSlotDto {
  /** @format date-time */
  timeFrom: string;
  /** @format int64 */
  stockId?: number;
}

export interface DimensionalGroupDto {
  group?: "SMALL" | "MEDIUM" | "LARGE" | "UNKNOWN";
  title?: string;
}

/** ЭТТН */
export interface EttnDto {
  /** Номер ЭТТН */
  ettnId: string;
  /** Статус */
  status: "CREATED" | "CHANGED" | "CORRECT" | "INCORRECT" | "ETTN_ID_INVALID" | "DELETED";
  /** Валидация не пройдена */
  validationFailed: boolean;
  /**
   * Создана
   * @format date-time
   */
  createdAt: string;
  /**
   * Дата обновления значения ettnId
   * @format date-time
   */
  updatedAt?: string;
  /**
   * Проверена
   * @format date-time
   */
  checkedAt?: string;
}

/** Информация по ЭТТН накладной */
export interface InvoiceEttnDto {
  /** Разрешено ли редактирование ЭТТН */
  isEditable: boolean;
  /** Предупреждение о необходимости заполнения ЭТТН */
  warningFlag: boolean;
  /**
   * Срок исправления ЭТТН
   * @format date-time
   */
  slaEttnUpdate?: string;
  /** ЭТТН */
  ettn?: EttnDto;
}

export interface InvoiceInListDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  invoiceNumber?: number;
  deliveryCertificate?: string;
  dateCreated?: string;
  /** @deprecated */
  status?: string;
  invoiceStatus?: InvoiceStatus;
  /** @format int64 */
  fullPrice?: number;
  /** Time slot reservation model */
  timeSlotReservation?: TimeSlotReservationDto;
  /** @format int32 */
  totalAccepted?: number;
  /** @format int32 */
  totalToStock?: number;
  /** @format int32 */
  remainingAmountOfUpdates?: number;
  /** @format date-time */
  dateAccepted?: string;
  /** @format date-time */
  expressAcceptanceDate?: string;
  stock?: StockDto;
  /**
   * Номер ЭТТН, deprecated, use invoiceEttn
   * @deprecated
   */
  externalNumber?: string;
  /** Информация по ЭТТН накладной */
  invoiceEttn?: InvoiceEttnDto;
}

export interface InvoiceStatus {
  text?: string;
  color?: string;
  value?: string;
}

export interface StockDto {
  /** @format int64 */
  id?: number;
  externalId?: string;
  title?: string;
  address?: string;
  timeFrom?: string;
  timeTo?: string;
  poolSource?: string;
  dimensionalGroups?: DimensionalGroupDto[];
}

/** Time slot model */
export interface TimeSlotDto {
  /**
   * Time slot time from
   * @format date-time
   */
  timeFrom?: string;
  /**
   * Time slot time to
   * @format date-time
   */
  timeTo?: string;
}

/** Time slot reservation model */
export interface TimeSlotReservationDto {
  /**
   * Id of reservation
   * @format int64
   * @example 1
   */
  id?: number;
  /** Reserved time slots */
  timeSlots?: TimeSlotDto[];
  /**
   * Status of reservation
   * @example "RESERVED"
   */
  status?: "RESERVED" | "CANCELED";
  /** @format date-time */
  timeFrom?: string;
  /** @format date-time */
  timeTo?: string;
}

/** DTO обновления накладной */
export interface UpdateInvoiceDto {
  /**
   * ID накладной
   * @format int64
   */
  invoiceId: number;
  /** Номер ЭТТН */
  externalNumber: string;
}

/** Request for get time-slots */
export interface TimeSlotRq {
  /** List of skus */
  skuList?: TimeSlotSkuDto[];
  /**
   * Time from for time slots, must be future
   * @format date-time
   */
  timeFrom: string;
  /**
   * Time to for time slots, must be future
   * @format date-time
   */
  timeTo: string;
  poolSource?: string;
}

/** Sku for time-slot */
export interface TimeSlotSkuDto {
  /**
   * sku.id
   * @format int64
   * @example 20
   */
  skuId: number;
  /**
   * Quantity to stock of sku
   * @format int32
   * @example 100
   */
  quantityToStock: number;
}

export interface GenericResponseTimeSlotRs {
  /** Response body of time slots */
  payload?: TimeSlotRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response body of time slots */
export interface TimeSlotRs {
  /** Available time slots */
  timeSlots?: TimeSlotDto[];
}

export interface InvoiceTimeslotsDto {
  /** @format date-time */
  timeFrom: string;
  invoiceIds: number[];
  /** @format int64 */
  stockId?: number;
  poolSource?: string;
}

export interface GenericResponseListInvoiceInListDto {
  /** Response payload */
  payload?: InvoiceInListDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface InvoiceListDto {
  invoiceIds: number[];
}

export interface GenericResponseStocksRs {
  /** Response payload */
  payload?: StocksRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface StocksRs {
  stocks?: StockDto[];
}

export interface GetStocksDto {
  skuList: StockSkuDto[];
}

export interface StockSkuDto {
  /** @format int64 */
  skuId: number;
}

export interface DeliveryCertificateDto {
  /** @format int64 */
  invoiceId?: number;
  value?: string;
}

export interface CreateInvoiceDto {
  skuList: SkuToInvoiceDto[];
  /** @format date-time */
  timeFrom?: string;
  deliveryCertificate?: string;
  /** @format int64 */
  stockId?: number;
}

export interface SkuToInvoiceDto {
  /** @format int64 */
  skuId: number;
  /** @format double */
  purchasePrice: number;
  /**
   * @format int32
   * @min 1
   */
  quantityToStock: number;
  /** @format date-time */
  expirationDate?: string;
  identifiers?: string[];
}

export interface VerificationSumDto {
  codeSum?: string;
}

export interface CreateSellerReturnDto {
  /** @uniqueItems true */
  returnItems?: CreateSellerReturnItemDto[];
}

export interface CreateSellerReturnItemDto {
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  amount?: number;
}

export interface GenericResponseSellerReturnDto {
  /** Response payload */
  payload?: SellerReturnDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Seller return paid storage DTO */
export interface PaidStorageSellerReturnDto {
  /**
   * The date on which paid storage begins
   * @format date-time
   */
  startDate: string;
  /**
   * Actual end date of paid storage
   * @format date-time
   */
  endDate?: string;
  /**
   * If status is PENDING, the timer must be started before the end of free storage,
   * the timer is active as long as startDate < now().
   * PENDING - paid storage is pending,
   * ACTIVE - paid storage is active now,
   * COMPLETED - paid storage is completed,
   * EXPIRED - paid storage is expired
   * @example "PENDING"
   */
  status: "PENDING" | "ACTIVE" | "COMPLETED" | "EXPIRED";
}

/** Response payload */
export interface SellerReturnDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  dateCreated?: string;
  status?: string;
  stock?: StockDto;
  /** Time slot reservation model */
  timeSlotReservation?: TimeSlotReservationDto;
  /** Seller return paid storage DTO */
  paidStorage?: PaidStorageSellerReturnDto;
  /**
   * For status 'COMPLETED': seller_return.completed_date;<br>
   * For status 'CANCELED': seller_return.canceled_date
   * @format date-time
   */
  executionDate?: string;
  /** @format date-time */
  assembledDate?: string;
  /** @format date-time */
  completedDate?: string;
  /** @format date-time */
  canceledDate?: string;
  /** Electronic waybill number */
  externalNumber?: string;
  /**
   * 'FBS' - WMS sends actType 'FBS'<br>
   * 'DEFECTED' - WMS sends actType 'DEFECTED', or if actType from WMS is null and fromDefected is true<br>
   * 'RETURN' - any other actType except (FBS, DEFECTED), or actType is null and fromDefected is false
   */
  type: "DEFECTED" | "RETURN" | "FBS";
  /** Информация по ЭТТН накладной возврата. */
  ettnInfo?: SellerReturnEttnInfoDto;
  /** @format int64 */
  shopId?: number;
  shopTitle?: string;
  /** @uniqueItems true */
  returnItems?: SellerReturnItemDto[];
  /**
   * Sum of returnItems.amount
   * @format int32
   */
  totalAmount: number;
  /**
   * Sum of returnItems.packedAmount
   * @format int32
   */
  totalPackedAmount: number;
  /**
   * Count of allowed attempts to change the timeslot
   * @format int32
   */
  countAllowedChange: number;
  /**
   * Max count of allowed attempts to change the timeslot
   * @format int32
   */
  maxCountAllowedChange: number;
}

/** Информация по ЭТТН накладной возврата. */
export interface SellerReturnEttnInfoDto {
  /** ФИО водителя */
  fullName: string;
  /**
   * ПИНФЛ водителя
   * @pattern ^\d{14}$
   */
  pinfl: string;
  /**
   * Номер автомобиля
   * @pattern ^[A-Z0-9]{8}$
   */
  carNumber: string;
  /** Модель автомобиля. */
  carModel: string;
  /**
   * ИНН/ПИНФЛ грузоперевозчика.
   * @pattern ^\d{9,14}$
   */
  truckingCompanyTinOrPinfl: string;
  /** Название грузоперевозчика. */
  truckingCompanyName: string;
  /**
   * ИНН/ПИНФЛ владельца транспорта.
   * @pattern ^\d{9,14}$
   */
  transportOwnerTinOrPinfl: string;
  /** Наименование владельца транспорта. */
  transportOwnerName: string;
  /**
   * ID региона из справочника.
   * @format int32
   */
  regionId?: number;
  /** Наименование региона. */
  regionName?: string;
  /**
   * Код района.
   * @format int32
   */
  districtCode?: number;
  /** Наименование района. */
  districtName?: string;
  /** Адрес доставки. */
  address?: string;
}

export interface SellerReturnItemDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  amount?: number;
  /** @format int32 */
  packedAmount?: number;
  skuTitle?: string;
  productTitle?: string;
  /** @format int64 */
  purchasePrice?: number;
}

export interface UpdateTimeSlotSellerReturnDto {
  /** @format date-time */
  timeFrom: string;
}

export interface UpdateSellerReturnDto {
  /**
   * ИД накладной возврата
   * @format int64
   */
  returnId: number;
  /**
   * ЭТТН
   * @deprecated
   */
  externalNumber?: string;
  /** Информация по ЭТТН накладной возврата. */
  ettnInfo?: SellerReturnEttnInfoDto;
}

export interface SellerReturnTimeSlotsDto {
  /** @format date-time */
  timeFrom: string;
  invoiceIds: number[];
}

export interface GenericResponseListSellerReturnDto {
  /** Response payload */
  payload?: SellerReturnDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CreateSellerPromoCodeRq {
  /**
   * one of fields discountAmount or discountPercent is required
   * @format int64
   */
  discountAmount?: number;
  /**
   * one of fields discountAmount or discountPercent is required
   * @format int32
   * @min 0
   * @max 100
   */
  discountPercent?: number;
  /**
   * @format int64
   * @min 0
   */
  promoActivationSum?: number;
  /** @format date-time */
  expiredAt: string;
  code: string;
  /** @format int64 */
  shopId?: number;
  /**
   * @format int32
   * @min 1
   */
  quantityUse?: number;
}

export interface PromoCodeDto {
  /** @format int64 */
  id?: number;
  code?: string;
  status?: "ACTIVE" | "EXPIRED" | "USED";
  type?: "PERSONAL" | "MULTIPLE";
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  expiredAt?: string;
  /** @format int64 */
  discountAmount?: number;
  /** @format int32 */
  discountPercent?: number;
  /** @format int64 */
  promoCodeActivationSum?: number;
  /** @format int32 */
  initialQuantity?: number;
  /** @format int32 */
  quantityUsed?: number;
  /** @format int64 */
  consumption?: number;
}

export interface GeneratePromocodeCodeRq {
  /** @format int64 */
  shopId?: number;
}

export interface GeneratePromoCodeCodeDto {
  code?: string;
}

export interface PromoCodeExistsRq {
  code: string;
}

export interface ExistDto {
  exists?: boolean;
}

export interface CreateSellerPromocodeFromChatRq {
  /** @format int64 */
  customerId?: number;
  /**
   * one of fields discountAmount or discountPercent is required
   * @format int64
   */
  discountAmount?: number;
  /**
   * one of fields discountAmount or discountPercent is required
   * @format int32
   * @min 0
   * @max 100
   */
  discountPercent?: number;
  /**
   * @format int64
   * @min 0
   */
  promoActivationSum?: number;
  /** @format date-time */
  expiredAt: string;
  /** @format int64 */
  shopId?: number;
  /**
   * @format int32
   * @min 1
   */
  quantityUse?: number;
}

export interface LabelDto {
  skuTitle?: string;
  productLabels?: LabelTypeDto;
  packageLabels?: LabelTypeDto;
}

export interface LabelTypeDto {
  type: string;
  /**
   * @format int32
   * @min 0
   * @max 1000
   */
  amount: number;
}

export interface LabelsDto {
  skuLabels?: LabelDto[];
}

export type SellerInfo = object;

export interface PdfReportDto {
  pdf?: string[];
}

export interface GetProductBarcodesRq {
  /**
   * @maxItems 100
   * @minItems 1
   */
  data: ProductBarcodeGenerationData[];
}

export interface ProductBarcodeGenerationData {
  /** @format int64 */
  skuId?: number;
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  amount?: number;
  /** @format int64 */
  barcodeTypeId?: number;
}

export interface ProductPriceDto {
  /** @format int64 */
  productId?: number;
  prices?: SkuPriceDto[];
}

export interface SkuPriceDto {
  /** @format int64 */
  skuId?: number;
  /** @format int64 */
  newPrice: number;
}

export interface GenericResponseProductCommissionDto {
  /** Response payload */
  payload?: ProductCommissionDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface PriceWithCommissionDto {
  /** @format int64 */
  skuId?: number;
  /** @format double */
  commission?: number;
  /** @format int64 */
  sellPrice?: number;
  /** @format int64 */
  marketplaceCommission?: number;
  /** @format int64 */
  toWithdraw?: number;
  /** @format int64 */
  logisticDeliveryFee?: number;
}

/** Response payload */
export interface ProductCommissionDto {
  /**
   * @deprecated
   * @format double
   */
  commission?: number;
  skuPrices?: PriceWithCommissionDto[];
}

export interface ProductTransferDto {
  productIdList: number[];
  urlShop: string;
  reason?: string;
}

export interface NewSkuDto {
  /**
   * SKU ID
   * @format int64
   */
  id: number;
  /** Sku title */
  skuTitle: string;
  /**
   * Quantity
   * @format int32
   * @min 0
   */
  quantityCreated: number;
  /**
   * Price for an item without discount (full price for product). In product card it will be shown as a crossed price if sell price lower.
   * @format int64
   * @min 1
   * @max 999999000
   */
  fullPrice: number;
  /**
   * Sell price (discount can be included)
   * @format int64
   * @min 1
   * @max 999999000
   */
  sellPrice: number;
  barcode?: string;
  /** @pattern ^[0-9]{17}$ */
  ikpu: string;
  skuCharacteristicList?: SkuCharacteristicDto[];
  isActive?: boolean;
  canEdit?: boolean;
  blocked?: boolean;
  status?: StatusDto;
  /** @format double */
  commission?: number;
  /** Dimensions of SKU (length, width, height in mm and weight in grams) */
  dimensions?: SkuDimensionDto;
  /**
   * @minLength 0
   * @maxLength 255
   */
  article?: string;
}

export interface SkuCharacteristicDto {
  characteristicTitle?: Record<string, string>;
  definedType?: boolean;
  characteristicValue?: Record<string, string>;
}

/** Dimensions of SKU (length, width, height in mm and weight in grams) */
export interface SkuDimensionDto {
  /** @format int64 */
  "Length in millimeters": number;
  /** @format int64 */
  "Width in millimeters": number;
  /** @format int64 */
  "Height in millimeters": number;
  /** @format int64 */
  "Weight in grams": number;
}

export interface CustomCharacteristicSkuDto {
  characteristicTitle?: Record<string, string>;
  customCharacteristicValuesSkus?: CustomCharacteristicValueSkuDto[];
}

export interface CustomCharacteristicValueSkuDto {
  customCharacteristicValueTitle?: Record<string, string>;
  /**
   * Only upperCase А-Я|A-Z|0-9, must be unique
   * @minLength 0
   * @maxLength 7
   * @pattern [A-ZА-ЯЁ0-9]+
   */
  skuValue?: string;
}

export interface SkuDataDto {
  /**
   * Required in order to associate sku data with particular product. <br>This field can be filled by value received from the response body for "createProduct" request
   * @format int64
   */
  productId: number;
  /**
   * Sku for product title
   * @minLength 0
   * @maxLength 7
   */
  skuForProduct: string;
  skuTitlesForCustomCharacteristics?: CustomCharacteristicSkuDto[];
  skuList: NewSkuDto[];
}

export interface EditableDto {
  isEditable?: boolean;
  isEditableSku?: boolean;
  isActive?: boolean;
}

export interface CharacteristicsValueDto {
  title?: Record<string, string>;
  value: string;
  skuValue?: string;
  wantToPhotoStudio?: boolean;
}

/** List of defined characteristics. At most 2 are available */
export interface ChosenDefinedCharacteristicDto {
  characteristicTitle?: Record<string, string>;
  characteristicValues: CharacteristicsValueDto[];
  /**
   * @format int32
   * @min 0
   */
  orderingNumber?: number;
  /** @format int64 */
  characteristicId?: number;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  orderNumber?: number;
}

export interface ColorCollectionImageDto {
  color: Record<string, string>;
  /** @format int64 */
  collectionId: number;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
  deletable?: boolean;
}

/** Required only if color characteristic was chosen.User is allowed to decide whether to load photos or not, but if loading,then photo should be specified for all chosen colors */
export interface ColorImageDto {
  color: Record<string, string>;
  colorImage: string;
  imageUrl?: string;
  /** @format int32 */
  ordering?: number;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
  deletable?: boolean;
}

export interface ColorVideoDto {
  color: Record<string, string>;
  videoKey: string;
  videoUrl?: string;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
  deletable?: boolean;
}

/** List of custom characteristics. At most 3 are available */
export interface CustomCharacteristicDto {
  characteristicTitle?: Record<string, string>;
  characteristicValues: CharacteristicsValueDto[];
  /**
   * @format int32
   * @min 0
   */
  orderingNumber?: number;
  /** @format int64 */
  characteristicId?: number;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  orderNumber?: number;
}

export interface EditProductFilterValueDto {
  /** @format int64 */
  filterId: number;
  /**
   * One of `filterValueId` or `value` is required
   * @format int64
   */
  filterValueId?: number;
  /** One of `filterValueId` or `value` is required */
  value?: Record<string, string>;
}

/** Product certificates */
export interface ProductCertificateDto {
  /**
   * Id сертификата
   * @format int64
   */
  id?: number;
  /** Номер сертификата */
  number: string;
  /**
   * Годен до
   * @format date
   */
  expirationDate: string;
  /** Приложенные фотографии сертификата */
  certificateImages: ProductCertificateImageDto[];
}

/** Приложенные фотографии сертификата */
export interface ProductCertificateImageDto {
  /**
   * Id фотографии сертификата
   * @format int64
   */
  id?: number;
  /** Ключ фоотографии сертификата */
  key: string;
  /** URL адрес фотографии сертификата */
  url: string;
  /**
   * Порядок сортировки фотографии
   * @format int32
   */
  ordering?: number;
}

/** Product comments */
export interface ProductCommentDto {
  comment: Record<string, string>;
  /** Comment type. Should be either "Размеры", "Инструкция" or "Сертификация". May be updated later. */
  commentType: string;
}

export interface ProductEditDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  categoryId?: number;
  title: Record<string, string>;
  description: Record<string, string>;
  /** Minimalistic description for product */
  shortDescription?: Record<string, string>;
  /** Product attributes */
  attributes?: Record<string, string[]>;
  tags?: Record<string, string[]>;
  /**
   * @maxItems 4
   * @minItems 0
   */
  synonyms?: string[];
  /** Product comments */
  comments?: ProductCommentDto[];
  /**
   * List of defined characteristics. At most 2 are available
   * @maxItems 2
   * @minItems 0
   */
  definedCharacteristics?: ChosenDefinedCharacteristicDto[];
  /**
   * List of custom characteristics. At most 3 are available
   * @maxItems 3
   * @minItems 0
   */
  customCharacteristics?: CustomCharacteristicDto[];
  /**
   * List of links on product images. Should contain at least one image
   * @deprecated
   */
  images: string[];
  /**
   * Key on product video
   * @deprecated
   */
  videoKey?: string;
  /**
   * Id of collection for circular images
   * @deprecated
   * @format int64
   */
  collectionId?: number;
  productImages?: ProductImageDto[];
  video?: ProductVideoDto;
  imageCollection?: ProductImageCollectionDto;
  /** Required only if color characteristic was chosen */
  photoOnPreview?: boolean;
  /** Set to true when seller send 3x4 image */
  verticalPhoto?: boolean;
  /** Required only if color characteristic was chosen.User is allowed to decide whether to load photos or not, but if loading,then photo should be specified for all chosen colors */
  colorImages?: ColorImageDto[];
  colorVideos?: ColorVideoDto[];
  colorCollectionImages?: ColorCollectionImageDto[];
  vat?: "VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112";
  newYearProposed?: boolean;
  tnVedCode?: string;
  okpd2?: string;
  wantToPhotoStudio?: boolean;
  /** Indicates does it required to set watermark on product photos */
  setWatermarkOnPhotos?: boolean;
  /** @uniqueItems true */
  filterValues?: EditProductFilterValueDto[];
  /** Additional parameters */
  productFields?: Record<string, object>;
  /**
   * Product certificates
   * @uniqueItems true
   */
  productCertificates?: ProductCertificateDto[];
  perishable?: boolean;
}

export interface ProductImageCollectionDto {
  /** @format int64 */
  collectionId?: number;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
  deletable?: boolean;
}

export interface ProductImageDto {
  key?: string;
  url?: string;
  deletable?: boolean;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
}

export interface ProductVideoDto {
  key?: string;
  url?: string;
  status?: "ACTIVE" | "ARCHIVED" | "SKU_ARCHIVED" | "DELETED";
  deletable?: boolean;
}

export interface CommissionDto {
  /** @format double */
  minCommission?: number;
  /** @format double */
  maxCommission?: number;
}

export interface DefinedCharacteristicDto {
  /** @format int64 */
  characteristicId?: number;
  characteristicTitle?: Record<string, string>;
  /** @format int32 */
  orderingNumber?: number;
  characteristicValues?: DefinedCharacteristicValueDto[];
}

export interface DefinedCharacteristicValueDto {
  title: Record<string, string>;
  value?: string;
  skuValue?: string;
  wantToPhotoStudio?: boolean;
}

export interface NewYearStatusDto {
  title?: string;
  color?: string;
  value?: "NONE" | "CONFIRMED" | "PROPOSED" | "REJECTED";
}

export interface ProductDescriptionResponseDto {
  /** @format int64 */
  id?: number;
  shopSkuTitle?: string;
  title?: Record<string, string>;
  productSkuTitle?: string;
  /**
   * @deprecated
   * @format int32
   */
  commission?: number;
  commissionDto?: CommissionDto;
  hasCustomCharacteristics?: boolean;
  definedCharacteristicList?: DefinedCharacteristicDto[];
  customCharacteristicList?: CustomCharacteristicDto[];
  skuList?: NewSkuDto[];
  filters?: ProductFilterDto[];
  newYearStatus?: NewYearStatusDto;
  hasActiveCalendarEvents?: boolean;
}

export interface ProductFilterDto {
  /** @format int64 */
  id?: number;
  title?: string;
  description?: string;
  extendableValues?: boolean;
  required?: boolean;
  /** @uniqueItems true */
  values?: ProductFilterValueDto[];
  emptyValue?: ProductFilterValueDto;
  /** @format int32 */
  maxLength?: number;
  brandFilter?: boolean;
}

export interface ProductFilterValueDto {
  /** @format int64 */
  id?: number;
  value?: string;
  title?: string;
  predefined?: boolean;
  isApproved?: boolean;
}

export interface ProductIdDto {
  /** @format int64 */
  id: number;
}

export interface ProductCreateDto {
  /** @format int64 */
  id?: number;
  /**
   * Chosen category
   * @format int64
   */
  categoryId: number;
  title: Record<string, string>;
  description: Record<string, string>;
  /** Description contains only text */
  newDescription?: Record<string, string>;
  /** Minimalistic description for product */
  shortDescription?: Record<string, string>;
  /** Product attributes */
  attributes?: Record<string, string[]>;
  tags?: Record<string, string[]>;
  synonyms?: ProductSynonymsDto[];
  /** Product comments */
  comments?: ProductCommentDto[];
  /**
   * List of defined characteristics. At most 2 are available
   * @maxItems 2
   * @minItems 0
   */
  definedCharacteristics?: ChosenDefinedCharacteristicDto[];
  /**
   * List of custom characteristics. At most 3 are available
   * @maxItems 3
   * @minItems 0
   */
  customCharacteristics?: CustomCharacteristicDto[];
  /**
   * List of links on product images. Should contain at least one image
   * @deprecated
   */
  images: string[];
  /**
   * Key on product video
   * @deprecated
   */
  videoKey?: string;
  /**
   * Id of collection for circular images
   * @deprecated
   * @format int64
   */
  collectionId?: number;
  productImages?: ProductImageDto[];
  video?: ProductVideoDto;
  imageCollection?: ProductImageCollectionDto;
  /** Required only if color characteristic was chosen */
  photoOnPreview?: boolean;
  /** Set to true when seller send 3x4 image */
  verticalPhoto?: boolean;
  /** Required only if color characteristic was chosen.User is allowed to decide whether to load photos or not, but if loading,then photo should be specified for all chosen colors */
  colorImages?: ColorImageDto[];
  colorVideos?: ColorVideoDto[];
  colorCollectionImages?: ColorCollectionImageDto[];
  vat?: "VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112";
  newYearProposed?: boolean;
  tnVedCode?: string;
  okpd2?: string;
  wantToPhotoStudio?: boolean;
  /** Indicates does it required to set watermark on product photos */
  setWatermarkOnPhotos?: boolean;
  /** @uniqueItems true */
  filterValues?: EditProductFilterValueDto[];
  /** Additional parameters */
  productFields?: Record<string, object>;
  /**
   * Product certificates
   * @uniqueItems true
   */
  productCertificates?: ProductCertificateDto[];
  perishable?: boolean;
}

export interface ProductSynonymsDto {
  key?: string;
  values?: string[];
}

/** Товар для добавления в распродажу */
export interface AddProduct {
  /**
   * Идентификатор товара
   * @format int64
   */
  productId: number;
  /** Список sku у товара с новыми ценами */
  skuList: AddSku[];
}

/** Список продуктов для добавления в распродажу */
export interface AddProductList {
  products: AddProduct[];
}

/** Sku для добавления в распродажу */
export interface AddSku {
  /** @format int64 */
  skuId: number;
  /**
   * Лимит на кол-во sku при участии в распродаже
   * @format int32
   * @min 0
   */
  limitOnDiscountedSku: number;
  /**
   * Новая цена sku при участии в распродаже
   * @format int64
   */
  newSalePrice: number;
}

export interface SaleSkuCalculateToWithdrawRequest {
  /**
   * Идентификатор товара
   * @format int64
   */
  productId: number;
  /**
   * Идентификатор sku
   * @format int64
   */
  skuId: number;
  /**
   * Цена продажи sku в рамках распродажи
   * @format int64
   */
  newSalePrice: number;
}

export interface GenericResponseListSaleSkuCalculatedToWithdraw {
  /** Response payload */
  payload?: SaleSkuCalculatedToWithdraw[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SaleSkuCalculatedToWithdraw {
  /**
   * Идентификатор товара
   * @format int64
   */
  productId: number;
  /**
   * Идентификатор sku
   * @format int64
   */
  skuId: number;
  /**
   * Цена продажи sku в рамках распродажи
   * @format int64
   */
  newSalePrice: number;
  /**
   * Цена продажи sku до участия в распродаже
   * @format int64
   */
  toWithdraw: number;
}

export interface SkuDiscountDto {
  /** @format int64 */
  skuId: number;
  /** @format int64 */
  newSellPrice?: number;
  /** @format date-time */
  timeStart?: string;
  /** @format date-time */
  timeEnd?: string;
}

export interface DiscountIdDto {
  /** @format int64 */
  discountId?: number;
}

export interface RemoveProductDto {
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  calendarEventId?: number;
}

export interface AddProductDto {
  /** @format int64 */
  productId?: number;
  /** @uniqueItems true */
  skus?: AddSkuDto[];
}

export interface AddProductListDto {
  /** @format int64 */
  calendarEventId?: number;
  /** @uniqueItems true */
  products?: AddProductDto[];
}

export interface AddSkuDto {
  /** @format int64 */
  skuId?: number;
  /** @format int64 */
  newPrice?: number;
}

export interface CreateBundleDto {
  /**
   * @maxItems 3
   * @minItems 2
   */
  items: CreateBundleItemDto[];
  /** @format date-time */
  dateCompleted?: string;
}

export interface CreateBundleItemDto {
  /** @format int64 */
  productId?: number;
  type?: "MAIN" | "SECONDARY";
  /** @uniqueItems true */
  skuItems: SkuItem[];
}

export interface SkuItem {
  /** @format int64 */
  skuId?: number;
  /** @format int64 */
  discountAmount?: number;
}

export interface BundleIdDto {
  /** @format int64 */
  id?: number;
}

export interface ShopMainRequestDto {
  /** @format int64 */
  id?: number;
  shopTitle: string;
  /**
   * @minLength 0
   * @maxLength 25
   */
  shortTitle?: string;
  /**
   * Only lowerCase a-z, 0-9 and hyphens
   * @pattern [a-z0-9\-]+
   */
  urlTitle: string;
  /**
   * Only upperCase А-Я
   * @minLength 0
   * @maxLength 7
   * @pattern [A-ZА-ЯЁ0-9]+
   */
  skuTitle: string;
  /**
   * @deprecated
   * @minLength 0
   * @maxLength 1000
   */
  shopDescription?: string;
  description?: Record<string, string>;
  transferred?: boolean;
}

export interface ShopAuthorityDto {
  productManager?: boolean;
  /** @format int64 */
  shopId?: number;
}

export interface InvoiceIdDto {
  /** @format int64 */
  id?: number;
}

export interface CreateFilterValueDto {
  /** @format int64 */
  filterId: number;
  value?: Record<string, string>;
}

export interface FilterValueDto {
  /** @format int64 */
  id?: number;
  value?: string;
  title?: string;
  predefined?: boolean;
  deleted?: boolean;
}

export interface EditFiltersDto {
  skuFilters?: SkuFilterDto[];
}

export interface SkuFilterDto {
  /** @format int64 */
  skuId: number;
  editable?: boolean;
  /** @format int64 */
  filterId?: number;
  /** @uniqueItems true */
  values: number[];
  /** @uniqueItems true */
  customValues: Record<string, string>[];
}

export interface FilterDto {
  /** @format int64 */
  id?: number;
  title?: string;
  measurementUnit?: string;
  description?: string;
  required?: boolean;
  extendableValues?: boolean;
  /** @format int32 */
  maxAllowedValues?: number;
  type?: "RANGED_VALUE" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "RANGED_ENUM";
  /** @uniqueItems true */
  values?: FilterValueDto[];
  emptyValue?: FilterValueDto;
}

export interface ProductFiltersDto {
  /** @uniqueItems true */
  skuFilters?: SkuFilterDto[];
  filters?: FilterDto[];
  sku?: SkuForDiscountDto[];
  /** @format int64 */
  categoryId?: number;
}

export interface SkuForDiscountDto {
  /** @format int64 */
  skuId?: number;
  productTitle?: string;
  characteristics?: string;
  skuTitle?: string;
  barcode?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int32 */
  quantityActive?: number;
  /** @format double */
  commission?: number;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  sellPrice?: number;
}

export interface ShopContactsDto {
  /**
   * @minLength 0
   * @maxLength 50
   */
  telegramContact?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  vkContact?: string;
  /**
   * @minLength 0
   * @maxLength 18
   */
  whatsAppContact?: string;
  /**
   * @minLength 0
   * @maxLength 18
   */
  viberContact?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  instagramContact?: string;
}

export interface ShopAppearanceDto {
  /** @pattern ^$|[a-z0-9]+ */
  url?: string;
  /** @pattern ^$|[a-z0-9]+ */
  chatAvatarUrl?: string;
  /** @pattern ^$|[a-z0-9]+ */
  watermark?: string;
}

export interface NewSellerShopPromoDto {
  /** @format int64 */
  discountAmount: number;
  /**
   * @format int64
   * @min 0
   */
  promoActivationSum?: number;
  /** @format int64 */
  shopId?: number;
  promoType: "HB_UZUM";
}

export interface GenericResponseExistDto {
  payload?: ExistDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface NewSellerProductPromoDto {
  /** @format int32 */
  discountPercent?: number;
  /** @format int64 */
  productId?: number;
  promoType: "HB_UZUM";
}

export interface ClosePersonDetailsDto {
  closePersonLastName: string;
  closePersonFirstName: string;
  closePersonPatronymic: string;
  closePersonPhoneNumber: string;
}

export interface DocumentDto {
  /** @format int64 */
  id?: number;
  type?: "CERTIFICATE_OF_REGISTRATION";
  link?: string;
  status?: "NOT_ACTIVE" | "ACTIVE" | "OUTDATED";
}

export interface EdfSystemDto {
  /** @format int64 */
  id: number;
  title?: string;
}

export interface IndividualEntrepreneurDetailsDto {
  /**
   * @maxItems 5
   * @minItems 1
   */
  settlementAccounts: SettlementAccountDto[];
  type?: "INDIVIDUAL" | "LEGAL" | "SELF_EMPLOYED";
  edfSystem?: SellerEdfSystemDto;
  documents?: DocumentDto[];
  lastName?: string;
  firstName?: string;
  patronymic?: string;
  /** @pattern ^\d{9}$ */
  inn?: string;
  /** @pattern ^\d{14}$ */
  pinfl?: string;
  registrationNumber?: string;
  /** @pattern ^\d{5}$ */
  oked?: string;
  /** @pattern ^[A-Z]{2}$ */
  passportSeries?: string;
  /** @pattern ^\d{7}$ */
  passportNumber?: string;
  /** @format date */
  registrationDate?: string;
  activityAddress?: string;
  accountName?: string;
  sellerVat?: "VAT0" | "VAT12";
}

export interface PersonalDetailsDto {
  lastName: string;
  firstName: string;
  patronymic: string;
  /**
   * Date format dd/MM/yyyy
   * @pattern ^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$
   */
  birthday: string;
  registrationAddress?: string;
  /** @format int64 */
  registrationDate?: number;
  /** @format date-time */
  legalDataCreationDate?: string;
  commissionaireFilled?: boolean;
}

export interface PersonalDetailsRequest {
  personalDetailsDto: PersonalDetailsDto;
  closePersonDetailsDto: ClosePersonDetailsDto;
  entrepreneurDetailsDto: IndividualEntrepreneurDetailsDto;
}

export interface SellerEdfSystemDto {
  edfSystem: EdfSystemDto;
  userId: string;
}

export interface SettlementAccountDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @pattern ^(2020|2021)\d{16}$ */
  accountNumber: string;
  /** @pattern ^\d{5}$ */
  codeBank: string;
}

export interface PersonalDetailsResponse {
  partner?: boolean;
  entrepreneurPartner?: boolean;
  contractNumber?: string;
  /** @format double */
  commission?: number;
  personalDetailsDto: PersonalDetailsDto;
  closePersonDetailsDto: ClosePersonDetailsDto;
  entrepreneurDetailsDto?: IndividualEntrepreneurDetailsDto;
}

export interface SetKPPRq {
  /** @pattern ^\d{9}$ */
  kpp?: string;
}

export interface DismissEmployerRq {
  /** @format int64 */
  employerAccountId?: number;
}

export interface HireEmployerRq {
  /** @format int64 */
  roleId: number;
  phone: string;
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  organizationIds: number[];
}

export interface CreateSellerOpenApiTokenRequest {
  name: string;
  readonly: boolean;
  metadata: OpenApiTokenMetadata;
  expirationTime: "ONE_MONTH" | "THREE_MONTH" | "SIX_MONTH" | "TWELVE_MONTH" | "TWENTY_FOUR_MONTH" | "INFINITY";
}

export interface OpenApiTokenMetadata {
  /**
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  shopIds: number[];
}

export interface CreateOpenApiTokenResponse {
  token?: string;
}

export interface SellerFeedbackCreateDto {
  /**
   * @format int32
   * @min 1
   * @max 5
   */
  rating: number;
  /**
   * @minLength 0
   * @maxLength 10000
   */
  message?: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  path: string;
  /** @format int64 */
  shopId: number;
}

export interface SellerOpportunitiesAbbDto {
  contactPhoneNumber?: string;
  contactLastName?: string;
  contactFirstName?: string;
  contactMiddleName?: string;
  contactEmail?: string;
  organizationShortName?: string;
  organizationType: "individual" | "business";
  inn?: string;
  /** @pattern ([0-9]{13,15}) */
  ogrn?: string;
  cityId?: string;
  branchCode?: string;
  comment?: string;
  activateType?: "commercial" | "nonProfit" | "financial";
}

/** Response payload */
export interface AbbGenericRs {
  data?: AkbarsData;
  errors?: Errors[];
}

export interface AkbarsData {
  /** @format int64 */
  id?: number;
  acceptedForProcessing?: boolean;
  reason?: string;
}

export interface Errors {
  detail?: string;
}

export interface GenericResponseAbbGenericRs {
  /** Response payload */
  payload?: AbbGenericRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseBonusProgramDto {
  payload?: BonusProgramDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface PromoCodeNameDto {
  promoCode: string;
}

export interface GenericResponsePromoCodeInfoDto {
  /** Response payload */
  payload?: PromoCodeInfoDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PromoCodeInfoDto {
  /** @format date-time */
  expirationTime?: string;
  /** @format date-time */
  usedAt?: string;
  promoCode?: string;
  /** @format int64 */
  price?: number;
  text?: string;
  status?: string;
  hidden?: boolean;
  used?: boolean;
  deepLink?: string;
  type?: "PRODUCT" | "SKU" | "SHOP" | "CATEGORY";
  private?: boolean;
}

export interface PostamatSearchParamsDto {
  /** @format int64 */
  cityId: number;
  /** @uniqueItems true */
  skus: SkuAmountDto[];
}

export interface SkuAmountDto {
  /** @format int64 */
  skuId: number;
  /** @format int32 */
  amount: number;
}

export interface DateTimeDto {
  /** @format date-time */
  localDate?: string;
  periods?: string[];
  options?: DeliveryOptionDto[];
  expectedTimeFrom?: LocalTime;
  expectedTimeTo?: LocalTime;
  /** @format date-time */
  expectedDateFrom?: string;
  /** @format date-time */
  expectedDateTo?: string;
  textDeliveryWithDate?: string;
  /** @format date-time */
  date?: string;
}

export interface GenericResponseSearchPostamatRs {
  /** Response payload */
  payload?: SearchPostamatRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface PostamatDto {
  /** @format int64 */
  id?: number;
  address?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** Время работы с */
  timeFrom?: string;
  /** Время работы до */
  timeTo?: string;
  deliveryDate?: DateTimeDto;
  type?: "DELIVERY_POINT" | "POSTAMAT" | "COURIER" | "RUSSIAN_POST";
}

/** Response payload */
export interface SearchPostamatRs {
  postamats?: PostamatDto[];
}

export interface OpenPickupPointRequestData {
  fullName: string;
  email: string;
  phoneNumber: string;
  /**
   * @minLength 1
   * @maxLength 2147483647
   */
  city: string;
  referer?: string;
  source?: string;
}

export interface OpenPickupPointResponseDto {
  successful?: boolean;
}

/** Response payload */
export interface AvailablePaymentDto {
  promotions?: PaymentOptionsPromotionDto[];
  options?: PaymentOptionDto[];
  marketplaceDiscountInfo?: MarketplaceDiscountInfo;
}

export type CashbackDesciptionMotivationDto = MotivationDto & {
  icon?: IconDto;
  text?: TextDto;
};

export type CashbackMotivationDto = MotivationDto & {
  text?: TextDto;
  backgroundColor?: string;
};

export type DiscountDescriptionMotivationDto = MotivationDto & {
  icon?: IconDto;
  text?: TextDto;
};

export interface GenericResponseAvailablePaymentDto {
  /** Response payload */
  payload?: AvailablePaymentDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface IconDto {
  url?: string;
  color?: string;
}

export interface Icons {
  small?: string;
  button?: string;
  url?: string;
}

export interface MarketplaceDiscountInfo {
  optionKey?: string;
  /** @format int64 */
  fullPrice?: number;
  /** @format int64 */
  discountPrice?: number;
  bannerText?: string;
}

export interface MotivationDto {
  type: string;
}

export interface PaymentOptionBanner {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: string;
  backgroundColor?: string;
}

export interface PaymentOptionButton {
  title?: string;
  link?: string;
  titleColor?: string;
  color?: string;
  /** @format int64 */
  buttonId?: number;
}

export interface PaymentOptionDto {
  value?: string;
  icons?: Icons;
  title?: string;
  /** @deprecated */
  active?: boolean;
  description?: string;
  checkMarks?: string[];
  detailsLink?: string;
  state?: "ACTIVE" | "DISABLED" | "BLOCKED" | "ERROR" | "UNAUTHORIZED";
  stateDetails?: StateDetails;
  blockDescription?: string;
  params?: Record<string, object>;
  motivations?: (
    | CashbackDesciptionMotivationDto
    | CashbackMotivationDto
    | DiscountDescriptionMotivationDto
    | PostPaidDescriptionMotivationDto
  )[];
  /** @format int64 */
  predictionMatchOrderId?: number;
  modelPrediction?: boolean;
  preselectedPayment?: boolean;
  postPaidBlocked?: boolean;
  button?: PaymentOptionButton;
  banner?: PaymentOptionBanner;
  popup?: PaymentOptionPopup;
}

export interface PaymentOptionPopup {
  image?: string;
  title?: string;
  subtitle?: string;
  checkmarks?: string[];
  button?: PaymentOptionButton;
}

export interface PaymentOptionsPromotionDto {
  type: string;
}

export type PostPaidDescriptionMotivationDto = MotivationDto & {
  icon?: IconDto;
  text?: TextDto;
  backgroundColor?: string;
};

export interface StateDetails {
  shortDescription?: string;
  longDescription?: string;
}

export interface TextDto {
  value?: string;
  color?: string;
}

export interface PaymentOptionsRq {
  paymentGenesis?: "PAID_FROM_CHECKOUT" | "PAID_AS_POST_PAID";
}

export interface CustomerMobileActionRequest {
  actions: CustomerMobileDataRequest[];
}

export interface CustomerMobileDataRequest {
  code: "GEO_LOCATION" | "PUSH_NOTIFICATION";
  action: "APROVE" | "REJECT";
}

export interface BoundingBoxDto {
  southWest: BoundingPoint;
  northEast: BoundingPoint;
}

export interface BoundingPoint {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface DeliveryPointCommentDto {
  type?: "DESCRIPTION" | "WARNING";
  text?: string;
}

/** Response payload */
export interface DeliveryPointDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  cityId?: number;
  address?: string;
  timeFrom?: string;
  timeTo?: string;
  /** @format date-time */
  date?: string;
  hasDressingRoom?: boolean;
  hasEcoEndpoint?: boolean;
  hasFreeSpace?: boolean;
  acceptReturns?: boolean;
  /** @deprecated */
  postPaidEnabled?: boolean;
  postPaidAvailability?: "CASH_AND_CARD" | "CASH_ONLY" | "NOT_AVAILABLE";
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  deliveryDate?: DateTimeDto;
  comments?: DeliveryPointCommentDto[];
  type?: "DELIVERY_POINT" | "POSTAMAT" | "RUSSIAN_POST" | "UCELL" | "UZ_POST" | "NOT_UZUM";
  title?: string;
  /** @format int64 */
  deliveryPrice?: number;
  scheduleInfo?: ScheduleInfoDto;
  overloadedMessage?: string;
}

export interface GenericResponseListDeliveryPointDto {
  /** Response payload */
  payload?: DeliveryPointDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CheckPickedCityDto {
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  /** @format date-time */
  pickTime?: string;
}

export interface CityWithActiveDeliveryPointsDto {
  /** @format int64 */
  id?: number;
  name?: string;
  isDefault?: boolean;
  latitude?: number;
  longitude?: number;
}

export interface GenericResponsePickedCityDto {
  /** Response payload */
  payload?: PickedCityDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PickedCityDto {
  city?: CityWithActiveDeliveryPointsDto;
  isDifferentCity?: boolean;
}

export interface CartRqDto {
  selectedItems?: ItemRqDto[];
  deselectedItems?: ItemRqDto[];
  marketplaceDiscountExpInfo?: MarketplaceDiscountExpInfo;
}

export interface ItemRqDto {
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  amount?: number;
}

export interface MarketplaceDiscountExpInfo {
  paymentOptionKey?: string;
  /** @format int32 */
  discountAmount?: number;
  /** @format int32 */
  fraudThreshold?: number;
  /** @format date-time */
  fraudDateFrom?: string;
  priceText?: Record<string, string>;
  bannerText?: Record<string, string>;
  cartSummaryText?: Record<string, string>;
  modalHeader?: Record<string, string>;
  modalText?: Record<string, string>;
}

export interface CartRsDto {
  selectedCartItems?: ItemRsDto[];
  deselectedCartItems?: ItemRsDto[];
  orderDiscountDto?: OrderDiscountDto;
  /**
   * Cart price without discount
   * @format int64
   */
  cartFullPrice?: number;
  /**
   * Whole cart discount amount
   * @format int64
   */
  discountAmount?: number;
  /**
   * Cart price with discount
   * @format int64
   */
  cartTotalPrice?: number;
  /** Cart price with marketplace discount */
  marketplaceDiscount?: MarketplaceDiscountDto;
  failed?: boolean;
  /** Description of total applied discounts */
  discountDescriptions?: DiscountDescriptionDto[];
}

/** Description of total applied discounts */
export interface DiscountDescriptionDto {
  /** @format int64 */
  discountAmount?: number;
  discountDescription?: string;
}

export interface DiscountDto {
  /** @format int64 */
  discountAmount?: number;
  appliedDiscount?: "VOLUME" | "BUNDLE";
  discountText?: string;
}

export interface ItemRsDto {
  /** @format int64 */
  skuId: number;
  /** @format int32 */
  amount?: number;
  /**
   * itemFullPrice * amount - total price before discounts
   * @format int64
   */
  totalFullPrice?: number;
  /**
   * Indicates the single sku full price
   * @format int64
   */
  itemFullPrice?: number;
  /**
   * itemSellPrice * amount - total price with all discounts
   * @format int64
   */
  totalSellPrice?: number;
  /**
   * Indicates single sku item price after discounts
   * @format int64
   */
  itemSellPrice?: number;
  appliedDiscounts?: DiscountDto[];
}

/** Cart price with marketplace discount */
export interface MarketplaceDiscountDto {
  /** @format int64 */
  discountPrice?: number;
  /** @format int64 */
  discountSize?: number;
  description?: string;
}

export interface PaymentItem {
  /** @format int64 */
  orderItemId: number;
  /** @format int32 */
  amount: number;
  /** @format int32 */
  returnedAmount: number;
}

export interface WmsIntentionOrderRequest {
  /** @format int64 */
  orderId: number;
  orderItems: PaymentItem[];
  workerId?: string;
}

export interface GenericResponseWmsIntentionOrderResponse {
  /** Response payload */
  payload?: WmsIntentionOrderResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface WmsIntentionOrderResponse {
  paymentIntentionId?: string;
  /** @format int64 */
  orderId?: number;
  status?: "CREATED" | "SUCCESSFUL" | "ERROR";
  /** @format date-time */
  expiresAt?: string;
}

export type AndOp = UtilRequiredKeys<PoolRule, "type"> & {
  left?: PoolRule;
  right?: PoolRule;
};

export type CategoryRule = UtilRequiredKeys<PoolRule, "type"> & {
  /** @format int64 */
  categoryId: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  percent: number;
};

export interface CreateTimeSlotPoolDto {
  dailyTimeFrom: LocalTime;
  dailyTimeTo: LocalTime;
  /** @format int32 */
  slotCapacity: number;
  /** @format int32 */
  maxPerSlot: number;
  span: {
    /** @format int64 */
    seconds?: number;
    /** @format int32 */
    nano?: number;
    negative?: boolean;
    zero?: boolean;
    units?: {
      dateBased?: boolean;
      timeBased?: boolean;
      duration?: {
        /** @format int64 */
        seconds?: number;
        /** @format int32 */
        nano?: number;
        negative?: boolean;
        zero?: boolean;
      };
      durationEstimated?: boolean;
    }[];
  };
  value: string;
  poolRules: (AndOp | CategoryRule | EmptyRule | NewYearRule | OrOp | ProfitRule)[];
  /** @format int32 */
  priority: number;
  source: string;
}

export type EmptyRule = UtilRequiredKeys<PoolRule, "type">;

export type NewYearRule = UtilRequiredKeys<PoolRule, "type">;

export type OrOp = UtilRequiredKeys<PoolRule, "type"> & {
  left?: PoolRule;
  right?: PoolRule;
};

export interface PoolRule {
  type: "PROFIT_RULE" | "CATEGORY_RULE" | "NEW_YEAR_RULE" | "EMPTY_RULE" | "AND" | "OR";
}

export type ProfitRule = UtilRequiredKeys<PoolRule, "type"> & {
  /** @format int64 */
  amount: number;
  periodType: "DAY" | "WEEK" | "MONTH" | "QUARTER";
  /** @format int32 */
  periodAmount: number;
};

export interface GenericResponseTimeSlotPoolDto {
  /** Response payload */
  payload?: TimeSlotPoolDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface TimeSlotPoolDto {
  timeSlotRegistry?: TimeSlotRegistry;
  timeSlotPoolRuleList?: (AndOp | CategoryRule | EmptyRule | NewYearRule | OrOp | ProfitRule)[];
  /** @format int32 */
  priority?: number;
}

export interface TimeSlotRegistry {
  /** @format int64 */
  id?: number;
  value?: string;
  span?: {
    /** @format int64 */
    seconds?: number;
    /** @format int32 */
    nano?: number;
    negative?: boolean;
    zero?: boolean;
    units?: {
      dateBased?: boolean;
      timeBased?: boolean;
      duration?: {
        /** @format int64 */
        seconds?: number;
        /** @format int32 */
        nano?: number;
        negative?: boolean;
        zero?: boolean;
      };
      durationEstimated?: boolean;
    }[];
  };
  dailyTimeFrom?: LocalTime;
  dailyTimeTo?: LocalTime;
  /** @format int32 */
  maxPerSlot?: number;
  /** @format int32 */
  slotCapacity?: number;
  deleted?: boolean;
  /** @format int32 */
  priority?: number;
  source?: string;
}

export interface IdentifierDto {
  type?: string;
  values?: string[];
}

export interface OrderItemInfoDto {
  /** @format int64 */
  orderItemId?: number;
  /** @format int32 */
  amount?: number;
  /** @format int32 */
  returnedAmount?: number;
  identifiers?: IdentifierDto[];
}

export interface OrderStatusUpdateDto {
  /** @format int64 */
  orderId?: number;
  status?:
    | "RECEIVED"
    | "ASSEMBLING"
    | "PICKING"
    | "PICKED"
    | "PACKING"
    | "PACKED"
    | "ASSEMBLED"
    | "PREPARED_TO_DELIVERY"
    | "DELIVERING"
    | "TEMP_DELIVERED"
    | "TEMP_DELIVERED_TO_POSTAMAT"
    | "IN_COURIER_DELIVERY"
    | "IN_POSTAMAT_DELIVERY"
    | "DELIVERED_TO_POSTAMAT"
    | "DELIVERED"
    | "CHECKING_BY_CUSTOMER"
    | "ISSUED"
    | "TEMP_MISSING"
    | "ACCEPTED_AT_DP"
    | "PARTIALLY_RETURNED"
    | "RETURNED"
    | "PARTIALLY_CANCELED"
    | "CANCELED"
    | "WAITING_RETURN"
    | "WAITING_RETURN_FROM_COURIER"
    | "FBS_CONFIRMED"
    | "SELLER_CONFIRMED"
    | "ACCEPTED_AT_WAREHOUSE";
  /** @format uuid */
  id?: string;
  /** @format int64 */
  createdDatetime?: number;
  orderItems?: OrderItemInfoDto[];
  paymentInfo?: PaymentInfo;
  deliveryPointId?: string;
}

export interface PaymentInfo {
  /** @format int64 */
  cash?: number;
  /** @format int64 */
  cashless?: number;
  paymentType?: "FAST_PAY" | "CARD" | "CASH" | "B2C_CHECKOUT" | "NASIYA";
  paymentId?: string;
  /** @format date-time */
  datePaid?: string;
}

export interface SellerReturnResendRq {
  /**
   * @maxItems 1000
   * @minItems 1
   */
  ids?: number[];
}

export interface OrderItemReturnDto {
  /** @format int64 */
  orderItemId?: number;
  /** @format int32 */
  amount?: number;
  cause?: string;
  comment?: string;
  identifiers?: string[];
}

export interface OrderReturnDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  orderId?: number;
  /** @format date-time */
  date?: string;
  /** @format date-time */
  issuedDate?: string;
  /** @format int64 */
  deliveryPointId?: number;
  returnedItems?: OrderItemReturnDto[];
}

export interface DealUpdatedEventDto {
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  invoiceId?: number;
  contractNumber?: string;
  requiredUpdate?: boolean;
  stage?:
    | "PHONE_VERIFIED"
    | "CREATE_PERSONAL_DETAILS"
    | "AWAITING_ACTIVATION"
    | "CREATE_PRODUCT"
    | "CREATE_INVOICE"
    | "ACCEPTANCE_IN_PROGRESS_INVOICE"
    | "ACCEPT_INVOICE"
    | "CREATE_OPEN_PICKUP_POINT_REQUEST"
    | "DEPRECATED_CREATE_SELLER"
    | "DEPRECATED_CREATE_PERSONAL_DETAILS"
    | "DEPRECATED_CREATE_PRODUCT"
    | "DEPRECATED_CREATE_INVOICE"
    | "DEPRECATED_ACCEPT_INVOICE"
    | "DEPRECATED_SELL_PRODUCT"
    | "DEPRECATED_SUCCESSFUL_DEAL"
    | "UNKNOWN";
}

export interface PendingSkuDto {
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  pendingToStock?: number;
  newYearProduct?: boolean;
}

export interface Dimensions {
  /** @format int64 */
  length?: number;
  /** @format int64 */
  width?: number;
  /** @format int64 */
  height?: number;
  dimensionalGroup?: string;
}

export interface KafkaSku {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  categoryId?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  skuGroupId?: number;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  sellPrice?: number;
  /** @format int32 */
  amount?: number;
  skuTitle?: string;
  description?: string;
  fullName?: string;
  factoryBarCode?: string;
  barCode?: string;
  imageUrl?: string;
  imageType?: "RENDER" | "STUDIO" | "VERTICAL" | "UNKNOWN";
  /** @format int64 */
  weight?: number;
  dimensions?: Dimensions;
  manufactureBarcode?: string;
  descriptionLocalized?: Record<string, string>;
  identifierRequired?: boolean;
  expirationDateRequired?: boolean;
  identifierTypes?: number[];
  returnable?: boolean;
  adult?: boolean;
  contentHidden?: boolean;
  photoRequired?: boolean;
  ikpu?: string;
  ikpuInfo?: KafkaSkuIkpuInfo;
  /** @format int32 */
  vat?: number;
  productGroup?: "COMMON" | "TECHNICAL";
  labelRequired?: boolean;
  stockType?: "FBO" | "FBS";
  localizedProductTitle?: Record<string, string>;
  status?: "ACTIVE" | "ARCHIVED" | "BLOCKED" | "ARCHIVED_BLOCKED";
}

export interface KafkaSkuIkpuInfo {
  localizedName?: Record<string, string>;
  unitCode?: string;
  unitPackage?: string;
}

export interface SkuDimensionalGroupDto {
  /** @format int64 */
  skuId?: number;
  dimensionalGroup?: "SMALL" | "MEDIUM" | "LARGE" | "UNKNOWN";
}

export interface SkuCofinanceDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  skuId?: number;
  /** @format int64 */
  oldSellPrice?: number;
  oldCommission?: number;
  oldCommissionType?: "AUTO" | "FIXED" | "DEFAULT";
  oldCommissionKind?: "SKU" | "PRODUCT" | "SHOP";
  /** @format int64 */
  newSellPrice?: number;
  newCommission?: number;
  activeSale?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  finishedAt?: string;
}

export interface FeedbackCharacteristicsProduct {
  characteristic?: string;
  characteristicValue?: string;
}

export interface SkuByColor {
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  color?: number;
}

export interface NewPriceSkuDto {
  /**
   * @format int64
   * @min 1
   * @max 999999000
   */
  fullPrice?: number;
  /**
   * @format int64
   * @min 1
   * @max 999999000
   */
  sellPrice?: number;
  /** @format int64 */
  skuId: number;
  skuTitle?: string;
}

export interface SendPriceDataDto {
  /** @format int64 */
  productId?: number;
  skuList?: NewPriceSkuDto[];
}

export interface CreateSkuDto {
  /** @format int64 */
  productId?: number;
  skuForProduct?: string;
  skuTitlesForCustomCharacteristics?: CustomCharacteristicSkuDto[];
  skuList?: NewSkuDto[];
}

export interface CharacteristicValueDto {
  title: Record<string, string>;
  value?: string;
  skuValue?: string;
  /** @format int32 */
  ordering?: number;
}

export interface CreateProductDto {
  /** @format int64 */
  categoryId?: number;
  title: Record<string, string>;
  description?: Record<string, string>;
  newDescription?: Record<string, string>;
  shortDescription?: Record<string, string>;
  attributes?: Record<string, string[]>;
  tags?: Record<string, string[]>;
  synonyms?: ProductSynonymsDto[];
  comments?: ProductCommentDto[];
  /**
   * @maxItems 2
   * @minItems 0
   */
  definedCharacteristics?: ChosenDefinedCharacteristicDto[];
  /**
   * @maxItems 3
   * @minItems 0
   */
  customCharacteristics?: CustomCharacteristicDto[];
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  images: string[];
  video?: string;
  /** @format int64 */
  collectionId?: number;
  colorImages?: ColorImageDto[];
  vat?: "VAT0" | "VAT12" | "VAT112";
  tnVedCode?: string;
  okpd2?: string;
  /** @uniqueItems true */
  filterValues?: EditProductFilterValueDto[];
  photoOnPreview?: boolean;
  setWatermarkOnPhotos?: boolean;
  productFields?: Record<string, object>;
  perishable?: boolean;
}

export interface ProductDto {
  /** @format int64 */
  productId?: number;
  shopSkuTitle?: string;
}

export interface SellerPaymentTopUpDto {
  name: Record<string, string>;
  source: Record<string, string>;
  /**
   * @format int32
   * @min 1
   */
  amount?: number;
  basePaymentId: string;
  code?: string;
  /** @format date-time */
  dateService?: string;
}

export interface GenericResponseSellerPaymentInfoDto {
  /** Response payload */
  payload?: SellerPaymentInfoDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerPaymentInfoDto {
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  paymentPrice?: number;
  /**
   * @format int32
   * @min 1
   */
  amount?: number;
  status: "CREATED" | "REFUNDED" | "CONFIRMED" | "CANCELED";
  externalId: string;
  code?: string;
  /** @format date-time */
  dateService?: string;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  dateCreated?: string;
  /** @format date-time */
  dateUpdated?: string;
  name: string;
  source: string;
  type?: "OUTCOME" | "INCOME";
}

export interface CreateSellerPaymentDto {
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  paymentPrice?: number;
  /**
   * @format int32
   * @min 1
   */
  amount?: number;
  status: "CREATED" | "REFUNDED" | "CONFIRMED" | "CANCELED";
  externalId: string;
  code?: string;
  /** @format date-time */
  dateService?: string;
  name: Record<string, string>;
  source: Record<string, string>;
}

export interface BadgeDto {
  /** @format int64 */
  id?: number;
  title?: Record<string, string>;
  backgroundColor?: string;
  textColor?: string;
}

export type CancelSaleDto = UtilRequiredKeys<SaleManagementDto, "saleId" | "type" | "action">;

export interface CreateCategorySaleRuleDto {
  /** @format int64 */
  categoryId: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  minDiscountPercentage: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  discountPercentageOnCommission: number;
}

export interface CreateMainPageData {
  title: Record<string, string>;
  titleColor: string;
  description?: Record<string, string>;
  descriptionColor?: string;
  blockColor: string;
  button: Button;
  timerType: "CAPSULE" | "SEPARATED_SQUARE";
}

export interface CreateOffer {
  title: Record<string, string>;
  badge?: BadgeDto;
}

export interface CreateProductPageData {
  title: Record<string, string>;
  titleColor: string;
  blockColor: string;
  pageTimer: ProductPageTimer;
}

export type CreateSaleDto = UtilRequiredKeys<SaleManagementDto, "saleId" | "type" | "action"> & {
  title: string;
  /** @format date-time */
  announcedAt?: string;
  /** @format date-time */
  startedAt: string;
  /** @format date-time */
  finishedAt: string;
  categoryRules: CreateCategorySaleRuleDto[];
  saleRules: CreateSaleRules;
  mainPageData: CreateMainPageData;
  productPageData?: CreateProductPageData;
  offer?: CreateOffer;
  imageUrl: Record<string, string>;
};

export interface CreateSaleRules {
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  minDiscountPercentage?: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  discountPercentageOnCommission?: number;
  /** @format int64 */
  maxPrice?: number;
  /** @format int64 */
  minPrice: number;
  /** @format int32 */
  maxProductQuantity: number;
  /** @format int32 */
  maxProductQuantityForShop: number;
}

export type ForceCancelSaleDto = UtilRequiredKeys<SaleManagementDto, "saleId" | "type" | "action">;

export interface ProductPageTimer {
  textColor: string;
  backgroundColor: string;
  timerType: "CAPSULE" | "SEPARATED_SQUARE";
}

export interface SaleManagementDto {
  /** @format int64 */
  saleId: number;
  type: "BIG_SALE" | "TODAY_DEALS";
  action: "CREATE" | "UPDATE" | "CANCEL" | "FORCE_CANCEL";
}

export interface UpdateCategorySaleRuleDto {
  /** @format int64 */
  categoryId: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  minDiscountPercentage: number;
  /**
   * @format int32
   * @min 0
   */
  discountPercentageOnCommission: number;
}

export interface UpdateMainPageData {
  title: Record<string, string>;
  titleColor: string;
  description?: Record<string, string>;
  descriptionColor?: string;
  blockColor: string;
  button: Button;
  timerType: "CAPSULE" | "SEPARATED_SQUARE";
}

export interface UpdateOffer {
  title?: Record<string, string>;
  badge?: BadgeDto;
}

export interface UpdateProductPageData {
  title: Record<string, string>;
  titleColor: string;
  blockColor: string;
  pageTimer: ProductPageTimer;
}

export type UpdateSaleDto = UtilRequiredKeys<SaleManagementDto, "saleId" | "type" | "action"> & {
  title: string;
  /** @format date-time */
  announcedAt?: string;
  /** @format date-time */
  startedAt: string;
  /** @format date-time */
  finishedAt: string;
  categoryRules: UpdateCategorySaleRuleDto[];
  saleRules: UpdateSaleRules;
  mainPageData: UpdateMainPageData;
  productPageData?: UpdateProductPageData;
  offer?: UpdateOffer;
  imageUrl: Record<string, string>;
};

export interface UpdateSaleRules {
  /**
   * @format int32
   * @min 0
   */
  maxProductQuantity?: number;
  /**
   * @format int32
   * @min 0
   */
  maxProductQuantityForShop?: number;
}

export interface CustomerProductDto {
  /** @format int64 */
  productId?: number;
  title?: string;
  /** @format int32 */
  sellPrice?: number;
  /**
   * May not be shown for product if purchasePrice is equal to full price. In this case there is no need to display it to user
   * @format int32
   */
  fullPrice?: number;
  compressedImage?: string;
  image?: string;
  /** @format double */
  rating?: number;
  /** @format int32 */
  reviewsQuantity?: number;
  /** @format int32 */
  ordersQuantity?: number;
  /** @format int32 */
  getrOrdersQuantity?: number;
  isFavorite?: boolean;
  isAdultCategory?: boolean;
  /** @format int32 */
  charityCommission?: number;
  isEco?: boolean;
  hasVerticalPhoto?: boolean;
  offer?: ProductOfferDto;
  badges?: ProductBadgeDto[];
  /** @deprecated */
  titleBadges?: TitleBadgeDto[];
  /** @format int64 */
  categoryId?: number;
  characteristicValueIds?: number[];
  /** @format int64 */
  skuGroupId?: number;
  discount?: DiscountInfo;
  /** @format int32 */
  rordersQuantity?: number;
}

export interface DiscountInfo {
  paymentOptionKey?: string;
  /** @format int32 */
  sellDiscountPercent?: number;
  /** @format int32 */
  fullDiscountPercent?: number;
  /** @format int32 */
  discountPrice?: number;
  priceText?: string;
  modalHeader?: string;
  modalText?: string;
}

export interface ProductBadgeDto {
  /** @format int64 */
  id?: number;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  description?: string;
  link?: string;
  type?:
    | "SIMPLE_BADGE"
    | "UNKNOWN_BADGE"
    | "UNDEFINED_BADGE"
    | "UZUM_INSTALLMENT_TITLE_BADGE"
    | "ACTUAL_DISCOUNT_BADGE"
    | "FUTURE_DISCOUNT_BADGE"
    | "FBS_BADGE"
    | "ORIGINAL_BLACK_BADGE"
    | "ORIGINAL_WHITE_BADGE";
}

export interface ProductOfferDto {
  /** @format date-time */
  time?: string;
  text?: string;
  imageUrl?: string;
  textColor?: string;
  icon?: string;
  backgroundColor?: string;
}

export interface ProductsContainerDto {
  products?: CustomerProductDto[];
  adultContent?: boolean;
  /** @format int32 */
  totalProducts?: number;
}

export interface TitleBadgeDto {
  /** @format int32 */
  order?: number;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface CustomerFilterDto {
  /** @format int64 */
  id: number;
  title: string;
  description?: string;
  measurementUnit?: string;
  filterType?:
    | "RANGED_VALUE"
    | "SINGLE_CHOICE"
    | "SINGLE_CHOICE_TAG"
    | "MULTIPLE_CHOICE"
    | "MULTIPLE_CHOICE_TAG"
    | "RANGED_ENUM";
  values: CustomerFilterValueDto[];
  /**
   * Must not be null if filter's type is range
   * @format double
   */
  min?: number;
  /**
   * Must not be null if filter's type is range
   * @format double
   */
  max?: number;
}

export interface CustomerFilterValueDto {
  name: string;
  image?: string;
  description?: string;
  /** @format int32 */
  count?: number;
  /**
   * Must not be null if filter's type is single|multiple choice
   * @format int64
   */
  id?: number;
}

export interface CustomerFiltersContainerDto {
  filters?: CustomerFilterDto[];
  appliedFilters?: CustomerFilterDto[];
  /** @format int32 */
  totalProducts?: number;
}

export interface CategoryContainerDto {
  category?: CategoryDto;
  selectedCategory?: SelectedCategoryDto;
}

export interface CategoryDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  productAmount?: number;
  adult?: boolean;
  eco?: boolean;
  iconLink?: string;
  title?: string;
  seoMetaTag?: string;
  seoHeader?: string;
  children?: CategoryDto[];
  path?: number[];
}

export interface SelectedCategoryDto {
  /** @format int64 */
  id?: number;
  path?: number[];
}

export interface FlatCategoryDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentID?: number;
}

export interface IdDto {
  /** @format int64 */
  id: number;
}

export interface SearchExploreAppliedFilterDto {
  /** @format int64 */
  filterId?: number;
  filterValueIds?: number[];
  /** @format double */
  min?: number;
  /** @format double */
  max?: number;
}

export interface SearchExploreFilterDto {
  /** @format int64 */
  filterId?: number;
  values?: SearchExploreFilterValueDto[];
  /** @format double */
  min?: number;
  /** @format double */
  max?: number;
}

export interface SearchExploreFilterValueDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  totalCount?: number;
}

export interface SearchExplorePayload {
  products?: IdDto[];
  /** @format int64 */
  minPrice?: number;
  parents?: CategoryDto[];
  flattenedCategories?: FlatCategoryDto[];
  /** @format int64 */
  maxPrice?: number;
  categories?: CategoryDto[];
  filters?: SearchExploreFilterDto[];
  appliedFilters?: SearchExploreAppliedFilterDto[];
  /** @format int32 */
  totalProductsWithoutFilters?: number;
  /** @format int32 */
  totalProducts?: number;
  currentCategory?: CategoryDto;
}

export interface SearchExploreRs {
  error?: object;
  payload?: SearchExplorePayload;
}

export interface GetCategoryResp {
  parents?: CategoryDto[];
  category?: CategoryDto;
  filters?: CustomerFilterDto[];
  appliedFilters?: CustomerFilterDto[];
  products?: CustomerProductDto[];
  /** @format int32 */
  totalProducts?: number;
}

export interface FbsInvoiceDocumentItem {
  /** @format int32 */
  rowNumber?: number;
  /** @format int64 */
  customerOrderId?: number;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  priceWithoutVat?: number;
  /** @format int32 */
  amount?: number;
}

export interface GenerateFbsInvoiceRequestFbsInvoiceDocumentItem {
  reportType: "LABEL" | "LABELS_SMALL" | "LABELS_MEDIUM" | "LABELS_LARGE" | "INVOICE" | "FBS_INVOICE";
  /** @format int64 */
  sellerId: number;
  params: Record<string, object>;
  beanCollection: FbsInvoiceDocumentItem[];
}

export interface ProductReviewFilterValueDto {
  /** @format int64 */
  id?: number;
  title?: string;
  previewUrl?: string;
  /** @format int64 */
  shopId?: number;
}

export interface CreateProductClassificationTypeDto {
  /**
   * @minLength 0
   * @maxLength 255
   */
  type: string;
  title?: Record<string, string>;
  /**
   * @maxItems 200
   * @minItems 0
   * @uniqueItems true
   */
  masks?: string[];
}

export interface GetOrderItemsRq {
  /** @format int64 */
  customerId: number;
  /** @uniqueItems true */
  orderItemIds: number[];
}

/** ERP packing invoice create request body */
export interface ErpPackingInternalCreateInvoiceDto {
  skuList: SkuToInvoiceDto[];
  /** @format date-time */
  timeFrom?: string;
  deliveryCertificate?: string;
  /** @format int64 */
  stockId?: number;
  /**
   * Reservation key
   * @example "4fe85852-6633-4f58-af7d-1e611e85bccc"
   */
  reservationKey: string;
  /**
   * Box barcode
   * @example "15215551555"
   */
  boxBarcode?: string;
  /**
   * Seller id of the invoice creator
   * @format int64
   * @example 1
   */
  sellerId: number;
}

export interface GenericResponseInvoiceInListDto {
  payload?: InvoiceInListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Invoice create request body */
export interface InternalCreateInvoiceDto {
  skuList: SkuToInvoiceDto[];
  /** @format date-time */
  timeFrom?: string;
  deliveryCertificate?: string;
  /** @format int64 */
  stockId?: number;
  /**
   * Seller id of the invoice creator
   * @format int64
   * @example 1
   */
  sellerId: number;
}

/** Body of get time slots request */
export interface InternalTimeSlotRq {
  /** List of skus */
  skuList?: TimeSlotSkuDto[];
  /**
   * Time from for time slots, must be future
   * @format date-time
   */
  timeFrom: string;
  /**
   * Time to for time slots, must be future
   * @format date-time
   */
  timeTo: string;
  poolSource?: string;
  /**
   * Id of the seller who reserves the slot
   * @format int64
   * @example 1
   */
  sellerId?: number;
}

/** Request body for time slot reservation */
export interface InternalTimeSlotReservationDto {
  /** List of skus for reservation */
  skuList: TimeSlotSkuDto[];
  /**
   * Available time slot time from
   * @format date-time
   */
  timeFrom: string;
  /**
   * Id of the seller who reserves the slot
   * @format int64
   * @example 1
   */
  sellerId?: number;
}

export interface GenericResponseTimeSlotReservationDto {
  /** Time slot reservation model */
  payload?: TimeSlotReservationDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface UpdateFilterValueDto {
  /** @format int64 */
  filterValueId: number;
  /** @format int64 */
  filterId: number;
  title: Record<string, string>;
  /** @format int32 */
  ordering: number;
  value: string;
  deleted: boolean;
}

export interface GenericResponseFilterValueDto {
  payload?: FilterValueDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface SkuFilterValueRequest {
  skuFilterValues?: SkuFilterValueRequestDto[];
}

export interface SkuFilterValueRequestDto {
  /** @format int64 */
  skuId: number;
  editable?: boolean;
  /** @format int64 */
  filterId: number;
  value?: Record<string, string>;
}

export interface GenericResponseSkuFilterValueResponse {
  /** Response payload */
  payload?: SkuFilterValueResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SkuFilterValueResponse {
  skuFilterValues?: SkuFilterValueResponseDto[];
}

export interface SkuFilterValueResponseDto {
  /** @format int64 */
  skuId: number;
  /** @format int64 */
  filterId?: number;
  /** @format int64 */
  filterValueId?: number;
  value?: string;
  requestValue?: string;
  status?: "NOT_FOUND" | "SKU_FILTER_VALUE_CREATED" | "SKU_FILTER_VALUE_DELETED" | "SKU_PRODUCT_FILTER_VALUE";
}

export interface ProductFilterValueRequest {
  /** @uniqueItems true */
  productFilterValues?: ProductFilterValueDto[];
}

export interface GenericResponseProductFilterValueResponse {
  /** Response payload */
  payload?: ProductFilterValueResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface ProductFilterValueResponse {
  productFilterValues?: ProductFilterValueResponseDto[];
}

export interface ProductFilterValueResponseDto {
  /** @format int64 */
  productId: number;
  /** @format int64 */
  filterId?: number;
  /** @format int64 */
  productFilterValueId?: number;
  value?: string;
  requestValue?: string;
  status?: "PRODUCT_FILTER_VALUE_UPDATED" | "PRODUCT_NOT_FOUND";
}

export interface DeliveryConditionsDto {
  cityIds?: number[];
  /** @format int64 */
  price: number;
}

export interface MinimalOrderRestrictionConditionDto {
  cityIds?: number[];
}

export interface CartItemCharacteristicDto {
  title?: string;
  value?: string;
}

export interface Seller {
  /** @format int64 */
  id?: number;
  title?: string;
  link?: string;
}

export interface SkuCardDto {
  /** @format int64 */
  skuId: number;
  /** @format int64 */
  productId: number;
  /** @format int64 */
  categoryId: number;
  title?: string;
  seller?: Seller;
  /** @format int64 */
  fullPrice?: number;
  /** @format int64 */
  sellPrice?: number;
  /** @format int32 */
  amountAvailable?: number;
  /** @format int32 */
  charityCommission?: number;
  /** This field should be used only when we create order (in my offers field 'photo' will be returned) */
  photo?: PhotoDto;
  /** @uniqueItems true */
  characteristicsList?: CartItemCharacteristicDto[];
  isEco?: boolean;
  isPerishable?: boolean;
  /** Dimensions of SKU (length, width, height in mm and weight in grams) */
  dimension?: SkuDimensionDto;
  offer?: ProductOfferDto;
  badges?: ProductBadgeDto[];
  hasVerticalPhoto?: boolean;
  bonusProduct?: boolean;
  restriction?: SkuRestrictionDto;
  vat?: SkuVat;
  oversized?: boolean;
}

export interface SkuRestrictionDto {
  /** @format int32 */
  restrictedAmount?: number;
  /** @format int32 */
  boughtAmount?: number;
  restricted?: boolean;
}

export interface SkuVat {
  type?: string;
  /** @format int64 */
  vatAmount?: number;
  /** @format int64 */
  price?: number;
  /** @format int32 */
  vatRate?: number;
}

export interface SendUpdEmailRq {
  /** @format int64 */
  orderId?: number;
  url?: string;
}

/** REST реализация DTO по обновлению остатков FBS */
export interface RestSellerSkuFbsAmountDto {
  /**
   * skuId, для обновления необязательное поле
   * @format int64
   */
  skuId?: number;
  /** skuTitle, для обновления необязательное поле */
  skuTitle?: string;
  /** productTitle, для обновления необязательное поле */
  productTitle?: string;
  /** для обновления необязательное поле, локализованная версия productTitle */
  productTitleLocalized?: Record<string, string>;
  /** ШК ску на стороне маркета, обязательное поле для обновления, должно быть уникальным */
  barcode: string;
  /**
   * Остатки FBS для SKU
   * @format int32
   * @min 0
   * @max 10000
   */
  amount: number;
  /**
   * ID категории
   * @format int64
   */
  categoryId: number;
  /**
   * ID товара
   * @format int64
   */
  productId: number;
  /** @format int64 */
  barcodeLong?: number;
}

export interface SellerFbsSkuStockUpdateDto {
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  skuAmountList?: RestSellerSkuFbsAmountDto[];
}

export interface GenericResponseTokenRs {
  /** Response payload */
  payload?: TokenRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface TokenRs {
  scope?: string;
  token_type?: string;
  access_token?: string;
  refresh_token?: string;
  expires_in?: string;
}

export interface AddToWishListProductDto {
  /**
   * The values that contains product id, must be positive
   * @format int64
   */
  productId: number;
  /** List name from which item was added to wishlist */
  listName?: string;
  /**
   * Item position in list from which it was add (must be positive)
   * @format int32
   */
  positionInList?: number;
}

export interface ProductIdSetDto {
  /** @uniqueItems true */
  productIdSet: ProductIdDto[];
}

export interface CreateLegalPaymentDto {
  /** @format int64 */
  orderId: number;
}

export interface GenericResponseGiftDto {
  /** Response payload */
  payload?: GiftDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface GiftDto {
  type?:
    | "SUPER_GIFT"
    | "SUPER_PRODUCT_DISCOUNT"
    | "MARKET_PROMO50"
    | "MARKET_PROMO10"
    | "SHOP_DISCOUNT20"
    | "PRODUCT_DISCOUNT10"
    | "PRODUCT_DISCOUNT20"
    | "PARTNERS_ALLPLAY"
    | "PARTNERS_CLICK";
  title?: string;
  /** Available only for SUPER_GIFT, SUPER_PRODUCT_DISCOUNT */
  image?: string;
  /** Available only for PRODUCT_DISCOUNT10, PRODUCT_DISCOUNT20 */
  products?: ProductGiftDto[];
  /** Not available only for PRODUCT_DISCOUNT10, PRODUCT_DISCOUNT20 */
  promoDetails?: GiftPromoDto;
}

/** Not available only for PRODUCT_DISCOUNT10, PRODUCT_DISCOUNT20 */
export interface GiftPromoDto {
  code?: string;
  /** @format date-time */
  validUntil?: string;
  deepLink?: string;
  /** Only available for SUPER_GIFT, SUPER_PRODUCT_DISCOUNT */
  title?: string;
}

/** Available only for PRODUCT_DISCOUNT10, PRODUCT_DISCOUNT20 */
export interface ProductGiftDto {
  /** @format int64 */
  id?: number;
  title?: string;
  image?: string;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  discountPrice?: number;
}

export interface ProductSelectDto {
  /** @format int64 */
  productId: number;
  idempotencyKey: string;
}

export interface PepsiRaffleDto {
  code: string;
}

export interface GenericResponsePepsiGiftDto {
  /** Response payload */
  payload?: PepsiGiftDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PepsiGiftDto {
  status?:
    | "PEPSI_MARKET_PROMO_1K"
    | "PEPSI_MARKET_PROMO_10K"
    | "PEPSI_MARKET_PROMO_1M"
    | "PEPSI_MARKET_PROMO_500K"
    | "PEPSI_MARKET_PROMO_100K"
    | "PEPSI_MARKET_PROMO_50K"
    | "PEPSI_WIN_PRODUCT";
  /** Available only for PEPSI_WIN_PRODUCT */
  productGiftDetails?: PepsiProductGiftDto;
  /** Non available only for PEPSI_LOSE */
  promoDetails?: PepsiPromoDto;
  /** Available only for PEPSI_MARKET_PROMO_1M, PEPSI_MARKET_PROMO_300K, PEPSI_MARKET_PROMO_10K */
  codeGiftDetails?: PepsiPromoCodeGiftDto;
}

/** Available only for PEPSI_WIN_PRODUCT */
export interface PepsiProductGiftDto {
  title?: string;
  image?: string;
  link?: string;
}

/** Available only for PEPSI_MARKET_PROMO_1M, PEPSI_MARKET_PROMO_300K, PEPSI_MARKET_PROMO_10K */
export interface PepsiPromoCodeGiftDto {
  title?: string;
  image?: string;
}

/** Non available only for PEPSI_LOSE */
export interface PepsiPromoDto {
  code?: string;
  /** @format date-time */
  validUntil?: string;
}

export interface PromoCodeGenerationRq {
  bloggerId: string;
  /** @pattern ^[A-Z0-9_-]{5,255}$ */
  code?: string;
}

export interface GenericResponsePromoCodeDto {
  payload?: PromoCodeDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CreateCmsWithdrawDto {
  /**
   * Idempotency Key for request. Must be unique.
   * @format uuid
   */
  idempotencyKey: string;
  /**
   * Amount to withdraw in som (копейки)
   * @format int64
   */
  amount: number;
  /**
   * List of shop ids from which assets must be withdraw
   * @uniqueItems true
   */
  shopIds: number[];
  /**
   * The settlement account to which the assets will be deposited
   * @format int64
   */
  settlementAccountId: number;
  /**
   * Seller id for withdraw
   * @format int64
   */
  sellerId: number;
}

export interface ApplicationVersions {
  androidVersions?: string;
  iosVersions?: string;
  webVersions?: string;
}

export type BrandedCarouselOfferStyle = UtilRequiredKeys<StyledCarouselStyle, "titleColor"> & {
  logoUrl: string;
  backgroundUrl: string;
};

export interface CreateStyledCarouselRequest {
  /** @format int64 */
  offerId: number;
  /** @format int64 */
  verticalOfferId: number;
  status: "CREATED" | "PENDING" | "ACTIVE" | "AUTO_COMPLETED" | "COMPLETED" | "CANCELED";
  /** @format int32 */
  offset: number;
  rule: AndOp | EmptyRule | ExperimentRule | ExternalRule | LocationRule | OrOp | SegmentRule | VersionRule;
  style: BrandedCarouselOfferStyle | PlainCarouselOfferStyle;
}

export interface DisplayRule {
  type:
    | "EMPTY_RULE"
    | "AND"
    | "OR"
    | "LOCATION_RULE"
    | "EXTERNAL_RULE"
    | "VERSION_RULE"
    | "EXPERIMENT_RULE"
    | "SEGMENT_RULE";
}

export type ExperimentRule = UtilRequiredKeys<DisplayRule, "type"> & {
  value?: string;
  experimentKey?: string;
};

export type ExternalRule = UtilRequiredKeys<DisplayRule, "type"> & {
  externalType?: "TEZKOR" | "NASIYA" | "NASIYA_HAS_LIMIT";
};

export type LocationRule = UtilRequiredKeys<DisplayRule, "type"> & {
  city?: string;
};

export type PlainCarouselOfferStyle = UtilRequiredKeys<StyledCarouselStyle, "titleColor"> & {
  iconUrl: string;
  backgroundColor: string;
};

export type SegmentRule = UtilRequiredKeys<DisplayRule, "type"> & {
  segmentId?: string;
};

export interface StyledCarouselStyle {
  titleColor: string;
}

export type VersionRule = UtilRequiredKeys<DisplayRule, "type"> & {
  disabledVersions?: ApplicationVersions;
};

export interface RestrictionDto {
  /** @format int32 */
  amount: number;
  /** @format date-time */
  dateFrom: string;
  /** @format date-time */
  dateTo: string;
  /** @format int32 */
  daysInterval?: number;
  skuIds: number[];
}

export interface CMSTransferShopRq {
  /**
   * Seller id to who shop must be transfer
   * @format int64
   */
  transferTo?: number;
}

export interface CalendarEventStatusUpdateDto {
  /** @format int64 */
  eventId: number;
  newStatus: "CREATED" | "CANCELED";
}

export interface EditCalendarEventDto {
  title: string;
  /** @format date-time */
  dateStart: string;
  /** @format date-time */
  dateEnd: string;
  categories?: RuleCategoryDto[];
  /** @format int32 */
  minDiscountPercentage?: number;
  /** @format int32 */
  discountCommissionPercentage?: number;
  /** @format int64 */
  maxPrice?: number;
  /** @format int64 */
  minPrice?: number;
  /** @format int32 */
  maxQuantityProducts?: number;
  /** @format int32 */
  maxQuantityProductsForShop?: number;
  /** @format int64 */
  offerId: number;
  type: "PROMOTION" | "OFFER";
  status?: "PENDING" | "CREATED" | "ACTIVATING" | "ACTIVE" | "DEACTIVATING" | "COMPLETED" | "CANCELED";
  imageUrl?: Record<string, string>;
  /** @format int64 */
  eventId: number;
}

export interface RuleCategoryDto {
  /** @format int64 */
  categoryId?: number;
  /** @format int32 */
  minDiscountPercentage: number;
  /** @format int32 */
  discountCommissionPercentage: number;
}

export interface CreateCalendarEventDto {
  title: string;
  /** @format date-time */
  dateStart: string;
  /** @format date-time */
  dateEnd: string;
  categories?: RuleCategoryDto[];
  /** @format int32 */
  minDiscountPercentage?: number;
  /** @format int32 */
  discountCommissionPercentage?: number;
  /** @format int64 */
  maxPrice?: number;
  /** @format int64 */
  minPrice?: number;
  /** @format int32 */
  maxQuantityProducts?: number;
  /** @format int32 */
  maxQuantityProductsForShop?: number;
  /** @format int64 */
  offerId: number;
  type: "PROMOTION" | "OFFER";
  status?: "PENDING" | "CREATED" | "ACTIVATING" | "ACTIVE" | "DEACTIVATING" | "COMPLETED" | "CANCELED";
  imageUrl?: Record<string, string>;
}

export interface ProductSalePeriodUpdateDto {
  /** Тип распродажи */
  saleType: "BIG_SALE" | "TODAY_DEALS" | "DEFAULT";
  /**
   * ExternalId распродажи
   * @format int64
   */
  saleExternalId: number;
  /**
   * id product'а
   * @format int64
   */
  productId: number;
  /**
   * id shop'а
   * @format int64
   */
  shopId: number;
  /**
   * id sale period'а
   * @format int64
   */
  salePeriodId: number;
}

export interface ProductTransferRq {
  /** @format int64 */
  shopId?: number;
  productIds?: number[];
  /** @format int64 */
  supportId?: number;
}

export interface ImageRq {
  key?: string;
  /** @format int32 */
  ordering?: number;
}

export interface SkuMediaRq {
  skuIds?: number[];
  images?: ImageRq[];
  videoKey?: string;
  /** @format int64 */
  collectionId?: number;
}

export interface UpdateMediaRq {
  /** @format int64 */
  productId: number;
  mediaList?: SkuMediaRq[];
}

export interface ProductShelfProductsRq {
  /** @format int64 */
  id: number;
  productIds: number[];
}

export interface TransferProductModerationRqDto {
  /** @format int64 */
  productModerationId?: number;
  /** @format int64 */
  productId?: number;
  status?: "PENDING" | "WAITING" | "DECLINED" | "PARTIALLY_DECLINED" | "CANCELED" | "APPROVED" | "NOT_REQUIRED";
  /** @format int64 */
  supportId?: number;
  comment?: string;
}

export interface FilterList {
  values?: number[];
}

export interface FilterRange {
  /** @format int64 */
  min?: number;
  /** @format int64 */
  max?: number;
}

export interface LinkFilter {
  /** @format int64 */
  id?: number;
  filterType?: "RANGE" | "LIST";
  range?: FilterRange;
  list?: FilterList;
}

export interface PermanentLinkDto {
  /** @format int64 */
  id?: number;
  link: Record<string, string>;
  status: "ACTIVE" | "NOT_ACTIVE";
  /** @format int64 */
  categoryId?: number;
  /** @format int64 */
  offerId?: number;
  /** @format int64 */
  shopId?: number;
  sort?:
    | "BY_RELEVANCE_DESC"
    | "BY_PRICE_ASC"
    | "BY_PRICE_DESC"
    | "BY_RATING_ASC"
    | "BY_RATING_DESC"
    | "BY_DATE_ADDED_ASC"
    | "BY_DATE_ADDED_DESC"
    | "BY_ORDERS_NUMBER_ASC"
    | "BY_ORDERS_NUMBER_DESC";
  linkFilters?: LinkFilter[];
  seo?: Seo;
}

export interface Seo {
  seoTitle?: Record<string, string>;
  seoHeader?: Record<string, string>;
  seoMetaTag?: Record<string, string>;
}

export interface GenericResponsePermanentLinkDto {
  payload?: PermanentLinkDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CreateDistrictRq {
  /** @format int64 */
  id?: number;
  name: Record<string, string>;
  /** @format int64 */
  cityId: number;
  visible?: boolean;
}

export interface FeedbackUpdateStatusRq {
  /** @format int64 */
  feedbackId?: number;
  status: "CREATED" | "EDITED" | "PUBLISHED" | "DECLINED" | "DELETED";
  /** @format int64 */
  supportId?: number;
  /**
   * @minLength 1
   * @maxLength 255
   */
  reason?: string;
  sentToSupport?: boolean;
}

export interface FeedbackReplyUpdateStatusRq {
  /** @format int64 */
  replyId?: number;
  status: "CREATED" | "EDITED" | "PUBLISHED" | "DECLINED" | "DELETED";
  /** @format int64 */
  supportId?: number;
  /**
   * @minLength 1
   * @maxLength 255
   */
  reason?: string;
}

/** Request body for cms set sku stock type */
export interface CmsSetSkuStockTypeRq {
  /**
   * List of skus
   * @maxItems 2147483647
   * @minItems 1
   */
  skus: SkuStockTypeDto[];
}

/** Sku stock type */
export interface SkuStockTypeDto {
  /**
   * Sku id
   * @format int64
   */
  skuId: number;
  /** Stock type: FBO or FBS */
  stockType: "FBO" | "FBS";
}

export interface CommissionBorderDto {
  /** @format int32 */
  lowerBorder?: number;
  /** @format int32 */
  upperBorder?: number;
  /** @format double */
  commission: number;
}

export interface CommissionFormulaRqDto {
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  borders?: CommissionBorderDto[];
  /** @format int64 */
  categoryId: number;
}

export interface GenericResponseVersionControlDto {
  /** Response payload */
  payload?: VersionControlDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface VersionControlDto {
  status?: "UPDATE_REQUIRED" | "UPDATE_RECOMMENDED" | "OK";
}

export interface CategoryProductDto {
  /** @format int64 */
  id?: number;
  title?: string;
  /** @format int32 */
  productAmount?: number;
  parent?: CategoryProductDto;
}

export interface CharacteristicDto {
  /** @format int64 */
  id?: number;
  title?: string;
  titleType?: "COLOR";
  values?: CharacteristicValueDto[];
}

export interface CommentDto {
  commentType?: string;
  comment?: string;
  type?: string;
}

export interface ContactDto {
  type?: string;
  value?: string;
}

export interface CustomerNameDto {
  firstName?: string;
  lastName?: string;
  patronymic?: string;
}

export interface CustomerProductCardDto {
  /** @format int64 */
  id?: number;
  title?: string;
  localizableTitle?: Record<string, string>;
  category?: CategoryProductDto;
  /** @format double */
  rating?: number;
  /** @format int32 */
  reviewsAmount?: number;
  /** @format int32 */
  ordersAmount?: number;
  /** @format int32 */
  getrOrdersAmount?: number;
  /** @format int32 */
  totalAvailableAmount?: number;
  /** @format int32 */
  charityCommission?: number;
  description?: string;
  comments?: CommentDto[];
  attributes?: string[];
  tags?: string[];
  synonyms?: string[];
  photos?: PhotoDto[];
  video?: string;
  hasCircularPhotos?: boolean;
  circularPhotosList?: PhotoDto[];
  characteristics?: CharacteristicDto[];
  productOptionDtos?: ProductOptionDto[];
  skuList?: SkuDto[];
  seller?: ShopDto;
  topFeedback?: FeedbackRsDto;
  isEco?: boolean;
  isPerishable?: boolean;
  hasVerticalPhoto?: boolean;
  showKitty?: boolean;
  bonusProduct?: boolean;
  badges?: ProductBadgeDto[];
  volumeDiscount?: VolumeDiscountDto;
  disclaimer?: string;
  fastDeliveryInfo?: FastDeliveryInfo;
  returnsInfo?: ReturnsInfo;
  originality?: OriginalityDto;
  warranty?: WarrantyDto;
  colorPhotoPreview?: boolean;
  favourite?: boolean;
  adultCategory?: boolean;
  /** @format int32 */
  rordersAmount?: number;
}

export interface DeliveryBadge {
  text?: string;
  color?: string;
}

export interface DiscountBadgeDto {
  /** @format int64 */
  badgeId?: number;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface FastDeliveryInfo {
  title?: string;
  badge?: DeliveryBadge;
}

export interface FeedbackRsDto {
  /** @format int64 */
  reviewId?: number;
  /** @format int64 */
  productId?: number;
  /** @format date-time */
  date?: string;
  edited?: boolean;
  customer?: string;
  reply?: FeedbackRsReplyDto;
  /** @format int32 */
  rating?: number;
  characteristics?: FeedbackCharacteristicsProduct[];
  pros?: string;
  cons?: string;
  content?: string;
  photos?: PhotoDto[];
  status?: string;
  hasVerticalPhoto?: boolean;
  like?: boolean;
  dislike?: boolean;
  /** @format int32 */
  amountLike?: number;
  /** @format int32 */
  amountDislike?: number;
  /** @format int64 */
  id?: number;
  isAnonymous?: boolean;
}

export interface FeedbackRsReplyDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  date?: string;
  edited?: boolean;
  content?: string;
  shop?: string;
  photos?: PhotoDto[];
  liked?: CustomerNameDto[];
  disliked?: CustomerNameDto[];
}

export interface GenericResponseSeoWrapper {
  /** Response payload */
  payload?: SeoWrapper;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface InfoAboutSellerDto {
  ogrnip?: string;
  accountName?: string;
  legalRecords?: LegalRecord[];
}

export interface InstallmentDto {
  /** @format int64 */
  payment?: number;
  /** @format int32 */
  monthAmount?: number;
}

export interface LegalRecord {
  name?: string;
  value?: string;
}

export interface OriginalityDto {
  isOriginal?: boolean;
}

export interface PriceFilterDto {
  /** @format int64 */
  min?: number;
  /** @format int64 */
  max?: number;
}

export interface ProductOptionDto {
  /** @format int64 */
  optionId?: number;
  text?: string;
  type?: "BEST_PRICE" | "UZUM_INSTALLMENT";
  /** @deprecated */
  paymentInfo?: string;
  /** @format int64 */
  paymentPerMonth?: number;
  /** @format int32 */
  period?: number;
  active?: boolean;
}

export interface ReturnsInfo {
  link?: string;
}

export interface SeoDto {
  uzTitle?: string;
  ruTitle?: string;
  characteristics?: CharacteristicDto[];
  sellerTitle?: string;
  /** @format double */
  rating?: number;
  /** @format int32 */
  reviewsAmount?: number;
  skuList?: SkuDto[];
  photos?: PhotoDto[];
}

/** Response payload */
export interface SeoWrapper {
  data?: CustomerProductCardDto;
  seo?: SeoDto;
}

export interface ShopDto {
  /** @format int64 */
  id?: number;
  title?: string;
  link?: string;
  banner?: string;
  avatar?: string;
  description?: string;
  hasCharityProducts?: boolean;
  /** @format date-time */
  registrationDate?: string;
  /** @format double */
  rating?: number;
  /** @format int32 */
  reviews?: number;
  /** @format int32 */
  orders?: number;
  official?: boolean;
  contacts?: ContactDto[];
  categories?: CategoryDto[];
  currentCategory?: CategoryDto;
  filters?: CustomerFilterDto[];
  appliedFilters?: CustomerFilterDto[];
  priceFilter?: PriceFilterDto;
  /** @format int32 */
  totalProducts?: number;
  parents?: CategoryDto[];
  products?: CustomerProductDto[];
  /** @format int64 */
  sellerAccountId?: number;
  info?: InfoAboutSellerDto;
}

export interface SkuDto {
  /** @format int64 */
  id?: number;
  characteristics?: SkuCharacteristicDto[];
  /** @format int32 */
  availableAmount?: number;
  /** @format int64 */
  fullPrice?: number;
  /** @format int64 */
  charityProfit?: number;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  barcode?: number;
  address?: string;
  offer?: ProductOfferDto;
  discountBadge?: DiscountBadgeDto;
  installment?: InstallmentDto;
  productOptionDtos?: ProductOptionDto[];
  vat?: SkuVat;
  circularPhotosList?: PhotoDto[];
  videoUrl?: string;
  restriction?: SkuRestrictionDto;
  stock?: SkuStock;
  discount?: DiscountInfo;
  fastDeliveryInfo?: FastDeliveryInfo;
  oversized?: boolean;
}

export interface SkuStock {
  type?: "FBO" | "FBS";
  /** @format int32 */
  deliveryDays?: number;
  deliveryTitle?: string;
  /** @format date-time */
  deliveryDate?: string;
}

export interface WarrantyDto {
  /** @format int32 */
  amount?: number;
}

export interface GenericResponseListCustomerProductDto {
  /** Response payload */
  payload?: CustomerProductDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseOrderTextDto {
  /** Response payload */
  payload?: OrderTextDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface InfoBanner {
  title?: string;
  content?: string;
  type?: string;
}

export interface OrderItemTextInfo {
  /** @format int32 */
  quantity?: number;
  imageUrl?: string;
}

/** Response payload */
export interface OrderTextDto {
  text?: string;
  blocks?: TextBlock[];
  promotions?: (PromotionBannerBlockDto | PromotionContentSimpleTextBlockDto)[];
  deliverySchedule?: OrderTextInfo[];
  infoBanner?: InfoBanner[];
}

export interface OrderTextInfo {
  deliveryDateText?: string;
  items?: OrderItemTextInfo[];
}

export type PromotionBannerBlockDto = PromotionContentBlockDto & {
  /** @format int64 */
  bannerId?: number;
  bannerUrl?: string;
  imageUrl?: string;
};

export interface PromotionContentBlockDto {
  type: string;
}

/** Text block with title and text */
export type PromotionContentSimpleTextBlockDto = PromotionContentBlockDto & {
  title?: string;
  text?: string;
};

export interface TextBlock {
  title?: string;
  content?: string;
}

export interface GenericResponseString {
  /** Response payload */
  payload?: string;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface BannerOfferDto {
  textColor?: string;
  imageUrl?: string;
  borderColor?: string;
  /** @format date-time */
  dateEnd?: string;
}

export interface GenericResponseWithPromotionWrapperMobileProductsGroup {
  /** Response payload */
  payload?: WithPromotionWrapperMobileProductsGroup;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface MobileProductsGroup {
  productGroups?: ProductsGroupDto[];
  offers?: ProductsGroupDto[];
}

/** Filled only if group is a special offer (set to null is group is not an offer) */
export interface OfferDto {
  image?: Record<string, string>;
  hexCode: string;
  textColor?: string;
  description: string;
  bannerOffer?: BannerOfferDto;
}

export interface ProductsGroupDto {
  /**
   * -1 user for "Best products", -2 for "New products". else negative numbers will be used by Admins
   * @format int64
   */
  categoryId: number;
  /** Field is required for both regular products group as well as for special offers */
  title: string;
  /** Has size of 4 if group is a special offer and every other number (including 4) if not a special offer */
  productList?: CustomerProductDto[];
  /** Filled only if group is a special offer (set to null is group is not an offer) */
  offerDto?: OfferDto;
}

export interface Promotions {
  actions?: object[];
}

/** Response payload */
export interface WithPromotionWrapperMobileProductsGroup {
  data?: MobileProductsGroup;
  promotion?: Promotions;
}

export interface GenericResponseWithPromotionWrapperObject {
  /** Response payload */
  payload?: WithPromotionWrapperObject;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface WithPromotionWrapperObject {
  data?: object;
  promotion?: Promotions;
}

export interface GenericResponsePermissionToCheckoutDto {
  /** Response payload */
  payload?: PermissionToCheckoutDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PermissionToCheckoutDto {
  permitted?: boolean;
}

export interface GenericResponsePaymentStateDto {
  /** Response payload */
  payload?: PaymentStateDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PaymentStateDto {
  paymentId?: string;
  status?: "CREATED" | "PAID" | "FAILED";
}

export interface GenericResponseListOrderDto {
  /** Response payload */
  payload?: OrderDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseOrdersAmountDto {
  /** Response payload */
  payload?: OrdersAmountDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface OrdersAmountDto {
  /** @format int32 */
  amount?: number;
}

export interface GenericResponseOrderDto {
  payload?: OrderDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListOfdReceipDto {
  /** Response payload */
  payload?: OfdReceipDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface OfdReceipDto {
  /** @format date-time */
  fiscalDate?: string;
  qrCodeUrl?: string;
  type?: "Xarid cheki" | "Qaytarish cheki";
}

export interface GenericResponseListOrderItemDto {
  /** Response payload */
  payload?: OrderItemDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListPushNotificationDto {
  /** Response payload */
  payload?: PushNotificationDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export type PushNotificationDto = object;

export interface GenericResponseCustomerNameDto {
  payload?: CustomerNameDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseRequestedFeedbacksDto {
  /** Response payload */
  payload?: RequestedFeedbacksDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface RequestedFeedbacksDto {
  /** @format int32 */
  count?: number;
}

export interface GenericResponseCustomerContactsDto {
  payload?: CustomerContactsDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListTezkorOrderDto {
  /** Response payload */
  payload?: TezkorOrderDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface TezkorOrderDto {
  id?: string;
  displayId?: string;
  status?:
    | "New"
    | "Confirmed"
    | "CourierAssigned"
    | "VendorConfirmed"
    | "InProgress"
    | "Ready"
    | "InDelivery"
    | "Delivered"
    | "Done"
    | "Cancel";
  link?: string;
  title?: string;
  text?: string;
  iconLink?: string;
}

export interface GenericResponseNavigationBarDto {
  /** Dto for navigation bar - for mobile or web */
  payload?: NavigationBarDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Dto for navigation bar - for mobile or web */
export interface NavigationBarDto {
  navigationBarEntry?: NavigationBarEntryDto;
}

export interface NavigationBarEntryDto {
  /** Title, nullable */
  title?: string;
  /** Link on icon */
  iconLink: string;
  /** Link on redirect url */
  deepLink: string;
  /** Show Trigger Point on nav bar */
  hasMarker: boolean;
}

export interface CustomerFilterRq {
  /** @format int64 */
  filterId?: number;
  filterValues?: number[];
  /** @format double */
  min?: number;
  /** @format double */
  max?: number;
}

export interface GenericResponseShopDto {
  payload?: ShopDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface FeedInfoDto {
  shopFeedLink?: string;
  /** @format int64 */
  yandexCounter?: number;
  shopUrlTitle?: string;
  /** @format int64 */
  shopId?: number;
}

/** Response payload */
export interface FeedInfoListDto {
  feeds?: FeedInfoDto[];
}

export interface GenericResponseFeedInfoListDto {
  /** Response payload */
  payload?: FeedInfoListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseWithdrawByShopsDto {
  /** Response payload */
  payload?: WithdrawByShopsDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface WithdrawByShopsDto {
  /** @format int64 */
  withdrawId?: number;
  /** @format int64 */
  withdrawAmount?: number;
  shopsWithdrawal?: WithdrawShopDto[];
}

export interface WithdrawShopDto {
  /** @format int64 */
  shopId?: number;
  shopTitle?: string;
  /** @format int64 */
  amount?: number;
  chatAvatarUrl?: string;
}

export interface MinAvailableToWithdrawAmountRs {
  /** @format int64 */
  amount?: number;
}

export interface GenericResponseShortWithdrawListDto {
  /** Response payload */
  payload?: ShortWithdrawListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ShortWithdrawDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  createdDate?: string;
  /** @format int64 */
  amount?: number;
  status?: "CREATED" | "APPROVED" | "REJECTED" | "PROCESSING" | "DECLINED" | "WITHDRAWN";
  rejectReason?: string;
}

/** Response payload */
export interface ShortWithdrawListDto {
  withdrawList?: ShortWithdrawDto[];
  /** @format int32 */
  inProcessingCount?: number;
}

export interface GenericResponseWithdrawalEligibilityStatus {
  /** Response payload */
  payload?: WithdrawalEligibilityStatus;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface WithdrawalEligibilityStatus {
  blocked?: boolean;
  blockedReason?: string;
  /** @format date */
  contractBeginDate?: string;
  /** @format date */
  contractEndDate?: string;
  /** @format date */
  contractDeletionDate?: string;
  /** @format date */
  sellerRegistrationDate?: string;
  sellerContractNumber?: string;
}

/** Response payload */
export interface CheckWithdrawDto {
  canWithdraw?: boolean;
  /** @format int32 */
  attempts?: number;
}

export interface GenericResponseCheckWithdrawDto {
  /** Response payload */
  payload?: CheckWithdrawDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface AllWithdrawDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  createdDate?: string;
  status?: "CREATED" | "APPROVED" | "REJECTED" | "PROCESSING" | "DECLINED" | "WITHDRAWN";
  /** @format int64 */
  amount?: number;
  /** @format date-time */
  approvedDate?: string;
  accountNumber?: string;
  rejectReason?: string;
}

export interface AllWithdrawListDto {
  withdrawList?: AllWithdrawDto[];
  /** @format int64 */
  totalAmountWithdraw?: number;
}

export interface GenericResponseListWithdrawalAccountDto {
  /** Response payload */
  payload?: WithdrawalAccountDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface WithdrawalAccountDto {
  accountNumber?: string;
}

export interface GenericResponseSellerSubscriptionListDto {
  /** Response payload */
  payload?: SellerSubscriptionListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface SellerSubscriptionDto {
  /** @format int64 */
  id?: number;
  title?: string;
  description?: string;
  backgroundImageUrl?: string;
  offerLink?: string;
  activeNow?: boolean;
  active?: boolean;
  /** @format int64 */
  price?: number;
  /** @format date-time */
  payDay?: string;
  /** @format date-time */
  controlDay?: string;
  /** @format date-time */
  lastPaid?: string;
  paid?: boolean;
  /** @format date-time */
  paidUntil?: string;
}

/** Response payload */
export interface SellerSubscriptionListDto {
  subscriptions?: SellerSubscriptionDto[];
}

export interface StorageEntryDto {
  /** @format int64 */
  id?: number;
  readonly?: boolean;
  key: string;
  value?: string;
}

export interface ProductForVolumeDiscountDto {
  /** @format int64 */
  id?: number;
  title?: string;
  skuTitle?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  minPurchasePrice?: number;
  /** @format int32 */
  minSellPrice?: number;
  /**
   * @deprecated
   * @format double
   */
  commission?: number;
  skuList?: SkuForVolumeDiscountDto[];
}

export interface ProductForVolumeDiscountListDto {
  products?: ProductForVolumeDiscountDto[];
  info?: Record<string, VolumeDiscountTypeInfoDto>;
}

export type SimplePolynomialVolumeDiscountTypeSpecificInfo = VolumeDiscountTypeSpecificInfo & {
  /** @format double */
  minDegree?: number;
  /** @format double */
  maxDegree?: number;
};

export interface SkuForVolumeDiscountDto {
  /** @format int64 */
  id?: number;
  skuTitle?: string;
  imageLow?: string;
  imageHigh?: string;
  characteristics?: string;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  purchasePrice?: number;
  /** @format int32 */
  sellPrice?: number;
  barcode?: string;
  /** @format double */
  commission?: number;
}

export type StepVolumeDiscountTypeSpecificInfo = VolumeDiscountTypeSpecificInfo & {
  /** @format int32 */
  minStepCount?: number;
  /** @format int32 */
  maxStepCount?: number;
};

export interface VolumeDiscountTypeInfoDto {
  /** @format int32 */
  minAmount?: number;
  /** @format int32 */
  maxAmount?: number;
  /** @format double */
  minDiscount?: number;
  /** @format double */
  maxDiscount?: number;
  specificInfo?: SimplePolynomialVolumeDiscountTypeSpecificInfo | StepVolumeDiscountTypeSpecificInfo;
}

export interface VolumeDiscountTypeSpecificInfo {
  type?: "STEP" | "SIMPLE_POLYNOMIAL" | "SIMPLE_POLYNOMIAL_CONVEX";
}

export interface VolumeDiscountProductDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  productId?: number;
  title?: string;
  skuTitle?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format double */
  maxDiscountPercent?: number;
  /** @format int32 */
  quantitySold?: number;
  /** @format int32 */
  quantityActive?: number;
  /** @format date-time */
  dateStart?: string;
  active?: boolean;
  type?: "STEP" | "SIMPLE_POLYNOMIAL" | "SIMPLE_POLYNOMIAL_CONVEX";
}

export interface VolumeDiscountProductListDto {
  list?: VolumeDiscountProductDto[];
}

/** Additional product fields */
export interface ProductFieldDto {
  /** Name of field */
  fieldName?: string;
  /** Value */
  value?: object;
  /** Type */
  fieldType?: "STRING" | "INTEGER" | "BOOLEAN" | "LONG" | "LOCALIZABLE_TEXT" | "LOCALIZABLE_TEXT_LISTS";
}

/** Contains a list of skus and additional information */
export interface ShopSkuListDto {
  /** List of skus for seller shops */
  skuList: ShopSkuListElementDto[];
  /**
   * Total pages of all skus
   * @format int32
   * @min 0
   */
  totalPages: number;
  /** Seller has limit of skus for invoice create */
  invoiceSkuLimit: boolean;
  /**
   * Number skus limit for invoice
   * @format int32
   */
  skuLimit?: number;
}

/** Element of skus list */
export interface ShopSkuListElementDto {
  /**
   * Id of sku
   * @format int64
   * @example 10
   */
  skuId: number;
  /**
   * Id of product
   * @format int64
   * @example 5
   */
  productId: number;
  /**
   * URL of sku image
   * @example "https://ke-images-dev.servicecdn.ru/bqimfc7rl2o0o0o4qjkg"
   */
  image?: string;
  /**
   * URL of high sku image
   * @example "https://ke-images-dev.servicecdn.ru/bqimfc7rl2o0o0o4qjkg"
   */
  imageHigh?: string;
  /**
   * Product title
   * @example "Масляные духи по мотивам Escentric Molecules02 / Эксцентрик Молекула 02, пробник 3 мл"
   */
  productTitle?: string;
  /**
   * List of sku characteristic separated by commas
   * @example "Морской,d14хh14"
   */
  characteristics?: string;
  /**
   * Title of sku
   * @example "КИПЯТОК-АКР5656-РАЗНОЦВ"
   */
  skuTitle: string;
  /** Additional product fields */
  productFields?: ProductFieldDto[];
  /**
   * Quantity of skus in stock
   * @format int32
   * @example 20
   */
  quantityToStock?: number;
  /**
   * Quantity of active skus
   * @format int32
   * @example 20
   */
  quantityActive?: number;
  /**
   * Quantity of available skus in stock
   * @format int32
   * @example 20
   */
  availableToStock?: number;
  /**
   * Price of sku
   * @format int64
   * @example 15000
   */
  purchasePrice?: number;
  expirationDateRequired?: boolean;
  /**
   * An indicator of whether sellers need to indicate an identifier for marking
   * @example true
   */
  identifierRequired?: boolean;
  /**
   * HONEST_MARK - is for "Честный знак"
   * @example "HONEST_MARK"
   */
  identifierType?: string;
  /**
   * Barcode of sku
   * @example "1000000516104"
   */
  barcode?: string;
  /**
   * Sku has the required filters
   * @example true
   */
  hasAllRequiredFilters?: boolean;
  dimensionalGroup?: DimensionalGroupDto;
  forecastOutOfStock?: boolean;
}

/** Response payload */
export interface DimensionalGroupsRs {
  dimensionalGroups?: DimensionalGroupDto[];
}

export interface GenericResponseDimensionalGroupsRs {
  /** Response payload */
  payload?: DimensionalGroupsRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListSellerReturnLiteDto {
  /** Response payload */
  payload?: SellerReturnLiteDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerReturnLiteDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  dateCreated?: string;
  status?: string;
  stock?: StockDto;
  /** Time slot reservation model */
  timeSlotReservation?: TimeSlotReservationDto;
  /** Seller return paid storage DTO */
  paidStorage?: PaidStorageSellerReturnDto;
  /**
   * For status 'COMPLETED': seller_return.completed_date;<br>
   * For status 'CANCELED': seller_return.canceled_date
   * @format date-time
   */
  executionDate?: string;
  /** @format date-time */
  assembledDate?: string;
  /** @format date-time */
  completedDate?: string;
  /** @format date-time */
  canceledDate?: string;
  /** Electronic waybill number */
  externalNumber?: string;
  /**
   * 'FBS' - WMS sends actType 'FBS'<br>
   * 'DEFECTED' - WMS sends actType 'DEFECTED', or if actType from WMS is null and fromDefected is true<br>
   * 'RETURN' - any other actType except (FBS, DEFECTED), or actType is null and fromDefected is false
   */
  type: "DEFECTED" | "RETURN" | "FBS";
  /** Информация по ЭТТН накладной возврата. */
  ettnInfo?: SellerReturnEttnInfoDto;
}

export interface AllPromoCodeDto {
  promoCodeList?: PromoCodeDto[];
  /** @format int32 */
  totalPages?: number;
}

export interface PromoPrefixDto {
  prefix?: string;
}

export interface BlockReasonDto {
  blockReason?: string;
  blockComment?: string;
  /** @format date */
  dateBlocked?: string;
}

export interface ProductAdditionalStatusDto {
  /** @format int32 */
  id?: number;
  title?: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface ProductModerationStatusDto {
  title?: string;
  color?: string;
  value?: "NOT_MODERATED" | "MODERATED" | "ON_MODERATION" | "HAS_COMPLAINTS" | "ON_PREMODERATION" | "PERM_BANNED";
  hasAnySkuBlocked?: boolean;
}

export interface ProductRankDto {
  rank?: "A" | "B" | "C" | "N" | "D";
  rankValue?: string;
  /** @format date-time */
  dateUpdated?: string;
}

export interface ProductStatusDto {
  /** @format int32 */
  id?: number;
  title?: string;
  value?:
    | "NO_SKU"
    | "IN_STOCK"
    | "READY_TO_SEND"
    | "SENT"
    | "RUN_OUT"
    | "BLOCKED"
    | "SKU_BLOCKED"
    | "ARCHIVED"
    | "DELETED"
    | "PERM_BANNED"
    | "NOT_READY_TO_SEND";
  description?: string;
  color?: string;
  additional?: ProductAdditionalStatusDto[];
}

export interface SkuBlockReasonDto {
  title?: string;
  message?: string;
  /** @format date-time */
  date?: string;
}

export interface SkuForTableDto {
  skuTitle?: string;
  skuFullTitle?: string;
  productTitle?: string;
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  quantityCreated?: number;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  quantityFbs?: number;
  /** @format int32 */
  quantityAdditional?: number;
  /** @format int32 */
  quantityOnPhotoStudio?: number;
  /** @format int32 */
  quantityArchived?: number;
  /** @format int32 */
  quantitySold?: number;
  /** @format int32 */
  quantityReturned?: number;
  /**
   * @deprecated
   * @format int32
   */
  quantityMissing?: number;
  /** @format int32 */
  quantityDefected?: number;
  /** @format int32 */
  quantityPending?: number;
  /** @format double */
  returnedPercentage?: number;
  /** @format int64 */
  barcode?: number;
  archived?: boolean;
  /** @format double */
  commission?: number;
  characteristics?: string;
  previewImage?: string;
  ikpu?: string;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  recommendedTotalPrice?: number;
  blockingReason?: string;
  blockReasons?: BlockReasonDto[];
  skuBlockReason?: SkuBlockReasonDto;
  blocked?: boolean;
  rankInfo?: ProductRankDto;
  article?: string;
  /** @format double */
  turnover?: number;
  dimensionalGroup?: string;
  paidStorageDimensionalGroup?: DimensionalGroupDto;
  /** @format int64 */
  paidStoragePriceItem?: number;
  /** @format int64 */
  paidStorageAmount?: number;
  actualDimensionalGroup?: DimensionalGroupDto;
  hasStudioPhoto?: boolean;
  forecastOutOfStock?: boolean;
  activeSale?: boolean;
  /** @format double */
  avgdsales?: number;
  /** @format double */
  avgdquantity?: number;
  pstorage?: boolean;
}

export interface GenericResponseProductPriceInfoDto {
  /** Response payload */
  payload?: ProductPriceInfoDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface ProductPriceInfoDto {
  /** @format int64 */
  productId?: number;
  skuPriceInfoList?: SkuPriceInfoDto[];
}

export interface SkuPriceInfoDto {
  /** @format int64 */
  skuId?: number;
  /** @format int32 */
  minPrice?: number;
}

export interface SkuListForTableDto {
  /** @format int64 */
  quantitySku?: number;
  skuList?: SkuForTableDto[];
}

export interface SkuDataForPrintDto {
  skuList?: NewSkuDto[];
}

export interface ShopCategoryDto {
  /** @format int64 */
  id: number;
  title: string;
  /** @format int64 */
  parentId?: number;
  parentTitle?: string;
  /** If this parameter is true, then category can be chosen by user.Otherwise, he need to go deeper. */
  active: boolean;
  okpd2Required?: boolean;
  canUse?: boolean;
  hasChildren?: boolean;
  hasActiveChildren?: boolean;
}

export interface ReturnCauseDto {
  cause?: string;
  /** @format int32 */
  returnedQuantity?: number;
  /** @format double */
  returnedPercentage?: number;
}

export interface ReturnCauseSkuDto {
  /** @format int64 */
  skuId?: number;
  causeList?: ReturnCauseDto[];
}

export interface ProductRequirementsDto {
  /** @format int32 */
  maxLengthTitle?: number;
}

export interface ProductCertificateFillTypeDto {
  fillType?: "REQUIRED" | "OPTIONAL" | "DISABLED";
}

export interface Okpd2Entry {
  idx?: string;
  razdel?: string;
  kod?: string;
  name?: string;
  /** @format int32 */
  level?: number;
}

export interface SuggestionOkpd2Entry {
  value?: string;
  unrestrictedValue?: string;
  data?: Okpd2Entry;
}

export interface ProductLeftoverStockDto {
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  skuId?: number;
  name?: string;
  sku?: string;
  photoUrl?: string;
  barcode?: string;
  hasVerticalPhoto?: boolean;
  /** @format int32 */
  quantityPending?: number;
  /** @format int32 */
  quantityCreated?: number;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  quantityReturned?: number;
  /** @format int32 */
  quantityDefected?: number;
  /**
   * @deprecated
   * @format int32
   */
  quantityMissing?: number;
  /** @format int32 */
  quantitySold?: number;
  /** @format int32 */
  quantityAccepted?: number;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  sellPrice?: number;
}

export interface ShopLeftoverStockDto {
  products?: ProductLeftoverStockDto[];
  seller?: string;
  /** @format date-time */
  date?: string;
  purchasePriceCommonSkuData?: SkuCommonDataSum;
  sellPriceCommonSkuData?: SkuCommonDataSum;
}

export interface SkuCommonDataSum {
  /** @format int32 */
  quantityPendingSum?: number;
  /** @format int32 */
  quantityCreatedSum?: number;
  /** @format int32 */
  quantityActiveSum?: number;
  /** @format int32 */
  quantityReturnedSum?: number;
  /** @format int32 */
  quantityDefectedSum?: number;
  /** @format int32 */
  quantityAcceptedSum?: number;
  /** @format int32 */
  quantitySoldSum?: number;
  /** @format int32 */
  quantityMissingSum?: number;
}

export interface AllProductsDto {
  productList?: SellerProductCardDto[];
  /** @format int32 */
  totalProductsAmount?: number;
}

export interface SellerProductCardDto {
  /** @format int64 */
  productId?: number;
  category?: string;
  rating?: string;
  status?: ProductStatusDto;
  moderationStatus?: ProductModerationStatusDto;
  /**
   * @deprecated
   * @format double
   */
  commission?: number;
  commissionDto?: CommissionDto;
  skuList?: SkuForTableDto[];
  skuTitle?: string;
  image?: string;
  previewImg?: string;
  title?: string;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  quantityFbs?: number;
  /** @format int32 */
  quantityAdditional?: number;
  /** @format int32 */
  quantityOnPhotoStudio?: number;
  /** @format int32 */
  quantityCreated?: number;
  /** @format int32 */
  quantitySold?: number;
  /** @format int32 */
  quantityReturned?: number;
  /**
   * @deprecated
   * @format int32
   */
  quantityMissing?: number;
  /** @format int32 */
  quantityDefected?: number;
  /** @format int32 */
  quantityPending?: number;
  /** @format double */
  returnedPercentage?: number;
  newYearStatus?: NewYearStatusDto;
  /** @format int64 */
  price?: number;
  /** @format int32 */
  clicks?: number;
  /** @format int64 */
  viewers?: number;
  /** @format double */
  conversion?: number;
  roi?: string;
  rankInfo?: ProductRankDto;
  /** @deprecated */
  blockReason?: string;
  /** @deprecated */
  blockComment?: string;
  /**
   * @deprecated
   * @format date-time
   */
  dateModerated?: string;
  volumeDiscount?: VolumeDiscountDto;
  skusHasAllRequiredFilters?: boolean;
  allFiltersFilled?: boolean;
  auctionMember?: boolean;
  isEditable?: boolean;
  isEditableSku?: boolean;
  isActive?: boolean;
  isDeletable?: boolean;
  isIlliquid?: boolean;
  pstorage?: boolean;
}

export interface ProductFieldDescriptionDto {
  fieldType?: "STRING" | "INTEGER" | "BOOLEAN" | "LONG" | "LOCALIZABLE_TEXT" | "LOCALIZABLE_TEXT_LISTS";
  fieldName?: string;
  fieldDescription?: string;
  fieldTitle?: string;
  fieldPlaceholder?: string;
  required?: boolean;
}

export interface BarcodeValidationDto {
  isValid?: boolean;
  isNotUsed?: boolean;
}

export type ProductChanges = object;

export interface SellerHistoryProductModerationListDto {
  productList?: SellerProductModerationDto[];
  /** @format int32 */
  totalPages?: number;
}

export interface SellerProductModerationDto {
  /** @format int64 */
  productId?: number;
  productTitle?: string;
  skuTitle?: string;
  changes?: ProductChanges[];
  /** @format date-time */
  date?: string;
  status?: "PENDING" | "WAITING" | "DECLINED" | "PARTIALLY_DECLINED" | "CANCELED" | "APPROVED" | "NOT_REQUIRED";
}

export interface GenericResponseListSaleInfo {
  /** Response payload */
  payload?: SaleInfo[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SaleInfo {
  /**
   * ID распродажи
   * @format int64
   */
  id: number;
  /** Название распродажи */
  title: string;
  /**
   * Дата начала аннонса
   * @format date
   * @example "2021-08-01"
   */
  announceDate: string;
  /**
   * Дата начала распродажи
   * @format date
   * @example "2021-08-01"
   */
  startDate: string;
  /**
   * Дата окончания распродажи
   * @format date
   * @example "2021-09-01"
   */
  finishDate: string;
  /** Статус распродажи */
  status: "CREATED" | "ANNOUNCED" | "ACTIVE" | "COMPLETED";
  /** Тип распродажи */
  type: "BIG_SALE" | "TODAY_DEALS";
  /**
   * URL изображения с локализацией
   * @example {"ru":"https://host/path/img_ru.jpg","uz":"https://host/path/img_uz.jpg"}
   */
  imageUrl: Record<string, string>;
  /**
   * Количество товаров в магазине соответствующих правилам распродажи
   * @format int32
   */
  suitableProductsCount: number;
  /**
   * Количество товаров добавленных в распродажу
   * @format int32
   */
  involvedProductsCount: number;
}

export interface CommissionRule {
  /**
   * Скидка на комиссию при участии в распродаже
   * @format int32
   */
  discountOnCommission: number;
}

export interface DiscountRule {
  /**
   * Минимальный процент скидки для участия в распродаже
   * @format int32
   * @max 100
   */
  minDiscountPercentage: number;
}

export interface GenericResponseSaleFullInfo {
  /** Response payload */
  payload?: SaleFullInfo;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface PriceRule {
  /**
   * Минимальная цена товара для участия в распродаже
   * @format int64
   */
  minPrice: number;
  /**
   * Максимальная цена товара для участия в распродаже
   * @format int64
   */
  maxPrice: number;
}

export interface ProductQuantityRule {
  /**
   * Максимальное количество товаров в распродаже
   * @format int32
   */
  maxProductQuantity: number;
  /**
   * Максимальное количество товаров в распродаже для одного магазина
   * @format int32
   */
  maxProductQuantityForShop: number;
}

/** Правило для категории внутри распродажи */
export interface SaleCategoryRule {
  /**
   * ID категории
   * @format int64
   */
  categoryId: number;
  /** Название категории */
  title: string;
  /**
   * Минимальный процент скидки для участия в распродаже для категории
   * @format int32
   */
  minDiscountPercentage: number;
  /**
   * Скидка на комиссию для категории
   * @format int32
   */
  discountOnCommission: number;
}

/** Response payload */
export interface SaleFullInfo {
  /**
   * ID распродажи
   * @format int64
   */
  id: number;
  /** Название распродажи */
  title: string;
  /**
   * Дата начала аннонса
   * @format date
   * @example "2021-08-01"
   */
  announceDate: string;
  /**
   * Дата начала распродажи
   * @format date
   * @example "2021-08-01"
   */
  startDate: string;
  /**
   * Дата окончания распродажи
   * @format date
   * @example "2021-09-01"
   */
  finishDate: string;
  /** Статус распродажи */
  status: "CREATED" | "ANNOUNCED" | "ACTIVE" | "COMPLETED";
  /** Тип распродажи */
  type: "BIG_SALE" | "TODAY_DEALS";
  /**
   * URL изображения с локализацией
   * @example {"ru":"https://host/path/img_ru.jpg","uz":"https://host/path/img_uz.jpg"}
   */
  imageUrl: Record<string, string>;
  /**
   * Количество товаров в магазине соответствующих правилам распродажи
   * @format int32
   */
  suitableProductsCount: number;
  /**
   * Количество товаров добавленных в распродажу
   * @format int32
   */
  involvedProductsCount: number;
  categoryRule?: SaleCategoryRule[];
  productQuantityRule?: ProductQuantityRule;
  priceRule?: PriceRule;
  discountRule?: DiscountRule;
  commissionRule?: CommissionRule;
}

export interface GenericResponsePageSaleSuitableProduct {
  /** Response payload */
  payload?: PageSaleSuitableProduct;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PageSaleSuitableProduct {
  content?: SaleSuitableProduct[];
  /** @format int32 */
  totalPages?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface SaleSuitableProduct {
  /**
   * Идентификатор продукта
   * @format int64
   */
  productId: number;
  /** Название продукта */
  title?: Record<string, string>;
  /** URL изображения с низким разрешением */
  imageLow?: string;
  /** URL изображения с высоким разрешением */
  imageHigh?: string;
  /**
   * Общее количество sku у продукта которые сейчас в продаже
   * @format int32
   */
  availableCount?: number;
  /**
   * Минимальная себестоимость sku у продукта
   * @format int64
   */
  purchasePrice?: number;
  /**
   * Минимальная цена продукта
   * @format int64
   */
  minSellPrice?: number;
}

export interface GenericResponseListSaleSuitableSku {
  /** Response payload */
  payload?: SaleSuitableSku[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SaleSuitableSku {
  /**
   * Идентификатор sku
   * @format int64
   */
  skuId?: number;
  /** Название sku */
  skuTitle?: string;
  /** URL изображения sku с низким разрешением */
  imageLow?: string;
  /** URL изображения sku с высоким разрешением */
  imageHigh?: string;
  /**
   * Общее количество sku которые сейчас в продаже
   * @format int32
   */
  availableCount?: number;
  /** Характеристики sku разделенные запятными */
  characteristics?: string;
  /**
   * Цена продажи sku до участия в распродаже
   * @format int64
   */
  currentSellPrice?: number;
  /**
   * Рекомендованная цена продажи sku для участия в распродаже
   * @format int64
   */
  recommendedPrice?: number;
  /**
   * Минимальная недавно измененная цена
   * @format int64
   */
  referencePrice?: number;
}

export interface GenericResponsePageSaleProduct {
  /** Response payload */
  payload?: PageSaleProduct;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PageSaleProduct {
  content?: SaleProduct[];
  /** @format int32 */
  totalPages?: number;
  /** @format int64 */
  totalCount?: number;
}

/** Список SKU продукта */
export interface SaleInvolvedSku {
  /**
   * Идентификатор sku
   * @format int64
   */
  skuId?: number;
  /** Название sku */
  skuTitle?: string;
  /** URL изображения sku с низким разрешением */
  imageLow?: string;
  /** URL изображения sku с высоким разрешением */
  imageHigh?: string;
  /**
   * Общее количество sku которые сейчас в продаже
   * @format int32
   */
  availableCount?: number;
  /** Характеристики sku разделенные запятными */
  characteristics?: string;
  /**
   * Цена продажи sku до участия в распродаже
   * @format int64
   */
  currentSellPrice?: number;
  /**
   * Цена sku при участии в распродаже
   * @format int64
   */
  salePrice: number;
  /**
   * Максимальная цена для участия в распродаже
   * @format int64
   */
  maxSuitablePrice: number;
  /**
   * Лимит на количство sku при участии в распродаже
   * @format int64
   */
  limitOnDiscountedSku: number;
  /**
   * Проданное количество sku в рамках распродажи
   * @format int64
   * @min 0
   */
  soldDiscountedSku: number;
}

/** В какой период товар будет показан в листинге распродажи */
export interface SalePeriod {
  /**
   * @format date-time
   * @example "2024-10-01T17:02:25.305Z"
   */
  startDate?: string;
  /**
   * @format date-time
   * @example "2024-10-10T17:02:25.305Z"
   */
  endDate?: string;
}

export interface SaleProduct {
  /** @format int64 */
  productId?: number;
  /** Название продукта */
  title: Record<string, string>;
  /** В какой период товар будет показан в листинге распродажи */
  salePeriod?: SalePeriod;
  /** URL изображения с низким разрешением */
  imageLow: string;
  /** URL изображения с высоким разрешением */
  imageHigh: string;
  /** Список SKU продукта */
  skuList: SaleInvolvedSku[];
}

export interface AllSkuForDiscountDto {
  skuList?: SkuForDiscountDto[];
  /** @format int32 */
  totalPage?: number;
}

export interface DiscountConditionsDto {
  categoryName?: string;
  /** @format int32 */
  minDiscount?: number;
  /** @format int64 */
  minPrice?: number;
  /** @format int64 */
  recommendedPrice?: number;
}

export interface AvailableDiscountDto {
  /** @format int32 */
  availableQuantityDiscount?: number;
}

export interface AllDiscountDto {
  discountList?: DiscountDto[];
  /** @format int32 */
  totalPage?: number;
}

/** Response payload */
export interface CalendarEventDto {
  /** @format int64 */
  id?: number;
  title?: string;
  imageUrl?: Record<string, string>;
  /** @format date-time */
  dateStart?: string;
  /** @format date-time */
  dateEnd?: string;
  status?: "PENDING" | "CREATED" | "ACTIVATING" | "ACTIVE" | "DEACTIVATING" | "COMPLETED" | "CANCELED";
  /** @format int32 */
  suitableProducts?: number;
  /** @format int32 */
  involvedProducts?: number;
  type?: CalendarEventTypeDto;
}

export interface CalendarEventTypeDto {
  text?: string;
  backgroundColor?: string;
}

export interface GenericResponseCalendarEventDto {
  /** Response payload */
  payload?: CalendarEventDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CategoryRuleDto {
  /** @format int64 */
  categoryId?: number;
  title?: string;
  parents?: string[];
  /** @format int32 */
  minDiscountPercentage?: number;
  /** @format int32 */
  discountCommission?: number;
}

export interface CommissionRuleDto {
  /** @format int32 */
  discountCommission?: number;
}

export interface DiscountRuleDto {
  /** @format int32 */
  minDiscountPercentage?: number;
}

export interface PriceRuleDto {
  /** @format int64 */
  maxPrice?: number;
  /** @format int64 */
  minPrice?: number;
}

export interface QuantityProductsRuleDto {
  /** @format int32 */
  maxQuantityProducts?: number;
  /** @format int32 */
  maxQuantityProductsForShop?: number;
}

export interface RuleDto {
  categoryRule?: CategoryRuleDto[];
  quantityProductsRule?: QuantityProductsRuleDto;
  priceRule?: PriceRuleDto;
  discountRule?: DiscountRuleDto;
  commissionRule?: CommissionRuleDto;
}

export interface ProductSuitableDto {
  /** @format int64 */
  id?: number;
  title?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int64 */
  purchasePrice?: number;
  /** @format int64 */
  minSellPrice?: number;
  /** @format int32 */
  quantityActive?: number;
  /** @format int32 */
  quantityWishSale?: number;
  /** @deprecated */
  commission?: number;
}

export interface ProductSuitableListDto {
  productList?: ProductSuitableDto[];
  /** @format int32 */
  totalPage?: number;
  /** @format int64 */
  totalProducts?: number;
}

export interface ProductInvolvedDto {
  /** @format int64 */
  productId?: number;
  title?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int32 */
  quantityActive?: number;
  /** @deprecated */
  commission?: number;
}

export interface ProductInvolvedListDto {
  productList?: ProductInvolvedDto[];
  /** @format int32 */
  totalPage?: number;
  /** @format int64 */
  totalProducts?: number;
}

export interface SkuInvolvedDto {
  /** @format int64 */
  skuId?: number;
  skuTitle?: string;
  imageLow?: string;
  imageHigh?: string;
  characteristics?: string;
  /** @format int64 */
  oldPrice?: number;
  /** @format int64 */
  newPrice?: number;
  /** @format double */
  commission?: number;
}

export interface PriceDto {
  /** @format int64 */
  currentSellPrice?: number;
  /** @format int64 */
  recommendedPrice?: number;
  /** @format int64 */
  referencePrice?: number;
}

export interface SkuSuitableDto {
  /** @format int64 */
  skuId?: number;
  skuTitle?: string;
  imageLow?: string;
  imageHigh?: string;
  characteristics?: string;
  price?: PriceDto;
  /** @format double */
  commission?: number;
}

export interface ProductMarketingDto {
  /** @format int64 */
  id?: number;
  title?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int64 */
  minSellPrice?: number;
  /** @format int64 */
  maxSellPrice?: number;
  /** @format int32 */
  quantityActive?: number;
  /** @format int64 */
  toWithdraw?: number;
  /** @deprecated */
  commission?: number;
}

export interface SkuMarketingDto {
  /** @format int64 */
  skuId?: number;
  skuTitle?: string;
  characteristics?: string;
  imageLow?: string;
  imageHigh?: string;
  /** @format int64 */
  sellPrice?: number;
  /** @format double */
  commission?: number;
}

export interface BundleDto {
  /** @format int64 */
  id?: number;
  status?: "ACTIVE" | "COMPLETED" | "OUT_STOCK";
  /** @format int32 */
  quantitySold?: number;
  items?: BundleItemDto[];
}

export interface BundleItemDto {
  /** @format int64 */
  productId?: number;
  productTitle?: string;
  imageHigh?: string;
  type?: "MAIN" | "SECONDARY";
  commission?: number;
  /** @uniqueItems true */
  skuItems?: SkuItem[];
}

export interface ShopMainDto {
  /** @format int64 */
  id?: number;
  shopTitle?: string;
  shortTitle?: string;
  urlTitle?: string;
  skuTitle?: string;
  /** @deprecated */
  shopDescription?: string;
  description?: Record<string, string>;
  transferred?: boolean;
  chatAvatarUrl?: string;
}

export interface ProductForInvoiceDto {
  /** @format int64 */
  id?: number;
  skuTitle?: string;
  productTitle?: string;
  /** @format int32 */
  quantityToStock?: number;
  /** @format int32 */
  quantityAccepted?: number;
  /** @format int64 */
  purchasePrice?: number;
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  skuForInvoiceDtoList?: SkuForInvoiceDto[];
}

export interface ProductListForInvoiceDto {
  /** @format int64 */
  quantityProducts?: number;
  productList?: ProductForInvoiceDto[];
}

export interface SkuForInvoiceDto {
  /** @format int64 */
  id?: number;
  skuTitle?: string;
  /** @format int32 */
  quantityToStock?: number;
  /** @format int32 */
  quantityAccepted?: number;
  /** @format int64 */
  purchasePrice?: number;
}

export interface CategoryFieldsDto {
  fields?: Record<string, object>;
}

export interface GenericResponseRegionsResponse {
  /** Response payload */
  payload?: RegionsResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Регион */
export interface RegionDto {
  /**
   * ИД региона
   * @format int32
   */
  regionId: number;
  /** Наименование региона */
  name: string;
}

/** Response payload */
export interface RegionsResponse {
  /** Доступные регионы */
  regions: RegionDto[];
}

/** Район */
export interface DistrictDto {
  /**
   * ИД региона
   * @format int32
   */
  regionId: number;
  /**
   * Код района
   * @format int32
   */
  districtCode: number;
  /** Наименование района */
  name: string;
}

/** Response payload */
export interface DistrictsResponse {
  /** Список районов региона */
  districts: DistrictDto[];
}

export interface GenericResponseDistrictsResponse {
  /** Response payload */
  payload?: DistrictsResponse;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface BarcodeTypeDto {
  /** @format int64 */
  id?: number;
  title?: string;
  printType?: "A4" | "ThermalPrinter";
}

export interface BarcodeTypesDto {
  barcodeLabelTypes?: BarcodeTypeDto[];
}

export interface GenericResponseSellerShopPromoDtoList {
  /** Response payload */
  payload?: SellerShopPromoDtoList;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface SellerShopPromoDto {
  /** @format int64 */
  promoId?: number;
  /** @format int64 */
  shopId?: number;
  shopTitle?: string;
  image?: string;
  /** @format int32 */
  discountAmount?: number;
  /** @format int32 */
  quantityIssued?: number;
  /** @format int32 */
  quantityUsed?: number;
  /** @format int64 */
  salesAmount?: number;
  /** @format int64 */
  discountSalesAmount?: number;
  cancelable?: boolean;
}

/** Response payload */
export interface SellerShopPromoDtoList {
  promoList?: SellerShopPromoDto[];
}

export interface GenericResponseShopPromoSettingsDto {
  /** Response payload */
  payload?: ShopPromoSettingsDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface ShopPromoSettingsDto {
  /** @format int64 */
  discountAmount?: number;
  /** @format int64 */
  sum?: number;
}

export interface GenericResponseProductPromoSettingsDto {
  /** Response payload */
  payload?: ProductPromoSettingsDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface ProductPromoSettingsDto {
  availableDiscountPercent?: number[];
}

export interface GenericResponseListProductMarketingDto {
  /** Response payload */
  payload?: ProductMarketingDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseSellerProductPromoDtoList {
  /** Response payload */
  payload?: SellerProductPromoDtoList;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface SellerProductPromoDto {
  /** @format int64 */
  promoId?: number;
  /** @format int64 */
  productId?: number;
  productTitle?: Record<string, string>;
  imageLow?: string;
  imageHigh?: string;
  /** @format int32 */
  discountPercent?: number;
  /** @format int32 */
  quantityIssued?: number;
  /** @format int32 */
  quantityUsed?: number;
  /** @format int64 */
  salesAmount?: number;
  /** @format int64 */
  discountSalesAmount?: number;
  cancelable?: boolean;
}

/** Response payload */
export interface SellerProductPromoDtoList {
  promoList?: SellerProductPromoDto[];
}

export interface GenericResponseProductInfoListDto {
  /** Response payload */
  payload?: ProductInfoListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ProductInfoDto {
  /** @format int64 */
  productId?: number;
  title?: string;
  image?: string;
  /** @format int64 */
  shopId?: number;
}

/** Response payload */
export interface ProductInfoListDto {
  products?: ProductInfoDto[];
}

export interface GenericResponseListIkpuInfoRs {
  /** Response payload */
  payload?: IkpuInfoRs[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface IkpuInfoRs {
  ikpu?: string;
  ikpuName?: string;
  subPositionName?: string;
  positionName?: string;
  className?: string;
  groupName?: string;
  isValidForCategory?: boolean;
}

/** Response payload */
export interface CheckIkpuDto {
  privileged?: boolean;
}

export interface GenericResponseCheckIkpuDto {
  /** Response payload */
  payload?: CheckIkpuDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseSellerCategoryInfoDto {
  /** Response payload */
  payload?: SellerCategoryInfoDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerCategoryInfoDto {
  hasForbiddenCategories?: boolean;
}

export interface OrganizationInfoDto {
  name?: string;
  ogrn?: string;
  kpp?: string;
  inn?: string;
  address?: string;
  type?: string;
  codeOkved?: string;
  managementName?: string;
  state?: State;
}

export interface State {
  /** @format date */
  actualityDate?: string;
  /** @format date */
  registrationDate?: string;
  /** @format date */
  liquidationDate?: string;
  status?: string;
}

export interface DocumentTypeDto {
  type?: string;
  value?: string;
  required?: boolean;
}

export interface EntrepreneurDocumentRequirementDto {
  entrepreneurType?: "INDIVIDUAL" | "LEGAL" | "SELF_EMPLOYED";
  /** @uniqueItems true */
  documents?: DocumentTypeDto[];
}

export interface OrganizationDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface OrganizationWithEmployeeDto {
  /** @format int64 */
  id?: number;
  employee?: EmployeeDto[];
}

export interface OrganizationEmployeeDto {
  /** @format int64 */
  accountId?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  /** @format date-time */
  hiredAt?: string;
  role?: EmployeeRoleDto;
  /** @format int64 */
  organizationId?: number;
}

export interface OpenApiTokenResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format date-time */
  expireAt?: string;
  metadata?: OpenApiTokenMetadata;
  readonly?: boolean;
  token?: string;
  status?: "ACTIVE" | "INACTIVE";
  /** @format int64 */
  sellerId?: number;
  /** @format date-time */
  createdAt?: string;
}

export interface IndividualOfdInfo {
  lastName?: string;
  firstName?: string;
  patronymic?: string;
  fullName?: string;
  pinfl?: string;
}

export interface CompanyOfdInfo {
  companyName?: string;
  inn?: string;
}

export interface SellerNotificationDto {
  visible?: boolean;
  text?: string;
  link?: string;
  icons?: string[];
  closeable?: boolean;
  /** @format int32 */
  intervalInHours?: number;
  textColor?: string;
  backgroundColor?: string;
  linkColor?: string;
  linkText?: string;
}

export interface CategoryInfoDto {
  /** @format int64 */
  categoryId?: number;
  title?: string;
  parents?: string[];
}

export interface GenericResponseListProductSkuGroupMarketingDto {
  /** Response payload */
  payload?: ProductSkuGroupMarketingDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface ProductSkuGroupMarketingDto {
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  shopId?: number;
  categories?: CategoryInfoDto[];
  skuGroups?: SkuGroupMarketingDto[];
}

export interface SkuGroupMarketingDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  quantityActive?: number;
  productTitle?: string;
  /** @format int64 */
  maxSellPrice?: number;
  images?: PhotoDto[];
  characteristics?: string;
}

export interface GenericResponseListSkuGroupInfoDto {
  /** Response payload */
  payload?: SkuGroupInfoDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SkuGroupInfoDto {
  /** @format int64 */
  skuGroupId?: number;
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  shopId?: number;
  categories?: CategoryInfoDto[];
}

export interface GenericResponseListSellerFilterDto {
  /** Response payload */
  payload?: SellerFilterDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerFilterDto {
  sellerName?: string;
  /** @format int64 */
  sellerId?: number;
  shops?: ShopFilterDto[];
}

export interface ShopFilterDto {
  /** @format int64 */
  id?: number;
  title?: string;
}

export interface HelpPageDto {
  title?: string;
  content?: string;
}

export interface HelpPageTitleDto {
  title?: string;
  url?: string;
  subTitles?: HelpPageTitleDto[];
}

export interface WithdrawDto {
  /**
   * @format int64
   * @min 1
   */
  amount?: number;
  /**
   * @minLength 0
   * @maxLength 250
   */
  accountName?: string;
  /**
   * @minLength 20
   * @maxLength 20
   */
  accountNumber?: string;
  /**
   * @minLength 10
   * @maxLength 10
   */
  innBank?: string;
  /**
   * @minLength 5
   * @maxLength 5
   */
  codeBank?: string;
  /** @format int64 */
  id?: number;
  processed?: boolean;
  /** @format date-time */
  date?: string;
}

export interface FinanceStatementDto {
  /** @format int64 */
  forWithdraw?: number;
  /** @format int64 */
  processing?: number;
  /** @format int64 */
  cancelled?: number;
  /** @format int64 */
  withdrawn?: number;
  /** @format int64 */
  withdrawnForCurrentMonth?: number;
  /** @format int64 */
  expended?: number;
  /** @format int64 */
  expendedForCurrentMonth?: number;
  /** @format int64 */
  income?: number;
  /** @format int64 */
  incomeForCurrentMonth?: number;
  /** @format int64 */
  toReturn?: number;
  lastUsedSettlementAccount?: SettlementAccountDto;
}

export interface SellerFinance {
  id?: SellerFinanceId;
  /** @format int64 */
  accountId?: number;
  /** @format date-time */
  dateAdded?: string;
  /** @format date-time */
  dateUpdated?: string;
  /** @format int64 */
  forWithdraw?: number;
  /** @format int64 */
  processing?: number;
  /** @format int64 */
  expendedForCurrentMonth?: number;
  /** @format int64 */
  withdrawnForCurrentMonth?: number;
  /** @format int64 */
  cancelled?: number;
  /** @format int64 */
  toReturn?: number;
  /** @format int64 */
  expended?: number;
  /** @format int64 */
  withdrawn?: number;
}

export interface SellerFinanceId {
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  shopId?: number;
}

export interface ShopAvailableWithdrawableSumDto {
  /** @format int64 */
  sum?: number;
  byVat?: SumWithVat[];
}

export interface SumWithVat {
  vat?: "VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112";
  /** @format int64 */
  sum?: number;
}

export interface ExpensesStatementDetailsDto {
  /** @format int64 */
  expended?: number;
  source?: string;
}

/** Response payload */
export interface ExpensesStatementDetailsDtoList {
  expenses?: ExpensesStatementDetailsDto[];
}

export interface GenericResponseExpensesStatementDetailsDtoList {
  /** Response payload */
  payload?: ExpensesStatementDetailsDtoList;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface FinanceReportDto {
  period?: string;
  link?: string;
}

export interface FinanceReportListDto {
  financeReportList?: FinanceReportDto[];
}

export type FinanceItemEntity = object;

export interface FinanceOrderItemsDto {
  orderItems?: FinanceItemEntity[];
  /** @format int32 */
  totalElements?: number;
}

export interface GenericResponseSellerPaymentInfoDtoList {
  /** Response payload */
  payload?: SellerPaymentInfoDtoList;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface SellerPaymentDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  dateCreated?: string;
  /** @format date-time */
  dateUpdated?: string;
  name?: string;
  source?: string;
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  paymentPrice?: number;
  /** @format int32 */
  amount?: number;
  status?: "CREATED" | "REFUNDED" | "CONFIRMED" | "CANCELED";
  externalId?: string;
  code?: string;
  /** @format date-time */
  dateService?: string;
  type?: "OUTCOME" | "INCOME";
}

/** Response payload */
export interface SellerPaymentInfoDtoList {
  payments?: SellerPaymentDto[];
}

export interface GenericResponsePaymentSourcesDto {
  /** Response payload */
  payload?: PaymentSourcesDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PaymentSourcesDto {
  sources?: string[];
  /** @format int64 */
  totalCount?: number;
}

/** Response payload */
export interface CompensationDto {
  /** @format int64 */
  sellerId?: number;
  /** @format int64 */
  priceMissings?: number;
  /** @format int64 */
  priceAccepted?: number;
  /** @format int64 */
  moneyCalculated?: number;
  /** @format int64 */
  moneyToReturn?: number;
}

export interface GenericResponseCompensationDto {
  /** Response payload */
  payload?: CompensationDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface CreditBannerDto {
  /** @format int64 */
  sellerId?: number;
  showBanner?: boolean;
  /** @format int64 */
  banner?: number;
}

export interface GenericResponseCreditBannerDto {
  /** Response payload */
  payload?: CreditBannerDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface BankCodeResponse {
  code?: string;
  name?: string;
}

export interface GenericResponseListBankCodeResponse {
  /** Response payload */
  payload?: BankCodeResponse[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseSellerNameDto {
  /** Response payload */
  payload?: SellerNameDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface SellerNameDto {
  /**
   * @minLength 1
   * @maxLength 50
   */
  name: string;
}

export interface GetAccountDataForBitrixRs {
  /**
   * Account id
   * @format int64
   */
  accountId: number;
  /**
   * Seller id
   * @format int64
   */
  sellerId: number;
  /** Person first name */
  firstName: string;
  /** Person last name */
  lastName: string;
  /** Person email */
  email: string;
  /** Person phone */
  phone: string;
  /** Bitrix md5 hash */
  hash: string;
  /** Organization name */
  organizationName: string;
  /** Seller can sell food */
  eco?: boolean;
}

/** Response payload */
export interface AbbCityRs {
  data?: City[];
}

export interface City {
  id?: string;
  name?: string;
}

export interface GenericResponseAbbCityRs {
  /** Response payload */
  payload?: AbbCityRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseBoolean {
  /** Response payload */
  payload?: boolean;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface AbbBranchesRs {
  data?: Branches[];
}

export interface Branches {
  fullAddress?: string;
  code?: string;
  cityId?: string;
  cityName?: string;
}

export interface GenericResponseAbbBranchesRs {
  /** Response payload */
  payload?: AbbBranchesRs;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListRootCategoryDto {
  /** Response payload */
  payload?: RootCategoryDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface RootCategoryDto {
  /** @format int64 */
  id?: number;
  title?: string;
  icon?: string;
  iconSvg?: string;
  iconLink?: string;
  /** Mapping "ParentCategory" -> "Child categories[]" */
  children?: CategoryDto[];
  path?: number[];
}

export interface GenericResponseListPromoCodeInfoDto {
  /** Response payload */
  payload?: PromoCodeInfoDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseCustomerProductCardDto {
  payload?: CustomerProductCardDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export type BestPriceOption = UtilRequiredKeys<ProductOptionTemplate, "type" | "title"> & {
  description: Record<string, string>;
  marketplacePrices?: MarketplacePrice[];
  /** @format date-time */
  dateUpdated?: string;
};

export interface Description {
  value?: Record<string, string>;
  definable?: boolean;
}

export interface DescriptionDto {
  description?: string;
  active?: boolean;
}

export interface GenericResponseListProductOptionTemplateDto {
  /** Response payload */
  payload?: ProductOptionTemplateDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface InstallmentStep {
  /** @format int32 */
  step?: number;
  title: Record<string, string>;
  description?: Record<string, string>;
}

export interface MarketplacePrice {
  marketplace?: string;
  /** @format int32 */
  price?: number;
}

export interface ProductOptionTemplate {
  type: "BEST_PRICE" | "UZUM_INSTALLMENT";
  active?: boolean;
  /** @format int64 */
  payment?: number;
  subTitle?: Record<string, string>;
  titleImage?: Record<string, string>;
  link?: Record<string, string>;
  descriptions?: Description[];
  title?: Record<string, string>;
}

/** Response payload */
export interface ProductOptionTemplateDto {
  /** @format int64 */
  optionId?: number;
  tabName?: string;
  title?: string;
  subTitle?: string;
  titleImage?: string;
  descriptions?: DescriptionDto[];
  link?: string;
  active?: boolean;
  price?: string;
  optionDetails?: BestPriceOption | UzumInstallmentOption;
}

export type UzumInstallmentOption = UtilRequiredKeys<ProductOptionTemplate, "type"> & {
  stepDefinitions: InstallmentStep[];
  paymentTextPattern?: Record<string, string>;
  /** @format int32 */
  period?: number;
};

export interface GenericResponseListProductsGroupDto {
  /** Response payload */
  payload?: ProductsGroupDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ActionDto {
  location?: "PRODUCT_BOTTOM_BAR";
  type?: "WISH_SALE" | "MOTIVATION" | "UZUM_BIRTHDAY_EVENT";
}

export interface TerminalResponse {
  terminalId?: string;
  password?: string;
  sbpTerminalId?: string;
  sbpPassword?: string;
}

export interface GenericResponseInlineOfferDto {
  /** Response payload */
  payload?: InlineOfferDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface InlineOfferDto {
  /** @format int64 */
  id?: number;
  title?: string;
  description?: string;
  items?: Item[];
}

export interface GenericResponseMapStringSetLong {
  /** Response payload */
  payload?: Record<string, number[]>;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ButtonDto {
  text?: string;
  textColor?: string;
  link?: string;
}

export interface GenericResponseListMinPricePromotionDto {
  /** Response payload */
  payload?: MinPricePromotionDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface MinPricePromotionDto {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  dateStart?: string;
  /** @format date-time */
  dateEnd?: string;
  name?: string;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  progressBarColor?: string;
  /** @format int64 */
  minPrice?: number;
  buttonDto?: ButtonDto;
}

export interface GenericResponseListPromoCategoryDto {
  /** Response payload */
  payload?: PromoCategoryDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PromoCategoryDto {
  /** @format int64 */
  id?: number;
  title?: string;
  subtitle?: string;
  iconLink?: string;
  deepLink?: string;
}

export interface GenericResponseMobileProductsGroup {
  payload?: MobileProductsGroup;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface BannerDto {
  /** @format int64 */
  id?: number;
  imageUrl?: string;
  bannerUrl?: string;
  text?: string;
  title?: string;
  /** @format int64 */
  categoryId?: number;
}

export interface GenericResponseListBannerDto {
  /** Response payload */
  payload?: BannerDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseOverloadNotificationDto {
  /** Response payload */
  payload?: OverloadNotificationDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface OverloadNotificationDto {
  overloadMessage?: string;
  overloaded?: boolean;
}

/** Response payload */
export interface DeliveryPointMapDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  cityId?: number;
  title?: string;
  address?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  type?: "DELIVERY_POINT" | "POSTAMAT" | "RUSSIAN_POST" | "UCELL" | "UZ_POST" | "NOT_UZUM";
}

export interface GenericResponseListDeliveryPointMapDto {
  /** Response payload */
  payload?: DeliveryPointMapDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListDateTimeDto {
  /** Response payload */
  payload?: DateTimeDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseLong {
  /**
   * Response payload
   * @format int64
   */
  payload?: number;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseTimestamp {
  /**
   * Response payload
   * @format date-time
   */
  payload?: string;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseDeliveryPointDto {
  /** Response payload */
  payload?: DeliveryPointDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface CityDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int64 */
  deliveryPrice?: number;
  /** Регион */
  region?: RegionDto;
  hasEcoDelivery?: boolean;
  deliveryPoints?: DeliveryPointDto[];
  /** @format date-time */
  keProductsDeliveryDate?: string;
  /** @format date-time */
  ecoProductsDeliveryDate?: string;
  longitude?: number;
  latitude?: number;
}

export interface GenericResponseCityDto {
  /** Response payload */
  payload?: CityDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListCityDto {
  /** Response payload */
  payload?: CityDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListCityWithActiveDeliveryPointsDto {
  /** Response payload */
  payload?: CityWithActiveDeliveryPointsDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface PaymentItemDto {
  externalItemId: string;
  title?: string;
  /** @format int64 */
  fullPrice: number;
  /** @format int64 */
  paymentPrice: number;
  /** @format int64 */
  purchasePrice: number;
  /** @format int32 */
  amount: number;
  tax?: "VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112" | "VAT_RELIEF";
}

export interface PaymentOrderDto {
  /** @format int64 */
  customerId: number;
  externalOrderId: string;
  /** @format int64 */
  promoCodeId?: number;
  /** @format int64 */
  price: number;
  phone: string;
  email: string;
  successPaymentUrl?: string;
  failPaymentUrl?: string;
  /** @format int64 */
  dshopId?: number;
  /** @format date-time */
  dateCreated: string;
  deliveryType?: "DELIVERY_POINT" | "POSTAMAT" | "COURIER" | "RUSSIAN_POST";
  /** @format int64 */
  deliveryPrice?: number;
  paymentItemDtoList: PaymentItemDto[];
}

export interface UzumBankPaymentRequest {
  paymentOrderDto: PaymentOrderDto;
  /** @deprecated */
  paymentItemDtoList: PaymentItemDto[];
  genesis?: "PAID_FROM_CHECKOUT" | "PAID_AS_POST_PAID";
  paymentOrderDtoList?: PaymentOrderDto[];
  platform: "WEB" | "DSHOP" | "IOS" | "ANDROID" | "TELEGRAM" | "UNPROCESSABLE";
  type?: "WITH_CASHBACK" | "WITHOUT_CASHBACK";
}

export interface TinkoffPaymentRequest {
  paymentOrderDto: PaymentOrderDto;
  /** @deprecated */
  paymentItemDtoList: PaymentItemDto[];
  genesis?: "PAID_FROM_CHECKOUT" | "PAID_AS_POST_PAID";
  paymentOrderDtoList?: PaymentOrderDto[];
  platform: "WEB" | "DSHOP" | "IOS" | "ANDROID" | "TELEGRAM" | "UNPROCESSABLE";
  saveCard?: boolean;
  cardId?: string;
  type?: "CARD" | "APPLE_PAY" | "GOOGLE_PAY" | "SAVED_CARD" | "INSTALLMENT" | "QR";
  installment?: boolean;
}

export interface GenericResponseTimeSlotPoolListDto {
  /** Response payload */
  payload?: TimeSlotPoolListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface TimeSlotPoolListDto {
  pools?: TimeSlotPoolDto[];
}

export interface SkuGroupSellerDto {
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  sellerId?: number;
  vat?: "VAT0" | "VAT15" | "VAT115";
  sellerType?: "PERSONAL" | "INDIVIDUAL" | "SELF_EMPLOYED" | "COMPANY";
  title?: string;
  imageLink?: string;
  orgName?: string;
  orgInn?: string;
  sellerContractNumber?: string;
  /** @format date-time */
  sellerContractDate?: string;
  /** @format int64 */
  skuGroupId?: number;
}

export interface SellerOwnerByShopsDto {
  /** @format int64 */
  ownerSellerId?: number;
  shopIds?: number[];
}

export interface SellerShopOwnershipDto {
  /** @format int64 */
  id?: number;
  currentlyOwns?: boolean;
}

export interface SellerContractDetailsDto {
  /**
   * Seller ID
   * @format int64
   * @example 12345
   */
  sellerId: number;
  /**
   * Contract number
   * @example "0417651н"
   */
  contractNumber: string;
  /**
   * INN
   * @example "498564763"
   */
  inn: string;
  /**
   * PINFL
   * @example "1234567890"
   */
  pinfl: string;
  /**
   * Type (e.g., LEGAL)
   * @example "LEGAL"
   */
  type: string;
  /**
   * Account name
   * @example "SellerAccount"
   */
  accountName: string;
  /**
   * Registration date
   * @format date-time
   */
  registrationDate: string;
}

export interface InvoiceWithSkuListDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  shopId?: number;
  shopTitle?: string;
  /** @format int64 */
  invoiceNumber?: number;
  deliveryCertificate?: string;
  dateCreated?: string;
  invoiceStatus?: InvoiceStatus;
  /** @format int64 */
  fullPrice?: number;
  /** Time slot reservation model */
  timeSlotReservation?: TimeSlotReservationDto;
  /** @format int32 */
  totalAccepted?: number;
  /** @format int32 */
  totalToStock?: number;
  /** @format int32 */
  remainingAmountOfUpdates?: number;
  /** @format date-time */
  dateAccepted?: string;
  /** @format date-time */
  expressAcceptanceDate?: string;
  stock?: StockDto;
  productForInvoiceDto?: ProductForInvoiceDto[];
  /** Информация по ЭТТН накладной */
  ettnDto?: InvoiceEttnDto;
}

export interface KafkaShop {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  sellerId?: number;
  shopTitle?: string;
  urlTitle?: string;
}

export interface GenericResponseListSellerLegalInfoDto {
  /** Response payload */
  payload?: SellerLegalInfoDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Информация о магазине */
export interface LegalInfoShopDto {
  /**
   * Идентификатор магазина
   * @format int64
   */
  id: number;
  /** Наименование магазина */
  title: string;
}

/** Информация о юридическом лице */
export interface SellerLegalInfoDto {
  /**
   * Идентификатор селлера
   * @format int64
   */
  sellerId: number;
  /** Наименование организации */
  sellerName: string;
  /**
   * Магазины юр. лица
   * @uniqueItems true
   */
  shops: LegalInfoShopDto[];
}

export interface BaseCharacteristicDto {
  definedType?: boolean;
  /** @format int64 */
  id?: number;
  name?: Record<string, string>;
}

export interface BaseCharValueDto {
  defined?: boolean;
  /** @format int64 */
  id?: number;
  value?: string;
  title?: Record<string, string>;
  skuValue?: string;
}

export interface ProductRatingBarDto {
  /** @format double */
  ratingProduct?: number;
  /** @format int32 */
  amountRatings?: number;
}

export interface ProductMinPriceInfoDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  minimalSellPrice?: number;
  /** @format int64 */
  minimalFullPrice?: number;
}

export interface ProductSellerDto {
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  sellerId?: number;
  vat?: "VAT0" | "VAT15" | "VAT115";
  sellerType?: "PERSONAL" | "INDIVIDUAL" | "SELF_EMPLOYED" | "COMPANY";
  title?: string;
  imageLink?: string;
  orgName?: string;
  orgInn?: string;
  sellerContractNumber?: string;
  /** @format date-time */
  sellerContractDate?: string;
}

export interface GenericResponseListProductClassificationTypeDictionaryDto {
  /** Response payload */
  payload?: ProductClassificationTypeDictionaryDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListProductClassificationTypeDto {
  /** Response payload */
  payload?: ProductClassificationTypeDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface UserLimitWmsDto {
  /** @format int64 */
  availableBalance?: number;
  userStatus?:
    | "HAS_OVERDUE"
    | "UNAUTHORIZED"
    | "NOT_FOUND"
    | "NEED_CARD"
    | "WAITING_VERIFICATION"
    | "VERIFIED"
    | "MY_ID_VERIFICATION"
    | "VERIFICATION_REJECTED"
    | "NEED_GUARANTEES";
  monthsLimits?: Record<string, number>;
}

export interface EmployeeInfoDto {
  /** @format int64 */
  id?: number;
  role?:
    | "ADMIN"
    | "FORMER_ADMIN"
    | "MANAGER"
    | "FINANCE_MANAGER"
    | "MARKETER"
    | "FULFILLMENT_WORKER"
    | "SUPPORT"
    | "CONTENT_MANAGER";
  /** @format date-time */
  hiredAt?: string;
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  accountId?: number;
  /** @format int64 */
  sellerId?: number;
}

export interface SellerDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  accountId?: number;
}

export interface ShopEmployeesDto {
  /** @format int64 */
  shopId?: number;
  shopOwner?: SellerDto;
  shopEmployees?: EmployeeInfoDto[];
}

export interface OrderBasicDto {
  /** @format int64 */
  id?: number;
  status?: string;
  orderItems?: OrderItemIdDto[];
}

export interface OrderItemIdDto {
  /** @format int64 */
  id?: number;
}

export interface OrderItemBasicDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  shopId?: number;
  /** @format int64 */
  productId?: number;
  /** @format int64 */
  skuId?: number;
  /** @format date-time */
  dateBought?: string;
  editable?: boolean;
}

export interface GenericResponseListFilterValueDto {
  /** Response payload */
  payload?: FilterValueDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface CustomerInfoDto {
  firstName?: string;
  lastName?: string;
}

export interface CustomerContactsInfoDto {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  sex?: string;
  phoneNumber?: string;
  /** @format date */
  birthDate?: string;
  email?: string;
}

export interface GenericResponseSellerFbsSkuStockUpdateDto {
  payload?: SellerFbsSkuStockUpdateDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListLong {
  /** Response payload */
  payload?: number[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseGetCategoryResp {
  payload?: GetCategoryResp;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListPepsiGiftCompactDto {
  /** Response payload */
  payload?: PepsiGiftCompactDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface PepsiGiftCompactDto {
  giftType?:
    | "PEPSI_MARKET_PROMO_1K"
    | "PEPSI_MARKET_PROMO_10K"
    | "PEPSI_MARKET_PROMO_1M"
    | "PEPSI_MARKET_PROMO_500K"
    | "PEPSI_MARKET_PROMO_100K"
    | "PEPSI_MARKET_PROMO_50K"
    | "PEPSI_WIN_PRODUCT";
  code?: string;
  link?: string;
  title?: string;
  image?: string;
  status?: "NOT_ACTIVATED" | "ACTIVE" | "AVAILABLE_SOON" | "USED" | "EXPIRED" | "FAILED";
  source?: "PAYMART_MFO" | "PEPSI";
  /** @format date-time */
  validUntil?: string;
  /** @format date-time */
  dateActivated?: string;
  canceledReason?: string;
}

export interface GenericResponseGiftCountDto {
  /** Response payload */
  payload?: GiftCountDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface GiftCountDto {
  /** @format int64 */
  amountAvailable?: number;
}

export interface ExternalBannerDto {
  /** @format int64 */
  id?: number;
  subType?: "MAIN" | "PRODUCT" | "CART" | "FAVORITES" | "PROFILE" | "DEFAULT" | "SUCCESS_SCREEN_BANK" | "PAYMART";
  bannerUrl?: string;
  imageUrl?: string;
  text?: string;
  title?: string;
}

/** Response payload */
export interface ExternalBannerListDto {
  banners?: ExternalBannerDto[];
}

export interface GenericResponseExternalBannerListDto {
  /** Response payload */
  payload?: ExternalBannerListDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

/** Response payload */
export interface CheckPromoCodeDto {
  valid?: boolean;
}

export interface GenericResponseCheckPromoCodeDto {
  /** Response payload */
  payload?: CheckPromoCodeDto;
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface GenericResponseListPromoCodeDto {
  /** Response payload */
  payload?: PromoCodeDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface ProductShelfDto {
  /** @format int64 */
  id?: number;
  title?: string;
  isActive?: boolean;
  productIds?: number[];
}

export interface GenericResponseListPermanentLinkDto {
  /** Response payload */
  payload?: PermanentLinkDto[];
  errors?: ApiErrorResponse[];
  /** @format date-time */
  timestamp?: string;
  trace?: string;
  /** @example "null" */
  error?: string;
}

export interface AbstractAccountDetailsDto {
  username?: string;
  phone?: string;
  email?: string;
  fullName?: string;
  /** @format int64 */
  accountId?: number;
  picUrl?: string;
  role?: "ROLE_CUSTOMER" | "ROLE_SELLER" | "ROLE_SUPPORT" | "ROLE_EMPLOYEE";
}

export interface AccountDetailsDto {
  commonDetails?: CommonDetailsDto;
  rolesDetails?: Record<string, CustomerAccountDetailsDto | SellerAccountDetailsDto | ShopEmployeeAccountDetailsDto>;
}

export interface CommonDetailsDto {
  username?: string;
  phone?: string;
  email?: string;
  fullName?: string;
  /** @format int64 */
  accountId?: number;
  picUrl?: string;
}

export type CustomerAccountDetailsDto = AbstractAccountDetailsDto;

export type SellerAccountDetailsDto = AbstractAccountDetailsDto & {
  shops?: ShopDetailsDto[];
};

export interface ShopDetailsDto {
  /** @uniqueItems true */
  employees?: ShopEmployeeDto[];
  /** @format int64 */
  id?: number;
  name?: string;
  imgUrl?: string;
  url?: string;
}

export type ShopEmployeeAccountDetailsDto = AbstractAccountDetailsDto & {
  shops?: ShopDto[];
};

export interface ShopEmployeeDto {
  name?: string;
  /** @format int64 */
  accountId?: number;
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
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://api.dev.cluster.daymarket.uz/api",
    });
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
 * @title Service composer API
 * @baseUrl http://api-service/api
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  user = {
    /**
     * No description
     *
     * @tags customer-controller
     * @name GetContacts
     * @request GET:/user/contacts
     * @secure
     * @response `200` `GenericResponseCustomerContactsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getContacts: (
      query?: {
        /** @format int64 */
        cityId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCustomerContactsDto, GenericResponseObject>({
        path: `/user/contacts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name PartlyUpdateContacts
     * @request PUT:/user/contacts
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    partlyUpdateContacts: (data: UpdateCustomerContactsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/contacts`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name SetContacts
     * @request POST:/user/contacts
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    setContacts: (data: CustomerContactsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name InitializePayment
     * @request POST:/user/payment
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    initializePayment: (data: CreateTinkoffPaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-checkout-payment-controller
     * @name MerchantCallbackCallbackMerhcantPost
     * @request POST:/user/payment/uzumcheckout/webhook/perform
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    merchantCallbackCallbackMerhcantPost: (data: string, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/user/payment/uzumcheckout/webhook/perform`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-checkout-payment-controller
     * @name CreateIntention
     * @request POST:/user/payment/uzumcheckout/intention
     * @secure
     * @response `200` `GenericResponseRegisterIntentionResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createIntention: (data: UzumCheckoutCreateIntentionDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseRegisterIntentionResponse, GenericResponseObject>({
        path: `/user/payment/uzumcheckout/intention`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-checkout-payment-controller
     * @name CreateUzumCheckoutPayment
     * @request POST:/user/payment/uzumcheckout/create
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createUzumCheckoutPayment: (data: UzumCheckoutCreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/uzumcheckout/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Returns paymant dto with info about id, amount and url
     *
     * @tags uzum-card-controller
     * @name CreateUzumCardPayment
     * @summary POST method to create uzum card payment
     * @request POST:/user/payment/uzumcard/create
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponsePaymentDto` Unauthorized
     * @response `500` `GenericResponsePaymentDto` Internal error
     */
    createUzumCardPayment: (data: UzumBankCreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponsePaymentDto>({
        path: `/user/payment/uzumcard/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-bank-controller
     * @name NotifyPayment
     * @request POST:/user/payment/uzumbank/webhook/perform
     * @deprecated
     * @secure
     * @response `200` `WebhookOrderResult` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    notifyPayment: (data: WebhookOrderRqDto, params: RequestParams = {}) =>
      this.http.request<WebhookOrderResult, GenericResponseObject>({
        path: `/user/payment/uzumbank/webhook/perform`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get status by transaction id (from bank)
     *
     * @tags UzumBankController Ver.2
     * @name GetStatus
     * @summary POST method to get status of uzum bank / card payment
     * @request POST:/user/payment/uzumbank/v2/status
     * @secure
     * @response `200` `UzumBankStatusResponse` Success
     * @response `400` `GenericResponseObject` Merchant api logic error
     * @response `500` `UzumBankStatusResponse` Internal error
     */
    getStatus: (data: UzumBankStatusRequest, params: RequestParams = {}) =>
      this.http.request<UzumBankStatusResponse, GenericResponseObject | UzumBankStatusResponse>({
        path: `/user/payment/uzumbank/v2/status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get status by transaction id (from bank)
     *
     * @tags UzumBankController Ver.2
     * @name ReversePayment
     * @summary POST method to get status of uzum bank / card payment
     * @request POST:/user/payment/uzumbank/v2/reverse
     * @secure
     * @response `200` `UzumBankReverseResponse` Success
     * @response `400` `GenericResponseObject` Merchant api logic error
     * @response `500` `UzumBankReverseResponse` Internal error
     */
    reversePayment: (data: UzumBankReverseRequest, params: RequestParams = {}) =>
      this.http.request<UzumBankReverseResponse, GenericResponseObject | UzumBankReverseResponse>({
        path: `/user/payment/uzumbank/v2/reverse`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Save info about uzum bank payment
     *
     * @tags UzumBankController Ver.2
     * @name SaveTransaction
     * @summary POST method for create uzum bank / card payment
     * @request POST:/user/payment/uzumbank/v2/create
     * @secure
     * @response `200` `UzumBankCreateResponse` Success
     * @response `400` `GenericResponseObject` Merchant api logic error
     * @response `500` `UzumBankCreateResponse` Internal error
     */
    saveTransaction: (data: UzumBankCreateRequest, params: RequestParams = {}) =>
      this.http.request<UzumBankCreateResponse, GenericResponseObject | UzumBankCreateResponse>({
        path: `/user/payment/uzumbank/v2/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Confirm payment (order paid) + check paymentSource
     *
     * @tags UzumBankController Ver.2
     * @name ConfirmPayment
     * @summary POST method to confirm uzum bank / card payment
     * @request POST:/user/payment/uzumbank/v2/confirm
     * @secure
     * @response `200` `UzumBankConfirmResponse` Success
     * @response `400` `GenericResponseObject` Merchant api logic error
     * @response `500` `UzumBankConfirmResponse` Internal error
     */
    confirmPayment: (data: UzumBankConfirmRequest, params: RequestParams = {}) =>
      this.http.request<UzumBankConfirmResponse, GenericResponseObject | UzumBankConfirmResponse>({
        path: `/user/payment/uzumbank/v2/confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Check order exists and can be paid
     *
     * @tags UzumBankController Ver.2
     * @name CheckOrderCanBePaid
     * @summary Post method to check creating payment
     * @request POST:/user/payment/uzumbank/v2/check
     * @secure
     * @response `200` `UzumBankBaseResponse` Success
     * @response `400` `GenericResponseObject` Merchant api logic error
     * @response `500` `UzumBankBaseResponse` Internal error
     */
    checkOrderCanBePaid: (data: UzumBankBaseRequest, params: RequestParams = {}) =>
      this.http.request<UzumBankBaseResponse, GenericResponseObject | UzumBankBaseResponse>({
        path: `/user/payment/uzumbank/v2/check`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-bank-controller
     * @name GetOrderInfo
     * @request POST:/user/payment/uzumbank/order/info
     * @deprecated
     * @secure
     * @response `200` `UzumBankOrderInfoResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderInfo: (data: OrderInfoRq, params: RequestParams = {}) =>
      this.http.request<UzumBankOrderInfoResponse, GenericResponseObject>({
        path: `/user/payment/uzumbank/order/info`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags uzum-bank-controller
     * @name CreateUzumBankPayment
     * @request POST:/user/payment/uzumbank/create
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createUzumBankPayment: (data: UzumBankCreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/uzumbank/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags post-paid-payment-controller
     * @name CreatePostPaidPayment
     * @request POST:/user/payment/post-paid
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createPostPaidPayment: (data: CreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/post-paid`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Initialize order payment
     *
     * @tags paymart-mfo-controller
     * @name InitializePaymartMfoPayment
     * @summary POST method to initialize payment
     * @request POST:/user/payment/paymart/mfo
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    initializePaymartMfoPayment: (data: CreateMfoPaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/paymart/mfo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Save data
     *
     * @tags paymart-mfo-controller
     * @name WebhookLimitUpdate
     * @summary POST method to send webhook with change limit
     * @request POST:/user/payment/paymart/mfo/limit/webhook
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    webhookLimitUpdate: (data: WebhookLimitDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/user/payment/paymart/mfo/limit/webhook`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Save changes of contract - status = CONFIRMED
     *
     * @tags paymart-mfo-controller
     * @name WebhookStatusUpdate
     * @summary POST method to send webhook with status changes
     * @request POST:/user/payment/paymart/mfo/contract/webhook
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    webhookStatusUpdate: (data: WebhookContractStatusDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/user/payment/paymart/mfo/contract/webhook`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Check status of contract by payment
     *
     * @tags paymart-mfo-controller
     * @name CheckStatus
     * @summary POST method to check status
     * @request POST:/user/payment/paymart/mfo/contract/check-status
     * @secure
     * @response `200` `GenericResponsePaymartMfoCheckStatusRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkStatus: (data: CheckStatusRequestDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymartMfoCheckStatusRs, GenericResponseObject>({
        path: `/user/payment/paymart/mfo/contract/check-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags my-uzcard-controller
     * @name NotifyPayment1
     * @request POST:/user/payment/myuzcard/webhook/perform
     * @secure
     * @response `200` `WebhookOrderResult` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    notifyPayment1: (data: WebhookOrderRqDto, params: RequestParams = {}) =>
      this.http.request<WebhookOrderResult, GenericResponseObject>({
        path: `/user/payment/myuzcard/webhook/perform`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags my-uzcard-controller
     * @name CreateMyUzcardPayment
     * @request POST:/user/payment/myuzcard/create
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createMyUzcardPayment: (data: MyUzcardCreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/myuzcard/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags kapital-bank-payment-controller
     * @name SuccessPayment
     * @request POST:/user/payment/kapital-bank/success
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    successPayment: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/kapital-bank/success`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags kapital-bank-payment-controller
     * @name FailurePayment
     * @request POST:/user/payment/kapital-bank/failure
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    failurePayment: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/kapital-bank/failure`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags dolyame-payment-controller
     * @name InitializePayment1
     * @request POST:/user/payment/dolyame
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    initializePayment1: (data: CreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/dolyame`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags click-controller
     * @name InitializePayment2
     * @request POST:/user/payment/click
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    initializePayment2: (data: ClickCreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/payment/click`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name GetOrderById
     * @request GET:/user/order
     * @secure
     * @response `200` `GenericResponseOrderDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderById: (
      query: {
        /** @format int64 */
        orderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseOrderDto, GenericResponseObject>({
        path: `/user/order`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name CreateOrder1
     * @request POST:/user/order
     * @secure
     * @response `200` `GenericResponseOrderResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOrder1: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseOrderResponseDto, GenericResponseObject>({
        path: `/user/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name HideOrder
     * @request POST:/user/order/{orderId}/hide
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    hideOrder: (orderId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/order/${orderId}/hide`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name AckPush
     * @summary Acknowledgement that push notification was received
     * @request POST:/user/order/push/ack
     * @deprecated
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    ackPush: (
      query: {
        /** @format int64 */
        notificationId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/order/push/ack`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name CancelOrder
     * @request POST:/user/order/cancel
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelOrder: (data: CancelOrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/order/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-order-controller
     * @name PayOrderIntention
     * @request POST:/user/order/advice/{orderId}/pay
     * @secure
     * @response `200` `GenericResponsePayOrderAdviceDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    payOrderIntention: (orderId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponsePayOrderAdviceDto, GenericResponseObject>({
        path: `/user/order/advice/${orderId}/pay`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-order-controller
     * @name CancelOrderAdvice
     * @request POST:/user/order/advice/{orderId}/cancel
     * @secure
     * @response `200` `GenericResponseCancelOrderAdviceDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelOrderAdvice: (orderId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseCancelOrderAdviceDto, GenericResponseObject>({
        path: `/user/order/advice/${orderId}/cancel`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name RemoveCard
     * @request POST:/user/card/remove
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeCard: (
      query: {
        cardId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/user/card/remove`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags group-buy-controller
     * @name CreateOrder2
     * @request POST:/user/bot-order
     * @secure
     * @response `200` `GenericResponseOrderResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOrder2: (data: GroupBuyCreateOrderRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseOrderResponseDto, GenericResponseObject>({
        path: `/user/bot-order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags group-buy-controller
     * @name ConfirmPayment1
     * @request POST:/user/bot-order/payment-confirm
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    confirmPayment1: (data: CreatePaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/user/bot-order/payment-confirm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags group-buy-controller
     * @name CancelOrder1
     * @request POST:/user/bot-order/cancel
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelOrder1: (data: OrderIdDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/user/bot-order/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name IsCustomerPermittedToCheckout
     * @summary Check that user can advance to the checkout page from cart bypassing all restrictions
     * @request GET:/user/permittedToCheckout
     * @secure
     * @response `200` `GenericResponsePermissionToCheckoutDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isCustomerPermittedToCheckout: (params: RequestParams = {}) =>
      this.http.request<GenericResponsePermissionToCheckoutDto, GenericResponseObject>({
        path: `/user/permittedToCheckout`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sbp-payment-controller
     * @name GetPaymentState
     * @request GET:/user/payment/sbp/{paymentId}/state
     * @secure
     * @response `200` `GenericResponsePaymentStateDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPaymentState: (paymentId: string, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentStateDto, GenericResponseObject>({
        path: `/user/payment/sbp/${paymentId}/state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name GetOrders
     * @request GET:/user/orders
     * @secure
     * @response `200` `GenericResponseListOrderDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrders: (
      query?: {
        /** @default "all" */
        filter?: string;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListOrderDto, GenericResponseObject>({
        path: `/user/orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name GetNumberOfOrders
     * @request GET:/user/ordersAmount
     * @secure
     * @response `200` `GenericResponseOrdersAmountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getNumberOfOrders: (params: RequestParams = {}) =>
      this.http.request<GenericResponseOrdersAmountDto, GenericResponseObject>({
        path: `/user/ordersAmount`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-receipt-controller
     * @name GetOrderReceipts
     * @summary Return order receipt by orderId
     * @request GET:/user/order/{orderId}/receipt
     * @secure
     * @response `200` `GenericResponseListOfdReceipDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderReceipts: (orderId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseListOfdReceipDto, GenericResponseObject>({
        path: `/user/order/${orderId}/receipt`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * No description
 *
 * @tags customer-controller
 * @name GetOrderItemsWithoutFeedback
 * @summary Return orderItems without feedback for certain customer
Only orders in past 30 days are used
 * @request GET:/user/order/unrated
 * @secure
 * @response `200` `GenericResponseListOrderItemDto` OK
 * @response `400` `GenericResponseObject` Bad Request
 */
    getOrderItemsWithoutFeedback: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListOrderItemDto, GenericResponseObject>({
        path: `/user/order/unrated`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name GetNotifications
     * @request GET:/user/notifications
     * @secure
     * @response `200` `GenericResponseListPushNotificationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getNotifications: (
      query?: {
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListPushNotificationDto, GenericResponseObject>({
        path: `/user/notifications`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name GetName
     * @request GET:/user/name
     * @secure
     * @response `200` `GenericResponseCustomerNameDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getName: (params: RequestParams = {}) =>
      this.http.request<GenericResponseCustomerNameDto, GenericResponseObject>({
        path: `/user/name`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-controller
     * @name RequestedFeedbacks
     * @summary Get an information about requested feedbacks
     * @request GET:/user/feedback/requested
     * @secure
     * @response `200` `GenericResponseRequestedFeedbacksDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    requestedFeedbacks: (params: RequestParams = {}) =>
      this.http.request<GenericResponseRequestedFeedbacksDto, GenericResponseObject>({
        path: `/user/feedback/requested`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  seller = {
    /**
     * No description
     *
     * @tags seller-storage-controller
     * @name GetAllEntries
     * @request GET:/seller/storage
     * @secure
     * @response `200` `(StorageEntryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllEntries: (params: RequestParams = {}) =>
      this.http.request<StorageEntryDto[], GenericResponseObject>({
        path: `/seller/storage`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-storage-controller
     * @name PutEntry
     * @request PUT:/seller/storage
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    putEntry: (data: StorageEntryPutDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/storage`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name TransferShop
     * @summary Auth: PARTNER
     * @request PUT:/seller/shop/{shopId}/transfer
     * @secure
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden - does not have required role (seller) and authority (partner)
     * @response `404` `void` Shop transfer code not found
     * @response `406` `void` Invalid verification code
     * @response `451` `void` Unavailable for legal reasons
     */
    transferShop: (shopId: number, data: TransferShopToSellerDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | void>({
        path: `/seller/shop/${shopId}/transfer`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name SetExpired
     * @summary Auth: PROMO_CODE_DELETE
     * @request PUT:/seller/shop/{shopId}/promocode/{id}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    setExpired: (shopId: number, id: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/promocode/${id}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name ChangeRole
     * @summary Change organization employee role, Auth: EMPLOYEE_UPDATE
     * @request PUT:/seller/organizations/{shopId}/changeRole
     * @secure
     * @response `200` `EmployeeDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `EmployeeDto` Unauthorized
     * @response `404` `EmployeeDto` Code: organization-001, Organization with present id not exists
     */
    changeRole: (shopId: number, data: ChangeEmployerRole, params: RequestParams = {}) =>
      this.http.request<EmployeeDto, GenericResponseObject | EmployeeDto>({
        path: `/seller/organizations/${shopId}/changeRole`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-yandex-controller
     * @name AddAgency
     * @request POST:/seller/yandex/direct/agency/add
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addAgency: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/yandex/direct/agency/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name RequestWithdraw
     * @request POST:/seller/withdraws
     * @secure
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `WithdrawTicketDto` Unauthorized
     * @response `403` `WithdrawTicketDto` Forbidden - does not have required role (seller) or authorities (verified)
     * @response `404` `WithdrawTicketDto` Provided settlementAccount does not exist for this seller
     */
    requestWithdraw: (data: CreateWithdrawDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | WithdrawTicketDto>({
        path: `/seller/withdraws`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name Cancel
     * @request POST:/seller/withdraws/{withdrawId}/cancel
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancel: (withdrawId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/withdraws/${withdrawId}/cancel`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-ticket-controller
     * @name HideTicket
     * @request POST:/seller/withdraws/tickets/{withdrawId}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    hideTicket: (withdrawId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/withdraws/tickets/${withdrawId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-service-subscription-controller
     * @name Unsubscribe
     * @summary Unsubscribe
     * @request POST:/seller/subscription/{subscriptionId}/unsubscribe
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `void` subscription-002, Active seller subscription not found
     */
    unsubscribe: (subscriptionId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/seller/subscription/${subscriptionId}/unsubscribe`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-service-subscription-controller
     * @name Subscribe
     * @summary Subscribe
     * @request POST:/seller/subscription/{subscriptionId}/subscribe
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `403` `void` subscription-003, Subscription is not available for seller
     * @response `404` `void` subscription-001, Subscription not found
     */
    subscribe: (subscriptionId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/seller/subscription/${subscriptionId}/subscribe`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name CompleteVolumeDiscount
     * @summary Auth: VOLUME_DISCOUNT_DELETE
     * @request POST:/seller/shop/{shopId}/volume-discount/{volumeDiscountId}/complete
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    completeVolumeDiscount: (shopId: number, volumeDiscountId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/${volumeDiscountId}/complete`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name EditVolumeDiscount
     * @summary Auth: VOLUME_DISCOUNT_CREATE
     * @request POST:/seller/shop/{shopId}/volume-discount/edit
     * @secure
     * @response `200` `VolumeDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    editVolumeDiscount: (shopId: number, data: VolumeDiscountEditDto, params: RequestParams = {}) =>
      this.http.request<VolumeDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name CreateVolumeDiscount
     * @summary Auth: VOLUME_DISCOUNT_CREATE
     * @request POST:/seller/shop/{shopId}/volume-discount/create
     * @secure
     * @response `200` `VolumeDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createVolumeDiscount: (shopId: number, data: VolumeDiscountCreateDto, params: RequestParams = {}) =>
      this.http.request<VolumeDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name UpdateTimeSlot
     * @summary Auth: INVOICE_UPDATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/{invoiceId}/time-slot
     * @secure
     * @response `201` `InvoiceInListDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateTimeSlot: (shopId: number, invoiceId: number, data: UpdateInvoiceTimeSlotDto, params: RequestParams = {}) =>
      this.http.request<InvoiceInListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/${invoiceId}/time-slot`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update invoice
     *
     * @tags v2-seller-invoice-controller-updateInvoice
     * @name UpdateInvoice
     * @summary updateInvoice, Auth: INVOICE_UPDATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/update
     * @secure
     * @response `200` `InvoiceInListDto` Success
     * @response `400` `GenericResponse` Возможные коды ошибок:<br> INVOICE_ETTN_UNSUPPORTED_STATUS_FOR_UPDATE_006 Запрещенный статус для обновления: READY, ACCEPTANCE_IN_PROGRESS<br> INVOICE_ETTN_NOT_EDITABLE_007 ЭТТН уже принят и проверен<br> INVOICE_ETTN_ALREADY_EXISTS_008 Эттн занят
     */
    updateInvoice: (shopId: number, data: UpdateInvoiceDto, params: RequestParams = {}) =>
      this.http.request<InvoiceInListDto, GenericResponse>({
        path: `/seller/shop/${shopId}/v2/invoice/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetTimeSlots
     * @summary Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/time-slot
     * @secure
     * @response `200` `GenericResponseTimeSlotRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTimeSlots: (shopId: number, data: TimeSlotRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/time-slot`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name UpdateTimeSlot1
     * @summary Auth: INVOICE_UPDATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/time-slot/set
     * @secure
     * @response `200` `GenericResponseListInvoiceInListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateTimeSlot1: (shopId: number, data: InvoiceTimeslotsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseListInvoiceInListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/time-slot/set`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetTimeSlots1
     * @summary Auth: INVOICE_READ
     * @request POST:/seller/shop/{shopId}/v2/invoice/time-slot/get
     * @secure
     * @response `200` `GenericResponseTimeSlotRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTimeSlots1: (shopId: number, data: InvoiceTimeslotsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/time-slot/get`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetStocksForInvoices
     * @summary Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/stocks
     * @secure
     * @response `200` `GenericResponseStocksRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getStocksForInvoices: (shopId: number, data: InvoiceListDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseStocksRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/stocks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetStocksForSkus
     * @summary Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/sku/stocks
     * @secure
     * @response `200` `GenericResponseStocksRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getStocksForSkus: (shopId: number, data: GetStocksDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseStocksRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/sku/stocks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name SetDeliveryCertificate
     * @summary Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/delivery-certificate
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    setDeliveryCertificate: (shopId: number, data: DeliveryCertificateDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/delivery-certificate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name CreateInvoice
     * @summary Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/create
     * @secure
     * @response `201` `InvoiceInListDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createInvoice: (shopId: number, data: CreateInvoiceDto, params: RequestParams = {}) =>
      this.http.request<InvoiceInListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This method consumes file in the xlsx/csv formats for creating invoice. Note that only one sheet'll be used for creating invoice.
     *
     * @tags v-2-seller-invoice-controller
     * @name CreateInvoiceFromFile
     * @summary Create invoice from file., Auth: INVOICE_CREATE
     * @request POST:/seller/shop/{shopId}/v2/invoice/create-from-file
     * @secure
     * @response `201` `InvoiceInListDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createInvoiceFromFile: (
      shopId: number,
      data: {
        /**
         * xlsx/csv with the following columns
         * @format binary
         */
        file: File;
      },
      query?: {
        /**
         * yyyy-MM-dd hh:mm:ss
         * @format date-time
         */
        timeFrom?: string;
        deliveryCertificate?: string;
        /** @format int64 */
        stockId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceInListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/create-from-file`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-import-controller
     * @name UpdateSkuList
     * @request POST:/seller/shop/{shopId}/sku/upload
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateSkuList: (
      shopId: number,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/sku/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Returns sum of verification code digits
     *
     * @tags seller-shop-controller
     * @name SendTransferShopCode
     * @summary POST method to send phone verification code on transfer shop, Auth: PARTNER
     * @request POST:/seller/shop/{shopId}/sendTransferShopCode
     * @secure
     * @response `200` `VerificationSumDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `VerificationSumDto` Unauthorized
     * @response `403` `VerificationSumDto` Forbidden - does not have required role (seller)
     * @response `500` `VerificationSumDto` Could not send sms message
     */
    sendTransferShopCode: (shopId: number, params: RequestParams = {}) =>
      this.http.request<VerificationSumDto, GenericResponseObject | VerificationSumDto>({
        path: `/seller/shop/${shopId}/sendTransferShopCode`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name GetSellerReturns
     * @summary Auth: SELLER_RETURN_READ
     * @request GET:/seller/shop/{shopId}/return
     * @secure
     * @response `200` `GenericResponseListSellerReturnLiteDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerReturns: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSellerReturnLiteDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name CreateSellerReturn
     * @request POST:/seller/shop/{shopId}/return
     * @secure
     * @response `200` `GenericResponseSellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createSellerReturn: (shopId: number, data: CreateSellerReturnDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name UpdateTimeSlot2
     * @request POST:/seller/shop/{shopId}/return/{returnId}/time-slot
     * @secure
     * @response `200` `SellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateTimeSlot2: (
      shopId: number,
      returnId: number,
      data: UpdateTimeSlotSellerReturnDto,
      params: RequestParams = {},
    ) =>
      this.http.request<SellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/${returnId}/time-slot`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name CancelSellerReturn
     * @request POST:/seller/shop/{shopId}/return/{returnId}/cancel
     * @secure
     * @response `200` `GenericResponseSellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelSellerReturn: (returnId: number, shopId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/${returnId}/cancel`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name UpdateReturn
     * @request POST:/seller/shop/{shopId}/return/update
     * @secure
     * @response `200` `SellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateReturn: (shopId: number, data: UpdateSellerReturnDto, params: RequestParams = {}) =>
      this.http.request<SellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name GetTimeSlots2
     * @summary Auth: SELLER_RETURN_READ
     * @request POST:/seller/shop/{shopId}/return/time-slot
     * @secure
     * @response `200` `GenericResponseTimeSlotRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTimeSlots2: (shopId: number, data: TimeSlotRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/time-slot`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name SetTimeSlot
     * @request POST:/seller/shop/{shopId}/return/time-slot/set
     * @secure
     * @response `200` `GenericResponseListSellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    setTimeSlot: (shopId: number, data: SellerReturnTimeSlotsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseListSellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/time-slot/set`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name GetTimeSlots3
     * @request POST:/seller/shop/{shopId}/return/time-slot/get
     * @secure
     * @response `200` `GenericResponseTimeSlotRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTimeSlots3: (shopId: number, data: SellerReturnTimeSlotsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/time-slot/get`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetPromoCodesList
     * @summary Auth: PROMO_CODE_READ
     * @request GET:/seller/shop/{shopId}/promocode
     * @secure
     * @response `200` `AllPromoCodeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPromoCodesList: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 10
         */
        size?: number;
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
        /** @default "status" */
        sortBy?: string;
        /** @default "asc" */
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllPromoCodeDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/promocode`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name Create
     * @summary Auth: PROMO_CODE_CREATE
     * @request POST:/seller/shop/{shopId}/promocode
     * @secure
     * @response `200` `PromoCodeDto` Success
     * @response `400` `GenericResponseObject` Code: promocode-006; Promo code length not in range [8;14]
     * @response `500` `PromoCodeDto` Code: promocode-002; Failed to create a promo code for a fixed number of attempts
     */
    create: (shopId: number, data: CreateSellerPromoCodeRq, params: RequestParams = {}) =>
      this.http.request<PromoCodeDto, GenericResponseObject | PromoCodeDto>({
        path: `/seller/shop/${shopId}/promocode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GenerateCode
     * @summary Auth: PROMO_CODE_CREATE
     * @request POST:/seller/shop/{shopId}/promocode/generate/code
     * @secure
     * @response `200` `GeneratePromoCodeCodeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generateCode: (shopId: number, data: GeneratePromocodeCodeRq, params: RequestParams = {}) =>
      this.http.request<GeneratePromoCodeCodeDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/promocode/generate/code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name IsExistsWithCode
     * @summary Auth: PROMO_CODE_CREATE
     * @request POST:/seller/shop/{shopId}/promocode/exists
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isExistsWithCode: (shopId: number, data: PromoCodeExistsRq, params: RequestParams = {}) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/promocode/exists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name Create1
     * @summary Auth: PROMO_CODE_CREATE
     * @request POST:/seller/shop/{shopId}/promocode/chat
     * @secure
     * @response `200` `PromoCodeDto` Success
     * @response `400` `GenericResponseObject` Code: promocode-006; Promo code length not in range [7;14]
     * @response `500` `PromoCodeDto` Code: promocode-002; Failed to create a promo code for a fixed number of attempts
     */
    create1: (shopId: number, data: CreateSellerPromocodeFromChatRq, params: RequestParams = {}) =>
      this.http.request<PromoCodeDto, GenericResponseObject | PromoCodeDto>({
        path: `/seller/shop/${shopId}/promocode/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller
     * @name GetProductBarcodesReport
     * @summary POST method to request printing product barcodes
     * @request POST:/seller/shop/{shopId}/products/{productId}/barcodes/print
     * @deprecated
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductBarcodesReport: (
      shopId: number,
      productId: number,
      query: {
        sellerInfo: SellerInfo;
      },
      data: LabelsDto,
      params: RequestParams = {},
    ) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/products/${productId}/barcodes/print`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller
     * @name GenerateProductQr
     * @request POST:/seller/shop/{shopId}/products/v3/barcodes/print
     * @secure
     * @response `200` `File` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generateProductQr: (shopId: number, data: GetProductBarcodesRq, params: RequestParams = {}) =>
      this.http.request<File, GenericResponseObject>({
        path: `/seller/shop/${shopId}/products/v3/barcodes/print`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller
     * @name GenerateProductBarcodes
     * @request POST:/seller/shop/{shopId}/products/v2/barcodes/print
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generateProductBarcodes: (shopId: number, data: GetProductBarcodesRq, params: RequestParams = {}) =>
      this.http.request<string, GenericResponseObject>({
        path: `/seller/shop/${shopId}/products/v2/barcodes/print`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller
     * @name GetProductBarcodesReport1
     * @request POST:/seller/shop/{shopId}/products/barcodes/print
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductBarcodesReport1: (shopId: number, data: GetProductBarcodesRq, params: RequestParams = {}) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/products/barcodes/print`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetNewSkuCommission
     * @summary Getting product commission by price, Auth: PRODUCT_READ
     * @request POST:/seller/shop/{shopId}/product/{productId}/commission
     * @secure
     * @response `200` `GenericResponseProductCommissionDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getNewSkuCommission: (shopId: number, productId: number, data: ProductPriceDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductCommissionDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/${productId}/commission`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CancelCofinanceDiscount
     * @summary Change sku cofinance participance, Auth: PRODUCT_UPDATE
     * @request POST:/seller/shop/{shopId}/product/{productId}/cancelDiscount
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelCofinanceDiscount: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/${productId}/cancelDiscount`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name ArchiveProduct
     * @summary Add product to archive, Auth: PRODUCT_DELETE
     * @request POST:/seller/shop/{shopId}/product/{productId}/archive
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    archiveProduct: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/${productId}/archive`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name RestoreFromArchive
     * @summary Restoring product from archive, Auth: PRODUCT_DELETE
     * @request POST:/seller/shop/{shopId}/product/{productId}/archive/restore
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    restoreFromArchive: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/${productId}/archive/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name TransferProduct
     * @summary Transfer product, Auth: TRANSFER_PRODUCT_READ
     * @request POST:/seller/shop/{shopId}/product/transfer-product
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    transferProduct: (shopId: number, data: ProductTransferDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/transfer-product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name ArchiveSku
     * @summary Add sku to archive, Auth: SKU_DELETE
     * @request POST:/seller/shop/{shopId}/product/sku/{skuId}/archive
     * @secure
     * @response `200` `NewSkuDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    archiveSku: (shopId: number, skuId: number, params: RequestParams = {}) =>
      this.http.request<NewSkuDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/sku/${skuId}/archive`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name RecoverSkuFromArchive
     * @summary Restoring sku from archive, Auth: SKU_DELETE
     * @request POST:/seller/shop/{shopId}/product/sku/{skuId}/archive/restore
     * @secure
     * @response `200` `NewSkuDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    recoverSkuFromArchive: (shopId: number, skuId: number, params: RequestParams = {}) =>
      this.http.request<NewSkuDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/sku/${skuId}/archive/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description SKU should be created on front part of application.<br>SKU are created by this pattern: SHOPSKU + PRODUCTSKU + ORDER1CHARVALUE + ... + ORDERNCHARVALUE<br>Also product can have zero characteristics. In this case only one SHOPSKU + PRODUCTSKU will be the SKU
     *
     * @tags seller-product-controller
     * @name SendSkuData
     * @summary POST method to send sku data for a product, which was created on previous step, Auth: SKU_UPDATE
     * @request POST:/seller/shop/{shopId}/product/sendSkuData
     * @secure
     * @response `200` `void` Ok
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` ikpu-001: not allowed ikpu for category
     */
    sendSkuData: (shopId: number, data: SkuDataDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/sendSkuData`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetLabelPrint
     * @summary POST method to request labels print, Auth: PRINTING_READ
     * @request POST:/seller/shop/{shopId}/product/printLabels
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getLabelPrint: (shopId: string, data: LabelsDto, params: RequestParams = {}) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/printLabels`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CanEditProduct
     * @summary Returns true if user can edit product and false if can not, Auth: PRODUCT_UPDATE || SKU_UPDATE
     * @request POST:/seller/shop/{shopId}/product/editable
     * @deprecated
     * @secure
     * @response `200` `EditableDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    canEditProduct: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<EditableDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/editable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Image parameters are base64 encoded ("productImagesx" and "colorImage" in colorImages object.<br>Images should be in the following format <b>"filename\fileExtension,base64EncodedString"</b><br>The response contains the data which is needed to fill the next page form
     *
     * @tags seller-product-controller
     * @name EditProduct
     * @summary POST method to edit a product, Auth: PRODUCT_UPDATE
     * @request POST:/seller/shop/{shopId}/product/editProduct
     * @secure
     * @response `201` `ProductDescriptionResponseDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    editProduct: (shopId: number, data: ProductEditDto, params: RequestParams = {}) =>
      this.http.request<ProductDescriptionResponseDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/editProduct`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name DeleteProduct
     * @summary POST method to delete a product, Auth: PRODUCT_DELETE
     * @request POST:/seller/shop/{shopId}/product/deleteProduct
     * @secure
     * @response `201` `void` Product deleted
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden - does not have required role or authorities
     * @response `404` `void` Product not found
     * @response `422` `void` Not deletable - has active sku quantity
     */
    deleteProduct: (shopId: number, data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/seller/shop/${shopId}/product/deleteProduct`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CanDeleteProduct
     * @summary Returns true if user can delete product and false if can not, Auth: PRODUCT_DELETE
     * @request POST:/seller/shop/{shopId}/product/deletable
     * @deprecated
     * @secure
     * @response `200` `ExistDto` Ok :)
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `ExistDto` Unauthorized
     * @response `403` `ExistDto` Forbidden - does not have required role or authorities
     * @response `404` `ExistDto` Product not found
     */
    canDeleteProduct: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject | ExistDto>({
        path: `/seller/shop/${shopId}/product/deletable`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Image parameters are base64 encoded ("productImages" and "colorImage" in colorImages object.<br>Images should be in the following format <b>"filename\fileExtension,base64EncodedString"</b><br>The response contains the data which is needed to fill the next page form
     *
     * @tags seller-product-controller
     * @name CreateProduct
     * @summary POST method to create a product, Auth: PRODUCT_CREATE
     * @request POST:/seller/shop/{shopId}/product/createProduct
     * @secure
     * @response `201` `ProductDescriptionResponseDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createProduct: (shopId: number, data: ProductCreateDto, params: RequestParams = {}) =>
      this.http.request<ProductDescriptionResponseDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/createProduct`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name SendToModeration
     * @summary Auth: MODERATION_CREATE
     * @request POST:/seller/shop/{shopId}/moderation/send
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendToModeration: (shopId: number, data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/send`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name CheckStopWords
     * @summary Auth: PRODUCT_UPDATE
     * @request POST:/seller/shop/{shopId}/moderation/check-words
     * @secure
     * @response `200` `(string)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkStopWords: (shopId: number, data: string, params: RequestParams = {}) =>
      this.http.request<string[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/check-words`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name CheckLinks
     * @summary Auth: PRODUCT_UPDATE
     * @request POST:/seller/shop/{shopId}/moderation/check-links
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkLinks: (shopId: number, data: string, params: RequestParams = {}) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/check-links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name CheckEmoji
     * @request POST:/seller/shop/{shopId}/moderation/check-emoji
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkEmoji: (shopId: number, data: string, params: RequestParams = {}) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/check-emoji`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name CancelModeration
     * @summary Auth: MODERATION_DELETE
     * @request POST:/seller/shop/{shopId}/moderation/cancel
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelModeration: (shopId: number, data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name GetProductsInSale
     * @summary Получение списка товаров участвующих в распродаже, Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/sales/{saleId}/products
     * @secure
     * @response `200` `GenericResponsePageSaleProduct` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsInSale: (
      shopId: number,
      saleId: number,
      query: {
        /**
         * Номер страницы (начиная с 0)
         * @format int32
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         */
        size: number;
        /**
         * Поле для сортировки ADD_TIME - по времени добавления TITLE - по названию товара
         * @default "ADD_TIME"
         */
        orderBy?: "TITLE" | "ADD_TIME";
        /**
         * Направление сортировки
         * @default "descending"
         */
        orderDirection?: "ascending" | "descending";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponsePageSaleProduct, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name AddProductToSale
     * @summary Добавление товара в распродажу, Auth: CALENDAR_EVENT_CREATE
     * @request POST:/seller/shop/{shopId}/marketing/sales/{saleId}/products
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addProductToSale: (shopId: number, saleId: number, data: AddProductList, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name CalculateToWithdraw
     * @summary Расчет суммы к выводу, Auth: CALENDAR_EVENT_READ
     * @request POST:/seller/shop/{shopId}/marketing/sales/{saleId}/calculate-to-withdraw
     * @secure
     * @response `200` `GenericResponseListSaleSkuCalculatedToWithdraw` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    calculateToWithdraw: (
      shopId: number,
      saleId: number,
      data: SaleSkuCalculateToWithdrawRequest[],
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSaleSkuCalculatedToWithdraw, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/calculate-to-withdraw`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name CreateDiscount
     * @summary Auth: DISCOUNT_CREATE
     * @request POST:/seller/shop/{shopId}/marketing/discounts/create
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createDiscount: (shopId: number, data: SkuDiscountDto[], params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name CompleteDiscount
     * @summary Auth: DISCOUNT_DELETE
     * @request POST:/seller/shop/{shopId}/marketing/discounts/complete
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    completeDiscount: (shopId: number, data: DiscountIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/complete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name CancelDiscount
     * @summary Auth: DISCOUNT_DELETE
     * @request POST:/seller/shop/{shopId}/marketing/discounts/cancel
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelDiscount: (shopId: number, data: DiscountIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name RemoveProduct
     * @summary Auth: CALENDAR_EVENT_DELETE
     * @request POST:/seller/shop/{shopId}/marketing/calendar-event/remove
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeProduct: (shopId: number, data: RemoveProductDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/remove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name CalculateWithdraw
     * @summary Auth: CALENDAR_EVENT_READ
     * @request POST:/seller/shop/{shopId}/marketing/calendar-event/product/to-withdraw
     * @secure
     * @response `200` `GenericResponseProductCommissionDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    calculateWithdraw: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
      },
      data: ProductPriceDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseProductCommissionDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/product/to-withdraw`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name AddProduct
     * @summary Auth: CALENDAR_EVENT_CREATE
     * @request POST:/seller/shop/{shopId}/marketing/calendar-event/add
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addProduct: (shopId: number, data: AddProductListDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name CreateBundle
     * @summary Auth: BUNDLE_CREATE
     * @request POST:/seller/shop/{shopId}/marketing/bundles/create
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createBundle: (shopId: number, data: CreateBundleDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name CompleteBundle
     * @summary Auth: BUNDLE_DELETE
     * @request POST:/seller/shop/{shopId}/marketing/bundles/complete
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    completeBundle: (shopId: number, data: BundleIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/complete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name GetMainSettings
     * @summary Auth: SHOP_READ
     * @request GET:/seller/shop/{shopId}/main
     * @secure
     * @response `200` `ShopMainDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMainSettings: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopMainDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/main`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name SendMainSettings
     * @summary Auth: SHOP_UPDATE
     * @request POST:/seller/shop/{shopId}/main
     * @secure
     * @response `200` `ShopAuthorityDto` OK
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `ShopAuthorityDto` Unauthorized
     * @response `403` `ShopAuthorityDto` Forbidden - does not have required role (seller) and (authority (partner) or permission (SHOP_UPDATE))
     */
    sendMainSettings: (shopId: number, data: ShopMainRequestDto, params: RequestParams = {}) =>
      this.http.request<ShopAuthorityDto, GenericResponseObject | ShopAuthorityDto>({
        path: `/seller/shop/${shopId}/main`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-invoice-controller
     * @name CancelInvoice
     * @summary Cancel particular invoice, Auth: INVOICE_DELETE
     * @request POST:/seller/shop/{shopId}/invoice/cancelInvoice
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelInvoice: (shopId: number, data: InvoiceIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice/cancelInvoice`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetFilterValues
     * @request GET:/seller/shop/{shopId}/filters/sku/values
     * @secure
     * @response `200` `(FilterValueDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFilterValues: (
      shopId: number,
      query: {
        /** @default "" */
        search?: string;
        /** @uniqueItems true */
        selectedFilterValues?: number[];
        /** @format int64 */
        filterId: number;
        /** @format int32 */
        page: number;
        /** @format int32 */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FilterValueDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/sku/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name CreateFilterValue
     * @summary Auth: PRODUCT_FILTER_CREATE
     * @request POST:/seller/shop/{shopId}/filters/sku/values
     * @secure
     * @response `200` `FilterValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createFilterValue: (shopId: number, data: CreateFilterValueDto, params: RequestParams = {}) =>
      this.http.request<FilterValueDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/sku/values`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetProductFilters1
     * @summary Auth: PRODUCT_FILTER_READ
     * @request GET:/seller/shop/{shopId}/filters/product/{productId}
     * @secure
     * @response `200` `ProductFiltersDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductFilters1: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<ProductFiltersDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/product/${productId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name EditProductFilters
     * @summary Auth: PRODUCT_FILTER_UPDATE
     * @request POST:/seller/shop/{shopId}/filters/product/{productId}
     * @secure
     * @response `200` `ProductFiltersDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    editProductFilters: (shopId: number, productId: number, data: EditFiltersDto, params: RequestParams = {}) =>
      this.http.request<ProductFiltersDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/product/${productId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name GetShopContacts
     * @summary Auth: PARTNER
     * @request GET:/seller/shop/{shopId}/contacts
     * @deprecated
     * @secure
     * @response `200` `ShopContactsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopContacts: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopContactsDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/contacts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name SendShopContacts
     * @summary Auth: PARTNER
     * @request POST:/seller/shop/{shopId}/contacts
     * @deprecated
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden - does not have required role (seller) and authority (partner)
     */
    sendShopContacts: (shopId: number, data: ShopContactsDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/seller/shop/${shopId}/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name GetAppearanceSettings
     * @summary Auth: SHOP_READ
     * @request GET:/seller/shop/{shopId}/appearance
     * @secure
     * @response `200` `ShopAppearanceDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAppearanceSettings: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopAppearanceDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/appearance`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name SendAppearanceSettings
     * @summary Auth: SHOP_UPDATE
     * @request POST:/seller/shop/{shopId}/appearance
     * @secure
     * @response `200` `ShopAppearanceDto` OK
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `ShopAppearanceDto` Unauthorized
     * @response `403` `ShopAppearanceDto` Forbidden - does not have required role (seller) and (authority (partner) or permission (SHOP_UPDATE))
     */
    sendAppearanceSettings: (shopId: number, data: ShopAppearanceDto, params: RequestParams = {}) =>
      this.http.request<ShopAppearanceDto, GenericResponseObject | ShopAppearanceDto>({
        path: `/seller/shop/${shopId}/appearance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name AddShop
     * @summary Auth: PARTNER
     * @request POST:/seller/shop/add
     * @secure
     * @response `200` `ShopAuthorityDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addShop: (data: ShopMainRequestDto, params: RequestParams = {}) =>
      this.http.request<ShopAuthorityDto, GenericResponseObject>({
        path: `/seller/shop/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name CheckExistShopPromo
     * @request POST:/seller/promocode/promo/shop/exists
     * @secure
     * @response `200` `GenericResponseExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkExistShopPromo: (data: NewSellerShopPromoDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseExistDto, GenericResponseObject>({
        path: `/seller/promocode/promo/shop/exists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name Create2
     * @summary Auth: PROMO_CODE_CREATE
     * @request POST:/seller/promocode/promo/shop/create
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    create2: (data: NewSellerShopPromoDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/promocode/promo/shop/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name CheckExistProductPromo
     * @request POST:/seller/promocode/promo/product/exists
     * @secure
     * @response `200` `GenericResponseExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkExistProductPromo: (data: NewSellerProductPromoDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseExistDto, GenericResponseObject>({
        path: `/seller/promocode/promo/product/exists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name Create3
     * @request POST:/seller/promocode/promo/product/create
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    create3: (data: NewSellerProductPromoDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/promocode/promo/product/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name CancelPromo
     * @request POST:/seller/promocode/promo/cancel
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelPromo: (
      query: {
        /** @format int64 */
        promoId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/promocode/promo/cancel`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller-deprecated
     * @name GetProductBarcodesReport2
     * @summary POST method to request printing product barcodes
     * @request POST:/seller/products/{productId}/barcodes/print
     * @deprecated
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductBarcodesReport2: (
      productId: number,
      query: {
        sellerInfo: SellerInfo;
      },
      data: LabelsDto,
      params: RequestParams = {},
    ) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/products/${productId}/barcodes/print`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller-deprecated
     * @name GetProductBarcodesReport3
     * @request POST:/seller/products/barcodes/print
     * @deprecated
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductBarcodesReport3: (data: GetProductBarcodesRq, params: RequestParams = {}) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/products/barcodes/print`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name GetPersonalDetails
     * @request GET:/seller/personalDetails
     * @secure
     * @response `200` `PersonalDetailsResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `PersonalDetailsResponse` Unauthorized
     * @response `403` `PersonalDetailsResponse` Forbidden - does not have required role (seller) or authorities (verified)
     */
    getPersonalDetails: (params: RequestParams = {}) =>
      this.http.request<PersonalDetailsResponse, GenericResponseObject | PersonalDetailsResponse>({
        path: `/seller/personalDetails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name SendPersonalDetails
     * @request POST:/seller/personalDetails
     * @secure
     * @response `201` `PersonalDetailsResponse` Created
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `PersonalDetailsResponse` Unauthorized
     * @response `403` `PersonalDetailsResponse` Forbidden - does not have required role (seller) or authorities (verified)
     * @response `406` `PersonalDetailsResponse` Required field is null or does not have required length
     */
    sendPersonalDetails: (data: PersonalDetailsRequest, params: RequestParams = {}) =>
      this.http.request<PersonalDetailsResponse, GenericResponseObject | PersonalDetailsResponse>({
        path: `/seller/personalDetails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name SetKpp
     * @request POST:/seller/personalDetails/set-kpp
     * @secure
     * @response `200` `PersonalDetailsResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `PersonalDetailsResponse` Unauthorized
     * @response `403` `PersonalDetailsResponse` Forbidden - does not have required role (seller) or authorities (verified)
     */
    setKpp: (data: SetKPPRq, params: RequestParams = {}) =>
      this.http.request<PersonalDetailsResponse, GenericResponseObject | PersonalDetailsResponse>({
        path: `/seller/personalDetails/set-kpp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name UploadDocument
     * @request POST:/seller/personalDetails/document/upload
     * @secure
     * @response `200` `DocumentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    uploadDocument: (
      query: {
        type: "CERTIFICATE_OF_REGISTRATION";
      },
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<DocumentDto, GenericResponseObject>({
        path: `/seller/personalDetails/document/upload`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name AddEntrepreneurDetails
     * @request POST:/seller/personalDetails/addEntrepreneurDetails
     * @secure
     * @response `202` `PersonalDetailsResponse` Accepted
     * @response `400` `GenericResponseObject` Not valid dto
     * @response `401` `PersonalDetailsResponse` Unauthorized
     * @response `403` `PersonalDetailsResponse` Forbidden - does not have required role (seller) or authorities (verified)
     * @response `406` `PersonalDetailsResponse` Required field is null or does not have required length
     */
    addEntrepreneurDetails: (data: IndividualEntrepreneurDetailsDto, params: RequestParams = {}) =>
      this.http.request<PersonalDetailsResponse, GenericResponseObject | PersonalDetailsResponse>({
        path: `/seller/personalDetails/addEntrepreneurDetails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name DismissEmployer
     * @summary Dismiss employee from organization, Auth: EMPLOYEE_DELETE
     * @request POST:/seller/organizations/{shopId}/dismiss
     * @secure
     * @response `200` `void` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `void` Unauthorized
     * @response `404` `void` Code: organization-001, Organization with present id not exists
     */
    dismissEmployer: (shopId: number, data: DismissEmployerRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/seller/organizations/${shopId}/dismiss`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name HireEmployer
     * @summary Hire employee to organization
     * @request POST:/seller/organizations/hire
     * @secure
     * @response `200` `EmployeeDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `EmployeeDto` Unauthorized
     * @response `404` `EmployeeDto` Code: organization-001, Organization with present id not exists
     */
    hireEmployer: (data: HireEmployerRq, params: RequestParams = {}) =>
      this.http.request<EmployeeDto, GenericResponseObject | EmployeeDto>({
        path: `/seller/organizations/hire`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-open-api-token-controller
     * @name GetTokens
     * @request GET:/seller/open-api/token
     * @secure
     * @response `200` `(OpenApiTokenResponse)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTokens: (params: RequestParams = {}) =>
      this.http.request<OpenApiTokenResponse[], GenericResponseObject>({
        path: `/seller/open-api/token`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-open-api-token-controller
     * @name CreateToken
     * @request POST:/seller/open-api/token
     * @secure
     * @response `201` `CreateOpenApiTokenResponse` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createToken: (data: CreateSellerOpenApiTokenRequest, params: RequestParams = {}) =>
      this.http.request<CreateOpenApiTokenResponse, GenericResponseObject>({
        path: `/seller/open-api/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller-v-2
     * @name CreateBundle1
     * @summary POST method to create a bundle from products of different shops
     * @request POST:/seller/marketing/bundles/create
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createBundle1: (data: CreateBundleDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/marketing/bundles/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-controller
     * @name SaveFeedback
     * @summary Auth: SERVICE_FEEDBACK_CREATE
     * @request POST:/seller/feedback
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saveFeedback: (
      query: {
        /** Seller bearer authorization token */
        Authorization: any;
      },
      data: SellerFeedbackCreateDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/seller/feedback`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags abb-controller
     * @name CreateOpportunities
     * @summary Auth: ENTREPRENEUR_PARTNER
     * @request POST:/seller/abb/opportunities/create
     * @secure
     * @response `200` `GenericResponseAbbGenericRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOpportunities: (data: SellerOpportunitiesAbbDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseAbbGenericRs, GenericResponseObject>({
        path: `/seller/abb/opportunities/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name GetWithdrawInfoByIdSplitBySho
     * @summary Get withdrawal information split by shop details
     * @request GET:/seller/withdraws/{withdrawId}/shops-details
     * @secure
     * @response `200` `GenericResponseWithdrawByShopsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getWithdrawInfoByIdSplitBySho: (withdrawId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseWithdrawByShopsDto, GenericResponseObject>({
        path: `/seller/withdraws/${withdrawId}/shops-details`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-ticket-controller
     * @name GetActiveTicket
     * @request GET:/seller/withdraws/tickets/active
     * @secure
     * @response `200` `(WithdrawTicketDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActiveTicket: (params: RequestParams = {}) =>
      this.http.request<WithdrawTicketDto[], GenericResponseObject>({
        path: `/seller/withdraws/tickets/active`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name GetMinAvailableToWithdraw
     * @request GET:/seller/withdraws/minimal-to-withdraw
     * @secure
     * @response `200` `MinAvailableToWithdrawAmountRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMinAvailableToWithdraw: (params: RequestParams = {}) =>
      this.http.request<MinAvailableToWithdrawAmountRs, GenericResponseObject>({
        path: `/seller/withdraws/minimal-to-withdraw`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name GetLatestWithdraws
     * @summary Get latest withdraws for seller or shop withdraws
     * @request GET:/seller/withdraws/latest-short
     * @secure
     * @response `200` `GenericResponseShortWithdrawListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getLatestWithdraws: (
      query?: {
        /**
         * @deprecated
         * @format int64
         */
        shopId?: number;
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 3
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseShortWithdrawListDto, GenericResponseObject>({
        path: `/seller/withdraws/latest-short`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name IsWithdrawEnabled
     * @summary Checking if seller withdraws are allowed
     * @request GET:/seller/withdraws/is-withdraw-enabled
     * @secure
     * @response `200` `GenericResponseWithdrawalEligibilityStatus` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponseWithdrawalEligibilityStatus` Unauthorized
     * @response `403` `GenericResponseWithdrawalEligibilityStatus` Forbidden - does not have required role (seller) or authorities (verified)
     */
    isWithdrawEnabled: (params: RequestParams = {}) =>
      this.http.request<
        GenericResponseWithdrawalEligibilityStatus,
        GenericResponseObject | GenericResponseWithdrawalEligibilityStatus
      >({
        path: `/seller/withdraws/is-withdraw-enabled`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name CheckSellerWithdrawAttemptsLimit
     * @summary Check Seller Withdraw Attempts Limit Is Exceeded
     * @request GET:/seller/withdraws/get-attempts-limit
     * @secure
     * @response `200` `GenericResponseCheckWithdrawDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponseCheckWithdrawDto` Unauthorized
     * @response `403` `GenericResponseCheckWithdrawDto` Forbidden - does not have required role (seller) or authorities (verified)
     */
    checkSellerWithdrawAttemptsLimit: (params: RequestParams = {}) =>
      this.http.request<GenericResponseCheckWithdrawDto, GenericResponseObject | GenericResponseCheckWithdrawDto>({
        path: `/seller/withdraws/get-attempts-limit`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name GetAllWithdraw
     * @summary Withdraw history reporting for seller.
     * @request GET:/seller/withdraws/get-all-withdraw
     * @secure
     * @response `200` `AllWithdrawListDto` OK
     * @response `400` `GenericResponseObject` Not valid params
     */
    getAllWithdraw: (
      query?: {
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /** @format int64 */
        createdDateFrom?: number;
        /** @format int64 */
        createdDateTo?: number;
        /** @format int64 */
        approvedDateFrom?: number;
        /** @format int64 */
        approvedDateTo?: number;
        accounts?: string[];
        /** @uniqueItems true */
        shopIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllWithdrawListDto, GenericResponseObject>({
        path: `/seller/withdraws/get-all-withdraw`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-controller
     * @name GetAllWithdrawalAccounts
     * @request GET:/seller/withdraws/accounts
     * @secure
     * @response `200` `GenericResponseListWithdrawalAccountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponseListWithdrawalAccountDto` Unauthorized
     * @response `403` `GenericResponseListWithdrawalAccountDto` Forbidden - does not have required role (seller) or authorities (verified)
     */
    getAllWithdrawalAccounts: (params: RequestParams = {}) =>
      this.http.request<
        GenericResponseListWithdrawalAccountDto,
        GenericResponseObject | GenericResponseListWithdrawalAccountDto
      >({
        path: `/seller/withdraws/accounts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-version-controller
     * @name CheckSellerVersion
     * @request GET:/seller/version/
     * @secure
     * @response `200` `GenericResponseVersionControlDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSellerVersion: (
      query: {
        version: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVersionControlDto, GenericResponseObject>({
        path: `/seller/version/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-service-subscription-controller
     * @name GetSubscriptions
     * @summary Receive list of available subscriptions
     * @request GET:/seller/subscription
     * @secure
     * @response `200` `GenericResponseSellerSubscriptionListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSubscriptions: (params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerSubscriptionListDto, GenericResponseObject>({
        path: `/seller/subscription`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-storage-controller
     * @name GetEntry
     * @request GET:/seller/storage/{key}
     * @secure
     * @response `200` `StorageEntryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getEntry: (key: string, params: RequestParams = {}) =>
      this.http.request<StorageEntryDto, GenericResponseObject>({
        path: `/seller/storage/${key}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-storage-controller
     * @name DeleteEntry
     * @request DELETE:/seller/storage/{key}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteEntry: (key: string, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/storage/${key}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name GetVolumeDiscount
     * @summary Auth: VOLUME_DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/volume-discount/{volumeDiscountId}
     * @secure
     * @response `200` `VolumeDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getVolumeDiscount: (shopId: number, volumeDiscountId: number, params: RequestParams = {}) =>
      this.http.request<VolumeDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/${volumeDiscountId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name GetProductsForVolumeDiscount
     * @summary Auth: VOLUME_DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/volume-discount/products
     * @secure
     * @response `200` `ProductForVolumeDiscountListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsForVolumeDiscount: (
      shopId: number,
      query?: {
        /** @default "TITLE" */
        sortBy?:
          | "ID"
          | "TITLE"
          | "SKU_TITLE"
          | "QUANTITY_ACTIVE"
          | "MIN_SELL_PRICE"
          | "MIN_PURCHASE_PRICE"
          | "SKU_COUNT"
          | "DEFAULT";
        /** @default "ASC" */
        dir?: "ASC" | "DESC";
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        search?: string;
        /** @default false */
        includeInfo?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductForVolumeDiscountListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name GetInfo
     * @summary Auth: VOLUME_DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/volume-discount/info
     * @secure
     * @response `200` `Record<string,VolumeDiscountTypeInfoDto>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInfo: (shopId: number, params: RequestParams = {}) =>
      this.http.request<Record<string, VolumeDiscountTypeInfoDto>, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/info`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags volume-discount-controller
     * @name GetAllVolumeDiscounts
     * @summary Auth: VOLUME_DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/volume-discount/all
     * @secure
     * @response `200` `VolumeDiscountProductListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllVolumeDiscounts: (
      shopId: number,
      query?: {
        /** @default "DATE_START" */
        sortBy?:
          | "ID"
          | "PRODUCT_ID"
          | "TITLE"
          | "SKU_TITLE"
          | "QUANTITY_SOLD"
          | "QUANTITY_ACTIVE"
          | "DATE_START"
          | "ACTIVE"
          | "DEFAULT";
        /** @default "DESC" */
        dir?: "ASC" | "DESC";
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "ALL" */
        filter?: "ALL" | "ACTIVE" | "STARTED";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<VolumeDiscountProductListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/volume-discount/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetSkuListForInvoice
     * @summary Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/v2/invoice/sku-list
     * @secure
     * @response `200` `ShopSkuListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuListForInvoice: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /** @default "all" */
        filter?: string;
        /** @default "" */
        search?: string;
        dimensionalGroups?: ("SMALL" | "MEDIUM" | "LARGE" | "UNKNOWN")[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopSkuListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name GetDimensionalGroupsOfSkus
     * @summary Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/v2/invoice/dimensional-groups
     * @secure
     * @response `200` `GenericResponseDimensionalGroupsRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDimensionalGroupsOfSkus: (shopId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseDimensionalGroupsRs, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/dimensional-groups`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-seller-invoice-controller
     * @name CheckIdentifierUniqueness
     * @summary Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/v2/invoice/check-identifier-uniqueness
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkIdentifierUniqueness: (
      shopId: number,
      query: {
        identifier: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/v2/invoice/check-identifier-uniqueness`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-import-controller
     * @name ExportSkuListToCsv
     * @summary Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/sku/export
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    exportSkuListToCsv: (
      shopId: number,
      query?: {
        /** @default "CSV" */
        fileType?: "CSV" | "XLSX";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/shop/${shopId}/sku/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name GetSkuList
     * @summary Get method for getting a list of SKUs belonging to the shop, Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/sku-list
     * @secure
     * @response `200` `ShopSkuListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuList: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /** @default "all" */
        filter?: string;
        /** @default "" */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopSkuListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-return-controller
     * @name GetSellerReturn
     * @summary Auth: SELLER_RETURN_READ
     * @request GET:/seller/shop/{shopId}/return/{returnId}
     * @secure
     * @response `200` `GenericResponseSellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerReturn: (returnId: number, shopId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerReturnDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/return/${returnId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetShopPromoCodePrefix
     * @summary Auth: PROMO_CODE_CREATE
     * @request GET:/seller/shop/{shopId}/promocode/prefix
     * @secure
     * @response `200` `PromoPrefixDto` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `PromoPrefixDto` Code: shop-002; Shop sku title that required for prefix generation is nullable
     */
    getShopPromoCodePrefix: (shopId: number, params: RequestParams = {}) =>
      this.http.request<PromoPrefixDto, GenericResponseObject | PromoPrefixDto>({
        path: `/seller/shop/${shopId}/promocode/prefix`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetProduct
     * @summary Get product by id, Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product
     * @secure
     * @response `200` `ProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProduct: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetProductPriceInfo
     * @summary Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product/{productId}/price/info
     * @secure
     * @response `200` `GenericResponseProductPriceInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductPriceInfo: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductPriceInfoDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/${productId}/price/info`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetDescriptionResponse
     * @summary Getting product description in the same format as after sending create/edit product rq, Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product/{productId}/description-response
     * @secure
     * @response `200` `ProductDescriptionResponseDto` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `406` `ProductDescriptionResponseDto` Not acceptable - product not exists or not owned by specified seller
     */
    getDescriptionResponse: (shopId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<ProductDescriptionResponseDto, GenericResponseObject | ProductDescriptionResponseDto>({
        path: `/seller/shop/${shopId}/product/${productId}/description-response`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetVat
     * @request GET:/seller/shop/{shopId}/product/vat
     * @secure
     * @response `200` `("VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112")[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getVat: (shopId: number, params: RequestParams = {}) =>
      this.http.request<("VAT0" | "VAT15" | "VAT115" | "VAT12" | "VAT112")[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/vat`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetAllSku
     * @summary Retrieve all sku for shop, Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/product/stock-sku
     * @secure
     * @response `200` `SkuListForTableDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllSku: (
      shopId: number,
      query: {
        /** @format int64 */
        productId?: number;
        filter?: string;
        /** @format int32 */
        page: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuListForTableDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/stock-sku`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CheckSkuExistence
     * @summary Get Sku data for print labels method, Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/product/skuDataForPrint
     * @secure
     * @response `200` `SkuDataForPrintDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSkuExistence: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuDataForPrintDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/skuDataForPrint`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deprecated. Use /seller/shop/{shopId}/category/root. Active flag inside category object means that product can be added in this category if true, otherwise user must choose one of the child categories.
     *
     * @tags seller-product-controller
     * @name GetRootCategories
     * @summary Retrieve root categories
     * @request GET:/seller/shop/{shopId}/product/rootCategories
     * @deprecated
     * @secure
     * @response `200` `(ShopCategoryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRootCategories: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopCategoryDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/rootCategories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetReturnCauseProduct
     * @summary Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product/return
     * @secure
     * @response `200` `(ReturnCauseDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getReturnCauseProduct: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ReturnCauseDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/return`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetReturnCauseSku
     * @summary Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/product/return/sku
     * @secure
     * @response `200` `(ReturnCauseSkuDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getReturnCauseSku: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ReturnCauseSkuDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/return/sku`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetProductRequirements
     * @request GET:/seller/shop/{shopId}/product/requirements
     * @secure
     * @response `200` `ProductRequirementsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductRequirements: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ProductRequirementsDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/requirements`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetProductCertificationFillType
     * @request GET:/seller/shop/{shopId}/product/product-certification-filltype
     * @secure
     * @response `200` `ProductCertificateFillTypeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductCertificationFillType: (
      shopId: number,
      query: {
        /** @format int64 */
        categoryId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductCertificateFillTypeDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/product-certification-filltype`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name SuggestOkpd2
     * @request GET:/seller/shop/{shopId}/product/okpd2
     * @secure
     * @response `200` `(SuggestionOkpd2Entry)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    suggestOkpd2: (
      shopId: number,
      query: {
        query: string;
        /**
         * @format int32
         * @default 10
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SuggestionOkpd2Entry[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/okpd2`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetLeftoverStock
     * @summary Auth: LEFTOVER_READ
     * @request GET:/seller/shop/{shopId}/product/leftover-stock
     * @secure
     * @response `200` `ShopLeftoverStockDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getLeftoverStock: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopLeftoverStockDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/leftover-stock`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description All products for particular shop are returned according to pagination parameters, filters and sortBy
     *
     * @tags seller-product-controller
     * @name GetProducts1
     * @summary Retrieve products, Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product/getProducts
     * @secure
     * @response `200` `AllProductsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts1: (
      shopId: number,
      query: {
        /** @default "" */
        searchQuery?: string;
        /** @default "DEFAULT" */
        sortBy?: "DEFAULT" | "ORDERS" | "PRICE" | "ID" | "ROI" | "CONVERSION" | "LEFTOVERS" | "CREATED_AND_TITLE";
        /** @default "ASC" */
        order?: "ASC" | "DESC";
        /** @format int32 */
        size: number;
        /**
         * @format int32
         * @min 0
         */
        page: number;
        productRank?: "A" | "B" | "C" | "N" | "D";
        /** @default "ALL" */
        filter?:
          | "ALL"
          | "ACTIVE"
          | "INACTIVE"
          | "WARNING"
          | "WITH_SKU"
          | "ARCHIVE"
          | "DEFECTED"
          | "WITHOUT_REQUIRED_FILTERS"
          | "FORECAST_OUT_OF_STOCK";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllProductsDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/getProducts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetDefinedCharacteristics
     * @summary GET method to retrieve defined characteristics for user choice
     * @request GET:/seller/shop/{shopId}/product/getDefinedCharacteristics
     * @secure
     * @response `200` `(DefinedCharacteristicDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDefinedCharacteristics: (
      shopId: number,
      query?: {
        categoryIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<DefinedCharacteristicDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/getDefinedCharacteristics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name GetDescriptions
     * @summary Get product field descriptions for given vategory
     * @request GET:/seller/shop/{shopId}/product/field-descriptions
     * @secure
     * @response `200` `(ProductFieldDescriptionDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDescriptions: (
      shopId: number,
      query: {
        /** @format int64 */
        categoryId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFieldDescriptionDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/field-descriptions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Deprecated. Use /seller/shop/{shopId}/category/child. Active flag inside category object means that product can be added in this category if true, otherwise user must choose one of the child categories. <br>If request returns empty array, there are no children exists from chosen root.
     *
     * @tags seller-product-controller
     * @name GetChildCategories
     * @summary Retrieve subcategories from particular parent category
     * @request GET:/seller/shop/{shopId}/product/childCategories
     * @deprecated
     * @secure
     * @response `200` `(ShopCategoryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getChildCategories: (
      shopId: number,
      query: {
        /** @format int64 */
        parentId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopCategoryDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/childCategories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CheckSkuExistence1
     * @summary Returns true if SKU already exists for current shop and false otherwise, Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/product/checkSku
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSkuExistence1: (
      shopId: number,
      query: {
        sku: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/checkSku`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name CheckSkuExistenceV2
     * @summary Returns true if SKU already exists for current shop and false otherwise, Auth: SKU_READ
     * @request GET:/seller/shop/{shopId}/product/check-sku
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSkuExistenceV2: (
      shopId: number,
      query: {
        sku: string;
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/check-sku`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-controller
     * @name IsValidBarcode
     * @summary Auth: PRODUCT_READ
     * @request GET:/seller/shop/{shopId}/product/barcode
     * @secure
     * @response `200` `BarcodeValidationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isValidBarcode: (
      shopId: number,
      query: {
        /** @format int64 */
        barcode: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<BarcodeValidationDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/product/barcode`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-controller
     * @name GetHistoryProductModeration
     * @summary Auth: MODERATION_READ
     * @request GET:/seller/shop/{shopId}/moderation/history-moderation
     * @secure
     * @response `200` `SellerHistoryProductModerationListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getHistoryProductModeration: (
      shopId: number,
      query?: {
        /** @format int64 */
        productId?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerHistoryProductModerationListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/moderation/history-moderation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name GetSaleList
     * @summary Получение списка распродаж, Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/sales
     * @secure
     * @response `200` `GenericResponseListSaleInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSaleList: (
      shopId: number,
      query: {
        /**
         * Фильтр по типу распродаж
         * @default "ALL"
         */
        saleType?: "ALL" | "BIG_SALE";
        /**
         * Номер страницы (начиная с 0)
         * @format int32
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSaleInfo, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name GetSaleById
     * @summary Получение одной распродажи, Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/sales/{saleId}
     * @secure
     * @response `200` `GenericResponseSaleFullInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSaleById: (shopId: number, saleId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseSaleFullInfo, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name GetSuitableProducts
     * @summary Получение списка всех товаров соответствующих правилам распродажи, Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/sales/{saleId}/suitable-products
     * @secure
     * @response `200` `GenericResponsePageSaleSuitableProduct` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSuitableProducts: (
      shopId: number,
      saleId: number,
      query: {
        /** Поиск по названию товара */
        search?: string;
        /**
         * Номер страницы (начиная с 0)
         * @format int32
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         */
        size: number;
        /**
         * Поле для сортировки
         * TITLE - по названию товара
         * AVAILABLE_COUNT - по остатку
         * @default "TITLE"
         */
        orderBy?: "TITLE" | "AVAILABLE_COUNT";
        /**
         * Направление сортировки
         * @default "ascending"
         */
        orderDirection?: "ascending" | "descending";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponsePageSaleSuitableProduct, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/suitable-products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name GetSuitableProductSku
     * @summary Получение списка sku для товара соответствующего распродаже, Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/sales/{saleId}/suitable-products/{productId}/sku
     * @secure
     * @response `200` `GenericResponseListSaleSuitableSku` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSuitableProductSku: (shopId: number, saleId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseListSaleSuitableSku, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/suitable-products/${productId}/sku`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name GetSkuForDiscount
     * @summary Auth: DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/marketing/discounts/sku-list
     * @secure
     * @response `200` `AllSkuForDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuForDiscount: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "" */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllSkuForDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name GetDiscountConditions
     * @summary Auth: DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/marketing/discounts/conditions
     * @secure
     * @response `200` `DiscountConditionsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDiscountConditions: (
      shopId: number,
      query: {
        /** @format int64 */
        skuId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<DiscountConditionsDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/conditions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name GetAvailableDiscount
     * @summary Auth: DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/marketing/discounts/available-discount
     * @secure
     * @response `200` `AvailableDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAvailableDiscount: (shopId: number, params: RequestParams = {}) =>
      this.http.request<AvailableDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/available-discount`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-discount-controller
     * @name GetAllDiscount
     * @summary Auth: DISCOUNT_READ
     * @request GET:/seller/shop/{shopId}/marketing/discounts/all
     * @secure
     * @response `200` `AllDiscountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllDiscount: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "productTitle" */
        orderBy?: string;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default true */
        notActive?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllDiscountDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/discounts/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetCalendarEventInfo
     * @summary Auth: CALENDAR_EVENT_CREATE
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event
     * @secure
     * @response `200` `GenericResponseCalendarEventDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCalendarEventInfo: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCalendarEventDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetRules
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/rules
     * @secure
     * @response `200` `RuleDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRules: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<RuleDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/rules`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetProducts2
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/products
     * @secure
     * @response `200` `ProductSuitableListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts2: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "title" */
        orderBy?: string;
        /** @default "" */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductSuitableListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetInvolvedProducts
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/products-involved
     * @secure
     * @response `200` `ProductInvolvedListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvolvedProducts: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "title" */
        orderBy?: string;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductInvolvedListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/products-involved`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetSkuInvolvedList
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/products-involved/sku-list
     * @secure
     * @response `200` `(SkuInvolvedDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuInvolvedList: (
      shopId: number,
      query: {
        /** @format int64 */
        eventId: number;
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuInvolvedDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/products-involved/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetSkuList1
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/product/sku-list
     * @secure
     * @response `200` `(SkuSuitableDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuList1: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
        /** @format int64 */
        eventId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuSuitableDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/product/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-controller
     * @name GetEvents
     * @summary Auth: CALENDAR_EVENT_READ
     * @request GET:/seller/shop/{shopId}/marketing/calendar-event/all
     * @secure
     * @response `200` `(CalendarEventDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getEvents: (
      shopId: number,
      query?: {
        /** @default "ALL" */
        filter?: "ALL" | "PARTICIPATE" | "SUITABLE" | "COMPLETED" | "ACTIVE";
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CalendarEventDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/calendar-event/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name GetSkuList2
     * @summary Auth: BUNDLE_READ
     * @request GET:/seller/shop/{shopId}/marketing/bundles/sku-list
     * @secure
     * @response `200` `(SkuForDiscountDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuList2: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuForDiscountDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name GetProductList
     * @summary Auth: BUNDLE_READ
     * @request GET:/seller/shop/{shopId}/marketing/bundles/products
     * @secure
     * @response `200` `(ProductMarketingDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductList: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "title" */
        orderBy?: string;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductMarketingDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name GetSkuList3
     * @summary Auth: BUNDLE_READ
     * @request GET:/seller/shop/{shopId}/marketing/bundles/product/sku-list
     * @secure
     * @response `200` `(SkuMarketingDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuList3: (
      shopId: number,
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuMarketingDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/product/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller
     * @name GetBundles
     * @summary Auth: BUNDLE_READ
     * @request GET:/seller/shop/{shopId}/marketing/bundles/all
     * @secure
     * @response `200` `(BundleDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBundles: (
      shopId: number,
      query?: {
        /** @default "ALL" */
        filter?: "ALL" | "ACTIVE" | "COMPLETED" | "OUT_STOCK";
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<BundleDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/bundles/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-invoice-controller
     * @name GetInvoices
     * @summary Retrieve invoices list, Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/invoice
     * @secure
     * @response `200` `(InvoiceInListDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoices: (
      shopId: number,
      query?: {
        /** @format int32 */
        size?: number;
        /** @format int32 */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceInListDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-invoice-controller
     * @name GetInvoice
     * @summary Retrieve invoice by id, Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/invoice/{invoiceId}
     * @secure
     * @response `200` `InvoiceInListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoice: (shopId: number, invoiceId: number, params: RequestParams = {}) =>
      this.http.request<InvoiceInListDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice/${invoiceId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-printing-controller
     * @name GetInvoiceClosingDocuments
     * @summary Method for getting invoice closing documents
     * @request GET:/seller/shop/{shopId}/invoice/{invoiceId}/closing-documents
     * @secure
     * @response `200` `SellerInfo` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `SellerInfo` Unauthorized
     * @response `406` `SellerInfo` Code: forbidden-001, Trying to call method for invoice that seller not owns
     */
    getInvoiceClosingDocuments: (
      invoiceId: number,
      shopId: number,
      query: {
        /** @default false */
        pdf?: boolean;
        sellerInfo: SellerInfo;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerInfo, GenericResponseObject | SellerInfo>({
        path: `/seller/shop/${shopId}/invoice/${invoiceId}/closing-documents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Specific exceptions: 003-invoice-time-slot-required,001-invoice-not-found
     *
     * @tags seller-invoice-controller
     * @name GetInvoicePrint
     * @summary POST method to request invoice print, Auth: PRINTING_READ
     * @request GET:/seller/shop/{shopId}/invoice/printInvoice
     * @secure
     * @response `200` `PdfReportDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoicePrint: (
      shopId: number,
      query: {
        /** @format int64 */
        invoiceId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<PdfReportDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice/printInvoice`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-invoice-controller
     * @name GetProductsForInvoice
     * @summary Retrieve products for invoice, Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/invoice/getProductsList
     * @secure
     * @response `200` `ProductListForInvoiceDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsForInvoice: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /** @format int64 */
        productId?: number;
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductListForInvoiceDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice/getProductsList`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-invoice-controller
     * @name GetInvoiceProducts
     * @summary Retrieve products for particular invoice, Auth: INVOICE_READ
     * @request GET:/seller/shop/{shopId}/invoice/getInvoiceProducts
     * @secure
     * @response `200` `(ProductForInvoiceDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoiceProducts: (
      shopId: number,
      query: {
        /** @format int64 */
        invoiceId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductForInvoiceDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/invoice/getInvoiceProducts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetFilters
     * @request GET:/seller/shop/{shopId}/filters/sku
     * @secure
     * @response `200` `(FilterDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFilters: (
      shopId: number,
      query: {
        /** @default "" */
        search?: string;
        /**
         * @uniqueItems true
         * @default []
         */
        selectedFilters?: number[];
        /** @format int64 */
        categoryId?: number;
        /** @format int32 */
        page: number;
        /** @format int32 */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FilterDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/sku`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetProductFilters
     * @request GET:/seller/shop/{shopId}/filters/product
     * @secure
     * @response `200` `(ProductFilterDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductFilters: (
      shopId: number,
      query?: {
        /** @default "" */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFilterDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/product`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetProductFilterValues
     * @request GET:/seller/shop/{shopId}/filters/product/values
     * @secure
     * @response `200` `(ProductFilterValueDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductFilterValues: (
      shopId: number,
      query: {
        /** @default "" */
        search?: string;
        /** @uniqueItems true */
        selectedFilterValues?: number[];
        /** @format int64 */
        categoryId: number;
        /** @format int64 */
        filterId: number;
        /** @format int32 */
        page: number;
        /** @format int32 */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFilterValueDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/product/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-filters-controller
     * @name GetActiveProductFilters
     * @request GET:/seller/shop/{shopId}/filters/product/active
     * @secure
     * @response `200` `(ProductFilterDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActiveProductFilters: (
      shopId: number,
      query?: {
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFilterDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/filters/product/active`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckUrlExistence
     * @summary Returns true if already exists and false if is not exists, Auth: PARTNER
     * @request GET:/seller/shop/{shopId}/checkUrl
     * @deprecated
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkUrlExistence: (
      shopId: number,
      query: {
        url: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/checkUrl`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckTitleExistence
     * @summary Returns true if already exists and false if is not exists, Auth: PARTNER
     * @request GET:/seller/shop/{shopId}/checkTitle
     * @deprecated
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkTitleExistence: (
      shopId: number,
      query: {
        title: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/checkTitle`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckSkuExistence2
     * @summary Returns true if already exists and false if is not exists, Auth: PARTNER
     * @request GET:/seller/shop/{shopId}/checkSku
     * @deprecated
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSkuExistence2: (
      shopId: number,
      query: {
        sku: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/checkSku`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-category-controller
     * @name GetCategoryFields
     * @request GET:/seller/shop/{shopId}/category/{categoryId}/fields
     * @secure
     * @response `200` `CategoryFieldsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCategoryFields: (categoryId: number, shopId: number, params: RequestParams = {}) =>
      this.http.request<CategoryFieldsDto, GenericResponseObject>({
        path: `/seller/shop/${shopId}/category/${categoryId}/fields`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Active flag inside category object means that product can be added in this category if true, otherwise user must choose one of the child categories.
     *
     * @tags seller-category-controller
     * @name GetRootCategories1
     * @summary Retrieve root categories
     * @request GET:/seller/shop/{shopId}/category/root
     * @secure
     * @response `200` `(ShopCategoryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRootCategories1: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopCategoryDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/category/root`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Active flag inside category object means that product can be added in this category if true, otherwise user must choose one of the child categories. <br>If request returns empty array, there are no children exists from chosen root.
     *
     * @tags seller-category-controller
     * @name GetChildCategories1
     * @summary Retrieve subcategories from particular parent category
     * @request GET:/seller/shop/{shopId}/category/child
     * @secure
     * @response `200` `(ShopCategoryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getChildCategories1: (
      shopId: number,
      query: {
        /** @format int64 */
        parentId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopCategoryDto[], GenericResponseObject>({
        path: `/seller/shop/${shopId}/category/child`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Shop is allowed if seller has the SKU_READ permission
     *
     * @tags seller-shop-controller
     * @name GetAllShopsSkuList
     * @summary Get method for getting a list of SKUs for all permitted seller shops
     * @request GET:/seller/shop/sku-list
     * @secure
     * @response `200` `ShopSkuListDto` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `ShopSkuListDto` Unauthorized
     * @response `403` `ShopSkuListDto` Forbidden - does not have required role (ROLE_SELLER)
     * @response `500` `ShopSkuListDto` Internal server error
     */
    getAllShopsSkuList: (
      query?: {
        /**
         * Size of page, minimum 1, maximum 100
         * @format int32
         * @min 1
         * @max 100
         * @default 24
         */
        size?: number;
        /**
         * Number of page
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * Filter, possible values: all, liquid
         * @default "all"
         * @example "all"
         */
        filter?: string;
        /**
         * Search by product title or sku title or barcode
         * @default ""
         */
        search?: string;
        /** List of required sku ids, example of use: skuIds=1&skuIds=2 */
        skuIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopSkuListDto, GenericResponseObject | ShopSkuListDto>({
        path: `/seller/shop/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает доступные регионы
     *
     * @tags seller-return-region-controller-getRegions
     * @name GetRegions
     * @summary getRegions
     * @request GET:/seller/shop/return/regions
     * @secure
     * @response `200` `GenericResponseRegionsResponse` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `403` `GenericResponse` Коды ошибок:<br> forbidden-001: Текущий аккаунт селлера не имеет доступа
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    getRegions: (params: RequestParams = {}) =>
      this.http.request<GenericResponseRegionsResponse, GenericResponseObject | GenericResponse>({
        path: `/seller/shop/return/regions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает доступные районы
     *
     * @tags seller-return-region-controller-getRegionDistricts
     * @name GetRegionDistricts
     * @summary getRegionDistricts
     * @request GET:/seller/shop/return/regions/{regionId}/districts
     * @secure
     * @response `200` `GenericResponseDistrictsResponse` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `403` `GenericResponse` Коды ошибок:<br> forbidden-001: Текущий аккаунт селлера не имеет доступа
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    getRegionDistricts: (regionId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseDistrictsResponse, GenericResponseObject | GenericResponse>({
        path: `/seller/shop/return/regions/${regionId}/districts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckUrlExistence1
     * @summary Returns true if already exists and false if is not exists
     * @request GET:/seller/shop/checkUrl
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkUrlExistence1: (
      query: {
        url: string;
        /**
         * @format int64
         * @default -1
         */
        shopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/checkUrl`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckTitleExistence1
     * @summary Returns true if already exists and false if is not exists
     * @request GET:/seller/shop/checkTitle
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkTitleExistence1: (
      query: {
        title: string;
        /**
         * @format int64
         * @default -1
         */
        shopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/checkTitle`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name CheckSkuExistence3
     * @summary Returns true if already exists and false if is not exists, Auth: PARTNER
     * @request GET:/seller/shop/checkSku
     * @secure
     * @response `200` `ExistDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkSkuExistence3: (
      query: {
        sku: string;
        /**
         * @format int64
         * @default -1
         */
        shopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ExistDto, GenericResponseObject>({
        path: `/seller/shop/checkSku`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-shop-controller
     * @name GetShops
     * @request GET:/seller/shop/
     * @secure
     * @response `200` `(ShopMainDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShops: (params: RequestParams = {}) =>
      this.http.request<ShopMainDto[], GenericResponseObject>({
        path: `/seller/shop/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-report-controller
     * @name GetBarcodeTypes
     * @request GET:/seller/reports/barcodes/types
     * @secure
     * @response `200` `BarcodeTypesDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBarcodeTypes: (params: RequestParams = {}) =>
      this.http.request<BarcodeTypesDto, GenericResponseObject>({
        path: `/seller/reports/barcodes/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetShopPromoList
     * @request GET:/seller/promocode/promo/shop
     * @secure
     * @response `200` `GenericResponseSellerShopPromoDtoList` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopPromoList: (
      query?: {
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default "" */
        searchBy?: string;
        /** @default "shopTitle" */
        sortBy?: string;
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
        /** @default "HB_UZUM" */
        promoType?: "HB_UZUM";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerShopPromoDtoList, GenericResponseObject>({
        path: `/seller/promocode/promo/shop`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetShopPromoSettings
     * @request GET:/seller/promocode/promo/settings/shop
     * @secure
     * @response `200` `GenericResponseShopPromoSettingsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopPromoSettings: (
      query: {
        promoType: "HB_UZUM";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseShopPromoSettingsDto, GenericResponseObject>({
        path: `/seller/promocode/promo/settings/shop`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetProductPromoSettings
     * @request GET:/seller/promocode/promo/settings/product
     * @secure
     * @response `200` `GenericResponseProductPromoSettingsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductPromoSettings: (
      query: {
        promoType: "HB_UZUM";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseProductPromoSettingsDto, GenericResponseObject>({
        path: `/seller/promocode/promo/settings/product`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetProducts3
     * @request GET:/seller/promocode/promo/products
     * @secure
     * @response `200` `GenericResponseListProductMarketingDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts3: (
      query?: {
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default "PRODUCT_TITLE" */
        sortBy?: "PRODUCT_TITLE" | "QUANTITY_ACTIVE" | "MAX_SELL_PRICE";
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductMarketingDto, GenericResponseObject>({
        path: `/seller/promocode/promo/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetProductPromoList
     * @request GET:/seller/promocode/promo/product
     * @secure
     * @response `200` `GenericResponseSellerProductPromoDtoList` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductPromoList: (
      query?: {
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default "" */
        searchBy?: string;
        /** @default "productTitle" */
        sortBy?: string;
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
        /** @default "HB_UZUM" */
        promoType?: "HB_UZUM";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerProductPromoDtoList, GenericResponseObject>({
        path: `/seller/promocode/promo/product`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-info-controller
     * @name SuggestProducts
     * @request GET:/seller/product/suggest
     * @secure
     * @response `200` `GenericResponseProductInfoListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    suggestProducts: (
      query?: {
        /**
         * @uniqueItems true
         * @default []
         */
        shopIds?: number[];
        /** @default "" */
        searchQuery?: string;
        /**
         * @format int32
         * @max 100
         * @default 10
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseProductInfoListDto, GenericResponseObject>({
        path: `/seller/product/suggest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-info-controller
     * @name SearchIkpu
     * @summary Search ikpu items and validate result for category allowed codes
     * @request GET:/seller/product/ikpu/search
     * @secure
     * @response `200` `GenericResponseListIkpuInfoRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    searchIkpu: (
      query: {
        search: string;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListIkpuInfoRs, GenericResponseObject>({
        path: `/seller/product/ikpu/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-info-controller
     * @name CheckIkpu
     * @summary Check if ikpu is valid
     * @request GET:/seller/product/ikpu/check
     * @secure
     * @response `200` `GenericResponseCheckIkpuDto` Ikpu is valid
     * @response `400` `GenericResponseObject` Ikpu is not valid<br>ikpu-001: not allowed ikpu for category
     */
    checkIkpu: (
      query: {
        ikpu: string;
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCheckIkpuDto, GenericResponseObject>({
        path: `/seller/product/ikpu/check`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-product-info-controller
     * @name CheckForbiddenCategories
     * @summary Check forbidden categories
     * @request GET:/seller/product/category/check
     * @secure
     * @response `200` `GenericResponseSellerCategoryInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkForbiddenCategories: (params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerCategoryInfoDto, GenericResponseObject>({
        path: `/seller/product/category/check`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name SuggestOrganizations
     * @request GET:/seller/personalDetails/organization/suggest
     * @secure
     * @response `200` `(OrganizationInfoDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    suggestOrganizations: (
      query: {
        data: string;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrganizationInfoDto[], GenericResponseObject>({
        path: `/seller/personalDetails/organization/suggest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name CheckOrganization
     * @request GET:/seller/personalDetails/organization/check
     * @secure
     * @response `200` `OrganizationInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkOrganization: (
      query: {
        data: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrganizationInfoDto, GenericResponseObject>({
        path: `/seller/personalDetails/organization/check`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name GetEdfSystemList
     * @request GET:/seller/personalDetails/edf-system/all
     * @secure
     * @response `200` `(EdfSystemDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getEdfSystemList: (params: RequestParams = {}) =>
      this.http.request<EdfSystemDto[], GenericResponseObject>({
        path: `/seller/personalDetails/edf-system/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-personal-details-controller
     * @name GetDocumentType
     * @request GET:/seller/personalDetails/document/types
     * @secure
     * @response `200` `(EntrepreneurDocumentRequirementDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDocumentType: (params: RequestParams = {}) =>
      this.http.request<EntrepreneurDocumentRequirementDto[], GenericResponseObject>({
        path: `/seller/personalDetails/document/types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name GetOrganizations
     * @summary Receive list of own organizations(currently shops)
     * @request GET:/seller/organizations
     * @secure
     * @response `200` `(OrganizationDto)[]` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `(OrganizationDto)[]` Unauthorized
     */
    getOrganizations: (
      query?: {
        permission?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrganizationDto[], GenericResponseObject | OrganizationDto[]>({
        path: `/seller/organizations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name GetOrganization
     * @summary Receive list of organization employee, Auth: EMPLOYEE_READ
     * @request GET:/seller/organizations/{shopId}
     * @secure
     * @response `200` `OrganizationWithEmployeeDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `OrganizationWithEmployeeDto` Unauthorized
     * @response `403` `OrganizationWithEmployeeDto` Code: forbidden-001, Try to receive organization that you not own
     */
    getOrganization: (shopId: number, params: RequestParams = {}) =>
      this.http.request<OrganizationWithEmployeeDto, GenericResponseObject | OrganizationWithEmployeeDto>({
        path: `/seller/organizations/${shopId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name GetEmployeeRoles
     * @summary Receive list of available employee roles
     * @request GET:/seller/organizations/roles
     * @secure
     * @response `200` `(EmployeeRoleDto)[]` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `(EmployeeRoleDto)[]` Unauthorized
     */
    getEmployeeRoles: (params: RequestParams = {}) =>
      this.http.request<EmployeeRoleDto[], GenericResponseObject | EmployeeRoleDto[]>({
        path: `/seller/organizations/roles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-organization-controller
     * @name GetEmployees
     * @summary Receive list of all employee for all organizations
     * @request GET:/seller/organizations/employee
     * @secure
     * @response `200` `(OrganizationEmployeeDto)[]` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `(OrganizationEmployeeDto)[]` Unauthorized
     * @response `403` `(OrganizationEmployeeDto)[]` Code: forbidden-001, Try to receive organization that you not own
     */
    getEmployees: (params: RequestParams = {}) =>
      this.http.request<OrganizationEmployeeDto[], GenericResponseObject | OrganizationEmployeeDto[]>({
        path: `/seller/organizations/employee`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-ofd-info-controller
     * @name GetOfdInfoByPinfl
     * @request GET:/seller/ofd/get-ofd-info
     * @secure
     * @response `200` `IndividualOfdInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOfdInfoByPinfl: (
      query: {
        pinfl: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<IndividualOfdInfo, GenericResponseObject>({
        path: `/seller/ofd/get-ofd-info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-ofd-info-controller
     * @name GetInfoByInn
     * @request GET:/seller/ofd/get-ofd-info-inn
     * @secure
     * @response `200` `CompanyOfdInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInfoByInn: (
      query: {
        inn: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CompanyOfdInfo, GenericResponseObject>({
        path: `/seller/ofd/get-ofd-info-inn`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-notification-controller
     * @name GetNotifications1
     * @summary GET method to get current notification for seller
     * @request GET:/seller/notifications
     * @secure
     * @response `200` `SellerNotificationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getNotifications1: (params: RequestParams = {}) =>
      this.http.request<SellerNotificationDto, GenericResponseObject>({
        path: `/seller/notifications`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller-v-2
     * @name GetSkuList4
     * @summary GET method to retrieve all SKUs that can be used inside a bundle
     * @request GET:/seller/marketing/bundles/sku-list
     * @secure
     * @response `200` `(SkuForDiscountDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuList4: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuForDiscountDto[], GenericResponseObject>({
        path: `/seller/marketing/bundles/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller-v-2
     * @name GetSkuListForProduct
     * @summary GET method to get a sku list for a particular product without info about shop
     * @request GET:/seller/marketing/bundles/product/sku-list
     * @secure
     * @response `200` `(SkuMarketingDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuListForProduct: (
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuMarketingDto[], GenericResponseObject>({
        path: `/seller/marketing/bundles/product/sku-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-bundle-controller-v-2
     * @name GetProductsFromAllShops
     * @summary GET method to retrieve all the products from all shops from which seller can create a bundle
     * @request GET:/seller/marketing/bundles/all-products
     * @secure
     * @response `200` `(ProductMarketingDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsFromAllShops: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        /** @default "title" */
        orderBy?: string;
        /** @default "ASC" */
        orderDirection?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductMarketingDto[], GenericResponseObject>({
        path: `/seller/marketing/bundles/all-products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetProductsV2
     * @request GET:/seller/marketing/auction/v2/products
     * @secure
     * @response `200` `GenericResponseListProductMarketingDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsV2: (
      query?: {
        /** @uniqueItems true */
        categoryIds?: number[];
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default "PRODUCT_TITLE" */
        sortBy?: "PRODUCT_TITLE" | "QUANTITY_ACTIVE" | "MAX_SELL_PRICE";
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductMarketingDto, GenericResponseObject>({
        path: `/seller/marketing/auction/v2/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetSkuGroups
     * @request GET:/seller/marketing/auction/skugroups
     * @secure
     * @response `200` `GenericResponseListProductSkuGroupMarketingDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuGroups: (
      query: {
        productIds: number[];
        /** @default "QUANTITY_ACTIVE" */
        sortBy?: "PRODUCT_TITLE" | "QUANTITY_ACTIVE" | "MAX_SELL_PRICE";
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductSkuGroupMarketingDto, GenericResponseObject>({
        path: `/seller/marketing/auction/skugroups`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetSkuGroupInfo
     * @request GET:/seller/marketing/auction/skugroups/info
     * @secure
     * @response `200` `GenericResponseListSkuGroupInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuGroupInfo: (
      query: {
        /** @uniqueItems true */
        skuGroupIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSkuGroupInfoDto, GenericResponseObject>({
        path: `/seller/marketing/auction/skugroups/info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetSkuGroupRawInfo
     * @request GET:/seller/marketing/auction/skugroups/all
     * @secure
     * @response `200` `GenericResponseListProductSkuGroupMarketingDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuGroupRawInfo: (
      query: {
        /** @uniqueItems true */
        skuGroupIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductSkuGroupMarketingDto, GenericResponseObject>({
        path: `/seller/marketing/auction/skugroups/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetProducts4
     * @request GET:/seller/marketing/auction/products
     * @secure
     * @response `200` `GenericResponseListProductMarketingDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts4: (
      query?: {
        /** @uniqueItems true */
        categoryIds?: number[];
        /** @uniqueItems true */
        shopIds?: number[];
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default "PRODUCT_TITLE" */
        sortBy?: "PRODUCT_TITLE" | "QUANTITY_ACTIVE" | "MAX_SELL_PRICE";
        /** @default "ASC" */
        orderBy?: "ASC" | "DESC";
        /** @default "" */
        searchBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductMarketingDto, GenericResponseObject>({
        path: `/seller/marketing/auction/products`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-auction-controller
     * @name GetFilterSellers
     * @request GET:/seller/marketing/auction/filter/sellers
     * @secure
     * @response `200` `GenericResponseListSellerFilterDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFilterSellers: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListSellerFilterDto, GenericResponseObject>({
        path: `/seller/marketing/auction/filter/sellers`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-help-page-controller
     * @name GetRootHelpPageContent
     * @summary Retrieve default help page content
     * @request GET:/seller/helpPage
     * @secure
     * @response `200` `HelpPageDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `HelpPageDto` Unauthorized
     * @response `403` `HelpPageDto` Forbidden - does not have required role (seller) or authorities (verified)
     */
    getRootHelpPageContent: (params: RequestParams = {}) =>
      this.http.request<HelpPageDto, GenericResponseObject | HelpPageDto>({
        path: `/seller/helpPage`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Includes root page (should not appear for users), that contains all other pages as subTitles
     *
     * @tags seller-help-page-controller
     * @name GetHelpPageTitles
     * @summary Retrieve help pages tree
     * @request GET:/seller/helpPageTree
     * @secure
     * @response `200` `HelpPageTitleDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `HelpPageTitleDto` Unauthorized
     * @response `403` `HelpPageTitleDto` Forbidden - does not have required role (seller) or authorities (verified)
     */
    getHelpPageTitles: (params: RequestParams = {}) =>
      this.http.request<HelpPageTitleDto, GenericResponseObject | HelpPageTitleDto>({
        path: `/seller/helpPageTree`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-help-page-controller
     * @name GetHelpPageContent
     * @summary Retrieve help page content by page link
     * @request GET:/seller/helpPage/{url}
     * @secure
     * @response `200` `HelpPageDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `HelpPageDto` Unauthorized
     * @response `403` `HelpPageDto` Forbidden - does not have required role (seller) or authorities (verified)
     */
    getHelpPageContent: (url: string, params: RequestParams = {}) =>
      this.http.request<HelpPageDto, GenericResponseObject | HelpPageDto>({
        path: `/seller/helpPage/${url}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetProductsForInvoice1
     * @summary Retrieve products for invoice
     * @request GET:/seller/finance/withdrawHistory
     * @secure
     * @response `200` `(WithdrawDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsForInvoice1: (params: RequestParams = {}) =>
      this.http.request<WithdrawDto[], GenericResponseObject>({
        path: `/seller/finance/withdrawHistory`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetFinanceStatement
     * @summary Get finance statement report
     * @request GET:/seller/finance/statement
     * @secure
     * @response `200` `FinanceStatementDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `FinanceStatementDto` Unauthorized
     * @response `406` `FinanceStatementDto` Code: forbidden-001, Seller not own or has not been owned presented shop
     */
    getFinanceStatement: (
      query?: {
        /**
         * Required for getting data for specific shop
         * @deprecated
         * @format int64
         */
        shopId?: number;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FinanceStatementDto, GenericResponseObject | FinanceStatementDto>({
        path: `/seller/finance/statement`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetFinanceStatementV2
     * @summary Get finance statement report
     * @request GET:/seller/finance/statementV2
     * @secure
     * @response `200` `SellerFinance` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `SellerFinance` Unauthorized
     * @response `406` `SellerFinance` Code: forbidden-001, Seller not own or has not been owned presented shop
     */
    getFinanceStatementV2: (
      query?: {
        /**
         * Required for getting data for specific shop
         * @deprecated
         * @format int64
         */
        shopId?: number;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerFinance, GenericResponseObject | SellerFinance>({
        path: `/seller/finance/statementV2`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetShopAvailableWithdrawableSum
     * @summary Get shop available withdrawable sum, Auth: FINANCE_READ
     * @request GET:/seller/finance/statement/{shopId}/available-to-withdraw
     * @deprecated
     * @secure
     * @response `200` `ShopAvailableWithdrawableSumDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopAvailableWithdrawableSum: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopAvailableWithdrawableSumDto, GenericResponseObject>({
        path: `/seller/finance/statement/${shopId}/available-to-withdraw`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetExpensesStatementDetail
     * @request GET:/seller/finance/statement/expenses/detail
     * @secure
     * @response `200` `GenericResponseExpensesStatementDetailsDtoList` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getExpensesStatementDetail: (
      query?: {
        /**
         * Required for getting data for specific shop
         * @deprecated
         * @format int64
         */
        shopId?: number;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
        /** @default "ALL" */
        period?: "ALL" | "MONTH";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseExpensesStatementDetailsDtoList, GenericResponseObject>({
        path: `/seller/finance/statement/expenses/detail`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetShopAvailableWithdrawableSum1
     * @summary Get shop available sum for withdraw
     * @request GET:/seller/finance/statement/available-for-withdraw
     * @secure
     * @response `200` `ShopAvailableWithdrawableSumDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `ShopAvailableWithdrawableSumDto` Unauthorized
     * @response `406` `ShopAvailableWithdrawableSumDto` Code: forbidden-001, Seller not own or has not been owned presented shop
     */
    getShopAvailableWithdrawableSum1: (
      query?: {
        /**
         * Required for getting data for specific shop
         * @format int64
         */
        shopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopAvailableWithdrawableSumDto, GenericResponseObject | ShopAvailableWithdrawableSumDto>({
        path: `/seller/finance/statement/available-for-withdraw`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetListReportForSeller
     * @summary Get all finances report
     * @request GET:/seller/finance/report-list
     * @secure
     * @response `200` `FinanceReportListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getListReportForSeller: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FinanceReportListDto, GenericResponseObject>({
        path: `/seller/finance/report-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetFinanceOrderItems
     * @summary Get information about orders
     * @request GET:/seller/finance/orders
     * @secure
     * @response `200` `FinanceOrderItemsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `FinanceOrderItemsDto` Unauthorized
     * @response `406` `FinanceOrderItemsDto` Code: forbidden-001, Seller not own or has not been owned presented shop
     */
    getFinanceOrderItems: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default false */
        group?: boolean;
        /** @format int64 */
        dateFrom?: number;
        /** @format int64 */
        dateTo?: number;
        /**
         * Required for getting data for specific shop
         * @deprecated
         * @format int64
         */
        shopId?: number;
        statuses?: ("TO_WITHDRAW" | "PROCESSING" | "CANCELED" | "PARTIALLY_CANCELLED")[];
        search?: string;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FinanceOrderItemsDto, GenericResponseObject | FinanceOrderItemsDto>({
        path: `/seller/finance/orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetExpenses
     * @request GET:/seller/finance/expenses
     * @secure
     * @response `200` `GenericResponseSellerPaymentInfoDtoList` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getExpenses: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * Required for getting data for specific shop
         * @deprecated
         * @format int64
         */
        shopId?: number;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
        /** @format int64 */
        dateFrom?: number;
        /** @format int64 */
        dateTo?: number;
        /** @uniqueItems true */
        sources?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerPaymentInfoDtoList, GenericResponseObject>({
        path: `/seller/finance/expenses`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-finance-controller
     * @name GetExpensesSources
     * @request GET:/seller/finance/expenses/sources
     * @secure
     * @response `200` `GenericResponsePaymentSourcesDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getExpensesSources: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * Required for getting data for specific shops
         * @uniqueItems true
         */
        shopIds?: number[];
        /** @format int64 */
        dateFrom?: number;
        /** @format int64 */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponsePaymentSourcesDto, GenericResponseObject>({
        path: `/seller/finance/expenses/sources`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает значение флага из growthbook по feature id
     *
     * @tags growthbook-proxy-controller-getFeature
     * @name GetFeature
     * @summary getFeature
     * @request GET:/seller/features/{featureId}
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFeature: (featureId: string, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/seller/features/${featureId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-compensation-controller
     * @name GetSellerCompensation
     * @summary Get seller compensation
     * @request GET:/seller/compensation/{sellerId}
     * @secure
     * @response `200` `GenericResponseCompensationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerCompensation: (sellerId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseCompensationDto, GenericResponseObject>({
        path: `/seller/compensation/${sellerId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags credit-banner-controller
     * @name GetBanner
     * @request GET:/seller/banner/credit
     * @secure
     * @response `200` `GenericResponseCreditBannerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBanner: (
      query: {
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCreditBannerDto, GenericResponseObject>({
        path: `/seller/banner/credit`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-code-controller
     * @name GetBankCodes
     * @summary Retrieve bank codes with names
     * @request GET:/seller/bank/code
     * @secure
     * @response `200` `GenericResponseListBankCodeResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBankCodes: (
      query: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListBankCodeResponse, GenericResponseObject>({
        path: `/seller/bank/code`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-account-controller
     * @name GetTransferShopRecipientNameByPhone
     * @summary GET method to obtain seller name by phone
     * @request GET:/seller/account/{phone}/contacts
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponseSellerNameDto` Seller not found by provided phone number
     * @response `429` `GenericResponseSellerNameDto` Exceed number of calls to route, available 5/hour
     */
    getTransferShopRecipientNameByPhone: (phone: string, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponseSellerNameDto>({
        path: `/seller/account/${phone}/contacts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-account-controller
     * @name GetAccountDataForBitrix
     * @request GET:/seller/account/bitrix
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GetAccountDataForBitrixRs` Unauthorized
     * @response `403` `GetAccountDataForBitrixRs` Forbidden - does not have required role (seller)
     */
    getAccountDataForBitrix: (params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GetAccountDataForBitrixRs>({
        path: `/seller/account/bitrix`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags abb-controller
     * @name GetCities
     * @request GET:/seller/abb/cities
     * @secure
     * @response `200` `GenericResponseAbbCityRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCities: (params: RequestParams = {}) =>
      this.http.request<GenericResponseAbbCityRs, GenericResponseObject>({
        path: `/seller/abb/cities`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags abb-controller
     * @name CheckDuplicate
     * @request GET:/seller/abb/check-duplicate
     * @secure
     * @response `200` `GenericResponseBoolean` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkDuplicate: (
      query: {
        inn: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseBoolean, GenericResponseObject>({
        path: `/seller/abb/check-duplicate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags abb-controller
     * @name GetBranches
     * @request GET:/seller/abb/branches
     * @secure
     * @response `200` `GenericResponseAbbBranchesRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBranches: (
      query: {
        cityId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseAbbBranchesRs, GenericResponseObject>({
        path: `/seller/abb/branches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-sale-controller
     * @name RemoveProduct2
     * @summary Удаление товара из распродажи, Auth: CALENDAR_EVENT_DELETE
     * @request DELETE:/seller/shop/{shopId}/marketing/sales/{saleId}/products/{productId}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeProduct2: (shopId: number, saleId: number, productId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/seller/shop/${shopId}/marketing/sales/${saleId}/products/${productId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-open-api-token-controller
     * @name DeleteToken
     * @request DELETE:/seller/open-api/token/{tokenId}
     * @secure
     * @response `204` `void` No Content
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteToken: (tokenId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/seller/open-api/token/${tokenId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  internal = {
    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ChangeIkpuType
     * @request PUT:/internal/support/ikpu/{id}/type
     * @secure
     * @response `204` `void` No Content
     * @response `400` `GenericResponseObject` Bad Request
     */
    changeIkpuType: (id: string, data: ChangeIkpuTypeDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/ikpu/${id}/type`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-controller
     * @name UpdateSellerVat
     * @request PUT:/internal/seller/{sellerId}/vat
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateSellerVat: (sellerId: number, data: SellerVatRequestDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/seller/${sellerId}/vat`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-compensation-controller
     * @name UpdateSellerCompensation
     * @summary Update a seller compensation
     * @request PUT:/internal/seller/compensation/{sellerCompensationId}
     * @secure
     * @response `200` `GenericResponseSellerCompensationResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateSellerCompensation: (
      sellerCompensationId: number,
      data: SellerCompensationRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerCompensationResponseDto, GenericResponseObject>({
        path: `/internal/seller/compensation/${sellerCompensationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-cms-controller
     * @name UpdateIkpuInSku
     * @request PUT:/internal/product/{productId}/sku/{skuId}/ikpu
     * @secure
     * @response `200` `void` Ok
     * @response `400` `GenericResponseObject` ikpu-001: not allowed ikpu for category
     * @response `404` `void` entity-not-found-001: Product not found by id
     */
    updateIkpuInSku: (productId: number, skuId: number, data: SkuUpdateIkpuRequestDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject | void>({
        path: `/internal/product/${productId}/sku/${skuId}/ikpu`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name GetDictionary
     * @request GET:/internal/product-classification/dictionaries/{id}
     * @secure
     * @response `200` `GenericResponseProductClassificationTypeDictionaryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDictionary: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductClassificationTypeDictionaryDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name UpdateDictionary
     * @request PUT:/internal/product-classification/dictionaries/{id}
     * @secure
     * @response `200` `GenericResponseProductClassificationTypeDictionaryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateDictionary: (id: number, data: ProductClassificationTypeDictionaryDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductClassificationTypeDictionaryDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name DeleteDictionary
     * @request DELETE:/internal/product-classification/dictionaries/{id}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteDictionary: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name GetType
     * @request GET:/internal/product-classification/dictionaries/types/{id}
     * @secure
     * @response `200` `GenericResponseProductClassificationTypeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getType: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductClassificationTypeDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/types/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name UpdateType
     * @request PUT:/internal/product-classification/dictionaries/types/{id}
     * @secure
     * @response `200` `GenericResponseProductClassificationTypeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateType: (id: number, data: ProductClassificationTypeDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductClassificationTypeDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/types/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name DeleteType
     * @request DELETE:/internal/product-classification/dictionaries/types/{id}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteType: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/types/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Cancel reservation by key
     *
     * @tags internal-invoice-controller
     * @name CancelSkuStockReservation
     * @summary cancelSkuStockReservation
     * @request PUT:/internal/invoice/sku/reservation/{reservationKey}/cancel
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponse` Invalid request
     * @response `500` `GenericResponse` Internal server error
     */
    cancelSkuStockReservation: (reservationKey: string, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponse>({
        path: `/internal/invoice/sku/reservation/${reservationKey}/cancel`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set sku stock reserved quantity(sku_stock_reservation.reserved_for_stock) for skus, also decrease or increase quantity difference for sku_stat.pending_to_stock, needed to update sku limits before sku_stat syncs. Seller without authorities 'KE_SELLER' or 'FULFILLMENT_WORKER' has a limit for the quantity, limit formula: sku_stat.available_to_stock - sku_stat.pending_to_stock
     *
     * @tags internal-invoice-controller
     * @name SetSkuStockReservedQuantity
     * @summary setSkuStockReservedQuantity
     * @request PUT:/internal/invoice/sku/reservation/set
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponse` Invalid request body or invalid quantityToStock (error code: sku-stat-001)
     * @response `404` `GenericResponse` Seller not found, error code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    setSkuStockReservedQuantity: (data: UpdateSkuStockReservationDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponse>({
        path: `/internal/invoice/sku/reservation/set`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get category field by id
     *
     * @tags category-field-controller
     * @name GetCategoryField
     * @summary getCategoryField
     * @request GET:/internal/category/fields/{id}
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Not found by id
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryField: (id: number, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Update category field
     *
     * @tags category-field-controller
     * @name UpdateCategoryField
     * @summary updateCategoryField
     * @request PUT:/internal/category/fields/{id}
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Not found by id
     * @response `500` `GenericResponse` Internal server error
     */
    updateCategoryField: (id: number, data: CategoryFieldDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete category field
     *
     * @tags category-field-controller
     * @name DeleteCategoryField
     * @summary deleteCategoryField
     * @request DELETE:/internal/category/fields/{id}
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Not found by id
     * @response `500` `GenericResponse` Internal server error
     */
    deleteCategoryField: (id: number, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update category field value
     *
     * @tags category-field-controller
     * @name UpdateCategoryFieldValue
     * @summary updateCategoryFieldValue
     * @request PUT:/internal/category/fields/values
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Value not found by id, Category not found, Field not found
     * @response `500` `GenericResponse` Internal server error
     */
    updateCategoryFieldValue: (data: CategoryFieldValueDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/values`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Create category field value
     *
     * @tags category-field-controller
     * @name CreateCategoryFieldValue
     * @summary createCategoryFieldValue
     * @request POST:/internal/category/fields/values
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Category not found or field not found
     * @response `500` `GenericResponse` Internal server error
     */
    createCategoryFieldValue: (data: CategoryFieldValueDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/values`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags yandex-metrica-controller
     * @name AddAllCounter
     * @request POST:/internal/yandex-metrica/counter/all/add
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addAllCounter: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/yandex-metrica/counter/all/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags yandex-metrica-controller
     * @name AddCounter
     * @request POST:/internal/yandex-metrica/counter/add
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addCounter: (
      query: {
        shopIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/yandex-metrica/counter/add`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-wms-post-paid-controller
     * @name CreatePaymentIntention
     * @summary Create order for courier post paid
     * @request POST:/internal/wms-post-paid/payment-order
     * @secure
     * @response `200` `GenericResponseWmsIntentionOrderResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createPaymentIntention: (data: WmsIntentionOrderRequest, params: RequestParams = {}) =>
      this.http.request<GenericResponseWmsIntentionOrderResponse, GenericResponseObject>({
        path: `/internal/wms-post-paid/payment-order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags check-token-helper-controller
     * @name GetSellerAnalyticsExtensions
     * @request POST:/internal/token/extensions/seller/analytics
     * @secure
     * @response `200` `Record<string,object>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerAnalyticsExtensions: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<Record<string, object>, GenericResponseObject>({
        path: `/internal/token/extensions/seller/analytics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags check-token-helper-controller
     * @name GetChatExtensions
     * @request POST:/internal/token/extensions/chat
     * @secure
     * @response `200` `Record<string,object>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getChatExtensions: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<Record<string, object>, GenericResponseObject>({
        path: `/internal/token/extensions/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slot-pool-controller
     * @name UpdateTimeSlotPool
     * @summary Update a timeslot pool
     * @request POST:/internal/time-slot/pool/update
     * @secure
     * @response `200` `GenericResponseTimeSlotPoolDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateTimeSlotPool: (
      query: {
        /** @format int64 */
        timeSlotRegistryId: number;
      },
      data: CreateTimeSlotPoolDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseTimeSlotPoolDto, GenericResponseObject>({
        path: `/internal/time-slot/pool/update`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slot-pool-controller
     * @name DeleteTimeSlotPool
     * @summary Delete a timeslot pool
     * @request POST:/internal/time-slot/pool/delete
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteTimeSlotPool: (
      query: {
        /** @format int64 */
        timeSlotPoolId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/internal/time-slot/pool/delete`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slot-pool-controller
     * @name CreateTimeSlotPool
     * @summary Create a timeslot pool
     * @request POST:/internal/time-slot/pool/create
     * @secure
     * @response `200` `GenericResponseTimeSlotPoolDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createTimeSlotPool: (data: CreateTimeSlotPoolDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotPoolDto, GenericResponseObject>({
        path: `/internal/time-slot/pool/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name UpdateOrderStatus
     * @request POST:/internal/support/update-order-status
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateOrderStatus: (data: OrderStatusUpdateDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/update-order-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name SendMessageToTelegram
     * @request POST:/internal/support/telegram/message
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendMessageToTelegram: (
      query: {
        content: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/telegram/message`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeIkpuInSkus
     * @request POST:/internal/support/sku/ikpu
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeIkpuInSkus: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/sku/ikpu`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeSellerVat
     * @request POST:/internal/support/seller/vat/actualize
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeSellerVat: (
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/seller/vat/actualize`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ResendSellerReturns
     * @request POST:/internal/support/seller-return/resend
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resendSellerReturns: (data: SellerReturnResendRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/seller-return/resend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name RecoveryPaidStoragePayments
     * @request POST:/internal/support/seller-return/paid-storage/payments/recovery
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    recoveryPaidStoragePayments: (data: string[], params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/seller-return/paid-storage/payments/recovery`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name RefundByReturn
     * @request POST:/internal/support/return/receipt
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    refundByReturn: (data: OrderReturnDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/return/receipt`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeVatFreeIkpu
     * @request POST:/internal/support/ikpu/vat-free/actualize
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeVatFreeIkpu: (
      query: {
        pathToFile: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/ikpu/vat-free/actualize`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeIkpu
     * @request POST:/internal/support/ikpu/actualize
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeIkpu: (
      query?: {
        pathToRuFile?: string;
        pathToUzFile?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/ikpu/actualize`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeIkpuLabels
     * @request POST:/internal/support/ikpu/actualize/labels
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeIkpuLabels: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/ikpu/actualize/labels`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ResendConfirmedEpn
     * @request POST:/internal/support/epn/resend
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resendConfirmedEpn: (data: number[], params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/epn/resend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name RefundDomeDelivery
     * @request POST:/internal/support/dolyame/delivery/refund/{orderId}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    refundDomeDelivery: (orderId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/dolyame/delivery/refund/${orderId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name UnblockSellersByCommittents
     * @request POST:/internal/support/committent/test/unblock
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    unblockSellersByCommittents: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/committent/test/unblock`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name ActualizeCommittents
     * @request POST:/internal/support/committent/actualize
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeCommittents: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/committent/actualize`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name UpdateBitrixDeal
     * @request POST:/internal/support/bitrix/deal/update
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateBitrixDeal: (data: DealUpdatedEventDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/bitrix/deal/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-controller
     * @name GetPendingToStockSku
     * @request POST:/internal/sku/pending-to-stock
     * @secure
     * @response `200` `(PendingSkuDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPendingToStockSku: (data: number[], params: RequestParams = {}) =>
      this.http.request<PendingSkuDto[], GenericResponseObject>({
        path: `/internal/sku/pending-to-stock`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-controller
     * @name GetKafkaSkus
     * @request POST:/internal/sku/kafka-sku
     * @secure
     * @response `200` `(KafkaSku)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getKafkaSkus: (data: number[], params: RequestParams = {}) =>
      this.http.request<KafkaSku[], GenericResponseObject>({
        path: `/internal/sku/kafka-sku`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-controller
     * @name GetDimensionalGroup
     * @request POST:/internal/sku/dimensional-group
     * @secure
     * @response `200` `(SkuDimensionalGroupDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDimensionalGroup: (data: number[], params: RequestParams = {}) =>
      this.http.request<SkuDimensionalGroupDto[], GenericResponseObject>({
        path: `/internal/sku/dimensional-group`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name GetCofinanceFile
     * @request GET:/internal/sku/cofinance
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCofinanceFile: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/sku/cofinance`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name CofinanceUploadFile
     * @request POST:/internal/sku/cofinance
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cofinanceUploadFile: (
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/sku/cofinance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name Rollback
     * @request DELETE:/internal/sku/cofinance
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    rollback: (data: number[], params: RequestParams = {}) =>
      this.http.request<string, GenericResponseObject>({
        path: `/internal/sku/cofinance`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name Enable
     * @request POST:/internal/sku/cofinance/enable
     * @secure
     * @response `200` `SkuCofinanceDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    enable: (
      query: {
        /** @format int64 */
        skuId: number;
        enable: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuCofinanceDto, GenericResponseObject>({
        path: `/internal/sku/cofinance/enable`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name CancelDiscount1
     * @request POST:/internal/sku/cofinance/cancel
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelDiscount1: (
      query: {
        /** @format int64 */
        skuId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<string, GenericResponseObject>({
        path: `/internal/sku/cofinance/cancel`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-controller
     * @name GetCharacteristics
     * @request POST:/internal/sku/characteristics
     * @secure
     * @response `200` `Record<string,(FeedbackCharacteristicsProduct)[]>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCharacteristics: (data: number[], params: RequestParams = {}) =>
      this.http.request<Record<string, FeedbackCharacteristicsProduct[]>, GenericResponseObject>({
        path: `/internal/sku/characteristics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-controller
     * @name GetSkuIdsByColor
     * @request POST:/internal/sku/by-color
     * @secure
     * @response `200` `(number)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuIdsByColor: (data: SkuByColor, params: RequestParams = {}) =>
      this.http.request<number[], GenericResponseObject>({
        path: `/internal/sku/by-color`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipt-sender-controller
     * @name SendAllReceipts
     * @request POST:/internal/send-receipt/all
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendAllReceipts: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/send-receipt/all`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags receipt-sender-controller
     * @name ResendAllReceipts
     * @request POST:/internal/send-receipt/all/resend
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resendAllReceipts: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/send-receipt/all/resend`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-invoice-controller
     * @name CancelInvoice1
     * @request POST:/internal/seller/shop/{shopId}/invoice/cancelInvoice
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancelInvoice1: (shopId: number, data: InvoiceIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}/invoice/cancelInvoice`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name SendPriceData
     * @request POST:/internal/seller/product/{shopId}/sendPriceData
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendPriceData: (
      shopId: number,
      query: {
        /** @format int64 */
        sellerId: number;
      },
      data: SendPriceDataDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/seller/product/${shopId}/sendPriceData`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name CreateSkuFromImport
     * @request POST:/internal/seller/product/import/{shopId}/sku
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createSkuFromImport: (
      shopId: number,
      query: {
        /** @format int64 */
        accountId: number;
      },
      data: CreateSkuDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/seller/product/import/${shopId}/sku`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name CreateProductFromImport
     * @request POST:/internal/seller/product/import/{shopId}/create
     * @secure
     * @response `200` `ProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createProductFromImport: (
      shopId: number,
      query: {
        /** @format int64 */
        accountId: number;
      },
      data: CreateProductDto,
      params: RequestParams = {},
    ) =>
      this.http.request<ProductDto, GenericResponseObject>({
        path: `/internal/seller/product/import/${shopId}/create`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-compensation-controller
     * @name CreateSellerCompensation
     * @summary Create a seller compensation
     * @request POST:/internal/seller/compensation
     * @secure
     * @response `200` `GenericResponseSellerCompensationResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createSellerCompensation: (data: SellerCompensationRequestDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerCompensationResponseDto, GenericResponseObject>({
        path: `/internal/seller/compensation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name TopUp
     * @request POST:/internal/seller-payment/top-up
     * @secure
     * @response `200` `GenericResponseSellerPaymentInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    topUp: (data: SellerPaymentTopUpDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerPaymentInfoDto, GenericResponseObject>({
        path: `/internal/seller-payment/top-up`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name Refund
     * @request POST:/internal/seller-payment/refund/{id}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    refund: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/seller-payment/refund/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name Create4
     * @request POST:/internal/seller-payment/create
     * @secure
     * @response `200` `GenericResponseSellerPaymentInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    create4: (data: CreateSellerPaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerPaymentInfoDto, GenericResponseObject>({
        path: `/internal/seller-payment/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name Confirm
     * @request POST:/internal/seller-payment/confirm/{id}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    confirm: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/seller-payment/confirm/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name Cancel1
     * @request POST:/internal/seller-payment/cancel/{id}
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cancel1: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/seller-payment/cancel/${id}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sale-controller
     * @name SaleManagementEvent
     * @request POST:/internal/sale
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saleManagementEvent: (
      data: CancelSaleDto | CreateSaleDto | ForceCancelSaleDto | UpdateSaleDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/sale`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-return-controller
     * @name ProceedReturn
     * @request POST:/internal/return/proceed
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    proceedReturn: (
      query: {
        /** @format int64 */
        returnId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/return/proceed`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-return-controller
     * @name ProceedReturn1
     * @request POST:/internal/return/proceed/batch
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    proceedReturn1: (data: number[], params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/return/proceed/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveSearchResult
     * @request POST:/internal/resolver/search
     * @secure
     * @response `200` `Record<string,object>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveSearchResult: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<Record<string, object>, GenericResponseObject>({
        path: `/internal/resolver/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveSearchProductResult
     * @request POST:/internal/resolver/search/product
     * @secure
     * @response `200` `ProductsContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveSearchProductResult: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<ProductsContainerDto, GenericResponseObject>({
        path: `/internal/resolver/search/product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveSearchFiltersResult
     * @request POST:/internal/resolver/search/filters
     * @secure
     * @response `200` `CustomerFiltersContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveSearchFiltersResult: (data: Record<string, object>, params: RequestParams = {}) =>
      this.http.request<CustomerFiltersContainerDto, GenericResponseObject>({
        path: `/internal/resolver/search/filters`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveSearchCategoryResult
     * @request POST:/internal/resolver/search/category
     * @secure
     * @response `200` `CategoryContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveSearchCategoryResult: (
      data: Record<string, object>,
      query?: {
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CategoryContainerDto, GenericResponseObject>({
        path: `/internal/resolver/search/category`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveExploreResult
     * @request POST:/internal/resolver/explore
     * @secure
     * @response `200` `GetCategoryResp` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveExploreResult: (
      data: SearchExploreRs,
      query?: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        offerCategoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GetCategoryResp, GenericResponseObject>({
        path: `/internal/resolver/explore`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveExploreProductResult
     * @request POST:/internal/resolver/explore/product
     * @secure
     * @response `200` `ProductsContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveExploreProductResult: (
      data: SearchExploreRs,
      query?: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        offerCategoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductsContainerDto, GenericResponseObject>({
        path: `/internal/resolver/explore/product`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveExploreFiltersResult
     * @request POST:/internal/resolver/explore/filters
     * @secure
     * @response `200` `CustomerFiltersContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveExploreFiltersResult: (
      data: SearchExploreRs,
      query?: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        offerCategoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CustomerFiltersContainerDto, GenericResponseObject>({
        path: `/internal/resolver/explore/filters`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name ResolveExploreCategoryResult
     * @request POST:/internal/resolver/explore/category
     * @secure
     * @response `200` `CategoryContainerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolveExploreCategoryResult: (
      data: SearchExploreRs,
      query?: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        offerCategoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CategoryContainerDto, GenericResponseObject>({
        path: `/internal/resolver/explore/category`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Return fbs invoice document file
     *
     * @tags internal-report-controller-generateFbsInvoice
     * @name GenerateFbsInvoice
     * @summary generateFbsInvoice
     * @request POST:/internal/report/generate-fbs-invoice
     * @secure
     * @response `200` `File` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `string` Internal server error, error code: internal-server-error-002
     */
    generateFbsInvoice: (data: GenerateFbsInvoiceRequestFbsInvoiceDocumentItem, params: RequestParams = {}) =>
      this.http.request<File, GenericResponseObject | string>({
        path: `/internal/report/generate-fbs-invoice`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-receipt-controller
     * @name RefundReceipt
     * @request POST:/internal/receipt/refund
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    refundReceipt: (
      query: {
        receiptIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/receipt/refund`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-receipt-controller
     * @name GenerateReceipt
     * @request POST:/internal/receipt/generate
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generateReceipt: (
      query: {
        orderIds: number[];
        paymentMethod:
          | "UNKNOWN"
          | "FULL_PREPAYMENT"
          | "PARTIAL_PREPAYMENT"
          | "ADVANCE_PAY"
          | "FULL_PAY"
          | "PARTIAL_PAY_AND_CREDIT"
          | "CREDIT"
          | "CREDIT_PAYMENT";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/receipt/generate`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetProductValues
     * @request POST:/internal/product/values
     * @secure
     * @response `200` `(ProductReviewFilterValueDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductValues: (
      query: {
        search: string;
        /** @format int32 */
        size: number;
        /** @format int32 */
        page: number;
      },
      data: number[],
      params: RequestParams = {},
    ) =>
      this.http.request<ProductReviewFilterValueDto[], GenericResponseObject>({
        path: `/internal/product/values`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name GetTypes
     * @request GET:/internal/product-classification/dictionaries/types
     * @secure
     * @response `200` `GenericResponseListProductClassificationTypeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTypes: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductClassificationTypeDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/types`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name Create5
     * @request POST:/internal/product-classification/dictionaries/types
     * @secure
     * @response `200` `GenericResponseProductClassificationTypeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    create5: (data: CreateProductClassificationTypeDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductClassificationTypeDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries/types`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sale-controller
     * @name SaleSkuSoldQuantityEvent
     * @request POST:/internal/outbox-support/sale-sku-sold-quantity
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saleSkuSoldQuantityEvent: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/outbox-support/sale-sku-sold-quantity`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sale-controller
     * @name SaleProductOutboxSend
     * @request POST:/internal/outbox-support/sale-product-send
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saleProductOutboxSend: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/outbox-support/sale-product-send`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sale-controller
     * @name SaleProductOutboxSendFromDb
     * @request POST:/internal/outbox-support/sale-product-send-from-db
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saleProductOutboxSendFromDb: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/outbox-support/sale-product-send-from-db`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags outbox-support-controller
     * @name ConsumeOutboxPaymentOrder
     * @request POST:/internal/outbox-support/payment-order
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    consumeOutboxPaymentOrder: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/outbox-support/payment-order`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-item-controller
     * @name GetOrderItemByIds
     * @request POST:/internal/order-item
     * @secure
     * @response `200` `(OrderItemDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderItemByIds: (data: GetOrderItemsRq, params: RequestParams = {}) =>
      this.http.request<OrderItemDto[], GenericResponseObject>({
        path: `/internal/order-item`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-item-controller
     * @name SaveFeedback1
     * @request POST:/internal/order-item/{orderItemId}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saveFeedback1: (orderItemId: number, data: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/order-item/${orderItemId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-item-controller
     * @name DeleteFeedback
     * @request DELETE:/internal/order-item/{orderItemId}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteFeedback: (orderItemId: number, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/order-item/${orderItemId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create invoice and complete sku stock reservation
     *
     * @tags internal-invoice-controller
     * @name PackingCreateInvoice
     * @summary packingCreateInvoice
     * @request POST:/internal/invoice/{shopId}/create
     * @secure
     * @response `200` `GenericResponseInvoiceInListDto` Success
     * @response `400` `GenericResponse` Invalid request body
     * @response `403` `GenericResponse` Seller does not have the 'INVOICE_CREATE' permission for shop, code: forbidden-001
     * @response `404` `GenericResponse` Shop or seller not found by id, code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    packingCreateInvoice: (shopId: number, data: ErpPackingInternalCreateInvoiceDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseInvoiceInListDto, GenericResponse>({
        path: `/internal/invoice/${shopId}/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-invoice-controller
     * @name UpdateTimeSlot3
     * @request POST:/internal/invoice/v2/{shopId}/time-slot/set
     * @secure
     * @response `200` `GenericResponseListInvoiceInListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateTimeSlot3: (shopId: number, data: InvoiceTimeslotsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseListInvoiceInListDto, GenericResponseObject>({
        path: `/internal/invoice/v2/${shopId}/time-slot/set`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create invoice without time-slot and stock
     *
     * @tags internal-invoice-controller
     * @name CreateInvoiceInternal
     * @summary createInvoiceInternal
     * @request POST:/internal/invoice/v2/{shopId}/create
     * @secure
     * @response `200` `GenericResponseInvoiceInListDto` Success
     * @response `400` `GenericResponse` Invalid request body
     * @response `403` `GenericResponse` Seller does not have the 'INVOICE_CREATE' permission for shop, code: forbidden-001
     * @response `404` `GenericResponse` Shop or seller not found by id, code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    createInvoiceInternal: (shopId: number, data: InternalCreateInvoiceDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseInvoiceInListDto, GenericResponse>({
        path: `/internal/invoice/v2/${shopId}/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Resend invoices to kafka invoice_update topic
     *
     * @tags internal-invoice-controller
     * @name ResendInvoicesUpdateToKafka
     * @summary resendInvoicesUpdateToKafka
     * @request POST:/internal/invoice/update/resend
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resendInvoicesUpdateToKafka: (data: number[], params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/invoice/update/resend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of available registry time slots, for ke_seller or seller with permission 'FULFILLMENT_WORKER' all slots is available
     *
     * @tags internal-invoice-controller
     * @name GetTimeSlots4
     * @summary getTimeSlots
     * @request POST:/internal/invoice/time-slot/{sourceName}
     * @secure
     * @response `200` `GenericResponseTimeSlotRs` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Seller not found, error code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    getTimeSlots4: (sourceName: string, data: InternalTimeSlotRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotRs, GenericResponseObject | GenericResponse>({
        path: `/internal/invoice/time-slot/${sourceName}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Reserve time slot, for ke_seller or seller with permission 'FULFILLMENT_WORKER' all slots is available and reserved capacity is 0
     *
     * @tags internal-invoice-controller
     * @name ReserveTimeSlot
     * @summary reserveTimeSlot
     * @request POST:/internal/invoice/time-slot/{sourceName}/reserve
     * @secure
     * @response `200` `GenericResponseTimeSlotReservationDto` Success
     * @response `400` `GenericResponse` Time from should be later than 24h from now: time-slot-005
     * @response `404` `GenericResponse` Seller not found, error code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    reserveTimeSlot: (sourceName: string, data: InternalTimeSlotReservationDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotReservationDto, GenericResponse>({
        path: `/internal/invoice/time-slot/${sourceName}/reserve`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update time slot reservation, for ke_seller or seller with permission 'FULFILLMENT_WORKER' all slots is available and reserved capacity is 0
     *
     * @tags internal-invoice-controller
     * @name UpdateTimeSlotReservation
     * @summary updateTimeSlotReservation
     * @request POST:/internal/invoice/time-slot/{sourceName}/reservation/{reservationId}/update
     * @secure
     * @response `200` `GenericResponseTimeSlotReservationDto` Success
     * @response `400` `GenericResponse` Time from should be later than 24h from now: time-slot-005
     * @response `404` `GenericResponse` Seller not found, error code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    updateTimeSlotReservation: (
      sourceName: string,
      reservationId: number,
      data: InternalTimeSlotReservationDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseTimeSlotReservationDto, GenericResponse>({
        path: `/internal/invoice/time-slot/${sourceName}/reservation/${reservationId}/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel time slot reservation by id
     *
     * @tags internal-invoice-controller
     * @name CancelTimeSlotReservation
     * @summary cancelTimeSlotReservation
     * @request POST:/internal/invoice/time-slot/reservation/{reservationId}/cancel
     * @secure
     * @response `200` `GenericResponseTimeSlotReservationDto` Success
     * @response `400` `GenericResponse` Time from should be later than 24h from now: time-slot-005
     * @response `404` `GenericResponse` Seller not found, error code: entity-not-found-001
     * @response `500` `GenericResponse` Internal server error
     */
    cancelTimeSlotReservation: (
      reservationId: number,
      data: InternalTimeSlotReservationDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseTimeSlotReservationDto, GenericResponse>({
        path: `/internal/invoice/time-slot/reservation/${reservationId}/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name UpdateFilter
     * @summary Update a filter value
     * @request POST:/internal/filters/update
     * @secure
     * @response `200` `GenericResponseFilterValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateFilter: (data: UpdateFilterValueDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseFilterValueDto, GenericResponseObject>({
        path: `/internal/filters/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name CreateSkuFilterValues
     * @summary Create sku filter values
     * @request POST:/internal/filters/sku/create
     * @secure
     * @response `200` `GenericResponseSkuFilterValueResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createSkuFilterValues: (data: SkuFilterValueRequest, params: RequestParams = {}) =>
      this.http.request<GenericResponseSkuFilterValueResponse, GenericResponseObject>({
        path: `/internal/filters/sku/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name UpdateProductFilterValues
     * @summary Update product filter values
     * @request POST:/internal/filters/product/update
     * @secure
     * @response `200` `GenericResponseProductFilterValueResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateProductFilterValues: (data: ProductFilterValueRequest, params: RequestParams = {}) =>
      this.http.request<GenericResponseProductFilterValueResponse, GenericResponseObject>({
        path: `/internal/filters/product/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name DeleteFilter
     * @summary Delete a filter value
     * @request POST:/internal/filters/delete
     * @secure
     * @response `200` `GenericResponseFilterValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteFilter: (
      query: {
        /** @format int64 */
        filterValueId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseFilterValueDto, GenericResponseObject>({
        path: `/internal/filters/delete`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name CreateFilter
     * @summary Create a filter value for filterId
     * @request POST:/internal/filters/create
     * @secure
     * @response `200` `GenericResponseFilterValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createFilter: (data: CreateFilterValueDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseFilterValueDto, GenericResponseObject>({
        path: `/internal/filters/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update pvz delivery min price in provided cities (or in all cities if not provided)
     *
     * @tags internal-delivery-conditions-controller
     * @name UpdatePvzDeliveryMinPrice
     * @summary updatePvzDeliveryMinPrice
     * @request POST:/internal/delivery-conditions/update-pvz-delivery-min-price
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updatePvzDeliveryMinPrice: (data: DeliveryConditionsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/delivery-conditions/update-pvz-delivery-min-price`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Enable paid delivery to delivery points in provided cities (or in all cities if not provided)
     *
     * @tags internal-delivery-conditions-controller
     * @name EnablePaidDeliveryToDeliveryPoint
     * @summary enablePaidDeliveryToDeliveryPoint
     * @request POST:/internal/delivery-conditions/enable-paid-delivery-dp
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    enablePaidDeliveryToDeliveryPoint: (data: DeliveryConditionsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/delivery-conditions/enable-paid-delivery-dp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Enable minimal order restriction in provided cities (or in all cities if not provided)
     *
     * @tags internal-delivery-conditions-controller
     * @name EnableMinimalOrderRestriction
     * @summary enableMinimalOrderRestriction
     * @request POST:/internal/delivery-conditions/enable-minimal-order-restriction
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    enableMinimalOrderRestriction: (data: MinimalOrderRestrictionConditionDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/delivery-conditions/enable-minimal-order-restriction`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-card-controller
     * @name Resolve
     * @request POST:/internal/customer/sku-card
     * @secure
     * @response `200` `(SkuCardDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolve: (
      data: number[],
      query?: {
        /** @format int64 */
        customerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuCardDto[], GenericResponseObject>({
        path: `/internal/customer/sku-card`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-card-controller
     * @name Resolve1
     * @request POST:/internal/customer/product-card/product
     * @secure
     * @response `200` `(CustomerProductDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resolve1: (data: number[], params: RequestParams = {}) =>
      this.http.request<CustomerProductDto[], GenericResponseObject>({
        path: `/internal/customer/product-card/product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-legal-customer-controller
     * @name SendUpdEmail
     * @request POST:/internal/customer/legal/send-upd
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendUpdEmail: (data: SendUpdEmailRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/customer/legal/send-upd`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-customer-gift-controller
     * @name ProcessPaymartGifts
     * @request POST:/internal/customer/gift/pepsi/process-paymart-gifts
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    processPaymartGifts: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/customer/gift/pepsi/process-paymart-gifts`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-customer-gift-controller
     * @name CheckPaymartPepsiGift
     * @request POST:/internal/customer/gift/pepsi/paymart-mfo
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkPaymartPepsiGift: (data: OrderIdDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/internal/customer/gift/pepsi/paymart-mfo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Возвращает доступные для обновления остатков FBS SKU
     *
     * @tags internal-core-fbs-sku-stock-controller-getSkuAmounts
     * @name GetSkuAmounts
     * @summary getSkuAmounts
     * @request GET:/internal/core/fbs/sku/stocks
     * @secure
     * @response `200` `GenericResponseSellerFbsSkuStockUpdateDto` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `403` `GenericResponse` У селлера нет доступа к переданным shopIds, необходимы права 'SKU_UPDATE'
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    getSkuAmounts: (
      query: {
        /** @format int64 */
        sellerId: number;
        shopIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerFbsSkuStockUpdateDto, GenericResponseObject | GenericResponse>({
        path: `/internal/core/fbs/sku/stocks`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Обновляет FBS остатки по переданным товарам
     *
     * @tags internal-core-fbs-sku-stock-controller-updateSkuAmounts
     * @name UpdateSkuAmounts
     * @summary updateSkuAmounts
     * @request POST:/internal/core/fbs/sku/stocks
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponse` Возможнные коды ошибок:<br> seller-order-18 - SKU из списка не найден;<br> fbs-1-category-not-allowed - Категория ску недоступна для продажи по FBS;<br>
     * @response `403` `GenericResponse` У селлера нет доступа к переданным товарам, необходимы права 'SKU_UPDATE'
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    updateSkuAmounts: (
      query: {
        /** @format int64 */
        sellerId: number;
      },
      data: SellerFbsSkuStockUpdateDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponse>({
        path: `/internal/core/fbs/sku/stocks`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Обновляет FBS остатки по переданным товарам в increase режиме
     *
     * @tags internal-core-fbs-sku-stock-controller-increaseFbsAmount
     * @name IncreaseFbsAmount
     * @summary increaseFbsAmount
     * @request POST:/internal/core/fbs/sku/stocks/increase
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponse` Возможнные коды ошибок:<br> seller-order-18 - SKU из списка не найден;<br> fbs-1-category-not-allowed - Категория ску недоступна для продажи по FBS;<br>
     * @response `403` `GenericResponse` У селлера нет доступа к переданным товарам, необходимы права 'SKU_UPDATE'
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    increaseFbsAmount: (
      query: {
        /** @format int64 */
        shopId: number;
      },
      data: SellerFbsSkuStockUpdateDto,
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponse>({
        path: `/internal/core/fbs/sku/stocks/increase`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Обновляет FBS остатки по переданным товарам в force режиме
     *
     * @tags internal-core-fbs-sku-stock-controller-updateSkuAmountsForce
     * @name UpdateSkuAmountsForce
     * @summary updateSkuAmountsForce
     * @request POST:/internal/core/fbs/sku/stocks/force
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponse` Возможнные коды ошибок:<br> seller-order-18 - SKU из списка не найден;<br> fbs-1-category-not-allowed - Категория ску недоступна для продажи по FBS;<br>
     * @response `403` `GenericResponse` У селлера нет доступа к переданным товарам, необходимы права 'SKU_UPDATE'
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    updateSkuAmountsForce: (data: SellerFbsSkuStockUpdateDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponse>({
        path: `/internal/core/fbs/sku/stocks/force`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get all category fields
     *
     * @tags category-field-controller
     * @name GetCategoryFields1
     * @summary getCategoryFields
     * @request GET:/internal/category/fields
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryFields1: (params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Create category field
     *
     * @tags category-field-controller
     * @name CreateCategoryField
     * @summary createCategoryField
     * @request POST:/internal/category/fields
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponse` Internal server error
     */
    createCategoryField: (data: CategoryFieldDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags abb-controller
     * @name Auth
     * @request POST:/internal/abb/auth
     * @secure
     * @response `200` `GenericResponseTokenRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    auth: (params: RequestParams = {}) =>
      this.http.request<GenericResponseTokenRs, GenericResponseObject>({
        path: `/internal/abb/auth`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-wms-post-paid-controller
     * @name GetIntentionInfo
     * @summary Get actual intention info
     * @request GET:/internal/wms-post-paid/intention-info
     * @secure
     * @response `200` `GenericResponseWmsIntentionOrderResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getIntentionInfo: (
      query: {
        /** @format int64 */
        intentionId: number;
        /** @format int64 */
        orderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseWmsIntentionOrderResponse, GenericResponseObject>({
        path: `/internal/wms-post-paid/intention-info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-payment-order-controller
     * @name GetPaymentRequest
     * @request GET:/internal/v2/paymentOrder
     * @secure
     * @response `200` `UzumBankPaymentRequest` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPaymentRequest: (
      query: {
        externalOrderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<UzumBankPaymentRequest, GenericResponseObject>({
        path: `/internal/v2/paymentOrder`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-payment-order-controller
     * @name GetTinkoffPaymentRequest
     * @request GET:/internal/tinkoff/paymentOrder
     * @secure
     * @response `200` `TinkoffPaymentRequest` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTinkoffPaymentRequest: (
      query: {
        orderItemId: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<TinkoffPaymentRequest, GenericResponseObject>({
        path: `/internal/tinkoff/paymentOrder`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags time-slot-pool-controller
     * @name GetTimeSlotPools
     * @summary Get all existing timeslot pools
     * @request GET:/internal/time-slot/pool/all
     * @secure
     * @response `200` `GenericResponseTimeSlotPoolListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTimeSlotPools: (params: RequestParams = {}) =>
      this.http.request<GenericResponseTimeSlotPoolListDto, GenericResponseObject>({
        path: `/internal/time-slot/pool/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags support-internal-handlers-controller
     * @name SendInvoiceOutbox
     * @request GET:/internal/support/invoice/outbox/send
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    sendInvoiceOutbox: (
      query?: {
        /**
         * @format int32
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/support/invoice/outbox/send`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetSkuGroupInfo1
     * @request GET:/internal/skugroup/info
     * @secure
     * @response `200` `(SkuGroupInfoDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuGroupInfo1: (
      query: {
        /** @uniqueItems true */
        skuGroupIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuGroupInfoDto[], GenericResponseObject>({
        path: `/internal/skugroup/info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-seller-controller
     * @name GetSkuGroupValues
     * @request GET:/internal/skugroup-seller
     * @secure
     * @response `200` `(SkuGroupSellerDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuGroupValues: (
      query: {
        skuGroupIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SkuGroupSellerDto[], GenericResponseObject>({
        path: `/internal/skugroup-seller`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-restriction-controller
     * @name GetRestrictions
     * @request GET:/internal/sku/restriction
     * @secure
     * @response `200` `Record<string,SkuRestrictionDto>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRestrictions: (
      query: {
        /** @format int64 */
        customerId?: number;
        skuIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<Record<string, SkuRestrictionDto>, GenericResponseObject>({
        path: `/internal/sku/restriction`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-sku-cofinance-controller
     * @name GetCofinanceTemplate
     * @request GET:/internal/sku/cofinance/template
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCofinanceTemplate: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/sku/cofinance/template`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-shop-controller
     * @name GetSellersByShopIds
     * @request GET:/internal/shops/owner-seller
     * @secure
     * @response `200` `(SellerOwnerByShopsDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellersByShopIds: (
      query: {
        /** @uniqueItems true */
        shopIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerOwnerByShopsDto[], GenericResponseObject>({
        path: `/internal/shops/owner-seller`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-shop-controller
     * @name GetShops1
     * @request GET:/internal/shop
     * @secure
     * @response `200` `Record<string,ShopDto>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShops1: (
      query: {
        /** @uniqueItems true */
        shopIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<Record<string, ShopDto>, GenericResponseObject>({
        path: `/internal/shop`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name FindSellerPaymentByShop
     * @request GET:/internal/shop/seller-payment
     * @secure
     * @response `200` `SellerPaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findSellerPaymentByShop: (
      query: {
        shopIds: number[];
        externalId: string;
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerPaymentDto, GenericResponseObject>({
        path: `/internal/shop/seller-payment`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-shop-controller
     * @name GetShopsBySellerId
     * @request GET:/internal/shop-by-seller
     * @secure
     * @response `200` `(SellerShopOwnershipDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopsBySellerId: (
      query: {
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerShopOwnershipDto[], GenericResponseObject>({
        path: `/internal/shop-by-seller`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns limited data about the seller's contract details, including contract type and seller type, by their ID. Accessible for internal use only.
     *
     * @tags internal-seller-controller
     * @name GetSellerContractDetails
     * @summary Retrieve seller's contract details
     * @request GET:/internal/sellers/{id}/contract-details
     * @secure
     * @response `200` `SellerContractDetailsDto` Successfully retrieved contract details
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `SellerContractDetailsDto` Seller not found
     * @response `500` `SellerContractDetailsDto` Internal server error
     */
    getSellerContractDetails: (id: number, params: RequestParams = {}) =>
      this.http.request<SellerContractDetailsDto, GenericResponseObject | SellerContractDetailsDto>({
        path: `/internal/sellers/${id}/contract-details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-return-controller
     * @name GetSellerReturns1
     * @request GET:/internal/seller/{sellerId}/return
     * @secure
     * @response `200` `(SellerReturnDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerReturns1: (
      sellerId: number,
      query?: {
        /** @format int64 */
        returnId?: number;
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @min 0
         * @max 50
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerReturnDto[], GenericResponseObject>({
        path: `/internal/seller/${sellerId}/return`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-invoice-controller
     * @name GetInvoicesWithSku
     * @request GET:/internal/seller/{sellerId}/invoice
     * @secure
     * @response `200` `(InvoiceWithSkuListDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoicesWithSku: (
      sellerId: number,
      query?: {
        /**
         * @format int32
         * @min 0
         * @max 50
         * @default 50
         */
        size?: number;
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceWithSkuListDto[], GenericResponseObject>({
        path: `/internal/seller/${sellerId}/invoice`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-controller
     * @name GetKafkaShop
     * @request GET:/internal/seller/shop/{shopId}
     * @secure
     * @response `200` `KafkaShop` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getKafkaShop: (shopId: number, params: RequestParams = {}) =>
      this.http.request<KafkaShop, GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-return-controller
     * @name GetSellerReturns2
     * @request GET:/internal/seller/shop/{shopId}/return
     * @secure
     * @response `200` `GenericResponseListSellerReturnLiteDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerReturns2: (
      shopId: number,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSellerReturnLiteDto, GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}/return`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-return-controller
     * @name GetSellerReturn1
     * @request GET:/internal/seller/shop/{shopId}/return/{returnId}
     * @secure
     * @response `200` `GenericResponseSellerReturnDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerReturn1: (returnId: number, shopId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseSellerReturnDto, GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}/return/${returnId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-invoice-controller
     * @name GetInvoices1
     * @request GET:/internal/seller/shop/{shopId}/invoice
     * @secure
     * @response `200` `(InvoiceInListDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoices1: (
      shopId: number,
      query?: {
        /** @format int32 */
        size?: number;
        /** @format int32 */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceInListDto[], GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}/invoice`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-shop-invoice-controller
     * @name GetInvoiceProducts1
     * @request GET:/internal/seller/shop/{shopId}/invoice/getInvoiceProducts
     * @secure
     * @response `200` `(ProductForInvoiceDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInvoiceProducts1: (
      shopId: number,
      query: {
        /** @format int64 */
        invoiceId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductForInvoiceDto[], GenericResponseObject>({
        path: `/internal/seller/shop/${shopId}/invoice/getInvoiceProducts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name GetProducts6
     * @request GET:/internal/seller/product/shop/{shopId}
     * @secure
     * @response `200` `AllProductsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts6: (
      shopId: number,
      query: {
        /** @default "" */
        searchQuery?: string;
        /** @default "DEFAULT" */
        sortBy?: "DEFAULT" | "ORDERS" | "PRICE" | "ID" | "ROI" | "CONVERSION" | "LEFTOVERS" | "CREATED_AND_TITLE";
        /** @default "ASC" */
        order?: "ASC" | "DESC";
        /** @format int32 */
        size: number;
        /**
         * @format int32
         * @min 0
         */
        page: number;
        productRank?: "A" | "B" | "C" | "N" | "D";
        /** @default "ALL" */
        filter?:
          | "ALL"
          | "ACTIVE"
          | "INACTIVE"
          | "WARNING"
          | "WITH_SKU"
          | "ARCHIVE"
          | "DEFECTED"
          | "WITHOUT_REQUIRED_FILTERS"
          | "FORECAST_OUT_OF_STOCK";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AllProductsDto, GenericResponseObject>({
        path: `/internal/seller/product/shop/${shopId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name IsValidOkpd2
     * @request GET:/internal/seller/product/okpd2/validation
     * @secure
     * @response `200` `boolean` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isValidOkpd2: (
      query: {
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, GenericResponseObject>({
        path: `/internal/seller/product/okpd2/validation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-product-controller
     * @name IsValidBarcode1
     * @request GET:/internal/seller/product/barcode/validation
     * @secure
     * @response `200` `BarcodeValidationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isValidBarcode1: (
      query: {
        /** @format int64 */
        barcode: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<BarcodeValidationDto, GenericResponseObject>({
        path: `/internal/seller/product/barcode/validation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-controller
     * @name GetSellerByOrderItemId
     * @request GET:/internal/seller/orderItem
     * @secure
     * @response `200` `SellerInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSellerByOrderItemId: (
      query: {
        /** @format int64 */
        orderItemId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerInfo, GenericResponseObject>({
        path: `/internal/seller/orderItem`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags yandex-metrica-controller
     * @name GetMetricsCounter
     * @request GET:/internal/seller/metrica/counter
     * @secure
     * @response `200` `GenericResponseLong` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMetricsCounter: (
      query: {
        /** @format int64 */
        id: number;
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseLong, GenericResponseObject>({
        path: `/internal/seller/metrica/counter`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает разрешенные юридические лица для текущего аккаунта
     *
     * @tags seller-legal-info-controller-getSellerLegalInfo
     * @name GetSellerLegalInfo
     * @summary getSellerLegalInfo
     * @request GET:/internal/seller/legal-info
     * @secure
     * @response `200` `GenericResponseListSellerLegalInfoDto` Success
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponse` Internal server error, error code: internal-server-error-002
     */
    getSellerLegalInfo: (
      query: {
        /** @format int64 */
        sellerId: number;
        permission: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListSellerLegalInfoDto, GenericResponseObject | GenericResponse>({
        path: `/internal/seller/legal-info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-finance-controller
     * @name GetFinanceOrderItems1
     * @request GET:/internal/seller/finance/orders
     * @secure
     * @response `200` `FinanceOrderItemsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFinanceOrderItems1: (
      query: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @default false */
        group?: boolean;
        /** @format int64 */
        dateFrom?: number;
        /** @format int64 */
        dateTo?: number;
        statuses?: ("TO_WITHDRAW" | "PROCESSING" | "CANCELED" | "PARTIALLY_CANCELLED")[];
        /** @uniqueItems true */
        shopIds?: number[];
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FinanceOrderItemsDto, GenericResponseObject>({
        path: `/internal/seller/finance/orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-filter-controller
     * @name GetProductFilterValues1
     * @request GET:/internal/seller/filter/values
     * @secure
     * @response `200` `(ProductFilterValueDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductFilterValues1: (
      query: {
        /** @format int64 */
        filterId: number;
        value: string;
        /** @format int32 */
        page: number;
        /** @format int32 */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFilterValueDto[], GenericResponseObject>({
        path: `/internal/seller/filter/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-filter-controller
     * @name GetActiveProductFilters1
     * @request GET:/internal/seller/filter/active
     * @secure
     * @response `200` `(ProductFilterDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActiveProductFilters1: (
      query?: {
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductFilterDto[], GenericResponseObject>({
        path: `/internal/seller/filter/active`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-characteristic-controller
     * @name FindCharByNames
     * @request GET:/internal/seller/characteristic
     * @secure
     * @response `200` `(BaseCharacteristicDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findCharByNames: (
      query: {
        charName: string[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<BaseCharacteristicDto[], GenericResponseObject>({
        path: `/internal/seller/characteristic`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-characteristic-controller
     * @name FindCharById
     * @request GET:/internal/seller/characteristic/{charId}
     * @secure
     * @response `200` `BaseCharacteristicDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findCharById: (charId: number, params: RequestParams = {}) =>
      this.http.request<BaseCharacteristicDto, GenericResponseObject>({
        path: `/internal/seller/characteristic/${charId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-characteristic-controller
     * @name FindCharValuesByTitles
     * @request GET:/internal/seller/characteristic/{charId}/values
     * @secure
     * @response `200` `(BaseCharValueDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findCharValuesByTitles: (
      charId: number,
      query: {
        charName: string[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<BaseCharValueDto[], GenericResponseObject>({
        path: `/internal/seller/characteristic/${charId}/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-characteristic-controller
     * @name FindCharValueById
     * @request GET:/internal/seller/characteristic/value/{charValueId}
     * @secure
     * @response `200` `BaseCharValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findCharValueById: (charValueId: number, params: RequestParams = {}) =>
      this.http.request<BaseCharValueDto, GenericResponseObject>({
        path: `/internal/seller/characteristic/value/${charValueId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-category-controller
     * @name FindAllByIdIn
     * @request GET:/internal/seller/category
     * @secure
     * @response `200` `(ShopCategoryDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findAllByIdIn: (
      query: {
        /** @uniqueItems true */
        id: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ShopCategoryDto[], GenericResponseObject>({
        path: `/internal/seller/category`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-category-controller
     * @name FindById
     * @request GET:/internal/seller/category/{categoryId}
     * @secure
     * @response `200` `ShopCategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findById: (categoryId: number, params: RequestParams = {}) =>
      this.http.request<ShopCategoryDto, GenericResponseObject>({
        path: `/internal/seller/category/${categoryId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name FindSellerPayment
     * @request GET:/internal/seller-payment
     * @secure
     * @response `200` `SellerPaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findSellerPayment: (
      query: {
        /** @format int64 */
        sellerId: number;
        externalId: string;
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<SellerPaymentDto, GenericResponseObject>({
        path: `/internal/seller-payment`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-seller-payment-controller
     * @name GetExpenses1
     * @request GET:/internal/seller-payment/expenses
     * @secure
     * @response `200` `GenericResponseSellerPaymentInfoDtoList` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getExpenses1: (
      query: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @uniqueItems true */
        shopIds?: number[];
        /** @format int64 */
        dateFrom?: number;
        /** @format int64 */
        dateTo?: number;
        /** @uniqueItems true */
        sources?: string[];
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseSellerPaymentInfoDtoList, GenericResponseObject>({
        path: `/internal/seller-payment/expenses`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-resolver-controller
     * @name GetCategoryById
     * @request GET:/internal/resolver/category/{categoryId}
     * @secure
     * @response `200` `CategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCategoryById: (categoryId: number, params: RequestParams = {}) =>
      this.http.request<CategoryDto, GenericResponseObject>({
        path: `/internal/resolver/category/${categoryId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetProducts7
     * @request GET:/internal/product
     * @secure
     * @response `200` `Record<string,ProductDto>` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts7: (
      query: {
        /** @uniqueItems true */
        orderItemIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<Record<string, ProductDto>, GenericResponseObject>({
        path: `/internal/product`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetProductRating
     * @request GET:/internal/product/rating
     * @secure
     * @response `200` `ProductRatingBarDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductRating: (
      query: {
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductRatingBarDto, GenericResponseObject>({
        path: `/internal/product/rating`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetProductMinPriceInfoDto
     * @request GET:/internal/product/min-price-info
     * @secure
     * @response `200` `(ProductMinPriceInfoDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductMinPriceInfoDto: (
      query: {
        /** @uniqueItems true */
        productIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductMinPriceInfoDto[], GenericResponseObject>({
        path: `/internal/product/min-price-info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name GetProductInfo
     * @request GET:/internal/product/info
     * @secure
     * @response `200` `(ProductInfoDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductInfo: (
      query: {
        /** @uniqueItems true */
        productIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductInfoDto[], GenericResponseObject>({
        path: `/internal/product/info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-seller-controller
     * @name GetProductValues1
     * @request GET:/internal/product-seller
     * @secure
     * @response `200` `(ProductSellerDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductValues1: (
      query: {
        productIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductSellerDto[], GenericResponseObject>({
        path: `/internal/product-seller`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-product-controller
     * @name IsProductOwner
     * @request GET:/internal/product-owner
     * @secure
     * @response `200` `boolean` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    isProductOwner: (
      query: {
        /** @format int64 */
        customerAccountId: number;
        /** @format int64 */
        productId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, GenericResponseObject>({
        path: `/internal/product-owner`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-classification-dictionary-controller
     * @name GetDictionaries
     * @request GET:/internal/product-classification/dictionaries
     * @secure
     * @response `200` `GenericResponseListProductClassificationTypeDictionaryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDictionaries: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductClassificationTypeDictionaryDto, GenericResponseObject>({
        path: `/internal/product-classification/dictionaries`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags paymart-mfo-internal-controller
     * @name GetUserLimitWms
     * @request GET:/internal/paymart/information/mfo/limit-wms
     * @secure
     * @response `200` `UserLimitWmsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getUserLimitWms: (
      query: {
        phoneNumber: string;
        /** @format int64 */
        orderId: number;
        /** @format int64 */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<UserLimitWmsDto, GenericResponseObject>({
        path: `/internal/paymart/information/mfo/limit-wms`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-shop-organizations-controller
     * @name GetOrganizations1
     * @summary Receive list of own organizations(currently shops)
     * @request GET:/internal/organizations
     * @secure
     * @response `200` `(OrganizationDto)[]` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `(OrganizationDto)[]` Unauthorized
     */
    getOrganizations1: (
      query: {
        permission?: string;
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrganizationDto[], GenericResponseObject | OrganizationDto[]>({
        path: `/internal/organizations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-shop-organizations-controller
     * @name GetShopEmployees
     * @request GET:/internal/organizations/{shopId}/employees
     * @secure
     * @response `200` `ShopEmployeesDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopEmployees: (shopId: number, params: RequestParams = {}) =>
      this.http.request<ShopEmployeesDto, GenericResponseObject>({
        path: `/internal/organizations/${shopId}/employees`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-controller
     * @name HasPermission
     * @request GET:/internal/order/order-item/permission
     * @secure
     * @response `200` `boolean` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    hasPermission: (
      query: {
        /** @format int64 */
        customerId: number;
        /** @format int64 */
        orderItemId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<boolean, GenericResponseObject>({
        path: `/internal/order/order-item/permission`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-controller
     * @name GetOrderInfo1
     * @request GET:/internal/order/info
     * @secure
     * @response `200` `OrderBasicDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderInfo1: (
      query: {
        /** @format int64 */
        orderId: number;
        /** @format int64 */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrderBasicDto, GenericResponseObject>({
        path: `/internal/order/info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-order-item-controller
     * @name GetOrderItemInfo
     * @request GET:/internal/order-item/basic
     * @secure
     * @response `200` `(OrderItemBasicDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderItemInfo: (
      query: {
        /** @uniqueItems true */
        orderItemIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<OrderItemBasicDto[], GenericResponseObject>({
        path: `/internal/order-item/basic`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-ikpu-controller
     * @name SearchIkpu1
     * @request GET:/internal/ikpu/search
     * @secure
     * @response `200` `GenericResponseListIkpuInfoRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    searchIkpu1: (
      query: {
        search: string;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListIkpuInfoRs, GenericResponseObject>({
        path: `/internal/ikpu/search`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-ikpu-controller
     * @name CheckIkpu1
     * @request GET:/internal/ikpu/check
     * @secure
     * @response `200` `GenericResponseCheckIkpuDto` Ok
     * @response `400` `GenericResponseObject` ikpu-001: not allowed ikpu for category
     */
    checkIkpu1: (
      query: {
        ikpu: string;
        /** @format int64 */
        categoryId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCheckIkpuDto, GenericResponseObject>({
        path: `/internal/ikpu/check`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-ikpu-controller
     * @name ActualizeIkpuFromTable
     * @request GET:/internal/ikpu/actualize-from-table
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    actualizeIkpuFromTable: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/ikpu/actualize-from-table`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name GetFilters1
     * @summary Get all filter values by filterId
     * @request GET:/internal/filters/all
     * @secure
     * @response `200` `GenericResponseListFilterValueDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFilters1: (
      query: {
        /** @format int64 */
        filterId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListFilterValueDto, GenericResponseObject>({
        path: `/internal/filters/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-customer-controller
     * @name GetCustomerInfo
     * @request GET:/internal/customer/info
     * @secure
     * @response `200` `CustomerInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCustomerInfo: (
      query: {
        /** @format int64 */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CustomerInfoDto, GenericResponseObject>({
        path: `/internal/customer/info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags internal-customer-controller
     * @name GetCustomerContactsInfo
     * @request GET:/internal/customer/contacts-info
     * @secure
     * @response `200` `CustomerContactsInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCustomerContactsInfo: (
      query: {
        /** @format int64 */
        accountId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CustomerContactsInfoDto, GenericResponseObject>({
        path: `/internal/customer/contacts-info`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags commissioner-report-controller
     * @name GenerateCommissionerReports
     * @request GET:/internal/commissioner-report/generate
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generateCommissionerReports: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/commissioner-report/generate`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get value by id
     *
     * @tags category-field-controller
     * @name GetCategoryFieldValue
     * @summary getCategoryFieldValue
     * @request GET:/internal/category/fields/values/{id}
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Not found by id
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryFieldValue: (id: number, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/values/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Delete category field value
     *
     * @tags category-field-controller
     * @name DeleteCategoryFieldValue
     * @summary deleteCategoryFieldValue
     * @request DELETE:/internal/category/fields/values/{id}
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Value not found by id
     * @response `500` `GenericResponse` Internal server error
     */
    deleteCategoryFieldValue: (id: number, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/values/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get values by category id
     *
     * @tags category-field-controller
     * @name GetCategoryFieldValuesByCategory
     * @summary getCategoryFieldValuesByCategory
     * @request GET:/internal/category/fields/category/values
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Category not found
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryFieldValuesByCategory: (
      query: {
        /** @format int64 */
        categoryId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/category/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get values by category id and field key
     *
     * @tags category-field-controller
     * @name GetCategoryFieldValuesByCategoryAndField
     * @summary getCategoryFieldValues
     * @request GET:/internal/category/fields/category-and-field/values
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Category not found
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryFieldValuesByCategoryAndField: (
      query: {
        /** @format int64 */
        categoryId: number;
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/category-and-field/values`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get category field by key
     *
     * @tags category-field-controller
     * @name GetCategoryFieldByKey
     * @summary getCategoryFieldByKey
     * @request GET:/internal/category/fields/
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `404` `GenericResponse` Not found by key
     * @response `500` `GenericResponse` Internal server error
     */
    getCategoryFieldByKey: (
      query: {
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<any, GenericResponseObject | GenericResponse>({
        path: `/internal/category/fields/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-value-cms-controller
     * @name DeleteSkuFilterValues
     * @summary Delete sku filter value
     * @request DELETE:/internal/filters/sku/delete
     * @secure
     * @response `200` `GenericResponseSkuFilterValueResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deleteSkuFilterValues: (data: DeleteSkuFilterValueRequest, params: RequestParams = {}) =>
      this.http.request<GenericResponseSkuFilterValueResponse, GenericResponseObject>({
        path: `/internal/filters/sku/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cache-evict-controller
     * @name EvictCacheByName
     * @request DELETE:/internal/cache/evict/{name}
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    evictCacheByName: (name: string, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/internal/cache/evict/${name}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  customer = {
    /**
     * No description
     *
     * @tags customer-contacts-controller
     * @name GetContacts1
     * @summary Method for getting customer contacts data
     * @request GET:/customer/contacts
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponseCustomerContactsDto` Unauthorized
     * @response `406` `GenericResponseCustomerContactsDto` Customer contacts not found
     */
    getContacts1: (params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject | GenericResponseCustomerContactsDto>({
        path: `/customer/contacts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-contacts-controller
     * @name EditContacts
     * @summary Method for editing customer contacts data
     * @request PUT:/customer/contacts
     * @secure
     * @response `400` `GenericResponseObject` Bad Request
     * @response `401` `GenericResponseObject` Unauthorized
     * @response `406` `GenericResponseObject` Customer contacts not found
     */
    editContacts: (data: CustomerContactsDto, params: RequestParams = {}) =>
      this.http.request<any, GenericResponseObject>({
        path: `/customer/contacts`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-customer-payment-controller
     * @name InitializePayment3
     * @request POST:/customer/legal/payment
     * @secure
     * @response `200` `GenericResponsePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    initializePayment3: (data: CreateLegalPaymentDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePaymentDto, GenericResponseObject>({
        path: `/customer/legal/payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal-customer-order-controller
     * @name CreateOrder3
     * @request POST:/customer/legal/order/create
     * @secure
     * @response `200` `GenericResponseOrderResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOrder3: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseOrderResponseDto, GenericResponseObject>({
        path: `/customer/legal/order/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-gift-controller
     * @name TryYourLuck
     * @request POST:/customer/gift
     * @secure
     * @response `200` `GenericResponseGiftDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    tryYourLuck: (
      query: {
        /** @format uuid */
        idempotencyKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseGiftDto, GenericResponseObject>({
        path: `/customer/gift`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-gift-controller
     * @name SelectProduct
     * @request POST:/customer/gift/product
     * @secure
     * @response `200` `GenericResponseGiftDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    selectProduct: (data: ProductSelectDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseGiftDto, GenericResponseObject>({
        path: `/customer/gift/product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-gift-controller
     * @name CheckRaffle
     * @request POST:/customer/gift/pepsi/raffle
     * @secure
     * @response `200` `GenericResponsePepsiGiftDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkRaffle: (data: PepsiRaffleDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePepsiGiftDto, GenericResponseObject>({
        path: `/customer/gift/pepsi/raffle`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-gift-controller
     * @name GetPepsiGifts
     * @request GET:/customer/gift/pepsi/codes
     * @secure
     * @response `200` `GenericResponseListPepsiGiftCompactDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPepsiGifts: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListPepsiGiftCompactDto, GenericResponseObject>({
        path: `/customer/gift/pepsi/codes`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-gift-controller
     * @name CountGifts
     * @request GET:/customer/gift/count
     * @secure
     * @response `200` `GenericResponseGiftCountDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    countGifts: (params: RequestParams = {}) =>
      this.http.request<GenericResponseGiftCountDto, GenericResponseObject>({
        path: `/customer/gift/count`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get dto with sorted list of banners, applied to the rules
     *
     * @tags customer-banner-controller
     * @name GetExternalBanners
     * @summary GET method to get banners
     * @request GET:/customer/banner/external
     * @secure
     * @response `200` `GenericResponseExternalBannerListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getExternalBanners: (
      query: {
        subType?: string;
        /** @default "MOBILE" */
        type: "MOBILE" | "DESKTOP" | "NEW_MOBILE" | "SUPERAPP_MOBILE";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseExternalBannerListDto, GenericResponseObject>({
        path: `/customer/banner/external`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  cpa = {
    /**
     * No description
     *
     * @tags external-source-promo-code-controller
     * @name DeactivatePromoCode
     * @request PUT:/cpa/promo/deactivate
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    deactivatePromoCode: (
      query: {
        bloggerId: string;
        /** @format int64 */
        promoCodeId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/cpa/promo/deactivate`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags external-source-promo-code-controller
     * @name CreatePromoCode
     * @request POST:/cpa/promo/create
     * @secure
     * @response `200` `GenericResponsePromoCodeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createPromoCode: (data: PromoCodeGenerationRq, params: RequestParams = {}) =>
      this.http.request<GenericResponsePromoCodeDto, GenericResponseObject>({
        path: `/cpa/promo/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags external-source-promo-code-controller
     * @name GeneratePromoCode
     * @request GET:/cpa/promo/generate
     * @secure
     * @response `200` `GenericResponseString` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    generatePromoCode: (params: RequestParams = {}) =>
      this.http.request<GenericResponseString, GenericResponseObject>({
        path: `/cpa/promo/generate`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags external-source-promo-code-controller
     * @name CheckPromoCode1
     * @request GET:/cpa/promo/check
     * @secure
     * @response `200` `GenericResponseCheckPromoCodeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkPromoCode1: (
      query: {
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseCheckPromoCodeDto, GenericResponseObject>({
        path: `/cpa/promo/check`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags external-source-promo-code-controller
     * @name GetAllPromoCodesByBloggerId
     * @request GET:/cpa/promo/all
     * @secure
     * @response `200` `GenericResponseListPromoCodeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllPromoCodesByBloggerId: (
      query: {
        bloggerId: string;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListPromoCodeDto, GenericResponseObject>({
        path: `/cpa/promo/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  cms = {
    /**
     * No description
     *
     * @tags withdraw-cms-controller
     * @name ChangeStatus
     * @request PUT:/cms/withdraws/{id}/status
     * @secure
     * @response `204` `void` No Content
     * @response `400` `GenericResponseObject` Bad Request
     */
    changeStatus: (id: number, data: WithdrawChangeStatusRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/withdraws/${id}/status`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags withdraw-cms-controller
     * @name RequestWithdraw1
     * @request POST:/cms/withdraws
     * @secure
     * @response `201` `WithdrawTicketDto` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    requestWithdraw1: (data: CreateCmsWithdrawDto, params: RequestParams = {}) =>
      this.http.request<WithdrawTicketDto, GenericResponseObject>({
        path: `/cms/withdraws`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cms-styled-carousel-controller
     * @name CreateStyledCarouselOffer
     * @request POST:/cms/styled-carousel
     * @secure
     * @response `200` `number` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createStyledCarouselOffer: (data: CreateStyledCarouselRequest, params: RequestParams = {}) =>
      this.http.request<number, GenericResponseObject>({
        path: `/cms/styled-carousel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-restriction-cms-controller
     * @name GetActiveRestrictions
     * @request POST:/cms/sku/restriction
     * @secure
     * @response `200` `(RestrictionDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActiveRestrictions: (data: number[], params: RequestParams = {}) =>
      this.http.request<RestrictionDto[], GenericResponseObject>({
        path: `/cms/sku/restriction`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-restriction-cms-controller
     * @name UpdateRestriction
     * @request POST:/cms/sku/restriction/update
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateRestriction: (data: RestrictionDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sku/restriction/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-cofinance-cms-controller
     * @name GetCofinanceFile1
     * @request GET:/cms/sku/cofinance
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCofinanceFile1: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sku/cofinance`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-cofinance-cms-controller
     * @name CofinanceUploadFile1
     * @request POST:/cms/sku/cofinance
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    cofinanceUploadFile1: (
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sku/cofinance`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags shop-cms-controller
     * @name TransferShop1
     * @request POST:/cms/shop/{shopId}/transfer
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    transferShop1: (shopId: number, data: CMSTransferShopRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/shop/${shopId}/transfer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-cms-controller
     * @name UpdateEventStatus
     * @request POST:/cms/seller-calendar-event/update-status
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateEventStatus: (data: CalendarEventStatusUpdateDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/seller-calendar-event/update-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-cms-controller
     * @name EditEvent
     * @request POST:/cms/seller-calendar-event/edit
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    editEvent: (data: EditCalendarEventDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/seller-calendar-event/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags seller-calendar-event-cms-controller
     * @name CreateEvent
     * @request POST:/cms/seller-calendar-event/create
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createEvent: (data: CreateCalendarEventDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/seller-calendar-event/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sale-cms-controller
     * @name CreateEvent1
     * @request POST:/cms/sales/sale-periods/products/move-period
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createEvent1: (data: ProductSalePeriodUpdateDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sales/sale-periods/products/move-period`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-cms-controller
     * @name TransferProduct1
     * @request POST:/cms/product/transfer
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    transferProduct1: (data: ProductTransferRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product/transfer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-cms-controller
     * @name UpdateImages
     * @request POST:/cms/product/media/update
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateImages: (data: UpdateMediaRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product/media/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-cms-controller
     * @name UnarchiveImages
     * @request POST:/cms/product/media/unarchive
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    unarchiveImages: (data: UpdateMediaRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product/media/unarchive`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-cms-controller
     * @name RemoveMedia
     * @request POST:/cms/product/media/remove
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeMedia: (data: UpdateMediaRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product/media/remove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update product shelf active status
     *
     * @tags product-shelf-cms-controller
     * @name SetProductShelfActive
     * @summary setProductShelfActive
     * @request POST:/cms/product-shelf/{id}/activate
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    setProductShelfActive: (
      id: number,
      query: {
        active: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product-shelf/${id}/activate`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Remove products from product shelf
     *
     * @tags product-shelf-cms-controller
     * @name RemoveProducts
     * @summary removeProducts
     * @request POST:/cms/product-shelf/remove-products
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeProducts: (data: ProductShelfProductsRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product-shelf/remove-products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Add products to product shelf
     *
     * @tags product-shelf-cms-controller
     * @name AddProducts
     * @summary addProducts
     * @request POST:/cms/product-shelf/add-products
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addProducts: (data: ProductShelfProductsRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/product-shelf/add-products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags offer-cms-controller
     * @name RemoveProducts1
     * @request POST:/cms/offer/remove-products
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeProducts1: (
      query: {
        /** @format int64 */
        offerId: number;
        productIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/offer/remove-products`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags offer-cms-controller
     * @name AddProducts1
     * @request POST:/cms/offer/add-products
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addProducts1: (
      query: {
        /** @format int64 */
        offerId: number;
        productIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/offer/add-products`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-cms-controller
     * @name UpdateStatusTransferProductModeration
     * @request POST:/cms/moderation/product/transfer/update-status
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateStatusTransferProductModeration: (data: TransferProductModerationRqDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/moderation/product/transfer/update-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags permanent-link-cms-controller
     * @name Delete
     * @request POST:/cms/link/{id}/delete
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/cms/link/${id}/delete`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags permanent-link-cms-controller
     * @name Edit
     * @request POST:/cms/link/edit
     * @secure
     * @response `200` `GenericResponsePermanentLinkDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    edit: (data: PermanentLinkDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePermanentLinkDto, GenericResponseObject>({
        path: `/cms/link/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags permanent-link-cms-controller
     * @name CreateOne
     * @request POST:/cms/link/create
     * @secure
     * @response `200` `GenericResponsePermanentLinkDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOne: (data: PermanentLinkDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePermanentLinkDto, GenericResponseObject>({
        path: `/cms/link/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags geo-cms-controller
     * @name CreateOrUpdate
     * @request POST:/cms/geo/district
     * @secure
     * @response `201` `void` Created
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOrUpdate: (data: CreateDistrictRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/geo/district`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedback-cms-controller
     * @name UpdateFeedbackStatus
     * @request POST:/cms/feedback/update-status
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateFeedbackStatus: (data: FeedbackUpdateStatusRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/feedback/update-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feedback-cms-controller
     * @name UpdateFeedbackReplyStatus
     * @request POST:/cms/feedback/reply/update-status
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    updateFeedbackReplyStatus: (data: FeedbackReplyUpdateStatusRq, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/feedback/reply/update-status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cms-fbs-controller
     * @name DownloadSkuFbsAmount
     * @request GET:/cms/fbs/sku
     * @secure
     * @response `200` `File` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    downloadSkuFbsAmount: (
      query: {
        /** @format int64 */
        sellerId: number;
        /** @default "CSV" */
        fileType?: "CSV" | "XLSX";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<File, GenericResponseObject>({
        path: `/cms/fbs/sku`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cms-fbs-controller
     * @name UploadSkuFbsAmount
     * @request POST:/cms/fbs/sku
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    uploadSkuFbsAmount: (
      query: {
        /** @format int64 */
        sellerId: number;
      },
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/cms/fbs/sku`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Update sku stock type for skus, and recalculate isInStock flag if sku is not available before and recalculate minimal price of sku group
     *
     * @tags cms-fbs-controller
     * @name SetSkuStockType
     * @summary setSkuStockType
     * @request POST:/cms/fbs/sku/stock/type
     * @secure
     * @response `200` `GenericResponseVoid` Success
     * @response `400` `GenericResponseObject` Bad Request
     */
    setSkuStockType: (data: CmsSetSkuStockTypeRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/cms/fbs/sku/stock/type`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-cms-controller
     * @name AddCategoryCommissionFormula
     * @request POST:/cms/category/commission-formula
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addCategoryCommissionFormula: (data: CommissionFormulaRqDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/category/commission-formula`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-cms-controller
     * @name AddFbsCategoryCommissionFormula
     * @request POST:/cms/category/commission-formula-fbs
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addFbsCategoryCommissionFormula: (data: CommissionFormulaRqDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/category/commission-formula-fbs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-cofinance-cms-controller
     * @name GetCofinanceTemplate1
     * @request GET:/cms/sku/cofinance/template
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCofinanceTemplate1: (params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sku/cofinance/template`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-shelf-cms-controller
     * @name GetProductShelfById
     * @summary Get product shelf with products by id and pageable for products
     * @request GET:/cms/product-shelf/{id}
     * @secure
     * @response `200` `ProductShelfDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductShelfById: (id: number, params: RequestParams = {}) =>
      this.http.request<ProductShelfDto, GenericResponseObject>({
        path: `/cms/product-shelf/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get product shelves, that include {productId} - product shelves short info
     *
     * @tags product-shelf-cms-controller
     * @name GetProductShelvesByProduct
     * @summary getProductShelvesByProduct
     * @request GET:/cms/product-shelf/product/{productId}
     * @secure
     * @response `200` `(ProductShelfDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductShelvesByProduct: (
      productId: number,
      query?: {
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductShelfDto[], GenericResponseObject>({
        path: `/cms/product-shelf/product/${productId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get product shelves list, query - select query with product shelf title
     *
     * @tags product-shelf-cms-controller
     * @name GetProductShelves
     * @summary getProductShelves
     * @request GET:/cms/product-shelf/all
     * @secure
     * @response `200` `(ProductShelfDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductShelves: (
      query: {
        query: string;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
        /**
         * @format int32
         * @min 0
         * @default 0
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ProductShelfDto[], GenericResponseObject>({
        path: `/cms/product-shelf/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-cms-controller
     * @name GetSkuListAsJson
     * @request GET:/cms/moderation/{productId}/sku-list-json
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSkuListAsJson: (productId: number, params: RequestParams = {}) =>
      this.http.request<string, GenericResponseObject>({
        path: `/cms/moderation/${productId}/sku-list-json`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-moderation-cms-controller
     * @name GetProductAsJson
     * @request GET:/cms/moderation/{id}/product-json
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductAsJson: (id: number, params: RequestParams = {}) =>
      this.http.request<string, GenericResponseObject>({
        path: `/cms/moderation/${id}/product-json`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags permanent-link-cms-controller
     * @name GetOne
     * @request GET:/cms/link/{id}
     * @secure
     * @response `200` `GenericResponsePermanentLinkDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOne: (id: number, params: RequestParams = {}) =>
      this.http.request<GenericResponsePermanentLinkDto, GenericResponseObject>({
        path: `/cms/link/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags permanent-link-cms-controller
     * @name GetAll
     * @request GET:/cms/link/all
     * @secure
     * @response `200` `GenericResponseListPermanentLinkDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAll: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListPermanentLinkDto, GenericResponseObject>({
        path: `/cms/link/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cms-fbs-controller
     * @name ResetSkuFbsAmount
     * @request GET:/cms/fbs/sku/amount/reset
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    resetSkuFbsAmount: (
      query: {
        /** @format int64 */
        sellerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/cms/fbs/sku/amount/reset`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags b-2b-sale-cms-controller
     * @name CreateEvent2
     * @request DELETE:/cms/sales/{saleId}/products/{productId}
     * @secure
     * @response `204` `void` No Content
     * @response `400` `GenericResponseObject` Bad Request
     */
    createEvent2: (
      saleId: number,
      productId: number,
      query?: {
        /** @default "TODAY_DEALS" */
        saleType?: "BIG_SALE" | "TODAY_DEALS";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<void, GenericResponseObject>({
        path: `/cms/sales/${saleId}/products/${productId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  v2 = {
    /**
     * No description
     *
     * @tags order-v-2-controller
     * @name CreateOrder
     * @request POST:/v2/order
     * @secure
     * @response `200` `SellerInfo` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    createOrder: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<SellerInfo, GenericResponseObject>({
        path: `/v2/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags delivery-controller
     * @name CalcCourierDeliveryOffers
     * @request POST:/v2/delivery/courier-delivery-offers
     * @secure
     * @response `200` `GenericResponseDeliveryOffersDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    calcCourierDeliveryOffers: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseDeliveryOffersDto, GenericResponseObject>({
        path: `/v2/delivery/courier-delivery-offers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-product-controller
     * @name GetProductCard
     * @summary Get product card by product id
     * @request GET:/v2/product/{productId}
     * @secure
     * @response `200` `GenericResponseSeoWrapper` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductCard: (productId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseSeoWrapper, GenericResponseObject>({
        path: `/v2/product/${productId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-product-controller
     * @name GetSimilarProducts
     * @request GET:/v2/product/{productId}/similar
     * @secure
     * @response `200` `(CustomerProductDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getSimilarProducts: (
      productId: number,
      query?: {
        /** @format int32 */
        size?: number;
        sort?: string;
        boost_photo?: boolean;
        boost_rating?: boolean;
        boost_orders_quantity?: boolean;
        boost_shop?: boolean;
        boost_conversion?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CustomerProductDto[], GenericResponseObject>({
        path: `/v2/product/${productId}/similar`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-product-controller
     * @name GetAllClientsPhotos
     * @request GET:/v2/product/{productId}/circular-photos
     * @secure
     * @response `200` `(PhotoDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllClientsPhotos: (productId: number, params: RequestParams = {}) =>
      this.http.request<PhotoDto[], GenericResponseObject>({
        path: `/v2/product/${productId}/circular-photos`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags v-2-product-controller
     * @name GetBoughtWithProducts
     * @request GET:/v2/product/bought-with
     * @secure
     * @response `200` `GenericResponseListCustomerProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBoughtWithProducts: (
      query?: {
        productIds?: number[];
        /**
         * @format int32
         * @default 10
         */
        size?: number;
        /** @default "v3" */
        version?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListCustomerProductDto, GenericResponseObject>({
        path: `/v2/product/bought-with`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-v-2-controller
     * @name GetOrderText
     * @request GET:/v2/order/{orderId}/text
     * @secure
     * @response `200` `GenericResponseOrderTextDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOrderText: (orderId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseOrderTextDto, GenericResponseObject>({
        path: `/v2/order/${orderId}/text`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-v-2-controller
     * @name GetText
     * @request GET:/v2/order/text
     * @deprecated
     * @secure
     * @response `200` `GenericResponseString` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getText: (
      query: {
        /** @format int64 */
        orderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseString, GenericResponseObject>({
        path: `/v2/order/text`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-v-2-controller
     * @name GetProductsMobile
     * @request GET:/v2/main/mobile
     * @secure
     * @response `200` `GenericResponseWithPromotionWrapperMobileProductsGroup` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsMobile: (
      query?: {
        /** @default false */
        eco?: boolean;
        /** @default false */
        mobile?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseWithPromotionWrapperMobileProductsGroup, GenericResponseObject>({
        path: `/v2/main/mobile`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-v-2-controller
     * @name GetProducts
     * @request GET:/v2/main/
     * @secure
     * @response `200` `GenericResponseWithPromotionWrapperObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts: (
      query?: {
        /** @default false */
        eco?: boolean;
        /** @default false */
        mobile?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseWithPromotionWrapperObject, GenericResponseObject>({
        path: `/v2/main/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags delivery-controller
     * @name GetMinPrices
     * @request GET:/v2/delivery/min-free-price
     * @secure
     * @response `200` `string` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMinPrices: (
      query: {
        /** @format int64 */
        cityId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<string, GenericResponseObject>({
        path: `/v2/delivery/min-free-price`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  tezkor = {
    /**
     * No description
     *
     * @tags tezkor-controller
     * @name SendNotification
     * @summary Send Push Notification
     * @request POST:/tezkor/notification
     * @secure
     * @response `200` `GenericResponseVoid` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseVoid` Internal Server Error
     */
    sendNotification: (data: TezkorPushNotification, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject | GenericResponseVoid>({
        path: `/tezkor/notification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tezkor-entry-point-controller
     * @name OnClick
     * @summary Process click in tezkor icon
     * @request POST:/tezkor/entry-point/interaction
     * @secure
     * @response `200` `GenericResponseVoid` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseVoid` Internal Server Error
     */
    onClick: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject | GenericResponseVoid>({
        path: `/tezkor/entry-point/interaction`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tezkor-controller
     * @name OnClickAction
     * @summary Deprecated - do nothing
     * @request POST:/tezkor/entry-interaction
     * @deprecated
     * @secure
     * @response `200` `GenericResponseVoid` Ok
     * @response `400` `GenericResponseObject` Bad Request
     */
    onClickAction: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/tezkor/entry-interaction`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tezkor-controller
     * @name UploadGeoJson
     * @summary Upload geojson
     * @request POST:/tezkor/delivery-area
     * @secure
     * @response `200` `GenericResponseVoid` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseVoid` Internal Server Error
     */
    uploadGeoJson: (data: TezkorGeoJson, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject | GenericResponseVoid>({
        path: `/tezkor/delivery-area`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tezkor-entry-point-controller
     * @name GetOrders1
     * @summary Info About Tezkor Orders
     * @request GET:/tezkor/entry-point/orders
     * @secure
     * @response `200` `GenericResponseListTezkorOrderDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseListTezkorOrderDto` Internal Server Error
     */
    getOrders1: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListTezkorOrderDto, GenericResponseObject | GenericResponseListTezkorOrderDto>({
        path: `/tezkor/entry-point/orders`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tezkor-entry-point-controller
     * @name GetTezkorInfo
     * @summary Deprecated = do not use! Entry point for tezkor - info about delivery by coordinates
     * @request GET:/tezkor/entry-point/nav-bar
     * @deprecated
     * @secure
     * @response `200` `GenericResponseNavigationBarDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseNavigationBarDto` Internal Server Error
     */
    getTezkorInfo: (
      query?: {
        lon?: string;
        lat?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseNavigationBarDto, GenericResponseObject | GenericResponseNavigationBarDto>({
        path: `/tezkor/entry-point/nav-bar`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  subscription = {
    /**
     * No description
     *
     * @tags subscription-controller
     * @name AddToSubscriptions
     * @request POST:/subscription/add
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addToSubscriptions: (data: SubscriptionDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/subscription/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  promo = {
    /**
     * No description
     *
     * @tags promo-code-controller
     * @name CheckPromoCode
     * @request POST:/promo/promoCode
     * @secure
     * @response `200` `GenericResponseBonusProgramDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkPromoCode: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseBonusProgramDto, GenericResponseObject>({
        path: `/promo/promoCode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name RemovePrivatePromoCode
     * @request POST:/promo/promoCode/remove
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removePrivatePromoCode: (data: PromoCodeNameDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/promo/promoCode/remove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name AddPrivatePromoCode
     * @request POST:/promo/promoCode/add
     * @secure
     * @response `200` `GenericResponsePromoCodeInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addPrivatePromoCode: (data: PromoCodeNameDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePromoCodeInfoDto, GenericResponseObject>({
        path: `/promo/promoCode/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags promo-code-controller
     * @name GetAllPromoCodes
     * @request GET:/promo/promoCode/all
     * @secure
     * @response `200` `GenericResponseListPromoCodeInfoDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAllPromoCodes: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListPromoCodeInfoDto, GenericResponseObject>({
        path: `/promo/promoCode/all`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags wish-sale-controller
     * @name RemoveProduct1
     * @request POST:/product/wish-sale/remove
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeProduct1: (data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/product/wish-sale/remove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags wish-sale-controller
     * @name AddProduct1
     * @request POST:/product/wish-sale/add
     * @secure
     * @response `200` `void` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addProduct1: (data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<void, GenericResponseObject>({
        path: `/product/wish-sale/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetProductCard1
     * @summary Get product card by product id
     * @request GET:/product/{productId}
     * @secure
     * @response `200` `GenericResponseCustomerProductCardDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductCard1: (productId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseCustomerProductCardDto, GenericResponseObject>({
        path: `/product/${productId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-option-controller
     * @name GetOptionInfo
     * @request GET:/product/option
     * @secure
     * @response `200` `GenericResponseListProductOptionTemplateDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOptionInfo: (
      query?: {
        optionIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductOptionTemplateDto, GenericResponseObject>({
        path: `/product/option`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetBestProducts
     * @summary Get best products
     * @request GET:/product/compilations
     * @secure
     * @response `200` `GenericResponseListProductsGroupDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBestProducts: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListProductsGroupDto, GenericResponseObject>({
        path: `/product/compilations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-card-action-controller
     * @name GetActions
     * @request GET:/product/actions/{productId}
     * @secure
     * @response `200` `(ActionDto)[]` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActions: (productId: number, params: RequestParams = {}) =>
      this.http.request<ActionDto[], GenericResponseObject>({
        path: `/product/actions/${productId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  postamat = {
    /**
     * No description
     *
     * @tags postamat-controller
     * @name SearchPostamats
     * @request POST:/postamat/search
     * @secure
     * @response `200` `GenericResponseSearchPostamatRs` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    searchPostamats: (data: PostamatSearchParamsDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseSearchPostamatRs, GenericResponseObject>({
        path: `/postamat/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  pickupPoint = {
    /**
     * No description
     *
     * @tags pickup-point-controller
     * @name RegisterOpenPickupPointRequest
     * @request POST:/pickup-point/open-request
     * @secure
     * @response `200` `OpenPickupPointResponseDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    registerOpenPickupPointRequest: (
      query: {
        params: Record<string, string>;
      },
      data: OpenPickupPointRequestData,
      params: RequestParams = {},
    ) =>
      this.http.request<OpenPickupPointResponseDto, GenericResponseObject>({
        path: `/pickup-point/open-request`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  payment = {
    /**
     * No description
     *
     * @tags customer-payment-controller
     * @name GetAvailablePaymentsByOrderId1
     * @request POST:/payment/{orderId}/options
     * @secure
     * @response `200` `GenericResponseAvailablePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAvailablePaymentsByOrderId1: (orderId: number, data: PaymentOptionsRq, params: RequestParams = {}) =>
      this.http.request<GenericResponseAvailablePaymentDto, GenericResponseObject>({
        path: `/payment/${orderId}/options`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-payment-controller
     * @name GetAvailablePaymentsV2
     * @request POST:/payment/v2/options
     * @secure
     * @response `200` `GenericResponseAvailablePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAvailablePaymentsV2: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseAvailablePaymentDto, GenericResponseObject>({
        path: `/payment/v2/options`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-payment-controller
     * @name GetAvailablePayments
     * @request POST:/payment/options
     * @secure
     * @response `200` `GenericResponseAvailablePaymentDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAvailablePayments: (data: OrderDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseAvailablePaymentDto, GenericResponseObject>({
        path: `/payment/options`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-payment-controller
     * @name GetTerminalInfo
     * @request GET:/payment/terminal-info
     * @secure
     * @response `200` `TerminalResponse` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getTerminalInfo: (params: RequestParams = {}) =>
      this.http.request<TerminalResponse, GenericResponseObject>({
        path: `/payment/terminal-info`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  main = {
    /**
     * No description
     *
     * @tags mobile-action-controller
     * @name SaveCustomerMobileActions
     * @request POST:/main/mobile-actions
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    saveCustomerMobileActions: (data: CustomerMobileActionRequest, params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/main/mobile-actions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags mobile-action-controller
     * @name MergeCustomerMobileActions
     * @request POST:/main/mobile-actions/merge
     * @secure
     * @response `200` `GenericResponseVoid` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    mergeCustomerMobileActions: (params: RequestParams = {}) =>
      this.http.request<GenericResponseVoid, GenericResponseObject>({
        path: `/main/mobile-actions/merge`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name FindDeliveryPointsByBoundingBox
     * @request POST:/main/delivery-points-by-bounding-box
     * @secure
     * @response `200` `GenericResponseListDeliveryPointDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    findDeliveryPointsByBoundingBox: (data: BoundingBoxDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseListDeliveryPointDto, GenericResponseObject>({
        path: `/main/delivery-points-by-bounding-box`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetCitiesWithActiveDeliveryPoints
     * @request POST:/main/cities/city-by-location
     * @secure
     * @response `200` `GenericResponsePickedCityDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCitiesWithActiveDeliveryPoints: (data: CheckPickedCityDto, params: RequestParams = {}) =>
      this.http.request<GenericResponsePickedCityDto, GenericResponseObject>({
        path: `/main/cities/city-by-location`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetRootCategories3
     * @request GET:/main/root-categories
     * @secure
     * @response `200` `GenericResponseListRootCategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRootCategories3: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListRootCategoryDto, GenericResponseObject>({
        path: `/main/root-categories`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetPromoCategories
     * @request GET:/main/promo-categories
     * @secure
     * @response `200` `GenericResponseListPromoCategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPromoCategories: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListPromoCategoryDto, GenericResponseObject>({
        path: `/main/promo-categories`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetMoreProducts1
     * @request GET:/main/more
     * @secure
     * @response `200` `GenericResponseListCustomerProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMoreProducts1: (
      query: {
        /** @format int64 */
        categoryId: number;
        /** @format int64 */
        minPrice: number;
        /** @format int64 */
        maxPrice: number;
        /** @default "default" */
        sortBy?: string;
        /** @default "ascending" */
        order?: string;
        /** @format int32 */
        size: number;
        /** @format int32 */
        page: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListCustomerProductDto, GenericResponseObject>({
        path: `/main/more`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetProductsMobile1
     * @request GET:/main/mobile
     * @secure
     * @response `200` `GenericResponseMobileProductsGroup` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProductsMobile1: (params: RequestParams = {}) =>
      this.http.request<GenericResponseMobileProductsGroup, GenericResponseObject>({
        path: `/main/mobile`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetMobileBanners
     * @request GET:/main/mobile-banners
     * @secure
     * @response `200` `GenericResponseListBannerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMobileBanners: (
      query?: {
        promotion?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListBannerDto, GenericResponseObject>({
        path: `/main/mobile-banners`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetOverloadNotification
     * @request GET:/main/map/overload-notification
     * @secure
     * @response `200` `GenericResponseOverloadNotificationDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getOverloadNotification: (params: RequestParams = {}) =>
      this.http.request<GenericResponseOverloadNotificationDto, GenericResponseObject>({
        path: `/main/map/overload-notification`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetMapDeliveryPoints
     * @request GET:/main/map/delivery-points
     * @secure
     * @response `200` `GenericResponseListDeliveryPointMapDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMapDeliveryPoints: (
      query?: {
        skuIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListDeliveryPointMapDto, GenericResponseObject>({
        path: `/main/map/delivery-points`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags delivery-controller
     * @name GetDeliveryTime
     * @request GET:/main/delivery
     * @secure
     * @response `200` `GenericResponseListDateTimeDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDeliveryTime: (
      query: {
        /** @format int64 */
        cityId: number;
        /** @format int64 */
        deliveryPointId?: number;
        /** @default true */
        courier?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListDateTimeDto, GenericResponseObject>({
        path: `/main/delivery`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags delivery-controller
     * @name GetMinFreeDeliveryPrice
     * @request GET:/main/delivery/min-free-price
     * @secure
     * @response `200` `GenericResponseLong` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMinFreeDeliveryPrice: (
      query: {
        /** @format int64 */
        cityId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseLong, GenericResponseObject>({
        path: `/main/delivery/min-free-price`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags delivery-controller
     * @name GetDeliveryBeforeTime
     * @request GET:/main/delivery/end-date
     * @deprecated
     * @secure
     * @response `200` `GenericResponseTimestamp` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDeliveryBeforeTime: (
      query: {
        /** @format int64 */
        cityId: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseTimestamp, GenericResponseObject>({
        path: `/main/delivery/end-date`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetDeliveryPoints
     * @request GET:/main/delivery-points
     * @secure
     * @response `200` `GenericResponseListDeliveryPointDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDeliveryPoints: (
      query?: {
        /** @format int64 */
        cityId?: number;
        skuIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListDeliveryPointDto, GenericResponseObject>({
        path: `/main/delivery-points`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetDeliveryPoint
     * @request GET:/main/delivery-point
     * @secure
     * @response `200` `GenericResponseDeliveryPointDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDeliveryPoint: (
      query: {
        /** @format int64 */
        id: number;
        skuIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseDeliveryPointDto, GenericResponseObject>({
        path: `/main/delivery-point`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetCity
     * @request GET:/main/city
     * @secure
     * @response `200` `GenericResponseCityDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCity: (params: RequestParams = {}) =>
      this.http.request<GenericResponseCityDto, GenericResponseObject>({
        path: `/main/city`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetCities1
     * @request GET:/main/cities
     * @secure
     * @response `200` `GenericResponseListCityDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCities1: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListCityDto, GenericResponseObject>({
        path: `/main/cities`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetCitiesWithActiveDeliveryPoints1
     * @request GET:/main/cities/active-delivery-points
     * @secure
     * @response `200` `GenericResponseListCityWithActiveDeliveryPointsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCitiesWithActiveDeliveryPoints1: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListCityWithActiveDeliveryPointsDto, GenericResponseObject>({
        path: `/main/cities/active-delivery-points`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetBanners
     * @request GET:/main/banners
     * @secure
     * @response `200` `GenericResponseListBannerDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getBanners: (
      query?: {
        promotion?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListBannerDto, GenericResponseObject>({
        path: `/main/banners`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetInfoAbout
     * @request GET:/main/about/{pageName}
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getInfoAbout: (pageName: string, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/main/about/${pageName}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags main-page-controller
     * @name GetProducts5
     * @request GET:/main/
     * @secure
     * @response `200` `GenericResponseListProductsGroupDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getProducts5: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListProductsGroupDto, GenericResponseObject>({
        path: `/main/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  items = {
    /**
     * No description
     *
     * @tags price-calculation-controller
     * @name GetCartWithDiscount
     * @request POST:/items/price
     * @secure
     * @response `200` `CartRsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getCartWithDiscount: (data: CartRqDto, params: RequestParams = {}) =>
      this.http.request<CartRsDto, GenericResponseObject>({
        path: `/items/price`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  favorites = {
    /**
     * No description
     *
     * @tags favorites-controller
     * @name RemoveFromFavorites
     * @request POST:/favorites/remove
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    removeFromFavorites: (data: ProductIdDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/favorites/remove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags favorites-controller
     * @name AddToFavorites
     * @request POST:/favorites/add
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addToFavorites: (data: AddToWishListProductDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/favorites/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags favorites-controller
     * @name AddSetToFavorites
     * @request POST:/favorites/addSet
     * @secure
     * @response `200` `GenericResponseObject` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    addSetToFavorites: (data: ProductIdSetDto, params: RequestParams = {}) =>
      this.http.request<GenericResponseObject, GenericResponseObject>({
        path: `/favorites/addSet`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags favorites-controller
     * @name GetFavoriteProductIds
     * @request GET:/favorites/ids
     * @secure
     * @response `200` `GenericResponseListLong` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFavoriteProductIds: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListLong, GenericResponseObject>({
        path: `/favorites/ids`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags favorites-controller
     * @name GetFilters2
     * @request GET:/favorites/all
     * @secure
     * @response `200` `GenericResponseGetCategoryResp` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFilters2: (
      query?: {
        /** @default "dateAdded" */
        sortBy?: string;
        /** @default "desc" */
        order?: string;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseGetCategoryResp, GenericResponseObject>({
        path: `/favorites/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags favorites-controller
     * @name GetFavorites
     * @request GET:/favorites/
     * @secure
     * @response `200` `GenericResponseListCustomerProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFavorites: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 24
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListCustomerProductDto, GenericResponseObject>({
        path: `/favorites/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  version = {
    /**
     * No description
     *
     * @tags customer-version-controller
     * @name CheckIosVersion
     * @request GET:/version/ios
     * @secure
     * @response `200` `GenericResponseVersionControlDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkIosVersion: (
      query: {
        version: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVersionControlDto, GenericResponseObject>({
        path: `/version/ios`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-version-controller
     * @name CheckAndroidVersion
     * @request GET:/version/android
     * @secure
     * @response `200` `GenericResponseVersionControlDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    checkAndroidVersion: (
      query: {
        version: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseVersionControlDto, GenericResponseObject>({
        path: `/version/android`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  shoppingDay = {
    /**
     * No description
     *
     * @tags shopping-day-controller
     * @name GetPersonalOffer
     * @request GET:/shopping-day/personal
     * @secure
     * @response `200` `GenericResponseListCustomerProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getPersonalOffer: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListCustomerProductDto, GenericResponseObject>({
        path: `/shopping-day/personal`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  shop = {
    /**
     * No description
     *
     * @tags shop-controller
     * @name GetShopMain
     * @request GET:/shop/{url}
     * @secure
     * @response `200` `GenericResponseShopDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getShopMain: (
      url: string,
      query: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        minPrice: number;
        /** @format int64 */
        maxPrice: number;
        /** @default "default" */
        sortBy?: string;
        /** @default "ascending" */
        order?: string;
        filter?: CustomerFilterRq[];
        /** @default false */
        eco?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseShopDto, GenericResponseObject>({
        path: `/shop/${url}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags shop-controller
     * @name GetMoreProducts
     * @request GET:/shop/{url}/more
     * @secure
     * @response `200` `GenericResponseListCustomerProductDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMoreProducts: (
      url: string,
      query: {
        /** @format int64 */
        categoryId?: number;
        /** @format int64 */
        minPrice: number;
        /** @format int64 */
        maxPrice: number;
        /** @default "default" */
        sortBy?: string;
        /** @default "ascending" */
        order?: string;
        filter?: CustomerFilterRq[];
        /** @format int32 */
        size: number;
        /** @format int32 */
        page: number;
        /** @default false */
        eco?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListCustomerProductDto, GenericResponseObject>({
        path: `/shop/${url}/more`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed-controller
     * @name GetFeeds
     * @request GET:/shop/feeds
     * @secure
     * @response `200` `GenericResponseFeedInfoListDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getFeeds: (params: RequestParams = {}) =>
      this.http.request<GenericResponseFeedInfoListDto, GenericResponseObject>({
        path: `/shop/feeds`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  rootCategories = {
    /**
     * No description
     *
     * @tags category-controller
     * @name GetRootCategories2
     * @request GET:/root-categories
     * @secure
     * @response `200` `GenericResponseListRootCategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRootCategories2: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListRootCategoryDto, GenericResponseObject>({
        path: `/root-categories`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  offer = {
    /**
     * No description
     *
     * @tags inline-offer-controller
     * @name GetRandom
     * @summary Getting specific inline offer
     * @request GET:/offer/inline/{inlineOfferId}
     * @secure
     * @response `200` `GenericResponseInlineOfferDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRandom: (inlineOfferId: number, params: RequestParams = {}) =>
      this.http.request<GenericResponseInlineOfferDto, GenericResponseObject>({
        path: `/offer/inline/${inlineOfferId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description If you want to get a random active offer from all possible set, just not send 'type' rq param
     *
     * @tags inline-offer-controller
     * @name GetRandom1
     * @summary Getting random active inline offer
     * @request GET:/offer/inline/random
     * @secure
     * @response `200` `GenericResponseInlineOfferDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRandom1: (
      query?: {
        type?: "CART" | "PRODUCT" | "CHECKOUT";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseInlineOfferDto, GenericResponseObject>({
        path: `/offer/inline/random`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Response map key is represented page type (for which page offer required), the map value contains set of inline offers ids
     *
     * @tags inline-offer-controller
     * @name GetActiveInlineOffersMap
     * @summary Getting a map of active inline offers
     * @request GET:/offer/inline/active
     * @secure
     * @response `200` `GenericResponseMapStringSetLong` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getActiveInlineOffersMap: (params: RequestParams = {}) =>
      this.http.request<GenericResponseMapStringSetLong, GenericResponseObject>({
        path: `/offer/inline/active`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  navBar = {
    /**
     * No description
     *
     * @tags nav-bar-controller
     * @name GetNavBarEntryPoint
     * @summary Nav Bar - get Dto with icon + link + title
     * @request GET:/nav-bar/entry-point
     * @secure
     * @response `200` `GenericResponseNavigationBarDto` Ok
     * @response `400` `GenericResponseObject` Bad Request
     * @response `500` `GenericResponseNavigationBarDto` Internal Server Error
     */
    getNavBarEntryPoint: (params: RequestParams = {}) =>
      this.http.request<GenericResponseNavigationBarDto, GenericResponseObject | GenericResponseNavigationBarDto>({
        path: `/nav-bar/entry-point`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  minPricePromotions = {
    /**
     * No description
     *
     * @tags min-price-promotion-controller
     * @name GetMinPricePromotions
     * @request GET:/min-price-promotions/active
     * @secure
     * @response `200` `GenericResponseListMinPricePromotionDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getMinPricePromotions: (
      query: {
        /** @format int64 */
        price: number;
        /** @default "MOBILE" */
        type?: "MOBILE" | "DESKTOP";
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListMinPricePromotionDto, GenericResponseObject>({
        path: `/min-price-promotions/active`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  delivery = {
    /**
     * No description
     *
     * @tags delivery-controller
     * @name GetDeliveryPointPage
     * @request GET:/delivery/delivery-points
     * @secure
     * @response `200` `GenericResponseListDeliveryPointDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getDeliveryPointPage: (
      query: {
        /** @format int64 */
        cityId: number;
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<GenericResponseListDeliveryPointDto, GenericResponseObject>({
        path: `/delivery/delivery-points`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags v-2-category-controller
     * @name GetRootCategoriesV2
     * @request GET:/category/v2/root-categories
     * @secure
     * @response `200` `GenericResponseListRootCategoryDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getRootCategoriesV2: (params: RequestParams = {}) =>
      this.http.request<GenericResponseListRootCategoryDto, GenericResponseObject>({
        path: `/category/v2/root-categories`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  account = {
    /**
     * No description
     *
     * @tags account-controller
     * @name GetAccountDetailsForChat
     * @summary Get user account details for chat service
     * @request GET:/account/{accountId}/details
     * @secure
     * @response `200` `AccountDetailsDto` OK
     * @response `400` `GenericResponseObject` Bad Request
     */
    getAccountDetailsForChat: (accountId: number, params: RequestParams = {}) =>
      this.http.request<AccountDetailsDto, GenericResponseObject>({
        path: `/account/${accountId}/details`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
