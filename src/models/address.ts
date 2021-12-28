/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { StatusEnum, statusEnumSchema } from './statusEnum';

/** Legal physical address */
export interface Address {
  /** city */
  city?: string;
  /** country of address */
  country?: string;
  /** street address */
  line1?: string;
  /** Apt No/Suite No */
  line2?: string;
  /** State */
  state?: string;
  /** status of address */
  status?: StatusEnum;
  /** Zip code */
  zip?: string;
}

export const addressSchema: Schema<Address> = object({
  city: ['city', optional(string())],
  country: ['country', optional(string())],
  line1: ['line1', optional(string())],
  line2: ['line2', optional(string())],
  state: ['state', optional(string())],
  status: ['status', optional(statusEnumSchema)],
  zip: ['zip', optional(string())],
});
