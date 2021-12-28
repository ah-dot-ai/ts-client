/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StatusEnum
 */
export enum StatusEnum {
  Verified = 'verified',
  Unverified = 'unverified',
  VerificationFailed = 'verification_failed',
}

/**
 * Schema for StatusEnum
 */
export const statusEnumSchema: Schema<StatusEnum> = stringEnum(StatusEnum);
