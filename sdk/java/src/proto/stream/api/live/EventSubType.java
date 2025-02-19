/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: live/v21/api.proto

package stream.api.live;

/**
 * Protobuf enum {@code live.v21.EventSubType}
 */
public enum EventSubType
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>EVENT_SUB_TYPE_UNSPECIFIED = 0;</code>
   */
  EVENT_SUB_TYPE_UNSPECIFIED(0),
  /**
   * <code>EVENT_SUB_TYPE_CREATE = 1;</code>
   */
  EVENT_SUB_TYPE_CREATE(1),
  /**
   * <code>EVENT_SUB_TYPE_UPDATE = 2;</code>
   */
  EVENT_SUB_TYPE_UPDATE(2),
  /**
   * <code>EVENT_SUB_TYPE_DELETE = 3;</code>
   */
  EVENT_SUB_TYPE_DELETE(3),
  /**
   * <code>EVENT_SUB_TYPE_ADD = 4;</code>
   */
  EVENT_SUB_TYPE_ADD(4),
  /**
   * <code>EVENT_SUB_TYPE_REMOVE = 5;</code>
   */
  EVENT_SUB_TYPE_REMOVE(5),
  /**
   * <code>EVENT_SUB_TYPE_STATE = 6;</code>
   */
  EVENT_SUB_TYPE_STATE(6),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>EVENT_SUB_TYPE_UNSPECIFIED = 0;</code>
   */
  public static final int EVENT_SUB_TYPE_UNSPECIFIED_VALUE = 0;
  /**
   * <code>EVENT_SUB_TYPE_CREATE = 1;</code>
   */
  public static final int EVENT_SUB_TYPE_CREATE_VALUE = 1;
  /**
   * <code>EVENT_SUB_TYPE_UPDATE = 2;</code>
   */
  public static final int EVENT_SUB_TYPE_UPDATE_VALUE = 2;
  /**
   * <code>EVENT_SUB_TYPE_DELETE = 3;</code>
   */
  public static final int EVENT_SUB_TYPE_DELETE_VALUE = 3;
  /**
   * <code>EVENT_SUB_TYPE_ADD = 4;</code>
   */
  public static final int EVENT_SUB_TYPE_ADD_VALUE = 4;
  /**
   * <code>EVENT_SUB_TYPE_REMOVE = 5;</code>
   */
  public static final int EVENT_SUB_TYPE_REMOVE_VALUE = 5;
  /**
   * <code>EVENT_SUB_TYPE_STATE = 6;</code>
   */
  public static final int EVENT_SUB_TYPE_STATE_VALUE = 6;


  public final int getNumber() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalArgumentException(
          "Can't get the number of an unknown enum value.");
    }
    return value;
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   * @deprecated Use {@link #forNumber(int)} instead.
   */
  @java.lang.Deprecated
  public static EventSubType valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static EventSubType forNumber(int value) {
    switch (value) {
      case 0: return EVENT_SUB_TYPE_UNSPECIFIED;
      case 1: return EVENT_SUB_TYPE_CREATE;
      case 2: return EVENT_SUB_TYPE_UPDATE;
      case 3: return EVENT_SUB_TYPE_DELETE;
      case 4: return EVENT_SUB_TYPE_ADD;
      case 5: return EVENT_SUB_TYPE_REMOVE;
      case 6: return EVENT_SUB_TYPE_STATE;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<EventSubType>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      EventSubType> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<EventSubType>() {
          public EventSubType findValueByNumber(int number) {
            return EventSubType.forNumber(number);
          }
        };

  public final com.google.protobuf.Descriptors.EnumValueDescriptor
      getValueDescriptor() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalStateException(
          "Can't get the descriptor of an unrecognized enum value.");
    }
    return getDescriptor().getValues().get(ordinal());
  }
  public final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptorForType() {
    return getDescriptor();
  }
  public static final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptor() {
    return stream.api.live.Api.getDescriptor().getEnumTypes().get(14);
  }

  private static final EventSubType[] VALUES = values();

  public static EventSubType valueOf(
      com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
    if (desc.getType() != getDescriptor()) {
      throw new java.lang.IllegalArgumentException(
        "EnumValueDescriptor is not for this type.");
    }
    if (desc.getIndex() == -1) {
      return UNRECOGNIZED;
    }
    return VALUES[desc.getIndex()];
  }

  private final int value;

  private EventSubType(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:live.v21.EventSubType)
}

