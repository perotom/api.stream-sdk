/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";

export const protobufPackage = "audit.v21";

export interface Audit {
  serviceId: string;
  serviceUserId: string;
  userId: string;
  operation: string;
  projectId?: string | undefined;
  request: any | undefined;
  response: any | undefined;
}

function createBaseAudit(): Audit {
  return {
    serviceId: "",
    serviceUserId: "",
    userId: "",
    operation: "",
    projectId: undefined,
    request: undefined,
    response: undefined,
  };
}

export const Audit = {
  encode(message: Audit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.serviceUserId !== "") {
      writer.uint32(18).string(message.serviceUserId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.operation !== "") {
      writer.uint32(34).string(message.operation);
    }
    if (message.projectId !== undefined) {
      writer.uint32(42).string(message.projectId);
    }
    if (message.request !== undefined) {
      Value.encode(
        Value.wrap(message.request),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      Value.encode(
        Value.wrap(message.response),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Audit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.serviceUserId = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        case 4:
          message.operation = reader.string();
          break;
        case 5:
          message.projectId = reader.string();
          break;
        case 6:
          message.request = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        case 7:
          message.response = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Audit {
    return {
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
      serviceUserId: isSet(object.serviceUserId)
        ? String(object.serviceUserId)
        : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : undefined,
      request: isSet(object?.request) ? object.request : undefined,
      response: isSet(object?.response) ? object.response : undefined,
    };
  },

  toJSON(message: Audit): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.serviceUserId !== undefined &&
      (obj.serviceUserId = message.serviceUserId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.operation !== undefined && (obj.operation = message.operation);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.request !== undefined && (obj.request = message.request);
    message.response !== undefined && (obj.response = message.response);
    return obj;
  },

  fromPartial(object: DeepPartial<Audit>): Audit {
    const message = createBaseAudit();
    message.serviceId = object.serviceId ?? "";
    message.serviceUserId = object.serviceUserId ?? "";
    message.userId = object.userId ?? "";
    message.operation = object.operation ?? "";
    message.projectId = object.projectId ?? undefined;
    message.request = object.request ?? undefined;
    message.response = object.response ?? undefined;
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
