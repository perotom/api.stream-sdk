/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "common.v21";

export interface FieldOptions {
  /** indcates that this field is planned for a future release of this api */
  future?: boolean | undefined;
  databaseId?: boolean | undefined;
  databaseReferenceFrom?: boolean | undefined;
  databaseReference?: string | undefined;
  databaseOwnerReference?: string | undefined;
  databaseReferenceDeep?: boolean | undefined;
  databaseReferenceFromArray?: boolean | undefined;
  databaseReferenceTo?: boolean | undefined;
  databaseIgnore?: boolean | undefined;
  databaseOptimizeSearch?: boolean | undefined;
  urlProtocols?: string | undefined;
  databaseAutoDelete?: boolean | undefined;
}

export interface MessageOptions {
  /** indcates that this field is planned for a future release of this api */
  databaseModel?: boolean | undefined;
  databaseCustomId?: boolean | undefined;
}

function createBaseFieldOptions(): FieldOptions {
  return {
    future: undefined,
    databaseId: undefined,
    databaseReferenceFrom: undefined,
    databaseReference: undefined,
    databaseOwnerReference: undefined,
    databaseReferenceDeep: undefined,
    databaseReferenceFromArray: undefined,
    databaseReferenceTo: undefined,
    databaseIgnore: undefined,
    databaseOptimizeSearch: undefined,
    urlProtocols: undefined,
    databaseAutoDelete: undefined,
  };
}

export const FieldOptions = {
  encode(
    message: FieldOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.future !== undefined) {
      writer.uint32(8).bool(message.future);
    }
    if (message.databaseId !== undefined) {
      writer.uint32(16).bool(message.databaseId);
    }
    if (message.databaseReferenceFrom !== undefined) {
      writer.uint32(24).bool(message.databaseReferenceFrom);
    }
    if (message.databaseReference !== undefined) {
      writer.uint32(34).string(message.databaseReference);
    }
    if (message.databaseOwnerReference !== undefined) {
      writer.uint32(42).string(message.databaseOwnerReference);
    }
    if (message.databaseReferenceDeep !== undefined) {
      writer.uint32(48).bool(message.databaseReferenceDeep);
    }
    if (message.databaseReferenceFromArray !== undefined) {
      writer.uint32(56).bool(message.databaseReferenceFromArray);
    }
    if (message.databaseReferenceTo !== undefined) {
      writer.uint32(64).bool(message.databaseReferenceTo);
    }
    if (message.databaseIgnore !== undefined) {
      writer.uint32(72).bool(message.databaseIgnore);
    }
    if (message.databaseOptimizeSearch !== undefined) {
      writer.uint32(80).bool(message.databaseOptimizeSearch);
    }
    if (message.urlProtocols !== undefined) {
      writer.uint32(90).string(message.urlProtocols);
    }
    if (message.databaseAutoDelete !== undefined) {
      writer.uint32(96).bool(message.databaseAutoDelete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.future = reader.bool();
          break;
        case 2:
          message.databaseId = reader.bool();
          break;
        case 3:
          message.databaseReferenceFrom = reader.bool();
          break;
        case 4:
          message.databaseReference = reader.string();
          break;
        case 5:
          message.databaseOwnerReference = reader.string();
          break;
        case 6:
          message.databaseReferenceDeep = reader.bool();
          break;
        case 7:
          message.databaseReferenceFromArray = reader.bool();
          break;
        case 8:
          message.databaseReferenceTo = reader.bool();
          break;
        case 9:
          message.databaseIgnore = reader.bool();
          break;
        case 10:
          message.databaseOptimizeSearch = reader.bool();
          break;
        case 11:
          message.urlProtocols = reader.string();
          break;
        case 12:
          message.databaseAutoDelete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldOptions {
    return {
      future: isSet(object.future) ? Boolean(object.future) : undefined,
      databaseId: isSet(object.databaseId)
        ? Boolean(object.databaseId)
        : undefined,
      databaseReferenceFrom: isSet(object.databaseReferenceFrom)
        ? Boolean(object.databaseReferenceFrom)
        : undefined,
      databaseReference: isSet(object.databaseReference)
        ? String(object.databaseReference)
        : undefined,
      databaseOwnerReference: isSet(object.databaseOwnerReference)
        ? String(object.databaseOwnerReference)
        : undefined,
      databaseReferenceDeep: isSet(object.databaseReferenceDeep)
        ? Boolean(object.databaseReferenceDeep)
        : undefined,
      databaseReferenceFromArray: isSet(object.databaseReferenceFromArray)
        ? Boolean(object.databaseReferenceFromArray)
        : undefined,
      databaseReferenceTo: isSet(object.databaseReferenceTo)
        ? Boolean(object.databaseReferenceTo)
        : undefined,
      databaseIgnore: isSet(object.databaseIgnore)
        ? Boolean(object.databaseIgnore)
        : undefined,
      databaseOptimizeSearch: isSet(object.databaseOptimizeSearch)
        ? Boolean(object.databaseOptimizeSearch)
        : undefined,
      urlProtocols: isSet(object.urlProtocols)
        ? String(object.urlProtocols)
        : undefined,
      databaseAutoDelete: isSet(object.databaseAutoDelete)
        ? Boolean(object.databaseAutoDelete)
        : undefined,
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    message.future !== undefined && (obj.future = message.future);
    message.databaseId !== undefined && (obj.databaseId = message.databaseId);
    message.databaseReferenceFrom !== undefined &&
      (obj.databaseReferenceFrom = message.databaseReferenceFrom);
    message.databaseReference !== undefined &&
      (obj.databaseReference = message.databaseReference);
    message.databaseOwnerReference !== undefined &&
      (obj.databaseOwnerReference = message.databaseOwnerReference);
    message.databaseReferenceDeep !== undefined &&
      (obj.databaseReferenceDeep = message.databaseReferenceDeep);
    message.databaseReferenceFromArray !== undefined &&
      (obj.databaseReferenceFromArray = message.databaseReferenceFromArray);
    message.databaseReferenceTo !== undefined &&
      (obj.databaseReferenceTo = message.databaseReferenceTo);
    message.databaseIgnore !== undefined &&
      (obj.databaseIgnore = message.databaseIgnore);
    message.databaseOptimizeSearch !== undefined &&
      (obj.databaseOptimizeSearch = message.databaseOptimizeSearch);
    message.urlProtocols !== undefined &&
      (obj.urlProtocols = message.urlProtocols);
    message.databaseAutoDelete !== undefined &&
      (obj.databaseAutoDelete = message.databaseAutoDelete);
    return obj;
  },

  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.future = object.future ?? undefined;
    message.databaseId = object.databaseId ?? undefined;
    message.databaseReferenceFrom = object.databaseReferenceFrom ?? undefined;
    message.databaseReference = object.databaseReference ?? undefined;
    message.databaseOwnerReference = object.databaseOwnerReference ?? undefined;
    message.databaseReferenceDeep = object.databaseReferenceDeep ?? undefined;
    message.databaseReferenceFromArray =
      object.databaseReferenceFromArray ?? undefined;
    message.databaseReferenceTo = object.databaseReferenceTo ?? undefined;
    message.databaseIgnore = object.databaseIgnore ?? undefined;
    message.databaseOptimizeSearch = object.databaseOptimizeSearch ?? undefined;
    message.urlProtocols = object.urlProtocols ?? undefined;
    message.databaseAutoDelete = object.databaseAutoDelete ?? undefined;
    return message;
  },
};

function createBaseMessageOptions(): MessageOptions {
  return { databaseModel: undefined, databaseCustomId: undefined };
}

export const MessageOptions = {
  encode(
    message: MessageOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.databaseModel !== undefined) {
      writer.uint32(8).bool(message.databaseModel);
    }
    if (message.databaseCustomId !== undefined) {
      writer.uint32(56).bool(message.databaseCustomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.databaseModel = reader.bool();
          break;
        case 7:
          message.databaseCustomId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageOptions {
    return {
      databaseModel: isSet(object.databaseModel)
        ? Boolean(object.databaseModel)
        : undefined,
      databaseCustomId: isSet(object.databaseCustomId)
        ? Boolean(object.databaseCustomId)
        : undefined,
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    message.databaseModel !== undefined &&
      (obj.databaseModel = message.databaseModel);
    message.databaseCustomId !== undefined &&
      (obj.databaseCustomId = message.databaseCustomId);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.databaseModel = object.databaseModel ?? undefined;
    message.databaseCustomId = object.databaseCustomId ?? undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
