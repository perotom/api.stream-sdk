/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  NullValue,
  nullValueToNumber,
  nullValueFromJSON,
  nullValueToJSON,
  Value,
} from "../../google/protobuf/struct";
import { FieldMask } from "../../google/protobuf/field_mask";

export const protobufPackage = "live.v21";

/** image binary format */
export enum ImageFormat {
  IMAGE_FORMAT_UNSPECIFIED = "IMAGE_FORMAT_UNSPECIFIED",
  IMAGE_FORMAT_JPEG = "IMAGE_FORMAT_JPEG",
}

export function imageFormatFromJSON(object: any): ImageFormat {
  switch (object) {
    case 0:
    case "IMAGE_FORMAT_UNSPECIFIED":
      return ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
    case 1:
    case "IMAGE_FORMAT_JPEG":
      return ImageFormat.IMAGE_FORMAT_JPEG;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ImageFormat"
      );
  }
}

export function imageFormatToJSON(object: ImageFormat): string {
  switch (object) {
    case ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
      return "IMAGE_FORMAT_UNSPECIFIED";
    case ImageFormat.IMAGE_FORMAT_JPEG:
      return "IMAGE_FORMAT_JPEG";
    default:
      return "UNKNOWN";
  }
}

export function imageFormatToNumber(object: ImageFormat): number {
  switch (object) {
    case ImageFormat.IMAGE_FORMAT_UNSPECIFIED:
      return 0;
    case ImageFormat.IMAGE_FORMAT_JPEG:
      return 1;
    default:
      return 0;
  }
}

/** rendering color space */
export enum VideoColorSpace {
  VIDEO_COLOR_SPACE_UNSPECIFIED = "VIDEO_COLOR_SPACE_UNSPECIFIED",
  VIDEO_COLOR_SPACE_YUV420 = "VIDEO_COLOR_SPACE_YUV420",
}

export function videoColorSpaceFromJSON(object: any): VideoColorSpace {
  switch (object) {
    case 0:
    case "VIDEO_COLOR_SPACE_UNSPECIFIED":
      return VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED;
    case 1:
    case "VIDEO_COLOR_SPACE_YUV420":
      return VideoColorSpace.VIDEO_COLOR_SPACE_YUV420;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum VideoColorSpace"
      );
  }
}

export function videoColorSpaceToJSON(object: VideoColorSpace): string {
  switch (object) {
    case VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED:
      return "VIDEO_COLOR_SPACE_UNSPECIFIED";
    case VideoColorSpace.VIDEO_COLOR_SPACE_YUV420:
      return "VIDEO_COLOR_SPACE_YUV420";
    default:
      return "UNKNOWN";
  }
}

export function videoColorSpaceToNumber(object: VideoColorSpace): number {
  switch (object) {
    case VideoColorSpace.VIDEO_COLOR_SPACE_UNSPECIFIED:
      return 0;
    case VideoColorSpace.VIDEO_COLOR_SPACE_YUV420:
      return 1;
    default:
      return 0;
  }
}

/** audio channel layout */
export enum AudioChannelLayout {
  AUDIO_CHANNEL_LAYOUT_UNSPECIFIED = "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED",
  AUDIO_CHANNEL_LAYOUT_STEREO = "AUDIO_CHANNEL_LAYOUT_STEREO",
}

export function audioChannelLayoutFromJSON(object: any): AudioChannelLayout {
  switch (object) {
    case 0:
    case "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED":
      return AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED;
    case 1:
    case "AUDIO_CHANNEL_LAYOUT_STEREO":
      return AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum AudioChannelLayout"
      );
  }
}

export function audioChannelLayoutToJSON(object: AudioChannelLayout): string {
  switch (object) {
    case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED:
      return "AUDIO_CHANNEL_LAYOUT_UNSPECIFIED";
    case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO:
      return "AUDIO_CHANNEL_LAYOUT_STEREO";
    default:
      return "UNKNOWN";
  }
}

export function audioChannelLayoutToNumber(object: AudioChannelLayout): number {
  switch (object) {
    case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_UNSPECIFIED:
      return 0;
    case AudioChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO:
      return 1;
    default:
      return 0;
  }
}

/** rendering quality */
export enum RenderingQuality {
  RENDERING_QUALITY_UNSPECIFIED = "RENDERING_QUALITY_UNSPECIFIED",
  RENDERING_QUALITY_STANDARD = "RENDERING_QUALITY_STANDARD",
  RENDERING_QUALITY_HIGH = "RENDERING_QUALITY_HIGH",
}

export function renderingQualityFromJSON(object: any): RenderingQuality {
  switch (object) {
    case 0:
    case "RENDERING_QUALITY_UNSPECIFIED":
      return RenderingQuality.RENDERING_QUALITY_UNSPECIFIED;
    case 1:
    case "RENDERING_QUALITY_STANDARD":
      return RenderingQuality.RENDERING_QUALITY_STANDARD;
    case 2:
    case "RENDERING_QUALITY_HIGH":
      return RenderingQuality.RENDERING_QUALITY_HIGH;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum RenderingQuality"
      );
  }
}

export function renderingQualityToJSON(object: RenderingQuality): string {
  switch (object) {
    case RenderingQuality.RENDERING_QUALITY_UNSPECIFIED:
      return "RENDERING_QUALITY_UNSPECIFIED";
    case RenderingQuality.RENDERING_QUALITY_STANDARD:
      return "RENDERING_QUALITY_STANDARD";
    case RenderingQuality.RENDERING_QUALITY_HIGH:
      return "RENDERING_QUALITY_HIGH";
    default:
      return "UNKNOWN";
  }
}

export function renderingQualityToNumber(object: RenderingQuality): number {
  switch (object) {
    case RenderingQuality.RENDERING_QUALITY_UNSPECIFIED:
      return 0;
    case RenderingQuality.RENDERING_QUALITY_STANDARD:
      return 1;
    case RenderingQuality.RENDERING_QUALITY_HIGH:
      return 2;
    default:
      return 0;
  }
}

/** video encoding codec */
export enum VideoCodec {
  VIDEO_CODEC_UNSPECIFIED = "VIDEO_CODEC_UNSPECIFIED",
  VIDEO_CODEC_H264 = "VIDEO_CODEC_H264",
}

export function videoCodecFromJSON(object: any): VideoCodec {
  switch (object) {
    case 0:
    case "VIDEO_CODEC_UNSPECIFIED":
      return VideoCodec.VIDEO_CODEC_UNSPECIFIED;
    case 1:
    case "VIDEO_CODEC_H264":
      return VideoCodec.VIDEO_CODEC_H264;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum VideoCodec"
      );
  }
}

export function videoCodecToJSON(object: VideoCodec): string {
  switch (object) {
    case VideoCodec.VIDEO_CODEC_UNSPECIFIED:
      return "VIDEO_CODEC_UNSPECIFIED";
    case VideoCodec.VIDEO_CODEC_H264:
      return "VIDEO_CODEC_H264";
    default:
      return "UNKNOWN";
  }
}

export function videoCodecToNumber(object: VideoCodec): number {
  switch (object) {
    case VideoCodec.VIDEO_CODEC_UNSPECIFIED:
      return 0;
    case VideoCodec.VIDEO_CODEC_H264:
      return 1;
    default:
      return 0;
  }
}

/** video encoding codec profile */
export enum VideoCodecProfile {
  VIDEO_CODEC_PROFILE_UNSPECIFIED = "VIDEO_CODEC_PROFILE_UNSPECIFIED",
  VIDEO_CODEC_PROFILE_BASELINE = "VIDEO_CODEC_PROFILE_BASELINE",
  VIDEO_CODEC_PROFILE_MAIN = "VIDEO_CODEC_PROFILE_MAIN",
  VIDEO_CODEC_PROFILE_HIGH = "VIDEO_CODEC_PROFILE_HIGH",
}

export function videoCodecProfileFromJSON(object: any): VideoCodecProfile {
  switch (object) {
    case 0:
    case "VIDEO_CODEC_PROFILE_UNSPECIFIED":
      return VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED;
    case 2:
    case "VIDEO_CODEC_PROFILE_BASELINE":
      return VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE;
    case 3:
    case "VIDEO_CODEC_PROFILE_MAIN":
      return VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN;
    case 4:
    case "VIDEO_CODEC_PROFILE_HIGH":
      return VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum VideoCodecProfile"
      );
  }
}

export function videoCodecProfileToJSON(object: VideoCodecProfile): string {
  switch (object) {
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED:
      return "VIDEO_CODEC_PROFILE_UNSPECIFIED";
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE:
      return "VIDEO_CODEC_PROFILE_BASELINE";
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN:
      return "VIDEO_CODEC_PROFILE_MAIN";
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH:
      return "VIDEO_CODEC_PROFILE_HIGH";
    default:
      return "UNKNOWN";
  }
}

export function videoCodecProfileToNumber(object: VideoCodecProfile): number {
  switch (object) {
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_UNSPECIFIED:
      return 0;
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_BASELINE:
      return 2;
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_MAIN:
      return 3;
    case VideoCodecProfile.VIDEO_CODEC_PROFILE_HIGH:
      return 4;
    default:
      return 0;
  }
}

/** audio encoding codec */
export enum AudioCodec {
  AUDIO_CODEC_UNSPECIFIED = "AUDIO_CODEC_UNSPECIFIED",
  AUDIO_CODEC_AAC = "AUDIO_CODEC_AAC",
}

export function audioCodecFromJSON(object: any): AudioCodec {
  switch (object) {
    case 0:
    case "AUDIO_CODEC_UNSPECIFIED":
      return AudioCodec.AUDIO_CODEC_UNSPECIFIED;
    case 1:
    case "AUDIO_CODEC_AAC":
      return AudioCodec.AUDIO_CODEC_AAC;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum AudioCodec"
      );
  }
}

export function audioCodecToJSON(object: AudioCodec): string {
  switch (object) {
    case AudioCodec.AUDIO_CODEC_UNSPECIFIED:
      return "AUDIO_CODEC_UNSPECIFIED";
    case AudioCodec.AUDIO_CODEC_AAC:
      return "AUDIO_CODEC_AAC";
    default:
      return "UNKNOWN";
  }
}

export function audioCodecToNumber(object: AudioCodec): number {
  switch (object) {
    case AudioCodec.AUDIO_CODEC_UNSPECIFIED:
      return 0;
    case AudioCodec.AUDIO_CODEC_AAC:
      return 1;
    default:
      return 0;
  }
}

/** video encoding rate control mode */
export enum VideoCodecRateControlMode {
  VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED = "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED",
  /** VIDEO_CODEC_RATE_CONTROL_MODE_CBR - constant bit rate encoding */
  VIDEO_CODEC_RATE_CONTROL_MODE_CBR = "VIDEO_CODEC_RATE_CONTROL_MODE_CBR",
}

export function videoCodecRateControlModeFromJSON(
  object: any
): VideoCodecRateControlMode {
  switch (object) {
    case 0:
    case "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED":
      return VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED;
    case 1:
    case "VIDEO_CODEC_RATE_CONTROL_MODE_CBR":
      return VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum VideoCodecRateControlMode"
      );
  }
}

export function videoCodecRateControlModeToJSON(
  object: VideoCodecRateControlMode
): string {
  switch (object) {
    case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED:
      return "VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED";
    case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR:
      return "VIDEO_CODEC_RATE_CONTROL_MODE_CBR";
    default:
      return "UNKNOWN";
  }
}

export function videoCodecRateControlModeToNumber(
  object: VideoCodecRateControlMode
): number {
  switch (object) {
    case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_UNSPECIFIED:
      return 0;
    case VideoCodecRateControlMode.VIDEO_CODEC_RATE_CONTROL_MODE_CBR:
      return 1;
    default:
      return 0;
  }
}

/** broadcast phase of project */
export enum ProjectBroadcastPhase {
  PROJECT_BROADCAST_PHASE_UNSPECIFIED = "PROJECT_BROADCAST_PHASE_UNSPECIFIED",
  PROJECT_BROADCAST_PHASE_NOT_RUNNING = "PROJECT_BROADCAST_PHASE_NOT_RUNNING",
  /** PROJECT_BROADCAST_PHASE_WAITING - broadcast is waiting to be scheduled */
  PROJECT_BROADCAST_PHASE_WAITING = "PROJECT_BROADCAST_PHASE_WAITING",
  PROJECT_BROADCAST_PHASE_STARTING = "PROJECT_BROADCAST_PHASE_STARTING",
  PROJECT_BROADCAST_PHASE_RUNNING = "PROJECT_BROADCAST_PHASE_RUNNING",
  PROJECT_BROADCAST_PHASE_STOPPING = "PROJECT_BROADCAST_PHASE_STOPPING",
  PROJECT_BROADCAST_PHASE_STOPPED = "PROJECT_BROADCAST_PHASE_STOPPED",
  PROJECT_BROADCAST_PHASE_ARCHIVED = "PROJECT_BROADCAST_PHASE_ARCHIVED",
}

export function projectBroadcastPhaseFromJSON(
  object: any
): ProjectBroadcastPhase {
  switch (object) {
    case 0:
    case "PROJECT_BROADCAST_PHASE_UNSPECIFIED":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED;
    case 1:
    case "PROJECT_BROADCAST_PHASE_NOT_RUNNING":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING;
    case 2:
    case "PROJECT_BROADCAST_PHASE_WAITING":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING;
    case 3:
    case "PROJECT_BROADCAST_PHASE_STARTING":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING;
    case 4:
    case "PROJECT_BROADCAST_PHASE_RUNNING":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING;
    case 5:
    case "PROJECT_BROADCAST_PHASE_STOPPING":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING;
    case 6:
    case "PROJECT_BROADCAST_PHASE_STOPPED":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED;
    case 7:
    case "PROJECT_BROADCAST_PHASE_ARCHIVED":
      return ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ProjectBroadcastPhase"
      );
  }
}

export function projectBroadcastPhaseToJSON(
  object: ProjectBroadcastPhase
): string {
  switch (object) {
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED:
      return "PROJECT_BROADCAST_PHASE_UNSPECIFIED";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING:
      return "PROJECT_BROADCAST_PHASE_NOT_RUNNING";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING:
      return "PROJECT_BROADCAST_PHASE_WAITING";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING:
      return "PROJECT_BROADCAST_PHASE_STARTING";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING:
      return "PROJECT_BROADCAST_PHASE_RUNNING";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING:
      return "PROJECT_BROADCAST_PHASE_STOPPING";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED:
      return "PROJECT_BROADCAST_PHASE_STOPPED";
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED:
      return "PROJECT_BROADCAST_PHASE_ARCHIVED";
    default:
      return "UNKNOWN";
  }
}

export function projectBroadcastPhaseToNumber(
  object: ProjectBroadcastPhase
): number {
  switch (object) {
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED:
      return 0;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_NOT_RUNNING:
      return 1;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_WAITING:
      return 2;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STARTING:
      return 3;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_RUNNING:
      return 4;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPING:
      return 5;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_STOPPED:
      return 6;
    case ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_ARCHIVED:
      return 7;
    default:
      return 0;
  }
}

/** boolean logic for trigger */
export enum SourceTriggerAction {
  SOURCE_TRIGGER_ACTION_UNSPECIFIED = "SOURCE_TRIGGER_ACTION_UNSPECIFIED",
  SOURCE_TRIGGER_ACTION_IGNORE = "SOURCE_TRIGGER_ACTION_IGNORE",
  /** SOURCE_TRIGGER_ACTION_OR - SOURCE_TRIGGER_ACTION_AND = 2; */
  SOURCE_TRIGGER_ACTION_OR = "SOURCE_TRIGGER_ACTION_OR",
}

export function sourceTriggerActionFromJSON(object: any): SourceTriggerAction {
  switch (object) {
    case 0:
    case "SOURCE_TRIGGER_ACTION_UNSPECIFIED":
      return SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED;
    case 1:
    case "SOURCE_TRIGGER_ACTION_IGNORE":
      return SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE;
    case 3:
    case "SOURCE_TRIGGER_ACTION_OR":
      return SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SourceTriggerAction"
      );
  }
}

export function sourceTriggerActionToJSON(object: SourceTriggerAction): string {
  switch (object) {
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED:
      return "SOURCE_TRIGGER_ACTION_UNSPECIFIED";
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE:
      return "SOURCE_TRIGGER_ACTION_IGNORE";
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR:
      return "SOURCE_TRIGGER_ACTION_OR";
    default:
      return "UNKNOWN";
  }
}

export function sourceTriggerActionToNumber(
  object: SourceTriggerAction
): number {
  switch (object) {
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_UNSPECIFIED:
      return 0;
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_IGNORE:
      return 1;
    case SourceTriggerAction.SOURCE_TRIGGER_ACTION_OR:
      return 3;
    default:
      return 0;
  }
}

/** region which is hosting broadcast */
export enum Region {
  REGION_UNSPECIFIED = "REGION_UNSPECIFIED",
  /** REGION_US_EAST_1 - US East */
  REGION_US_EAST_1 = "REGION_US_EAST_1",
  REGION_US_EAST_2 = "REGION_US_EAST_2",
  /** REGION_US_WEST_1 - US West */
  REGION_US_WEST_1 = "REGION_US_WEST_1",
  REGION_US_WEST_2 = "REGION_US_WEST_2",
  /** REGION_US_CENTRAL_1 - US Central */
  REGION_US_CENTRAL_1 = "REGION_US_CENTRAL_1",
  /** REGION_AP_SOUTHEAST_1 - Asia Pacific Southeast */
  REGION_AP_SOUTHEAST_1 = "REGION_AP_SOUTHEAST_1",
  /** REGION_CA_EAST_1 - Canada East */
  REGION_CA_EAST_1 = "REGION_CA_EAST_1",
  /** REGION_EU_CENTRAL_1 - Europe Central */
  REGION_EU_CENTRAL_1 = "REGION_EU_CENTRAL_1",
  /** REGION_EU_WEST_1 - Europe West */
  REGION_EU_WEST_1 = "REGION_EU_WEST_1",
}

export function regionFromJSON(object: any): Region {
  switch (object) {
    case 0:
    case "REGION_UNSPECIFIED":
      return Region.REGION_UNSPECIFIED;
    case 1:
    case "REGION_US_EAST_1":
      return Region.REGION_US_EAST_1;
    case 2:
    case "REGION_US_EAST_2":
      return Region.REGION_US_EAST_2;
    case 3:
    case "REGION_US_WEST_1":
      return Region.REGION_US_WEST_1;
    case 4:
    case "REGION_US_WEST_2":
      return Region.REGION_US_WEST_2;
    case 5:
    case "REGION_US_CENTRAL_1":
      return Region.REGION_US_CENTRAL_1;
    case 10:
    case "REGION_AP_SOUTHEAST_1":
      return Region.REGION_AP_SOUTHEAST_1;
    case 20:
    case "REGION_CA_EAST_1":
      return Region.REGION_CA_EAST_1;
    case 30:
    case "REGION_EU_CENTRAL_1":
      return Region.REGION_EU_CENTRAL_1;
    case 31:
    case "REGION_EU_WEST_1":
      return Region.REGION_EU_WEST_1;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Region"
      );
  }
}

export function regionToJSON(object: Region): string {
  switch (object) {
    case Region.REGION_UNSPECIFIED:
      return "REGION_UNSPECIFIED";
    case Region.REGION_US_EAST_1:
      return "REGION_US_EAST_1";
    case Region.REGION_US_EAST_2:
      return "REGION_US_EAST_2";
    case Region.REGION_US_WEST_1:
      return "REGION_US_WEST_1";
    case Region.REGION_US_WEST_2:
      return "REGION_US_WEST_2";
    case Region.REGION_US_CENTRAL_1:
      return "REGION_US_CENTRAL_1";
    case Region.REGION_AP_SOUTHEAST_1:
      return "REGION_AP_SOUTHEAST_1";
    case Region.REGION_CA_EAST_1:
      return "REGION_CA_EAST_1";
    case Region.REGION_EU_CENTRAL_1:
      return "REGION_EU_CENTRAL_1";
    case Region.REGION_EU_WEST_1:
      return "REGION_EU_WEST_1";
    default:
      return "UNKNOWN";
  }
}

export function regionToNumber(object: Region): number {
  switch (object) {
    case Region.REGION_UNSPECIFIED:
      return 0;
    case Region.REGION_US_EAST_1:
      return 1;
    case Region.REGION_US_EAST_2:
      return 2;
    case Region.REGION_US_WEST_1:
      return 3;
    case Region.REGION_US_WEST_2:
      return 4;
    case Region.REGION_US_CENTRAL_1:
      return 5;
    case Region.REGION_AP_SOUTHEAST_1:
      return 10;
    case Region.REGION_CA_EAST_1:
      return 20;
    case Region.REGION_EU_CENTRAL_1:
      return 30;
    case Region.REGION_EU_WEST_1:
      return 31;
    default:
      return 0;
  }
}

/** defined roles */
export enum Role {
  ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED",
  ROLE_HOST = "ROLE_HOST",
  ROLE_COHOST = "ROLE_COHOST",
  ROLE_CONTRIBUTOR = "ROLE_CONTRIBUTOR",
  ROLE_GUEST = "ROLE_GUEST",
  ROLE_VIEWER = "ROLE_VIEWER",
  ROLE_RENDERER = "ROLE_RENDERER",
  ROLE_PLATFORM = "ROLE_PLATFORM",
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Role.ROLE_UNSPECIFIED;
    case 1:
    case "ROLE_HOST":
      return Role.ROLE_HOST;
    case 2:
    case "ROLE_COHOST":
      return Role.ROLE_COHOST;
    case 3:
    case "ROLE_CONTRIBUTOR":
      return Role.ROLE_CONTRIBUTOR;
    case 4:
    case "ROLE_GUEST":
      return Role.ROLE_GUEST;
    case 5:
    case "ROLE_VIEWER":
      return Role.ROLE_VIEWER;
    case 6:
    case "ROLE_RENDERER":
      return Role.ROLE_RENDERER;
    case 7:
    case "ROLE_PLATFORM":
      return Role.ROLE_PLATFORM;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Role"
      );
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Role.ROLE_HOST:
      return "ROLE_HOST";
    case Role.ROLE_COHOST:
      return "ROLE_COHOST";
    case Role.ROLE_CONTRIBUTOR:
      return "ROLE_CONTRIBUTOR";
    case Role.ROLE_GUEST:
      return "ROLE_GUEST";
    case Role.ROLE_VIEWER:
      return "ROLE_VIEWER";
    case Role.ROLE_RENDERER:
      return "ROLE_RENDERER";
    case Role.ROLE_PLATFORM:
      return "ROLE_PLATFORM";
    default:
      return "UNKNOWN";
  }
}

export function roleToNumber(object: Role): number {
  switch (object) {
    case Role.ROLE_UNSPECIFIED:
      return 0;
    case Role.ROLE_HOST:
      return 1;
    case Role.ROLE_COHOST:
      return 2;
    case Role.ROLE_CONTRIBUTOR:
      return 3;
    case Role.ROLE_GUEST:
      return 4;
    case Role.ROLE_VIEWER:
      return 5;
    case Role.ROLE_RENDERER:
      return 6;
    case Role.ROLE_PLATFORM:
      return 7;
    default:
      return 0;
  }
}

/** an error that occured during a broadcast */
export enum ProjectBroadcastError {
  PROJECT_BROADCAST_ERROR_UNSPECIFIED = "PROJECT_BROADCAST_ERROR_UNSPECIFIED",
  PROJECT_BROADCAST_ERROR_INTERNAL = "PROJECT_BROADCAST_ERROR_INTERNAL",
  PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED = "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED",
}

export function projectBroadcastErrorFromJSON(
  object: any
): ProjectBroadcastError {
  switch (object) {
    case 0:
    case "PROJECT_BROADCAST_ERROR_UNSPECIFIED":
      return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED;
    case 1:
    case "PROJECT_BROADCAST_ERROR_INTERNAL":
      return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL;
    case 2:
    case "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED":
      return ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ProjectBroadcastError"
      );
  }
}

export function projectBroadcastErrorToJSON(
  object: ProjectBroadcastError
): string {
  switch (object) {
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED:
      return "PROJECT_BROADCAST_ERROR_UNSPECIFIED";
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL:
      return "PROJECT_BROADCAST_ERROR_INTERNAL";
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED:
      return "PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED";
    default:
      return "UNKNOWN";
  }
}

export function projectBroadcastErrorToNumber(
  object: ProjectBroadcastError
): number {
  switch (object) {
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_UNSPECIFIED:
      return 0;
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_INTERNAL:
      return 1;
    case ProjectBroadcastError.PROJECT_BROADCAST_ERROR_DURATION_EXCEEDED:
      return 2;
    default:
      return 0;
  }
}

/** the state of the connection */
export enum ConnectState {
  CONNECT_STATE_UNSPECIFIED = "CONNECT_STATE_UNSPECIFIED",
  CONNECT_STATE_CONNECTED = "CONNECT_STATE_CONNECTED",
  CONNECT_STATE_DISCONNECTED = "CONNECT_STATE_DISCONNECTED",
}

export function connectStateFromJSON(object: any): ConnectState {
  switch (object) {
    case 0:
    case "CONNECT_STATE_UNSPECIFIED":
      return ConnectState.CONNECT_STATE_UNSPECIFIED;
    case 1:
    case "CONNECT_STATE_CONNECTED":
      return ConnectState.CONNECT_STATE_CONNECTED;
    case 2:
    case "CONNECT_STATE_DISCONNECTED":
      return ConnectState.CONNECT_STATE_DISCONNECTED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ConnectState"
      );
  }
}

export function connectStateToJSON(object: ConnectState): string {
  switch (object) {
    case ConnectState.CONNECT_STATE_UNSPECIFIED:
      return "CONNECT_STATE_UNSPECIFIED";
    case ConnectState.CONNECT_STATE_CONNECTED:
      return "CONNECT_STATE_CONNECTED";
    case ConnectState.CONNECT_STATE_DISCONNECTED:
      return "CONNECT_STATE_DISCONNECTED";
    default:
      return "UNKNOWN";
  }
}

export function connectStateToNumber(object: ConnectState): number {
  switch (object) {
    case ConnectState.CONNECT_STATE_UNSPECIFIED:
      return 0;
    case ConnectState.CONNECT_STATE_CONNECTED:
      return 1;
    case ConnectState.CONNECT_STATE_DISCONNECTED:
      return 2;
    default:
      return 0;
  }
}

export enum EventSubType {
  EVENT_SUB_TYPE_UNSPECIFIED = "EVENT_SUB_TYPE_UNSPECIFIED",
  EVENT_SUB_TYPE_CREATE = "EVENT_SUB_TYPE_CREATE",
  EVENT_SUB_TYPE_UPDATE = "EVENT_SUB_TYPE_UPDATE",
  EVENT_SUB_TYPE_DELETE = "EVENT_SUB_TYPE_DELETE",
  EVENT_SUB_TYPE_ADD = "EVENT_SUB_TYPE_ADD",
  EVENT_SUB_TYPE_REMOVE = "EVENT_SUB_TYPE_REMOVE",
  EVENT_SUB_TYPE_STATE = "EVENT_SUB_TYPE_STATE",
}

export function eventSubTypeFromJSON(object: any): EventSubType {
  switch (object) {
    case 0:
    case "EVENT_SUB_TYPE_UNSPECIFIED":
      return EventSubType.EVENT_SUB_TYPE_UNSPECIFIED;
    case 1:
    case "EVENT_SUB_TYPE_CREATE":
      return EventSubType.EVENT_SUB_TYPE_CREATE;
    case 2:
    case "EVENT_SUB_TYPE_UPDATE":
      return EventSubType.EVENT_SUB_TYPE_UPDATE;
    case 3:
    case "EVENT_SUB_TYPE_DELETE":
      return EventSubType.EVENT_SUB_TYPE_DELETE;
    case 4:
    case "EVENT_SUB_TYPE_ADD":
      return EventSubType.EVENT_SUB_TYPE_ADD;
    case 5:
    case "EVENT_SUB_TYPE_REMOVE":
      return EventSubType.EVENT_SUB_TYPE_REMOVE;
    case 6:
    case "EVENT_SUB_TYPE_STATE":
      return EventSubType.EVENT_SUB_TYPE_STATE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum EventSubType"
      );
  }
}

export function eventSubTypeToJSON(object: EventSubType): string {
  switch (object) {
    case EventSubType.EVENT_SUB_TYPE_UNSPECIFIED:
      return "EVENT_SUB_TYPE_UNSPECIFIED";
    case EventSubType.EVENT_SUB_TYPE_CREATE:
      return "EVENT_SUB_TYPE_CREATE";
    case EventSubType.EVENT_SUB_TYPE_UPDATE:
      return "EVENT_SUB_TYPE_UPDATE";
    case EventSubType.EVENT_SUB_TYPE_DELETE:
      return "EVENT_SUB_TYPE_DELETE";
    case EventSubType.EVENT_SUB_TYPE_ADD:
      return "EVENT_SUB_TYPE_ADD";
    case EventSubType.EVENT_SUB_TYPE_REMOVE:
      return "EVENT_SUB_TYPE_REMOVE";
    case EventSubType.EVENT_SUB_TYPE_STATE:
      return "EVENT_SUB_TYPE_STATE";
    default:
      return "UNKNOWN";
  }
}

export function eventSubTypeToNumber(object: EventSubType): number {
  switch (object) {
    case EventSubType.EVENT_SUB_TYPE_UNSPECIFIED:
      return 0;
    case EventSubType.EVENT_SUB_TYPE_CREATE:
      return 1;
    case EventSubType.EVENT_SUB_TYPE_UPDATE:
      return 2;
    case EventSubType.EVENT_SUB_TYPE_DELETE:
      return 3;
    case EventSubType.EVENT_SUB_TYPE_ADD:
      return 4;
    case EventSubType.EVENT_SUB_TYPE_REMOVE:
      return 5;
    case EventSubType.EVENT_SUB_TYPE_STATE:
      return 6;
    default:
      return 0;
  }
}

export enum EventType {
  EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED",
  EVENT_TYPE_COLLECTION = "EVENT_TYPE_COLLECTION",
  EVENT_TYPE_PROJECT = "EVENT_TYPE_PROJECT",
  EVENT_TYPE_SOURCE = "EVENT_TYPE_SOURCE",
  EVENT_TYPE_DESTINATION = "EVENT_TYPE_DESTINATION",
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "EVENT_TYPE_COLLECTION":
      return EventType.EVENT_TYPE_COLLECTION;
    case 2:
    case "EVENT_TYPE_PROJECT":
      return EventType.EVENT_TYPE_PROJECT;
    case 4:
    case "EVENT_TYPE_SOURCE":
      return EventType.EVENT_TYPE_SOURCE;
    case 5:
    case "EVENT_TYPE_DESTINATION":
      return EventType.EVENT_TYPE_DESTINATION;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum EventType"
      );
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case EventType.EVENT_TYPE_COLLECTION:
      return "EVENT_TYPE_COLLECTION";
    case EventType.EVENT_TYPE_PROJECT:
      return "EVENT_TYPE_PROJECT";
    case EventType.EVENT_TYPE_SOURCE:
      return "EVENT_TYPE_SOURCE";
    case EventType.EVENT_TYPE_DESTINATION:
      return "EVENT_TYPE_DESTINATION";
    default:
      return "UNKNOWN";
  }
}

export function eventTypeToNumber(object: EventType): number {
  switch (object) {
    case EventType.EVENT_TYPE_UNSPECIFIED:
      return 0;
    case EventType.EVENT_TYPE_COLLECTION:
      return 1;
    case EventType.EVENT_TYPE_PROJECT:
      return 2;
    case EventType.EVENT_TYPE_SOURCE:
      return 4;
    case EventType.EVENT_TYPE_DESTINATION:
      return 5;
    default:
      return 0;
  }
}

/** composition video parameters */
export interface VideoRendering {
  /** canvas height (pixels) */
  height?: number | undefined;
  /** canvas width (pixels) */
  width?: number | undefined;
  /** canvas frame rate (frames/s) */
  framerate?: number | undefined;
  /** rendering color space */
  colorSpace?: VideoColorSpace | undefined;
}

/** composition audio parameters */
export interface AudioRendering {
  /** audio channel layout */
  channelLayout?: AudioChannelLayout | undefined;
}

/** composition parameters */
export interface Rendering {
  /** composition video parameters */
  video?: VideoRendering | undefined;
  /** composition audio parameters */
  audio?: AudioRendering | undefined;
  /** rendering quality */
  quality?: RenderingQuality | undefined;
  /** target end-to-end latency (in ms) */
  targetLatency?: number | undefined;
  /** estimated composition complexity (where 0 is nominal complexity) */
  complexity?: number | undefined;
}

/** video encoding CBR rate control params */
export interface VideoCodecRateControl {
  mode?: VideoCodecRateControlMode | undefined;
  /** video encoding target bitrate (bits/s) */
  targetBitrate?: number | undefined;
  /** maximum video encoding key frame interval (frames) */
  maxKeyFrameInterval?: number | undefined;
}

/** encoding video parameters */
export interface VideoEncoding {
  /** video encoding codec */
  codec?: VideoCodec | undefined;
  /** video encoding rate control */
  rateControl?: VideoCodecRateControl | undefined;
  /** video encoding codec profile */
  profile?: VideoCodecProfile | undefined;
}

/** encoding audio parameters */
export interface AudioEncoding {
  /** audio encoding codec */
  codec?: AudioCodec | undefined;
}

/** the parameters of the encoding */
export interface Encoding {
  /** the video parameters of the encoding */
  video?: VideoEncoding | undefined;
  /** the audio parameters of the encoding */
  audio?: AudioEncoding | undefined;
}

/** rtmp push source address */
export interface SourceRtmpPushAddress {
  /** enable source rtmp push address */
  enabled?: boolean | undefined;
  /** assigned rtmp stream key */
  key?: string | undefined;
  /** assigned rtmp destination url */
  url?: string | undefined;
  /** base_url without stream key */
  baseUrl?: string | undefined;
}

/** srt push addressing */
export interface SrtPushAddress {
  /** enable source srt push address */
  enabled?: boolean | undefined;
  /** assigned srt streamid */
  streamId?: string | undefined;
  /** assigned srt destination url */
  url?: string | undefined;
  /** base_url without streamid */
  baseUrl?: string | undefined;
}

/** rtmp pull addressing */
export interface RtmpPullAddress {
  /** rtmp source url */
  url: string;
}

/** live source address (select one) */
export interface SourceAddress {
  /** rtmp push addressing */
  rtmpPush: SourceRtmpPushAddress | undefined;
  /** the srt address to publish to */
  srtPush: SrtPushAddress | undefined;
  /** the rtmp address to pull from */
  rtmpPull: RtmpPullAddress | undefined;
}

/** rtmp push destination address */
export interface DestinationRtmpPushAddress {
  /** rtmp stream key */
  key?: string | undefined;
  /** rtmp destination url */
  url: string;
}

/** Agora push addressing */
export interface DestinationAgoraPushAddress {
  /** Agora app id */
  appId: string;
  /** Agora channel id */
  channelId: string;
  /** Agora user id */
  userId: string;
}

/** destination address (select one) */
export interface DestinationAddress {
  /** rtmp push addressing */
  rtmpPush: DestinationRtmpPushAddress | undefined;
  /** Agora addressing */
  agora: DestinationAgoraPushAddress | undefined;
}

/** triggers to indicate what actions to take on the project for a given Source */
export interface SourceTrigger {
  /** the id of the source */
  sourceId: string;
  /** source should trigger project(s) to start */
  start?: SourceTriggerAction | undefined;
  /** source should trigger project(s) to stop */
  stop?: SourceTriggerAction | undefined;
}

/** optional string service_user_id = 1; */
export interface WebRtcTrigger {
  /** webrtc stop should trigger project to stop */
  stop?: SourceTriggerAction | undefined;
}

/** the trigger type (select one) */
export interface ProjectTrigger {
  /** start/stop project with source */
  source: SourceTrigger | undefined;
}

/** request hls preview */
export interface PreviewHlsPullAddress {
  /** request hls preview */
  enabled?: boolean | undefined;
  /** hls manifest url */
  url?: string | undefined;
}

/** webrtc addressing parameters */
export interface PreviewWebRtcAddress {
  /** request rtmp preview */
  enabled?: boolean | undefined;
  /** the name this source will use in the webrtc room */
  displayName?: string | undefined;
  /** the id this source was assigned in the webrtc room */
  participantId?: string | undefined;
}

/** addresses of source previews */
export interface PreviewAddress {
  /**
   * hls preview address
   * optional PreviewHlsPullAddress hls = 1;
   * webrtc preview address
   */
  webrtc?: PreviewWebRtcAddress | undefined;
}

/** compose using the studiosdk renderer */
export interface StudioSdkComposition {
  /** the url to pass to the studiosdk */
  rendererUrl?: string | undefined;
  version?: string | undefined;
}

/** compose scenes using the browser-based compositor */
export interface SceneComposition {
  /** the url to pass to the studiosdk */
  rendererUrl?: string | undefined;
  /** the active "scene" to render */
  selectedLayoutId?: string | undefined;
  debug?: boolean | undefined;
}

/** compose using an external renderer */
export interface ExternalComposition {
  url: string;
}

/** composition source for project (select one) */
export interface Composition {
  /** compose using an external renderer */
  external: ExternalComposition | undefined;
  /** compose using the studiosdk renderer */
  studioSdk: StudioSdkComposition | undefined;
  /** compose scenes using the browser-based compositor */
  scene: SceneComposition | undefined;
}

/** hosted webrtc configuration */
export interface HostedWebRtc {
  /** enable webrtc services */
  enabled?: boolean | undefined;
}

/** webrtc service (select one) */
export interface WebRtc {
  /** hosted webrtc configuration */
  hosted: HostedWebRtc | undefined;
}

/** webrtc access parameters */
export interface WebRtcAccess {
  /** access token for webrtc room */
  accessToken: string;
  /** the id this user was assigned in the webrtc room */
  participantId?: string | undefined;
}

/** optimal location of broadcast (to optimize routing and delay) */
export interface LatLong {
  latitude: number;
  longitude: number;
}

/** broadcast status */
export interface ProjectBroadcastStatus {
  /** collection which owns the project which owns the broadcast */
  collectionId: string;
  /** project which owns the broadcast */
  projectId: string;
  broadcastId?: string | undefined;
  /** broadcast duration (ms) */
  duration?: number | undefined;
  /** broadcast start timestamp (ISO8601 UTC) */
  start?: string | undefined;
  /** broadcast stop timestamp (ISO8601 UTC) */
  stop?: string | undefined;
  /** broadcast phase */
  phase: ProjectBroadcastPhase;
  /** region broadcast is located */
  region?: Region | undefined;
  /** datacenter broadcast is located */
  datacenter?: string | undefined;
}

/** collection live source */
export interface Source {
  /** collection which owns the source */
  collectionId: string;
  /** collection source id */
  sourceId: string;
  /** arbitrary metadata associated with this collection source */
  metadata?: any | undefined;
  /** preview addresses */
  preview?: PreviewAddress | undefined;
  /** source address */
  address: SourceAddress | undefined;
}

/** streaming destination of project */
export interface Destination {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** arbitrary metadata associated with this destination */
  metadata?: any | undefined;
  /** is output stream enabled? */
  enabled?: boolean | undefined;
  /** address of the destination */
  address: DestinationAddress | undefined;
  /** timeout (ms) to wait before resetting a connection */
  timeout?: number | undefined;
}

/** project which owns a broadcast, sources, and destinations */
export interface Project {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** arbitrary metadata associated with this project */
  metadata?: any | undefined;
  /** composition parameters */
  rendering: Rendering | undefined;
  /** encoding parameters */
  encoding: Encoding | undefined;
  /** collection live sources added to this project */
  sources: Source[];
  /** destinations associated with this project */
  destinations: Destination[];
  /** composition/layout source of the broadcast */
  composition: Composition | undefined;
  /** maximum duration (ms) of project broadcasts */
  maxDuration?: number | undefined;
  /** configuration for webrtc services (if requested) */
  webrtc?: WebRtc | undefined;
  /** external triggers to start and stop this broadcast */
  triggers: ProjectTrigger[];
  /** optional optimal location to start broadcast */
  location?: LatLong | undefined;
  /** guest codes associated with this project */
  guestCodes: GuestCode[];
}

/** a Collection of Projects and Sources */
export interface Collection {
  /** collection id */
  collectionId: string;
  /** arbitrary metadata associated with this collection */
  metadata?: any | undefined;
  /** projects owned by this collection */
  projects: Project[];
  /** collection live sources owned by this collection */
  sources: Source[];
}

export interface CreateCollectionRequest {
  /** arbitrary metadata to associate with this collection */
  metadata?: any | undefined;
}

export interface CreateCollectionResponse {
  collection: Collection | undefined;
}

export interface GetCollectionRequest {
  /** collection id */
  collectionId: string;
  /** optionally populate projects */
  populateProjects?: boolean | undefined;
  /** optionally populate sources */
  populateSources?: boolean | undefined;
}

export interface GetCollectionResponse {
  collection: Collection | undefined;
}

export interface UpdateCollectionRequest {
  /** collection id */
  collectionId: string;
  /** fields to update */
  updateMask: string[] | undefined;
  /** arbitrary metadata to associate with this collection */
  metadata?: any | undefined;
}

export interface UpdateCollectionResponse {
  /** the updated collection */
  collection: Collection | undefined;
}

export interface DeleteCollectionRequest {
  /** collection id */
  collectionId: string;
  /** forcibly end all child project broadcasts in progress */
  force?: boolean | undefined;
}

export interface DeleteCollectionResponse {
  /** number of live sources owned by this collection which were deleted */
  sourcesDeleted: number;
  /** number of projects owned by this collection which were deleted */
  projectsDeleted: number;
  /** project ids owned by this collection whose broadcasts were stopped */
  projectIdsStopped: string[];
}

export interface GetCollectionsRequest {}

export interface GetCollectionsResponse {
  /** all collections owned by this user */
  collections: Collection[];
}

export interface CreateProjectRequest {
  /** collection which will own this project */
  collectionId: string;
  /** arbitrary metadata to associate with this project */
  metadata?: any | undefined;
  /** composition parameters */
  rendering?: Rendering | undefined;
  /** encoding parameters */
  encoding?: Encoding | undefined;
  /** composition/layout source of the broadcast */
  composition: Composition | undefined;
  /** maximum duration of project broadcasts (ms) */
  maxDuration?: number | undefined;
  /** request webrtc services */
  webrtc?: WebRtc | undefined;
  /** optimal broadcast location (for routing and delay) */
  location?: LatLong | undefined;
}

export interface CreateProjectResponse {
  project: Project | undefined;
}

export interface UpdateProjectRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** fields to update */
  updateMask: string[] | undefined;
  /** arbitrary metadata to associate with this project */
  metadata?: any | undefined;
  /** composition parameters */
  rendering?: Rendering | undefined;
  /** encoding parameters */
  encoding?: Encoding | undefined;
  /** composition/layout source of the broadcast */
  composition?: Composition | undefined;
  /** maximum duration of project broadcasts (ms) */
  maxDuration?: number | undefined;
  /** configuration for webrtc services (if requested) */
  webrtc?: WebRtc | undefined;
  /** optimal broadcast location (for routing and delay) */
  location?: LatLong | undefined;
}

export interface UpdateProjectResponse {
  /** updated project */
  project: Project | undefined;
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface DeleteProjectRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** forcibly end broadcast in progress */
  force?: boolean | undefined;
}

export interface DeleteProjectResponse {
  /** was a broadcast stopped */
  broadcastStopped: boolean;
  /** the number of associated layouts deleted */
  layoutsDeleted: number;
}

export interface StartProjectBroadcastRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** also start webrtc room */
  webrtcStart?: boolean | undefined;
}

export interface StartProjectBroadcastResponse {
  /** the id of the broadcast started */
  broadcastId: string;
}

export interface StopProjectBroadcastRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** stop the associated webrtc room, */
  webrtcStop?: boolean | undefined;
}

export interface StopProjectBroadcastResponse {}

export interface GetProjectRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** also query project broadcast status */
  status?: boolean | undefined;
}

export interface GetProjectResponse {
  /** the request project */
  project: Project | undefined;
  /** the status of the project broadcast (if requested) */
  status?: ProjectBroadcastStatus | undefined;
}

export interface GetProjectBroadcastSnapshotRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** snapshot binary format */
  format?: ImageFormat | undefined;
}

export interface GetProjectBroadcastSnapshotResponse {
  /** the format of the returned snapshot */
  format: ImageFormat;
  /** the binary snapshot */
  image: Uint8Array;
}

export interface GetProjectBroadcastStatusRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
}

export interface GetProjectBroadcastStatusResponse {
  /** the status of the project broadcast */
  status: ProjectBroadcastStatus | undefined;
}

export interface StartProjectWebRtcRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
}

export interface StartProjectWebRtcResponse {}

export interface StopProjectWebRtcRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
}

export interface StopProjectWebRtcResponse {}

export interface CreateDestinationRequest {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which will own this destination */
  projectId: string;
  /** arbitrary metadata associated with this destination */
  metadata?: any | undefined;
  /** destination address (select one) */
  address: DestinationAddress | undefined;
  /** enable or disable this destination */
  enabled?: boolean | undefined;
  /** timeout (in milliseconds) to wait before resetting a connection */
  timeout?: number | undefined;
}

export interface CreateDestinationResponse {
  /** the newly created destination */
  destination: Destination | undefined;
}

export interface GetDestinationRequest {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
}

export interface GetDestinationResponse {
  /** the requested destination */
  destination: Destination | undefined;
}

export interface DeleteDestinationRequest {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** forcibly remove destination if enabled */
  force?: boolean | undefined;
}

export interface DeleteDestinationResponse {
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface UpdateDestinationRequest {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** fields to update (default updates any non-null field) */
  updateMask: string[] | undefined;
  /** arbitrary metadata associated with this destination */
  metadata?: any | undefined;
  /** destination address (select one) */
  address?: DestinationAddress | undefined;
  /** enable or disable this destination */
  enabled?: boolean | undefined;
  /** timeout (in milliseconds) to wait before resetting a connection */
  timeout?: number | undefined;
}

export interface UpdateDestinationResponse {
  /** updated destination */
  destination: Destination | undefined;
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface CreateSourceRequest {
  /** collection which will own this collection live source */
  collectionId: string;
  /** arbitrary metadata to associate with this collection live source */
  metadata?: any | undefined;
  /** type of collection live source */
  address: SourceAddress | undefined;
  /** enable real-time previews */
  preview?: PreviewAddress | undefined;
}

export interface CreateSourceResponse {
  source: Source | undefined;
}

export interface DeleteSourceRequest {
  /** collection which owns the live source */
  collectionId: string;
  /** live source id */
  sourceId: string;
  /** delete a live source even if it is in use in a broadcast */
  force?: boolean | undefined;
}

export interface DeleteSourceResponse {
  /** project ids owned by this collection which were affected */
  projectIdsUpdated: string[];
}

export interface AddSourceToProjectRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project which will own the source */
  projectId: string;
  /** live source id */
  sourceId: string;
  /** allow this source to trigger a project broadcast */
  trigger?: SourceTrigger | undefined;
}

export interface AddSourceToProjectResponse {
  /** updated project */
  project: Project | undefined;
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface UpdateSourceInProjectRequest {
  /** collection which owns the project */
  collectionId: string;
  /** project which will own the source */
  projectId: string;
  /** live source id */
  sourceId: string;
  /** fields to update (default updates any non-null field) */
  updateMask: string[] | undefined;
  /** allow this source to trigger a project broadcast */
  trigger?: SourceTrigger | undefined;
}

export interface UpdateSourceInProjectResponse {
  /** updated project */
  project: Project | undefined;
}

export interface GetSourceRequest {
  /** collection which owns the project which owns the source */
  collectionId: string;
  /** source id */
  sourceId: string;
}

export interface GetSourceResponse {
  source: Source | undefined;
}

export interface GetSourcesRequest {
  /** collection which owns the project which owns the source */
  collectionId: string;
}

export interface GetSourcesResponse {
  sources: Source[];
}

export interface UpdateSourceRequest {
  /** collection which owns the project which owns the source */
  collectionId: string;
  /** source id */
  sourceId: string;
  /** fields to update (default updates any non-null field) */
  updateMask: string[] | undefined;
  /** arbitrary metadata to associate with this source */
  metadata?: any | undefined;
  /** type of collection live source */
  address?: SourceAddress | undefined;
  /** enable real-time previews */
  preview?: PreviewAddress | undefined;
}

export interface UpdateSourceResponse {
  /** updated source */
  source: Source | undefined;
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface RemoveSourceFromProjectRequest {
  /** the id of the parent Collection */
  collectionId: string;
  /** the id of the Project */
  projectId: string;
  /** the id of the Source */
  sourceId: string;
  /** delete a live source even if it is in use in a broadcast */
  force?: boolean | undefined;
}

export interface RemoveSourceFromProjectResponse {
  /** updated project */
  project: Project | undefined;
  /** indicates whether the broadcast was updated as a function of this request */
  broadcastUpdated: boolean;
}

export interface CreateAccessTokenRequest {
  /**
   * service-specific user id
   * ### Usage
   * * this should be an opaque GUID with no spaces
   */
  serviceUserId: string;
  displayName?: string | undefined;
  /** the requested role */
  role?: Role | undefined;
  /** requested duration of token before it expires (ms) */
  maxDuration?: number | undefined;
}

export interface CreateAccessTokenResponse {
  /**
   * access token for owner to be asserted in subsequent Video and Layout API
   * calls
   */
  accessToken: string;
}

/** create an immutable, single-use guest access token */
export interface GuestAccessTokenDirect {
  /** display name of the guest (used to generate webrtc particpant name) */
  displayName: string;
  /** service-specific user id (used for record auditing purposes) */
  serviceUserId?: string | undefined;
}

/** create a multi-use guest access token */
export interface GuestAccessTokenExchange {
  /** the max duration this token is valid for redemption */
  maxDuration?: number | undefined;
}

/** the type of access token (selec one) */
export interface GuestAccessToken {
  direct: GuestAccessTokenDirect | undefined;
  exchange: GuestAccessTokenExchange | undefined;
}

export interface CreateGuestAccessTokenRequest {
  /** id of the collection this token is allowed to access */
  collectionId: string;
  /** id of the project this token is allowed to access */
  projectId: string;
  /** requested duration (ms) of token before it expires */
  maxDuration?: number | undefined;
  /** the requested role of the guest */
  role: Role;
  /** the type of token */
  token: GuestAccessToken | undefined;
  /** request a shortened url */
  url?: string | undefined;
}

export interface CreateGuestAccessTokenResponse {
  /** access token for guest to be used in subsequent API calls */
  accessToken: string;
  /** the shortened url */
  url?: string | undefined;
}

export interface CreateWebRtcAccessTokenRequest {
  /** id of the collection this token is allowed to access */
  collectionId: string;
  /** id of the project this token is allowed to access */
  projectId: string;
  /** display name of the guest (used to generate webrtc particpant name) */
  displayName: string;
}

export interface CreateWebRtcAccessTokenResponse {
  /** the webrtc token parameters */
  webrtcAccess: WebRtcAccess | undefined;
}

export interface RefreshAccessTokenRequest {}

export interface RefreshAccessTokenResponse {}

export interface GuestCode {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** the short url code */
  code: string;
  /** the short url */
  url: string;
  /** auto-delete after time */
  autoDelete: string | undefined;
}

export interface GuestCodeRedirectRequest {
  /** the id of the service */
  serviceId: string;
  /** the short url code */
  code: string;
}

export interface GuestCodeRedirectResponse {}

export interface JsonWebKey {
  alg: string;
  kty: string;
  use: string;
  kid: string;
  e: string;
  n: string;
}

export interface GetJsonWebKeySetRequest {}

export interface GetJsonWebKeySetResponse {
  /** public keys used to sign access tokens */
  keys: JsonWebKey[];
}

export interface GetTestTokenRequest {}

export interface GetTestTokenResponse {
  /** a dummy access key (with no grants) */
  accessToken: string;
}

/** a destination was created */
export interface DestinationCreateEvent {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** the new destination */
  destination: Destination | undefined;
}

/** a destination was deleted */
export interface DestinationDeleteEvent {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
}

/** a destination was updated */
export interface DestinationUpdateEvent {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** changed fields */
  updateMask: string[];
  /** the updated destination */
  destination: Destination | undefined;
}

/** the state of a destination changed */
export interface DestinationStateEvent {
  /** collection which owns the project which owns the destination */
  collectionId: string;
  /** project which owns the destination */
  projectId: string;
  /** destination id */
  destinationId: string;
  /** the state of the connection changed */
  connect: ConnectState | undefined;
}

/** a project was created */
export interface ProjectCreateEvent {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** the new project */
  project: Project | undefined;
}

/** a project was deleted */
export interface ProjectDeleteEvent {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
}

/** a project was updated */
export interface ProjectUpdateEvent {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** the fields that were updated */
  updateMask: string[];
  /** the updated project */
  project: Project | undefined;
}

/** the state of a project broadcast has changed */
export interface ProjectBroadcastStateEvent {
  /** collection which owns the project */
  collectionId: string;
  /** project id */
  projectId: string;
  /** the id of the broadcast */
  broadcastId: string;
  phase: ProjectBroadcastPhase | undefined;
  error: ProjectBroadcastError | undefined;
}

/** a collection was created */
export interface CollectionCreateEvent {
  /** collection id */
  collectionId: string;
  /** the new collection */
  collection: Collection | undefined;
}

/** a collection was deleted */
export interface CollectionDeleteEvent {
  /** collection id */
  collectionId: string;
}

/** a collection was updated */
export interface CollectionUpdateEvent {
  /** collection id */
  collectionId: string;
  /** the fields which were updated */
  updateMask: string[];
  /** the updated collection */
  collection: Collection | undefined;
}

export interface SourceCreateEvent {
  /** collection which owns the source */
  collectionId: string;
  /** source id */
  sourceId: string;
  source: Source | undefined;
}

export interface SourceDeleteEvent {
  collectionId: string;
  sourceId: string;
}

export interface SourceUpdateEvent {
  collectionId: string;
  sourceId: string;
  updateMask: string[];
  source: Source | undefined;
}

export interface SourceAddEvent {
  collectionId: string;
  sourceId: string;
  projectId: string;
  source: Source | undefined;
}

export interface SourceRemoveEvent {
  collectionId: string;
  sourceId: string;
  projectId: string;
}

/** the state of a destination changed */
export interface SourceStateEvent {
  /** collection which owns the project which owns the source */
  collectionId: string;
  /** project id */
  projectId: string;
  /** destination id */
  sourceId: string;
  /** the state of the connection changed */
  connect: ConnectState | undefined;
}

export interface CollectionEvent {
  create: CollectionCreateEvent | undefined;
  update: CollectionUpdateEvent | undefined;
  delete: CollectionDeleteEvent | undefined;
}

export interface DestinationEvent {
  create: DestinationCreateEvent | undefined;
  update: DestinationUpdateEvent | undefined;
  delete: DestinationDeleteEvent | undefined;
  state: DestinationStateEvent | undefined;
}

export interface ProjectEvent {
  create: ProjectCreateEvent | undefined;
  update: ProjectUpdateEvent | undefined;
  delete: ProjectDeleteEvent | undefined;
  state: ProjectBroadcastStateEvent | undefined;
}

export interface SourceEvent {
  create: SourceCreateEvent | undefined;
  update: SourceUpdateEvent | undefined;
  delete: SourceDeleteEvent | undefined;
  add: SourceAddEvent | undefined;
  remove: SourceDeleteEvent | undefined;
  state: SourceStateEvent | undefined;
}

export interface LiveEvent {
  collection: CollectionEvent | undefined;
  destination: DestinationEvent | undefined;
  project: ProjectEvent | undefined;
  source: SourceEvent | undefined;
  unspecified: NullValue | undefined;
}

function createBaseVideoRendering(): VideoRendering {
  return {
    height: undefined,
    width: undefined,
    framerate: undefined,
    colorSpace: undefined,
  };
}

export const VideoRendering = {
  encode(
    message: VideoRendering,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== undefined) {
      writer.uint32(8).uint32(message.height);
    }
    if (message.width !== undefined) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.framerate !== undefined) {
      writer.uint32(29).float(message.framerate);
    }
    if (message.colorSpace !== undefined) {
      writer.uint32(32).int32(videoColorSpaceToNumber(message.colorSpace));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoRendering {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoRendering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint32();
          break;
        case 2:
          message.width = reader.uint32();
          break;
        case 3:
          message.framerate = reader.float();
          break;
        case 4:
          message.colorSpace = videoColorSpaceFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoRendering {
    return {
      height: isSet(object.height) ? Number(object.height) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      framerate: isSet(object.framerate) ? Number(object.framerate) : undefined,
      colorSpace: isSet(object.colorSpace)
        ? videoColorSpaceFromJSON(object.colorSpace)
        : undefined,
    };
  },

  toJSON(message: VideoRendering): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.framerate !== undefined && (obj.framerate = message.framerate);
    message.colorSpace !== undefined &&
      (obj.colorSpace =
        message.colorSpace !== undefined
          ? videoColorSpaceToJSON(message.colorSpace)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VideoRendering>): VideoRendering {
    const message = createBaseVideoRendering();
    message.height = object.height ?? undefined;
    message.width = object.width ?? undefined;
    message.framerate = object.framerate ?? undefined;
    message.colorSpace = object.colorSpace ?? undefined;
    return message;
  },
};

function createBaseAudioRendering(): AudioRendering {
  return { channelLayout: undefined };
}

export const AudioRendering = {
  encode(
    message: AudioRendering,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelLayout !== undefined) {
      writer.uint32(8).int32(audioChannelLayoutToNumber(message.channelLayout));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioRendering {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioRendering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelLayout = audioChannelLayoutFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioRendering {
    return {
      channelLayout: isSet(object.channelLayout)
        ? audioChannelLayoutFromJSON(object.channelLayout)
        : undefined,
    };
  },

  toJSON(message: AudioRendering): unknown {
    const obj: any = {};
    message.channelLayout !== undefined &&
      (obj.channelLayout =
        message.channelLayout !== undefined
          ? audioChannelLayoutToJSON(message.channelLayout)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AudioRendering>): AudioRendering {
    const message = createBaseAudioRendering();
    message.channelLayout = object.channelLayout ?? undefined;
    return message;
  },
};

function createBaseRendering(): Rendering {
  return {
    video: undefined,
    audio: undefined,
    quality: undefined,
    targetLatency: undefined,
    complexity: undefined,
  };
}

export const Rendering = {
  encode(
    message: Rendering,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.video !== undefined) {
      VideoRendering.encode(message.video, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      AudioRendering.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    if (message.quality !== undefined) {
      writer.uint32(24).int32(renderingQualityToNumber(message.quality));
    }
    if (message.targetLatency !== undefined) {
      writer.uint32(32).uint32(message.targetLatency);
    }
    if (message.complexity !== undefined) {
      writer.uint32(40).int32(message.complexity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rendering {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRendering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.video = VideoRendering.decode(reader, reader.uint32());
          break;
        case 2:
          message.audio = AudioRendering.decode(reader, reader.uint32());
          break;
        case 3:
          message.quality = renderingQualityFromJSON(reader.int32());
          break;
        case 4:
          message.targetLatency = reader.uint32();
          break;
        case 5:
          message.complexity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rendering {
    return {
      video: isSet(object.video)
        ? VideoRendering.fromJSON(object.video)
        : undefined,
      audio: isSet(object.audio)
        ? AudioRendering.fromJSON(object.audio)
        : undefined,
      quality: isSet(object.quality)
        ? renderingQualityFromJSON(object.quality)
        : undefined,
      targetLatency: isSet(object.targetLatency)
        ? Number(object.targetLatency)
        : undefined,
      complexity: isSet(object.complexity)
        ? Number(object.complexity)
        : undefined,
    };
  },

  toJSON(message: Rendering): unknown {
    const obj: any = {};
    message.video !== undefined &&
      (obj.video = message.video
        ? VideoRendering.toJSON(message.video)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? AudioRendering.toJSON(message.audio)
        : undefined);
    message.quality !== undefined &&
      (obj.quality =
        message.quality !== undefined
          ? renderingQualityToJSON(message.quality)
          : undefined);
    message.targetLatency !== undefined &&
      (obj.targetLatency = Math.round(message.targetLatency));
    message.complexity !== undefined &&
      (obj.complexity = Math.round(message.complexity));
    return obj;
  },

  fromPartial(object: DeepPartial<Rendering>): Rendering {
    const message = createBaseRendering();
    message.video =
      object.video !== undefined && object.video !== null
        ? VideoRendering.fromPartial(object.video)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? AudioRendering.fromPartial(object.audio)
        : undefined;
    message.quality = object.quality ?? undefined;
    message.targetLatency = object.targetLatency ?? undefined;
    message.complexity = object.complexity ?? undefined;
    return message;
  },
};

function createBaseVideoCodecRateControl(): VideoCodecRateControl {
  return {
    mode: undefined,
    targetBitrate: undefined,
    maxKeyFrameInterval: undefined,
  };
}

export const VideoCodecRateControl = {
  encode(
    message: VideoCodecRateControl,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== undefined) {
      writer.uint32(8).int32(videoCodecRateControlModeToNumber(message.mode));
    }
    if (message.targetBitrate !== undefined) {
      writer.uint32(16).uint32(message.targetBitrate);
    }
    if (message.maxKeyFrameInterval !== undefined) {
      writer.uint32(24).uint32(message.maxKeyFrameInterval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VideoCodecRateControl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoCodecRateControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = videoCodecRateControlModeFromJSON(reader.int32());
          break;
        case 2:
          message.targetBitrate = reader.uint32();
          break;
        case 3:
          message.maxKeyFrameInterval = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoCodecRateControl {
    return {
      mode: isSet(object.mode)
        ? videoCodecRateControlModeFromJSON(object.mode)
        : undefined,
      targetBitrate: isSet(object.targetBitrate)
        ? Number(object.targetBitrate)
        : undefined,
      maxKeyFrameInterval: isSet(object.maxKeyFrameInterval)
        ? Number(object.maxKeyFrameInterval)
        : undefined,
    };
  },

  toJSON(message: VideoCodecRateControl): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode =
        message.mode !== undefined
          ? videoCodecRateControlModeToJSON(message.mode)
          : undefined);
    message.targetBitrate !== undefined &&
      (obj.targetBitrate = Math.round(message.targetBitrate));
    message.maxKeyFrameInterval !== undefined &&
      (obj.maxKeyFrameInterval = Math.round(message.maxKeyFrameInterval));
    return obj;
  },

  fromPartial(
    object: DeepPartial<VideoCodecRateControl>
  ): VideoCodecRateControl {
    const message = createBaseVideoCodecRateControl();
    message.mode = object.mode ?? undefined;
    message.targetBitrate = object.targetBitrate ?? undefined;
    message.maxKeyFrameInterval = object.maxKeyFrameInterval ?? undefined;
    return message;
  },
};

function createBaseVideoEncoding(): VideoEncoding {
  return { codec: undefined, rateControl: undefined, profile: undefined };
}

export const VideoEncoding = {
  encode(
    message: VideoEncoding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.codec !== undefined) {
      writer.uint32(8).int32(videoCodecToNumber(message.codec));
    }
    if (message.rateControl !== undefined) {
      VideoCodecRateControl.encode(
        message.rateControl,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.profile !== undefined) {
      writer.uint32(32).int32(videoCodecProfileToNumber(message.profile));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoEncoding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoEncoding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = videoCodecFromJSON(reader.int32());
          break;
        case 2:
          message.rateControl = VideoCodecRateControl.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.profile = videoCodecProfileFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoEncoding {
    return {
      codec: isSet(object.codec) ? videoCodecFromJSON(object.codec) : undefined,
      rateControl: isSet(object.rateControl)
        ? VideoCodecRateControl.fromJSON(object.rateControl)
        : undefined,
      profile: isSet(object.profile)
        ? videoCodecProfileFromJSON(object.profile)
        : undefined,
    };
  },

  toJSON(message: VideoEncoding): unknown {
    const obj: any = {};
    message.codec !== undefined &&
      (obj.codec =
        message.codec !== undefined
          ? videoCodecToJSON(message.codec)
          : undefined);
    message.rateControl !== undefined &&
      (obj.rateControl = message.rateControl
        ? VideoCodecRateControl.toJSON(message.rateControl)
        : undefined);
    message.profile !== undefined &&
      (obj.profile =
        message.profile !== undefined
          ? videoCodecProfileToJSON(message.profile)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VideoEncoding>): VideoEncoding {
    const message = createBaseVideoEncoding();
    message.codec = object.codec ?? undefined;
    message.rateControl =
      object.rateControl !== undefined && object.rateControl !== null
        ? VideoCodecRateControl.fromPartial(object.rateControl)
        : undefined;
    message.profile = object.profile ?? undefined;
    return message;
  },
};

function createBaseAudioEncoding(): AudioEncoding {
  return { codec: undefined };
}

export const AudioEncoding = {
  encode(
    message: AudioEncoding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.codec !== undefined) {
      writer.uint32(8).int32(audioCodecToNumber(message.codec));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioEncoding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioEncoding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = audioCodecFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioEncoding {
    return {
      codec: isSet(object.codec) ? audioCodecFromJSON(object.codec) : undefined,
    };
  },

  toJSON(message: AudioEncoding): unknown {
    const obj: any = {};
    message.codec !== undefined &&
      (obj.codec =
        message.codec !== undefined
          ? audioCodecToJSON(message.codec)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AudioEncoding>): AudioEncoding {
    const message = createBaseAudioEncoding();
    message.codec = object.codec ?? undefined;
    return message;
  },
};

function createBaseEncoding(): Encoding {
  return { video: undefined, audio: undefined };
}

export const Encoding = {
  encode(
    message: Encoding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.video !== undefined) {
      VideoEncoding.encode(message.video, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      AudioEncoding.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encoding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncoding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.video = VideoEncoding.decode(reader, reader.uint32());
          break;
        case 2:
          message.audio = AudioEncoding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Encoding {
    return {
      video: isSet(object.video)
        ? VideoEncoding.fromJSON(object.video)
        : undefined,
      audio: isSet(object.audio)
        ? AudioEncoding.fromJSON(object.audio)
        : undefined,
    };
  },

  toJSON(message: Encoding): unknown {
    const obj: any = {};
    message.video !== undefined &&
      (obj.video = message.video
        ? VideoEncoding.toJSON(message.video)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? AudioEncoding.toJSON(message.audio)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Encoding>): Encoding {
    const message = createBaseEncoding();
    message.video =
      object.video !== undefined && object.video !== null
        ? VideoEncoding.fromPartial(object.video)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? AudioEncoding.fromPartial(object.audio)
        : undefined;
    return message;
  },
};

function createBaseSourceRtmpPushAddress(): SourceRtmpPushAddress {
  return {
    enabled: undefined,
    key: undefined,
    url: undefined,
    baseUrl: undefined,
  };
}

export const SourceRtmpPushAddress = {
  encode(
    message: SourceRtmpPushAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    if (message.url !== undefined) {
      writer.uint32(26).string(message.url);
    }
    if (message.baseUrl !== undefined) {
      writer.uint32(34).string(message.baseUrl);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SourceRtmpPushAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceRtmpPushAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.baseUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceRtmpPushAddress {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      key: isSet(object.key) ? String(object.key) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : undefined,
    };
  },

  toJSON(message: SourceRtmpPushAddress): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.key !== undefined && (obj.key = message.key);
    message.url !== undefined && (obj.url = message.url);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SourceRtmpPushAddress>
  ): SourceRtmpPushAddress {
    const message = createBaseSourceRtmpPushAddress();
    message.enabled = object.enabled ?? undefined;
    message.key = object.key ?? undefined;
    message.url = object.url ?? undefined;
    message.baseUrl = object.baseUrl ?? undefined;
    return message;
  },
};

function createBaseSrtPushAddress(): SrtPushAddress {
  return {
    enabled: undefined,
    streamId: undefined,
    url: undefined,
    baseUrl: undefined,
  };
}

export const SrtPushAddress = {
  encode(
    message: SrtPushAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.streamId !== undefined) {
      writer.uint32(18).string(message.streamId);
    }
    if (message.url !== undefined) {
      writer.uint32(26).string(message.url);
    }
    if (message.baseUrl !== undefined) {
      writer.uint32(34).string(message.baseUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SrtPushAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSrtPushAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.streamId = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.baseUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SrtPushAddress {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      streamId: isSet(object.streamId) ? String(object.streamId) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : undefined,
    };
  },

  toJSON(message: SrtPushAddress): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.streamId !== undefined && (obj.streamId = message.streamId);
    message.url !== undefined && (obj.url = message.url);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<SrtPushAddress>): SrtPushAddress {
    const message = createBaseSrtPushAddress();
    message.enabled = object.enabled ?? undefined;
    message.streamId = object.streamId ?? undefined;
    message.url = object.url ?? undefined;
    message.baseUrl = object.baseUrl ?? undefined;
    return message;
  },
};

function createBaseRtmpPullAddress(): RtmpPullAddress {
  return { url: "" };
}

export const RtmpPullAddress = {
  encode(
    message: RtmpPullAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RtmpPullAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRtmpPullAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RtmpPullAddress {
    return {
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: RtmpPullAddress): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<RtmpPullAddress>): RtmpPullAddress {
    const message = createBaseRtmpPullAddress();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseSourceAddress(): SourceAddress {
  return { rtmpPush: undefined, srtPush: undefined, rtmpPull: undefined };
}

export const SourceAddress = {
  encode(
    message: SourceAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rtmpPush !== undefined) {
      SourceRtmpPushAddress.encode(
        message.rtmpPush,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.srtPush !== undefined) {
      SrtPushAddress.encode(message.srtPush, writer.uint32(18).fork()).ldelim();
    }
    if (message.rtmpPull !== undefined) {
      RtmpPullAddress.encode(
        message.rtmpPull,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rtmpPush = SourceRtmpPushAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.srtPush = SrtPushAddress.decode(reader, reader.uint32());
          break;
        case 3:
          message.rtmpPull = RtmpPullAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceAddress {
    return {
      rtmpPush: isSet(object.rtmpPush)
        ? SourceRtmpPushAddress.fromJSON(object.rtmpPush)
        : undefined,
      srtPush: isSet(object.srtPush)
        ? SrtPushAddress.fromJSON(object.srtPush)
        : undefined,
      rtmpPull: isSet(object.rtmpPull)
        ? RtmpPullAddress.fromJSON(object.rtmpPull)
        : undefined,
    };
  },

  toJSON(message: SourceAddress): unknown {
    const obj: any = {};
    message.rtmpPush !== undefined &&
      (obj.rtmpPush = message.rtmpPush
        ? SourceRtmpPushAddress.toJSON(message.rtmpPush)
        : undefined);
    message.srtPush !== undefined &&
      (obj.srtPush = message.srtPush
        ? SrtPushAddress.toJSON(message.srtPush)
        : undefined);
    message.rtmpPull !== undefined &&
      (obj.rtmpPull = message.rtmpPull
        ? RtmpPullAddress.toJSON(message.rtmpPull)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceAddress>): SourceAddress {
    const message = createBaseSourceAddress();
    message.rtmpPush =
      object.rtmpPush !== undefined && object.rtmpPush !== null
        ? SourceRtmpPushAddress.fromPartial(object.rtmpPush)
        : undefined;
    message.srtPush =
      object.srtPush !== undefined && object.srtPush !== null
        ? SrtPushAddress.fromPartial(object.srtPush)
        : undefined;
    message.rtmpPull =
      object.rtmpPull !== undefined && object.rtmpPull !== null
        ? RtmpPullAddress.fromPartial(object.rtmpPull)
        : undefined;
    return message;
  },
};

function createBaseDestinationRtmpPushAddress(): DestinationRtmpPushAddress {
  return { key: undefined, url: "" };
}

export const DestinationRtmpPushAddress = {
  encode(
    message: DestinationRtmpPushAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationRtmpPushAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationRtmpPushAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationRtmpPushAddress {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: DestinationRtmpPushAddress): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationRtmpPushAddress>
  ): DestinationRtmpPushAddress {
    const message = createBaseDestinationRtmpPushAddress();
    message.key = object.key ?? undefined;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseDestinationAgoraPushAddress(): DestinationAgoraPushAddress {
  return { appId: "", channelId: "", userId: "" };
}

export const DestinationAgoraPushAddress = {
  encode(
    message: DestinationAgoraPushAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationAgoraPushAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationAgoraPushAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationAgoraPushAddress {
    return {
      appId: isSet(object.appId) ? String(object.appId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: DestinationAgoraPushAddress): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = message.appId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationAgoraPushAddress>
  ): DestinationAgoraPushAddress {
    const message = createBaseDestinationAgoraPushAddress();
    message.appId = object.appId ?? "";
    message.channelId = object.channelId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseDestinationAddress(): DestinationAddress {
  return { rtmpPush: undefined, agora: undefined };
}

export const DestinationAddress = {
  encode(
    message: DestinationAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rtmpPush !== undefined) {
      DestinationRtmpPushAddress.encode(
        message.rtmpPush,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.agora !== undefined) {
      DestinationAgoraPushAddress.encode(
        message.agora,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestinationAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rtmpPush = DestinationRtmpPushAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.agora = DestinationAgoraPushAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationAddress {
    return {
      rtmpPush: isSet(object.rtmpPush)
        ? DestinationRtmpPushAddress.fromJSON(object.rtmpPush)
        : undefined,
      agora: isSet(object.agora)
        ? DestinationAgoraPushAddress.fromJSON(object.agora)
        : undefined,
    };
  },

  toJSON(message: DestinationAddress): unknown {
    const obj: any = {};
    message.rtmpPush !== undefined &&
      (obj.rtmpPush = message.rtmpPush
        ? DestinationRtmpPushAddress.toJSON(message.rtmpPush)
        : undefined);
    message.agora !== undefined &&
      (obj.agora = message.agora
        ? DestinationAgoraPushAddress.toJSON(message.agora)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DestinationAddress>): DestinationAddress {
    const message = createBaseDestinationAddress();
    message.rtmpPush =
      object.rtmpPush !== undefined && object.rtmpPush !== null
        ? DestinationRtmpPushAddress.fromPartial(object.rtmpPush)
        : undefined;
    message.agora =
      object.agora !== undefined && object.agora !== null
        ? DestinationAgoraPushAddress.fromPartial(object.agora)
        : undefined;
    return message;
  },
};

function createBaseSourceTrigger(): SourceTrigger {
  return { sourceId: "", start: undefined, stop: undefined };
}

export const SourceTrigger = {
  encode(
    message: SourceTrigger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceId !== "") {
      writer.uint32(10).string(message.sourceId);
    }
    if (message.start !== undefined) {
      writer.uint32(16).int32(sourceTriggerActionToNumber(message.start));
    }
    if (message.stop !== undefined) {
      writer.uint32(24).int32(sourceTriggerActionToNumber(message.stop));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceId = reader.string();
          break;
        case 2:
          message.start = sourceTriggerActionFromJSON(reader.int32());
          break;
        case 3:
          message.stop = sourceTriggerActionFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceTrigger {
    return {
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      start: isSet(object.start)
        ? sourceTriggerActionFromJSON(object.start)
        : undefined,
      stop: isSet(object.stop)
        ? sourceTriggerActionFromJSON(object.stop)
        : undefined,
    };
  },

  toJSON(message: SourceTrigger): unknown {
    const obj: any = {};
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.start !== undefined &&
      (obj.start =
        message.start !== undefined
          ? sourceTriggerActionToJSON(message.start)
          : undefined);
    message.stop !== undefined &&
      (obj.stop =
        message.stop !== undefined
          ? sourceTriggerActionToJSON(message.stop)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceTrigger>): SourceTrigger {
    const message = createBaseSourceTrigger();
    message.sourceId = object.sourceId ?? "";
    message.start = object.start ?? undefined;
    message.stop = object.stop ?? undefined;
    return message;
  },
};

function createBaseWebRtcTrigger(): WebRtcTrigger {
  return { stop: undefined };
}

export const WebRtcTrigger = {
  encode(
    message: WebRtcTrigger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stop !== undefined) {
      writer.uint32(24).int32(sourceTriggerActionToNumber(message.stop));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebRtcTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebRtcTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.stop = sourceTriggerActionFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebRtcTrigger {
    return {
      stop: isSet(object.stop)
        ? sourceTriggerActionFromJSON(object.stop)
        : undefined,
    };
  },

  toJSON(message: WebRtcTrigger): unknown {
    const obj: any = {};
    message.stop !== undefined &&
      (obj.stop =
        message.stop !== undefined
          ? sourceTriggerActionToJSON(message.stop)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WebRtcTrigger>): WebRtcTrigger {
    const message = createBaseWebRtcTrigger();
    message.stop = object.stop ?? undefined;
    return message;
  },
};

function createBaseProjectTrigger(): ProjectTrigger {
  return { source: undefined };
}

export const ProjectTrigger = {
  encode(
    message: ProjectTrigger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== undefined) {
      SourceTrigger.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = SourceTrigger.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectTrigger {
    return {
      source: isSet(object.source)
        ? SourceTrigger.fromJSON(object.source)
        : undefined,
    };
  },

  toJSON(message: ProjectTrigger): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = message.source
        ? SourceTrigger.toJSON(message.source)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectTrigger>): ProjectTrigger {
    const message = createBaseProjectTrigger();
    message.source =
      object.source !== undefined && object.source !== null
        ? SourceTrigger.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBasePreviewHlsPullAddress(): PreviewHlsPullAddress {
  return { enabled: undefined, url: undefined };
}

export const PreviewHlsPullAddress = {
  encode(
    message: PreviewHlsPullAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PreviewHlsPullAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreviewHlsPullAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreviewHlsPullAddress {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: PreviewHlsPullAddress): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PreviewHlsPullAddress>
  ): PreviewHlsPullAddress {
    const message = createBasePreviewHlsPullAddress();
    message.enabled = object.enabled ?? undefined;
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBasePreviewWebRtcAddress(): PreviewWebRtcAddress {
  return {
    enabled: undefined,
    displayName: undefined,
    participantId: undefined,
  };
}

export const PreviewWebRtcAddress = {
  encode(
    message: PreviewWebRtcAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.displayName !== undefined) {
      writer.uint32(18).string(message.displayName);
    }
    if (message.participantId !== undefined) {
      writer.uint32(26).string(message.participantId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PreviewWebRtcAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreviewWebRtcAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.participantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreviewWebRtcAddress {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      displayName: isSet(object.displayName)
        ? String(object.displayName)
        : undefined,
      participantId: isSet(object.participantId)
        ? String(object.participantId)
        : undefined,
    };
  },

  toJSON(message: PreviewWebRtcAddress): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.participantId !== undefined &&
      (obj.participantId = message.participantId);
    return obj;
  },

  fromPartial(object: DeepPartial<PreviewWebRtcAddress>): PreviewWebRtcAddress {
    const message = createBasePreviewWebRtcAddress();
    message.enabled = object.enabled ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.participantId = object.participantId ?? undefined;
    return message;
  },
};

function createBasePreviewAddress(): PreviewAddress {
  return { webrtc: undefined };
}

export const PreviewAddress = {
  encode(
    message: PreviewAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.webrtc !== undefined) {
      PreviewWebRtcAddress.encode(
        message.webrtc,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreviewAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreviewAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.webrtc = PreviewWebRtcAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreviewAddress {
    return {
      webrtc: isSet(object.webrtc)
        ? PreviewWebRtcAddress.fromJSON(object.webrtc)
        : undefined,
    };
  },

  toJSON(message: PreviewAddress): unknown {
    const obj: any = {};
    message.webrtc !== undefined &&
      (obj.webrtc = message.webrtc
        ? PreviewWebRtcAddress.toJSON(message.webrtc)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PreviewAddress>): PreviewAddress {
    const message = createBasePreviewAddress();
    message.webrtc =
      object.webrtc !== undefined && object.webrtc !== null
        ? PreviewWebRtcAddress.fromPartial(object.webrtc)
        : undefined;
    return message;
  },
};

function createBaseStudioSdkComposition(): StudioSdkComposition {
  return { rendererUrl: undefined, version: undefined };
}

export const StudioSdkComposition = {
  encode(
    message: StudioSdkComposition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rendererUrl !== undefined) {
      writer.uint32(10).string(message.rendererUrl);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StudioSdkComposition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStudioSdkComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rendererUrl = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StudioSdkComposition {
    return {
      rendererUrl: isSet(object.rendererUrl)
        ? String(object.rendererUrl)
        : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
    };
  },

  toJSON(message: StudioSdkComposition): unknown {
    const obj: any = {};
    message.rendererUrl !== undefined &&
      (obj.rendererUrl = message.rendererUrl);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<StudioSdkComposition>): StudioSdkComposition {
    const message = createBaseStudioSdkComposition();
    message.rendererUrl = object.rendererUrl ?? undefined;
    message.version = object.version ?? undefined;
    return message;
  },
};

function createBaseSceneComposition(): SceneComposition {
  return {
    rendererUrl: undefined,
    selectedLayoutId: undefined,
    debug: undefined,
  };
}

export const SceneComposition = {
  encode(
    message: SceneComposition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rendererUrl !== undefined) {
      writer.uint32(10).string(message.rendererUrl);
    }
    if (message.selectedLayoutId !== undefined) {
      writer.uint32(18).string(message.selectedLayoutId);
    }
    if (message.debug !== undefined) {
      writer.uint32(24).bool(message.debug);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SceneComposition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rendererUrl = reader.string();
          break;
        case 2:
          message.selectedLayoutId = reader.string();
          break;
        case 3:
          message.debug = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SceneComposition {
    return {
      rendererUrl: isSet(object.rendererUrl)
        ? String(object.rendererUrl)
        : undefined,
      selectedLayoutId: isSet(object.selectedLayoutId)
        ? String(object.selectedLayoutId)
        : undefined,
      debug: isSet(object.debug) ? Boolean(object.debug) : undefined,
    };
  },

  toJSON(message: SceneComposition): unknown {
    const obj: any = {};
    message.rendererUrl !== undefined &&
      (obj.rendererUrl = message.rendererUrl);
    message.selectedLayoutId !== undefined &&
      (obj.selectedLayoutId = message.selectedLayoutId);
    message.debug !== undefined && (obj.debug = message.debug);
    return obj;
  },

  fromPartial(object: DeepPartial<SceneComposition>): SceneComposition {
    const message = createBaseSceneComposition();
    message.rendererUrl = object.rendererUrl ?? undefined;
    message.selectedLayoutId = object.selectedLayoutId ?? undefined;
    message.debug = object.debug ?? undefined;
    return message;
  },
};

function createBaseExternalComposition(): ExternalComposition {
  return { url: "" };
}

export const ExternalComposition = {
  encode(
    message: ExternalComposition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalComposition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalComposition {
    return {
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: ExternalComposition): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<ExternalComposition>): ExternalComposition {
    const message = createBaseExternalComposition();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseComposition(): Composition {
  return { external: undefined, studioSdk: undefined, scene: undefined };
}

export const Composition = {
  encode(
    message: Composition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.external !== undefined) {
      ExternalComposition.encode(
        message.external,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.studioSdk !== undefined) {
      StudioSdkComposition.encode(
        message.studioSdk,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.scene !== undefined) {
      SceneComposition.encode(message.scene, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Composition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.external = ExternalComposition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.studioSdk = StudioSdkComposition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.scene = SceneComposition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Composition {
    return {
      external: isSet(object.external)
        ? ExternalComposition.fromJSON(object.external)
        : undefined,
      studioSdk: isSet(object.studioSdk)
        ? StudioSdkComposition.fromJSON(object.studioSdk)
        : undefined,
      scene: isSet(object.scene)
        ? SceneComposition.fromJSON(object.scene)
        : undefined,
    };
  },

  toJSON(message: Composition): unknown {
    const obj: any = {};
    message.external !== undefined &&
      (obj.external = message.external
        ? ExternalComposition.toJSON(message.external)
        : undefined);
    message.studioSdk !== undefined &&
      (obj.studioSdk = message.studioSdk
        ? StudioSdkComposition.toJSON(message.studioSdk)
        : undefined);
    message.scene !== undefined &&
      (obj.scene = message.scene
        ? SceneComposition.toJSON(message.scene)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Composition>): Composition {
    const message = createBaseComposition();
    message.external =
      object.external !== undefined && object.external !== null
        ? ExternalComposition.fromPartial(object.external)
        : undefined;
    message.studioSdk =
      object.studioSdk !== undefined && object.studioSdk !== null
        ? StudioSdkComposition.fromPartial(object.studioSdk)
        : undefined;
    message.scene =
      object.scene !== undefined && object.scene !== null
        ? SceneComposition.fromPartial(object.scene)
        : undefined;
    return message;
  },
};

function createBaseHostedWebRtc(): HostedWebRtc {
  return { enabled: undefined };
}

export const HostedWebRtc = {
  encode(
    message: HostedWebRtc,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostedWebRtc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostedWebRtc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostedWebRtc {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
    };
  },

  toJSON(message: HostedWebRtc): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object: DeepPartial<HostedWebRtc>): HostedWebRtc {
    const message = createBaseHostedWebRtc();
    message.enabled = object.enabled ?? undefined;
    return message;
  },
};

function createBaseWebRtc(): WebRtc {
  return { hosted: undefined };
}

export const WebRtc = {
  encode(
    message: WebRtc,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hosted !== undefined) {
      HostedWebRtc.encode(message.hosted, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebRtc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebRtc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hosted = HostedWebRtc.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebRtc {
    return {
      hosted: isSet(object.hosted)
        ? HostedWebRtc.fromJSON(object.hosted)
        : undefined,
    };
  },

  toJSON(message: WebRtc): unknown {
    const obj: any = {};
    message.hosted !== undefined &&
      (obj.hosted = message.hosted
        ? HostedWebRtc.toJSON(message.hosted)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WebRtc>): WebRtc {
    const message = createBaseWebRtc();
    message.hosted =
      object.hosted !== undefined && object.hosted !== null
        ? HostedWebRtc.fromPartial(object.hosted)
        : undefined;
    return message;
  },
};

function createBaseWebRtcAccess(): WebRtcAccess {
  return { accessToken: "", participantId: undefined };
}

export const WebRtcAccess = {
  encode(
    message: WebRtcAccess,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.participantId !== undefined) {
      writer.uint32(26).string(message.participantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebRtcAccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebRtcAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        case 3:
          message.participantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebRtcAccess {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      participantId: isSet(object.participantId)
        ? String(object.participantId)
        : undefined,
    };
  },

  toJSON(message: WebRtcAccess): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    message.participantId !== undefined &&
      (obj.participantId = message.participantId);
    return obj;
  },

  fromPartial(object: DeepPartial<WebRtcAccess>): WebRtcAccess {
    const message = createBaseWebRtcAccess();
    message.accessToken = object.accessToken ?? "";
    message.participantId = object.participantId ?? undefined;
    return message;
  },
};

function createBaseLatLong(): LatLong {
  return { latitude: 0, longitude: 0 };
}

export const LatLong = {
  encode(
    message: LatLong,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LatLong {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatLong();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latitude = reader.double();
          break;
        case 2:
          message.longitude = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LatLong {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
    };
  },

  toJSON(message: LatLong): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  fromPartial(object: DeepPartial<LatLong>): LatLong {
    const message = createBaseLatLong();
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseProjectBroadcastStatus(): ProjectBroadcastStatus {
  return {
    collectionId: "",
    projectId: "",
    broadcastId: undefined,
    duration: undefined,
    start: undefined,
    stop: undefined,
    phase: ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED,
    region: undefined,
    datacenter: undefined,
  };
}

export const ProjectBroadcastStatus = {
  encode(
    message: ProjectBroadcastStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.broadcastId !== undefined) {
      writer.uint32(26).string(message.broadcastId);
    }
    if (message.duration !== undefined) {
      writer.uint32(32).uint32(message.duration);
    }
    if (message.start !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.stop !== undefined) {
      Timestamp.encode(
        toTimestamp(message.stop),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (
      message.phase !==
      ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED
    ) {
      writer.uint32(56).int32(projectBroadcastPhaseToNumber(message.phase));
    }
    if (message.region !== undefined) {
      writer.uint32(64).int32(regionToNumber(message.region));
    }
    if (message.datacenter !== undefined) {
      writer.uint32(74).string(message.datacenter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectBroadcastStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectBroadcastStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.broadcastId = reader.string();
          break;
        case 4:
          message.duration = reader.uint32();
          break;
        case 5:
          message.start = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.stop = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.phase = projectBroadcastPhaseFromJSON(reader.int32());
          break;
        case 8:
          message.region = regionFromJSON(reader.int32());
          break;
        case 9:
          message.datacenter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectBroadcastStatus {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      broadcastId: isSet(object.broadcastId)
        ? String(object.broadcastId)
        : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
      start: isSet(object.start) ? String(object.start) : undefined,
      stop: isSet(object.stop) ? String(object.stop) : undefined,
      phase: isSet(object.phase)
        ? projectBroadcastPhaseFromJSON(object.phase)
        : ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED,
      region: isSet(object.region) ? regionFromJSON(object.region) : undefined,
      datacenter: isSet(object.datacenter)
        ? String(object.datacenter)
        : undefined,
    };
  },

  toJSON(message: ProjectBroadcastStatus): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.broadcastId !== undefined &&
      (obj.broadcastId = message.broadcastId);
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.start !== undefined && (obj.start = message.start);
    message.stop !== undefined && (obj.stop = message.stop);
    message.phase !== undefined &&
      (obj.phase = projectBroadcastPhaseToJSON(message.phase));
    message.region !== undefined &&
      (obj.region =
        message.region !== undefined
          ? regionToJSON(message.region)
          : undefined);
    message.datacenter !== undefined && (obj.datacenter = message.datacenter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectBroadcastStatus>
  ): ProjectBroadcastStatus {
    const message = createBaseProjectBroadcastStatus();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.broadcastId = object.broadcastId ?? undefined;
    message.duration = object.duration ?? undefined;
    message.start = object.start ?? undefined;
    message.stop = object.stop ?? undefined;
    message.phase =
      object.phase ?? ProjectBroadcastPhase.PROJECT_BROADCAST_PHASE_UNSPECIFIED;
    message.region = object.region ?? undefined;
    message.datacenter = object.datacenter ?? undefined;
    return message;
  },
};

function createBaseSource(): Source {
  return {
    collectionId: "",
    sourceId: "",
    metadata: undefined,
    preview: undefined,
    address: undefined,
  };
}

export const Source = {
  encode(
    message: Source,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.preview !== undefined) {
      PreviewAddress.encode(message.preview, writer.uint32(34).fork()).ldelim();
    }
    if (message.address !== undefined) {
      SourceAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Source {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.preview = PreviewAddress.decode(reader, reader.uint32());
          break;
        case 6:
          message.address = SourceAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Source {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      preview: isSet(object.preview)
        ? PreviewAddress.fromJSON(object.preview)
        : undefined,
      address: isSet(object.address)
        ? SourceAddress.fromJSON(object.address)
        : undefined,
    };
  },

  toJSON(message: Source): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.preview !== undefined &&
      (obj.preview = message.preview
        ? PreviewAddress.toJSON(message.preview)
        : undefined);
    message.address !== undefined &&
      (obj.address = message.address
        ? SourceAddress.toJSON(message.address)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Source>): Source {
    const message = createBaseSource();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.preview =
      object.preview !== undefined && object.preview !== null
        ? PreviewAddress.fromPartial(object.preview)
        : undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? SourceAddress.fromPartial(object.address)
        : undefined;
    return message;
  },
};

function createBaseDestination(): Destination {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    metadata: undefined,
    enabled: undefined,
    address: undefined,
    timeout: undefined,
  };
}

export const Destination = {
  encode(
    message: Destination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.enabled !== undefined) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.address !== undefined) {
      DestinationAddress.encode(
        message.address,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.timeout !== undefined) {
      writer.uint32(56).uint32(message.timeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Destination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.enabled = reader.bool();
          break;
        case 6:
          message.address = DestinationAddress.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeout = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Destination {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      address: isSet(object.address)
        ? DestinationAddress.fromJSON(object.address)
        : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
    };
  },

  toJSON(message: Destination): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.address !== undefined &&
      (obj.address = message.address
        ? DestinationAddress.toJSON(message.address)
        : undefined);
    message.timeout !== undefined &&
      (obj.timeout = Math.round(message.timeout));
    return obj;
  },

  fromPartial(object: DeepPartial<Destination>): Destination {
    const message = createBaseDestination();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.enabled = object.enabled ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? DestinationAddress.fromPartial(object.address)
        : undefined;
    message.timeout = object.timeout ?? undefined;
    return message;
  },
};

function createBaseProject(): Project {
  return {
    collectionId: "",
    projectId: "",
    metadata: undefined,
    rendering: undefined,
    encoding: undefined,
    sources: [],
    destinations: [],
    composition: undefined,
    maxDuration: undefined,
    webrtc: undefined,
    triggers: [],
    location: undefined,
    guestCodes: [],
  };
}

export const Project = {
  encode(
    message: Project,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rendering !== undefined) {
      Rendering.encode(message.rendering, writer.uint32(34).fork()).ldelim();
    }
    if (message.encoding !== undefined) {
      Encoding.encode(message.encoding, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sources) {
      Source.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.destinations) {
      Destination.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.composition !== undefined) {
      Composition.encode(
        message.composition,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      writer.uint32(72).uint32(message.maxDuration);
    }
    if (message.webrtc !== undefined) {
      WebRtc.encode(message.webrtc, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.triggers) {
      ProjectTrigger.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.location !== undefined) {
      LatLong.encode(message.location, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.guestCodes) {
      GuestCode.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.rendering = Rendering.decode(reader, reader.uint32());
          break;
        case 5:
          message.encoding = Encoding.decode(reader, reader.uint32());
          break;
        case 6:
          message.sources.push(Source.decode(reader, reader.uint32()));
          break;
        case 7:
          message.destinations.push(
            Destination.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.composition = Composition.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxDuration = reader.uint32();
          break;
        case 10:
          message.webrtc = WebRtc.decode(reader, reader.uint32());
          break;
        case 11:
          message.triggers.push(ProjectTrigger.decode(reader, reader.uint32()));
          break;
        case 12:
          message.location = LatLong.decode(reader, reader.uint32());
          break;
        case 13:
          message.guestCodes.push(GuestCode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      rendering: isSet(object.rendering)
        ? Rendering.fromJSON(object.rendering)
        : undefined,
      encoding: isSet(object.encoding)
        ? Encoding.fromJSON(object.encoding)
        : undefined,
      sources: Array.isArray(object?.sources)
        ? object.sources.map((e: any) => Source.fromJSON(e))
        : [],
      destinations: Array.isArray(object?.destinations)
        ? object.destinations.map((e: any) => Destination.fromJSON(e))
        : [],
      composition: isSet(object.composition)
        ? Composition.fromJSON(object.composition)
        : undefined,
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
      webrtc: isSet(object.webrtc) ? WebRtc.fromJSON(object.webrtc) : undefined,
      triggers: Array.isArray(object?.triggers)
        ? object.triggers.map((e: any) => ProjectTrigger.fromJSON(e))
        : [],
      location: isSet(object.location)
        ? LatLong.fromJSON(object.location)
        : undefined,
      guestCodes: Array.isArray(object?.guestCodes)
        ? object.guestCodes.map((e: any) => GuestCode.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.rendering !== undefined &&
      (obj.rendering = message.rendering
        ? Rendering.toJSON(message.rendering)
        : undefined);
    message.encoding !== undefined &&
      (obj.encoding = message.encoding
        ? Encoding.toJSON(message.encoding)
        : undefined);
    if (message.sources) {
      obj.sources = message.sources.map((e) =>
        e ? Source.toJSON(e) : undefined
      );
    } else {
      obj.sources = [];
    }
    if (message.destinations) {
      obj.destinations = message.destinations.map((e) =>
        e ? Destination.toJSON(e) : undefined
      );
    } else {
      obj.destinations = [];
    }
    message.composition !== undefined &&
      (obj.composition = message.composition
        ? Composition.toJSON(message.composition)
        : undefined);
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    message.webrtc !== undefined &&
      (obj.webrtc = message.webrtc ? WebRtc.toJSON(message.webrtc) : undefined);
    if (message.triggers) {
      obj.triggers = message.triggers.map((e) =>
        e ? ProjectTrigger.toJSON(e) : undefined
      );
    } else {
      obj.triggers = [];
    }
    message.location !== undefined &&
      (obj.location = message.location
        ? LatLong.toJSON(message.location)
        : undefined);
    if (message.guestCodes) {
      obj.guestCodes = message.guestCodes.map((e) =>
        e ? GuestCode.toJSON(e) : undefined
      );
    } else {
      obj.guestCodes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.rendering =
      object.rendering !== undefined && object.rendering !== null
        ? Rendering.fromPartial(object.rendering)
        : undefined;
    message.encoding =
      object.encoding !== undefined && object.encoding !== null
        ? Encoding.fromPartial(object.encoding)
        : undefined;
    message.sources = object.sources?.map((e) => Source.fromPartial(e)) || [];
    message.destinations =
      object.destinations?.map((e) => Destination.fromPartial(e)) || [];
    message.composition =
      object.composition !== undefined && object.composition !== null
        ? Composition.fromPartial(object.composition)
        : undefined;
    message.maxDuration = object.maxDuration ?? undefined;
    message.webrtc =
      object.webrtc !== undefined && object.webrtc !== null
        ? WebRtc.fromPartial(object.webrtc)
        : undefined;
    message.triggers =
      object.triggers?.map((e) => ProjectTrigger.fromPartial(e)) || [];
    message.location =
      object.location !== undefined && object.location !== null
        ? LatLong.fromPartial(object.location)
        : undefined;
    message.guestCodes =
      object.guestCodes?.map((e) => GuestCode.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollection(): Collection {
  return { collectionId: "", metadata: undefined, projects: [], sources: [] };
}

export const Collection = {
  encode(
    message: Collection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sources) {
      Source.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.projects.push(Project.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sources.push(Source.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => Project.fromJSON(e))
        : [],
      sources: Array.isArray(object?.sources)
        ? object.sources.map((e: any) => Source.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.projects) {
      obj.projects = message.projects.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.projects = [];
    }
    if (message.sources) {
      obj.sources = message.sources.map((e) =>
        e ? Source.toJSON(e) : undefined
      );
    } else {
      obj.sources = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = createBaseCollection();
    message.collectionId = object.collectionId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.projects =
      object.projects?.map((e) => Project.fromPartial(e)) || [];
    message.sources = object.sources?.map((e) => Source.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateCollectionRequest(): CreateCollectionRequest {
  return { metadata: undefined };
}

export const CreateCollectionRequest = {
  encode(
    message: CreateCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Value.unwrap(
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

  fromJSON(object: any): CreateCollectionRequest {
    return {
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: CreateCollectionRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCollectionRequest>
  ): CreateCollectionRequest {
    const message = createBaseCreateCollectionRequest();
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseCreateCollectionResponse(): CreateCollectionResponse {
  return { collection: undefined };
}

export const CreateCollectionResponse = {
  encode(
    message: CreateCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCollectionResponse {
    return {
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: CreateCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateCollectionResponse>
  ): CreateCollectionResponse {
    const message = createBaseCreateCollectionResponse();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseGetCollectionRequest(): GetCollectionRequest {
  return {
    collectionId: "",
    populateProjects: undefined,
    populateSources: undefined,
  };
}

export const GetCollectionRequest = {
  encode(
    message: GetCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.populateProjects !== undefined) {
      writer.uint32(16).bool(message.populateProjects);
    }
    if (message.populateSources !== undefined) {
      writer.uint32(24).bool(message.populateSources);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.populateProjects = reader.bool();
          break;
        case 3:
          message.populateSources = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCollectionRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      populateProjects: isSet(object.populateProjects)
        ? Boolean(object.populateProjects)
        : undefined,
      populateSources: isSet(object.populateSources)
        ? Boolean(object.populateSources)
        : undefined,
    };
  },

  toJSON(message: GetCollectionRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.populateProjects !== undefined &&
      (obj.populateProjects = message.populateProjects);
    message.populateSources !== undefined &&
      (obj.populateSources = message.populateSources);
    return obj;
  },

  fromPartial(object: DeepPartial<GetCollectionRequest>): GetCollectionRequest {
    const message = createBaseGetCollectionRequest();
    message.collectionId = object.collectionId ?? "";
    message.populateProjects = object.populateProjects ?? undefined;
    message.populateSources = object.populateSources ?? undefined;
    return message;
  },
};

function createBaseGetCollectionResponse(): GetCollectionResponse {
  return { collection: undefined };
}

export const GetCollectionResponse = {
  encode(
    message: GetCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCollectionResponse {
    return {
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: GetCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetCollectionResponse>
  ): GetCollectionResponse {
    const message = createBaseGetCollectionResponse();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseUpdateCollectionRequest(): UpdateCollectionRequest {
  return { collectionId: "", updateMask: undefined, metadata: undefined };
}

export const UpdateCollectionRequest = {
  encode(
    message: UpdateCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.metadata = Value.unwrap(
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

  fromJSON(object: any): UpdateCollectionRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: UpdateCollectionRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateCollectionRequest>
  ): UpdateCollectionRequest {
    const message = createBaseUpdateCollectionRequest();
    message.collectionId = object.collectionId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseUpdateCollectionResponse(): UpdateCollectionResponse {
  return { collection: undefined };
}

export const UpdateCollectionResponse = {
  encode(
    message: UpdateCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCollectionResponse {
    return {
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: UpdateCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateCollectionResponse>
  ): UpdateCollectionResponse {
    const message = createBaseUpdateCollectionResponse();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseDeleteCollectionRequest(): DeleteCollectionRequest {
  return { collectionId: "", force: undefined };
}

export const DeleteCollectionRequest = {
  encode(
    message: DeleteCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.force !== undefined) {
      writer.uint32(16).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCollectionRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      force: isSet(object.force) ? Boolean(object.force) : undefined,
    };
  },

  toJSON(message: DeleteCollectionRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteCollectionRequest>
  ): DeleteCollectionRequest {
    const message = createBaseDeleteCollectionRequest();
    message.collectionId = object.collectionId ?? "";
    message.force = object.force ?? undefined;
    return message;
  },
};

function createBaseDeleteCollectionResponse(): DeleteCollectionResponse {
  return { sourcesDeleted: 0, projectsDeleted: 0, projectIdsStopped: [] };
}

export const DeleteCollectionResponse = {
  encode(
    message: DeleteCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourcesDeleted !== 0) {
      writer.uint32(8).uint32(message.sourcesDeleted);
    }
    if (message.projectsDeleted !== 0) {
      writer.uint32(16).uint32(message.projectsDeleted);
    }
    for (const v of message.projectIdsStopped) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcesDeleted = reader.uint32();
          break;
        case 2:
          message.projectsDeleted = reader.uint32();
          break;
        case 3:
          message.projectIdsStopped.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCollectionResponse {
    return {
      sourcesDeleted: isSet(object.sourcesDeleted)
        ? Number(object.sourcesDeleted)
        : 0,
      projectsDeleted: isSet(object.projectsDeleted)
        ? Number(object.projectsDeleted)
        : 0,
      projectIdsStopped: Array.isArray(object?.projectIdsStopped)
        ? object.projectIdsStopped.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DeleteCollectionResponse): unknown {
    const obj: any = {};
    message.sourcesDeleted !== undefined &&
      (obj.sourcesDeleted = Math.round(message.sourcesDeleted));
    message.projectsDeleted !== undefined &&
      (obj.projectsDeleted = Math.round(message.projectsDeleted));
    if (message.projectIdsStopped) {
      obj.projectIdsStopped = message.projectIdsStopped.map((e) => e);
    } else {
      obj.projectIdsStopped = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteCollectionResponse>
  ): DeleteCollectionResponse {
    const message = createBaseDeleteCollectionResponse();
    message.sourcesDeleted = object.sourcesDeleted ?? 0;
    message.projectsDeleted = object.projectsDeleted ?? 0;
    message.projectIdsStopped = object.projectIdsStopped?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetCollectionsRequest(): GetCollectionsRequest {
  return {};
}

export const GetCollectionsRequest = {
  encode(
    _: GetCollectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCollectionsRequest {
    return {};
  },

  toJSON(_: GetCollectionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetCollectionsRequest>): GetCollectionsRequest {
    const message = createBaseGetCollectionsRequest();
    return message;
  },
};

function createBaseGetCollectionsResponse(): GetCollectionsResponse {
  return { collections: [] };
}

export const GetCollectionsResponse = {
  encode(
    message: GetCollectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCollectionsResponse {
    return {
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) => Collection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCollectionsResponse): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? Collection.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetCollectionsResponse>
  ): GetCollectionsResponse {
    const message = createBaseGetCollectionsResponse();
    message.collections =
      object.collections?.map((e) => Collection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateProjectRequest(): CreateProjectRequest {
  return {
    collectionId: "",
    metadata: undefined,
    rendering: undefined,
    encoding: undefined,
    composition: undefined,
    maxDuration: undefined,
    webrtc: undefined,
    location: undefined,
  };
}

export const CreateProjectRequest = {
  encode(
    message: CreateProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.rendering !== undefined) {
      Rendering.encode(message.rendering, writer.uint32(26).fork()).ldelim();
    }
    if (message.encoding !== undefined) {
      Encoding.encode(message.encoding, writer.uint32(34).fork()).ldelim();
    }
    if (message.composition !== undefined) {
      Composition.encode(
        message.composition,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      writer.uint32(48).uint32(message.maxDuration);
    }
    if (message.webrtc !== undefined) {
      WebRtc.encode(message.webrtc, writer.uint32(58).fork()).ldelim();
    }
    if (message.location !== undefined) {
      LatLong.encode(message.location, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.rendering = Rendering.decode(reader, reader.uint32());
          break;
        case 4:
          message.encoding = Encoding.decode(reader, reader.uint32());
          break;
        case 5:
          message.composition = Composition.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxDuration = reader.uint32();
          break;
        case 7:
          message.webrtc = WebRtc.decode(reader, reader.uint32());
          break;
        case 9:
          message.location = LatLong.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      rendering: isSet(object.rendering)
        ? Rendering.fromJSON(object.rendering)
        : undefined,
      encoding: isSet(object.encoding)
        ? Encoding.fromJSON(object.encoding)
        : undefined,
      composition: isSet(object.composition)
        ? Composition.fromJSON(object.composition)
        : undefined,
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
      webrtc: isSet(object.webrtc) ? WebRtc.fromJSON(object.webrtc) : undefined,
      location: isSet(object.location)
        ? LatLong.fromJSON(object.location)
        : undefined,
    };
  },

  toJSON(message: CreateProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.rendering !== undefined &&
      (obj.rendering = message.rendering
        ? Rendering.toJSON(message.rendering)
        : undefined);
    message.encoding !== undefined &&
      (obj.encoding = message.encoding
        ? Encoding.toJSON(message.encoding)
        : undefined);
    message.composition !== undefined &&
      (obj.composition = message.composition
        ? Composition.toJSON(message.composition)
        : undefined);
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    message.webrtc !== undefined &&
      (obj.webrtc = message.webrtc ? WebRtc.toJSON(message.webrtc) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? LatLong.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateProjectRequest>): CreateProjectRequest {
    const message = createBaseCreateProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.rendering =
      object.rendering !== undefined && object.rendering !== null
        ? Rendering.fromPartial(object.rendering)
        : undefined;
    message.encoding =
      object.encoding !== undefined && object.encoding !== null
        ? Encoding.fromPartial(object.encoding)
        : undefined;
    message.composition =
      object.composition !== undefined && object.composition !== null
        ? Composition.fromPartial(object.composition)
        : undefined;
    message.maxDuration = object.maxDuration ?? undefined;
    message.webrtc =
      object.webrtc !== undefined && object.webrtc !== null
        ? WebRtc.fromPartial(object.webrtc)
        : undefined;
    message.location =
      object.location !== undefined && object.location !== null
        ? LatLong.fromPartial(object.location)
        : undefined;
    return message;
  },
};

function createBaseCreateProjectResponse(): CreateProjectResponse {
  return { project: undefined };
}

export const CreateProjectResponse = {
  encode(
    message: CreateProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
    };
  },

  toJSON(message: CreateProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateProjectResponse>
  ): CreateProjectResponse {
    const message = createBaseCreateProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    return message;
  },
};

function createBaseUpdateProjectRequest(): UpdateProjectRequest {
  return {
    collectionId: "",
    projectId: "",
    updateMask: undefined,
    metadata: undefined,
    rendering: undefined,
    encoding: undefined,
    composition: undefined,
    maxDuration: undefined,
    webrtc: undefined,
    location: undefined,
  };
}

export const UpdateProjectRequest = {
  encode(
    message: UpdateProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.rendering !== undefined) {
      Rendering.encode(message.rendering, writer.uint32(42).fork()).ldelim();
    }
    if (message.encoding !== undefined) {
      Encoding.encode(message.encoding, writer.uint32(50).fork()).ldelim();
    }
    if (message.composition !== undefined) {
      Composition.encode(
        message.composition,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxDuration !== undefined) {
      writer.uint32(64).uint32(message.maxDuration);
    }
    if (message.webrtc !== undefined) {
      WebRtc.encode(message.webrtc, writer.uint32(74).fork()).ldelim();
    }
    if (message.location !== undefined) {
      LatLong.encode(message.location, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.rendering = Rendering.decode(reader, reader.uint32());
          break;
        case 6:
          message.encoding = Encoding.decode(reader, reader.uint32());
          break;
        case 7:
          message.composition = Composition.decode(reader, reader.uint32());
          break;
        case 8:
          message.maxDuration = reader.uint32();
          break;
        case 9:
          message.webrtc = WebRtc.decode(reader, reader.uint32());
          break;
        case 10:
          message.location = LatLong.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      rendering: isSet(object.rendering)
        ? Rendering.fromJSON(object.rendering)
        : undefined,
      encoding: isSet(object.encoding)
        ? Encoding.fromJSON(object.encoding)
        : undefined,
      composition: isSet(object.composition)
        ? Composition.fromJSON(object.composition)
        : undefined,
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
      webrtc: isSet(object.webrtc) ? WebRtc.fromJSON(object.webrtc) : undefined,
      location: isSet(object.location)
        ? LatLong.fromJSON(object.location)
        : undefined,
    };
  },

  toJSON(message: UpdateProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.rendering !== undefined &&
      (obj.rendering = message.rendering
        ? Rendering.toJSON(message.rendering)
        : undefined);
    message.encoding !== undefined &&
      (obj.encoding = message.encoding
        ? Encoding.toJSON(message.encoding)
        : undefined);
    message.composition !== undefined &&
      (obj.composition = message.composition
        ? Composition.toJSON(message.composition)
        : undefined);
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    message.webrtc !== undefined &&
      (obj.webrtc = message.webrtc ? WebRtc.toJSON(message.webrtc) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? LatLong.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest {
    const message = createBaseUpdateProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.rendering =
      object.rendering !== undefined && object.rendering !== null
        ? Rendering.fromPartial(object.rendering)
        : undefined;
    message.encoding =
      object.encoding !== undefined && object.encoding !== null
        ? Encoding.fromPartial(object.encoding)
        : undefined;
    message.composition =
      object.composition !== undefined && object.composition !== null
        ? Composition.fromPartial(object.composition)
        : undefined;
    message.maxDuration = object.maxDuration ?? undefined;
    message.webrtc =
      object.webrtc !== undefined && object.webrtc !== null
        ? WebRtc.fromPartial(object.webrtc)
        : undefined;
    message.location =
      object.location !== undefined && object.location !== null
        ? LatLong.fromPartial(object.location)
        : undefined;
    return message;
  },
};

function createBaseUpdateProjectResponse(): UpdateProjectResponse {
  return { project: undefined, broadcastUpdated: false };
}

export const UpdateProjectResponse = {
  encode(
    message: UpdateProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcastUpdated === true) {
      writer.uint32(16).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: UpdateProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateProjectResponse>
  ): UpdateProjectResponse {
    const message = createBaseUpdateProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseDeleteProjectRequest(): DeleteProjectRequest {
  return { collectionId: "", projectId: "", force: undefined };
}

export const DeleteProjectRequest = {
  encode(
    message: DeleteProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.force !== undefined) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      force: isSet(object.force) ? Boolean(object.force) : undefined,
    };
  },

  toJSON(message: DeleteProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteProjectRequest>): DeleteProjectRequest {
    const message = createBaseDeleteProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.force = object.force ?? undefined;
    return message;
  },
};

function createBaseDeleteProjectResponse(): DeleteProjectResponse {
  return { broadcastStopped: false, layoutsDeleted: 0 };
}

export const DeleteProjectResponse = {
  encode(
    message: DeleteProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.broadcastStopped === true) {
      writer.uint32(8).bool(message.broadcastStopped);
    }
    if (message.layoutsDeleted !== 0) {
      writer.uint32(16).uint32(message.layoutsDeleted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastStopped = reader.bool();
          break;
        case 2:
          message.layoutsDeleted = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectResponse {
    return {
      broadcastStopped: isSet(object.broadcastStopped)
        ? Boolean(object.broadcastStopped)
        : false,
      layoutsDeleted: isSet(object.layoutsDeleted)
        ? Number(object.layoutsDeleted)
        : 0,
    };
  },

  toJSON(message: DeleteProjectResponse): unknown {
    const obj: any = {};
    message.broadcastStopped !== undefined &&
      (obj.broadcastStopped = message.broadcastStopped);
    message.layoutsDeleted !== undefined &&
      (obj.layoutsDeleted = Math.round(message.layoutsDeleted));
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteProjectResponse>
  ): DeleteProjectResponse {
    const message = createBaseDeleteProjectResponse();
    message.broadcastStopped = object.broadcastStopped ?? false;
    message.layoutsDeleted = object.layoutsDeleted ?? 0;
    return message;
  },
};

function createBaseStartProjectBroadcastRequest(): StartProjectBroadcastRequest {
  return { collectionId: "", projectId: "", webrtcStart: undefined };
}

export const StartProjectBroadcastRequest = {
  encode(
    message: StartProjectBroadcastRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.webrtcStart !== undefined) {
      writer.uint32(24).bool(message.webrtcStart);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartProjectBroadcastRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartProjectBroadcastRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.webrtcStart = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartProjectBroadcastRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      webrtcStart: isSet(object.webrtcStart)
        ? Boolean(object.webrtcStart)
        : undefined,
    };
  },

  toJSON(message: StartProjectBroadcastRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.webrtcStart !== undefined &&
      (obj.webrtcStart = message.webrtcStart);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StartProjectBroadcastRequest>
  ): StartProjectBroadcastRequest {
    const message = createBaseStartProjectBroadcastRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.webrtcStart = object.webrtcStart ?? undefined;
    return message;
  },
};

function createBaseStartProjectBroadcastResponse(): StartProjectBroadcastResponse {
  return { broadcastId: "" };
}

export const StartProjectBroadcastResponse = {
  encode(
    message: StartProjectBroadcastResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.broadcastId !== "") {
      writer.uint32(10).string(message.broadcastId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartProjectBroadcastResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartProjectBroadcastResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartProjectBroadcastResponse {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "",
    };
  },

  toJSON(message: StartProjectBroadcastResponse): unknown {
    const obj: any = {};
    message.broadcastId !== undefined &&
      (obj.broadcastId = message.broadcastId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StartProjectBroadcastResponse>
  ): StartProjectBroadcastResponse {
    const message = createBaseStartProjectBroadcastResponse();
    message.broadcastId = object.broadcastId ?? "";
    return message;
  },
};

function createBaseStopProjectBroadcastRequest(): StopProjectBroadcastRequest {
  return { collectionId: "", projectId: "", webrtcStop: undefined };
}

export const StopProjectBroadcastRequest = {
  encode(
    message: StopProjectBroadcastRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.webrtcStop !== undefined) {
      writer.uint32(24).bool(message.webrtcStop);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopProjectBroadcastRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopProjectBroadcastRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.webrtcStop = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopProjectBroadcastRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      webrtcStop: isSet(object.webrtcStop)
        ? Boolean(object.webrtcStop)
        : undefined,
    };
  },

  toJSON(message: StopProjectBroadcastRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.webrtcStop !== undefined && (obj.webrtcStop = message.webrtcStop);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StopProjectBroadcastRequest>
  ): StopProjectBroadcastRequest {
    const message = createBaseStopProjectBroadcastRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.webrtcStop = object.webrtcStop ?? undefined;
    return message;
  },
};

function createBaseStopProjectBroadcastResponse(): StopProjectBroadcastResponse {
  return {};
}

export const StopProjectBroadcastResponse = {
  encode(
    _: StopProjectBroadcastResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopProjectBroadcastResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopProjectBroadcastResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StopProjectBroadcastResponse {
    return {};
  },

  toJSON(_: StopProjectBroadcastResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<StopProjectBroadcastResponse>
  ): StopProjectBroadcastResponse {
    const message = createBaseStopProjectBroadcastResponse();
    return message;
  },
};

function createBaseGetProjectRequest(): GetProjectRequest {
  return { collectionId: "", projectId: "", status: undefined };
}

export const GetProjectRequest = {
  encode(
    message: GetProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.status !== undefined) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      status: isSet(object.status) ? Boolean(object.status) : undefined,
    };
  },

  toJSON(message: GetProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<GetProjectRequest>): GetProjectRequest {
    const message = createBaseGetProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseGetProjectResponse(): GetProjectResponse {
  return { project: undefined, status: undefined };
}

export const GetProjectResponse = {
  encode(
    message: GetProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      ProjectBroadcastStatus.encode(
        message.status,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = ProjectBroadcastStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
      status: isSet(object.status)
        ? ProjectBroadcastStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: GetProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? ProjectBroadcastStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetProjectResponse>): GetProjectResponse {
    const message = createBaseGetProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? ProjectBroadcastStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseGetProjectBroadcastSnapshotRequest(): GetProjectBroadcastSnapshotRequest {
  return { collectionId: "", projectId: "", format: undefined };
}

export const GetProjectBroadcastSnapshotRequest = {
  encode(
    message: GetProjectBroadcastSnapshotRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.format !== undefined) {
      writer.uint32(24).int32(imageFormatToNumber(message.format));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProjectBroadcastSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectBroadcastSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.format = imageFormatFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectBroadcastSnapshotRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      format: isSet(object.format)
        ? imageFormatFromJSON(object.format)
        : undefined,
    };
  },

  toJSON(message: GetProjectBroadcastSnapshotRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.format !== undefined &&
      (obj.format =
        message.format !== undefined
          ? imageFormatToJSON(message.format)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetProjectBroadcastSnapshotRequest>
  ): GetProjectBroadcastSnapshotRequest {
    const message = createBaseGetProjectBroadcastSnapshotRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.format = object.format ?? undefined;
    return message;
  },
};

function createBaseGetProjectBroadcastSnapshotResponse(): GetProjectBroadcastSnapshotResponse {
  return {
    format: ImageFormat.IMAGE_FORMAT_UNSPECIFIED,
    image: new Uint8Array(),
  };
}

export const GetProjectBroadcastSnapshotResponse = {
  encode(
    message: GetProjectBroadcastSnapshotResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.format !== ImageFormat.IMAGE_FORMAT_UNSPECIFIED) {
      writer.uint32(8).int32(imageFormatToNumber(message.format));
    }
    if (message.image.length !== 0) {
      writer.uint32(18).bytes(message.image);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProjectBroadcastSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectBroadcastSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = imageFormatFromJSON(reader.int32());
          break;
        case 2:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectBroadcastSnapshotResponse {
    return {
      format: isSet(object.format)
        ? imageFormatFromJSON(object.format)
        : ImageFormat.IMAGE_FORMAT_UNSPECIFIED,
      image: isSet(object.image)
        ? bytesFromBase64(object.image)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetProjectBroadcastSnapshotResponse): unknown {
    const obj: any = {};
    message.format !== undefined &&
      (obj.format = imageFormatToJSON(message.format));
    message.image !== undefined &&
      (obj.image = base64FromBytes(
        message.image !== undefined ? message.image : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetProjectBroadcastSnapshotResponse>
  ): GetProjectBroadcastSnapshotResponse {
    const message = createBaseGetProjectBroadcastSnapshotResponse();
    message.format = object.format ?? ImageFormat.IMAGE_FORMAT_UNSPECIFIED;
    message.image = object.image ?? new Uint8Array();
    return message;
  },
};

function createBaseGetProjectBroadcastStatusRequest(): GetProjectBroadcastStatusRequest {
  return { collectionId: "", projectId: "" };
}

export const GetProjectBroadcastStatusRequest = {
  encode(
    message: GetProjectBroadcastStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProjectBroadcastStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectBroadcastStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectBroadcastStatusRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: GetProjectBroadcastStatusRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetProjectBroadcastStatusRequest>
  ): GetProjectBroadcastStatusRequest {
    const message = createBaseGetProjectBroadcastStatusRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseGetProjectBroadcastStatusResponse(): GetProjectBroadcastStatusResponse {
  return { status: undefined };
}

export const GetProjectBroadcastStatusResponse = {
  encode(
    message: GetProjectBroadcastStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      ProjectBroadcastStatus.encode(
        message.status,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProjectBroadcastStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectBroadcastStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = ProjectBroadcastStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectBroadcastStatusResponse {
    return {
      status: isSet(object.status)
        ? ProjectBroadcastStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: GetProjectBroadcastStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status
        ? ProjectBroadcastStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetProjectBroadcastStatusResponse>
  ): GetProjectBroadcastStatusResponse {
    const message = createBaseGetProjectBroadcastStatusResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? ProjectBroadcastStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseStartProjectWebRtcRequest(): StartProjectWebRtcRequest {
  return { collectionId: "", projectId: "" };
}

export const StartProjectWebRtcRequest = {
  encode(
    message: StartProjectWebRtcRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartProjectWebRtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartProjectWebRtcRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartProjectWebRtcRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: StartProjectWebRtcRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StartProjectWebRtcRequest>
  ): StartProjectWebRtcRequest {
    const message = createBaseStartProjectWebRtcRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseStartProjectWebRtcResponse(): StartProjectWebRtcResponse {
  return {};
}

export const StartProjectWebRtcResponse = {
  encode(
    _: StartProjectWebRtcResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartProjectWebRtcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartProjectWebRtcResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StartProjectWebRtcResponse {
    return {};
  },

  toJSON(_: StartProjectWebRtcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<StartProjectWebRtcResponse>
  ): StartProjectWebRtcResponse {
    const message = createBaseStartProjectWebRtcResponse();
    return message;
  },
};

function createBaseStopProjectWebRtcRequest(): StopProjectWebRtcRequest {
  return { collectionId: "", projectId: "" };
}

export const StopProjectWebRtcRequest = {
  encode(
    message: StopProjectWebRtcRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopProjectWebRtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopProjectWebRtcRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopProjectWebRtcRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: StopProjectWebRtcRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StopProjectWebRtcRequest>
  ): StopProjectWebRtcRequest {
    const message = createBaseStopProjectWebRtcRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseStopProjectWebRtcResponse(): StopProjectWebRtcResponse {
  return {};
}

export const StopProjectWebRtcResponse = {
  encode(
    _: StopProjectWebRtcResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StopProjectWebRtcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopProjectWebRtcResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StopProjectWebRtcResponse {
    return {};
  },

  toJSON(_: StopProjectWebRtcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<StopProjectWebRtcResponse>
  ): StopProjectWebRtcResponse {
    const message = createBaseStopProjectWebRtcResponse();
    return message;
  },
};

function createBaseCreateDestinationRequest(): CreateDestinationRequest {
  return {
    collectionId: "",
    projectId: "",
    metadata: undefined,
    address: undefined,
    enabled: undefined,
    timeout: undefined,
  };
}

export const CreateDestinationRequest = {
  encode(
    message: CreateDestinationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.address !== undefined) {
      DestinationAddress.encode(
        message.address,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.enabled !== undefined) {
      writer.uint32(48).bool(message.enabled);
    }
    if (message.timeout !== undefined) {
      writer.uint32(56).uint32(message.timeout);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDestinationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDestinationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.address = DestinationAddress.decode(reader, reader.uint32());
          break;
        case 6:
          message.enabled = reader.bool();
          break;
        case 7:
          message.timeout = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDestinationRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      address: isSet(object.address)
        ? DestinationAddress.fromJSON(object.address)
        : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
    };
  },

  toJSON(message: CreateDestinationRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.address !== undefined &&
      (obj.address = message.address
        ? DestinationAddress.toJSON(message.address)
        : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.timeout !== undefined &&
      (obj.timeout = Math.round(message.timeout));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateDestinationRequest>
  ): CreateDestinationRequest {
    const message = createBaseCreateDestinationRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? DestinationAddress.fromPartial(object.address)
        : undefined;
    message.enabled = object.enabled ?? undefined;
    message.timeout = object.timeout ?? undefined;
    return message;
  },
};

function createBaseCreateDestinationResponse(): CreateDestinationResponse {
  return { destination: undefined };
}

export const CreateDestinationResponse = {
  encode(
    message: CreateDestinationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDestinationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDestinationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDestinationResponse {
    return {
      destination: isSet(object.destination)
        ? Destination.fromJSON(object.destination)
        : undefined,
    };
  },

  toJSON(message: CreateDestinationResponse): unknown {
    const obj: any = {};
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateDestinationResponse>
  ): CreateDestinationResponse {
    const message = createBaseCreateDestinationResponse();
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    return message;
  },
};

function createBaseGetDestinationRequest(): GetDestinationRequest {
  return { collectionId: "", projectId: "", destinationId: "" };
}

export const GetDestinationRequest = {
  encode(
    message: GetDestinationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDestinationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDestinationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDestinationRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
    };
  },

  toJSON(message: GetDestinationRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDestinationRequest>
  ): GetDestinationRequest {
    const message = createBaseGetDestinationRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    return message;
  },
};

function createBaseGetDestinationResponse(): GetDestinationResponse {
  return { destination: undefined };
}

export const GetDestinationResponse = {
  encode(
    message: GetDestinationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDestinationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDestinationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDestinationResponse {
    return {
      destination: isSet(object.destination)
        ? Destination.fromJSON(object.destination)
        : undefined,
    };
  },

  toJSON(message: GetDestinationResponse): unknown {
    const obj: any = {};
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetDestinationResponse>
  ): GetDestinationResponse {
    const message = createBaseGetDestinationResponse();
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    return message;
  },
};

function createBaseDeleteDestinationRequest(): DeleteDestinationRequest {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    force: undefined,
  };
}

export const DeleteDestinationRequest = {
  encode(
    message: DeleteDestinationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    if (message.force !== undefined) {
      writer.uint32(32).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDestinationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDestinationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDestinationRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      force: isSet(object.force) ? Boolean(object.force) : undefined,
    };
  },

  toJSON(message: DeleteDestinationRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteDestinationRequest>
  ): DeleteDestinationRequest {
    const message = createBaseDeleteDestinationRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.force = object.force ?? undefined;
    return message;
  },
};

function createBaseDeleteDestinationResponse(): DeleteDestinationResponse {
  return { broadcastUpdated: false };
}

export const DeleteDestinationResponse = {
  encode(
    message: DeleteDestinationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.broadcastUpdated === true) {
      writer.uint32(8).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDestinationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteDestinationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDestinationResponse {
    return {
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: DeleteDestinationResponse): unknown {
    const obj: any = {};
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteDestinationResponse>
  ): DeleteDestinationResponse {
    const message = createBaseDeleteDestinationResponse();
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseUpdateDestinationRequest(): UpdateDestinationRequest {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    updateMask: undefined,
    metadata: undefined,
    address: undefined,
    enabled: undefined,
    timeout: undefined,
  };
}

export const UpdateDestinationRequest = {
  encode(
    message: UpdateDestinationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.address !== undefined) {
      DestinationAddress.encode(
        message.address,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.enabled !== undefined) {
      writer.uint32(56).bool(message.enabled);
    }
    if (message.timeout !== undefined) {
      writer.uint32(64).uint32(message.timeout);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDestinationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDestinationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.address = DestinationAddress.decode(reader, reader.uint32());
          break;
        case 7:
          message.enabled = reader.bool();
          break;
        case 8:
          message.timeout = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDestinationRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      address: isSet(object.address)
        ? DestinationAddress.fromJSON(object.address)
        : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
    };
  },

  toJSON(message: UpdateDestinationRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.address !== undefined &&
      (obj.address = message.address
        ? DestinationAddress.toJSON(message.address)
        : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.timeout !== undefined &&
      (obj.timeout = Math.round(message.timeout));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateDestinationRequest>
  ): UpdateDestinationRequest {
    const message = createBaseUpdateDestinationRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? DestinationAddress.fromPartial(object.address)
        : undefined;
    message.enabled = object.enabled ?? undefined;
    message.timeout = object.timeout ?? undefined;
    return message;
  },
};

function createBaseUpdateDestinationResponse(): UpdateDestinationResponse {
  return { destination: undefined, broadcastUpdated: false };
}

export const UpdateDestinationResponse = {
  encode(
    message: UpdateDestinationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.broadcastUpdated === true) {
      writer.uint32(16).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDestinationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDestinationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        case 2:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDestinationResponse {
    return {
      destination: isSet(object.destination)
        ? Destination.fromJSON(object.destination)
        : undefined,
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: UpdateDestinationResponse): unknown {
    const obj: any = {};
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateDestinationResponse>
  ): UpdateDestinationResponse {
    const message = createBaseUpdateDestinationResponse();
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseCreateSourceRequest(): CreateSourceRequest {
  return {
    collectionId: "",
    metadata: undefined,
    address: undefined,
    preview: undefined,
  };
}

export const CreateSourceRequest = {
  encode(
    message: CreateSourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.address !== undefined) {
      SourceAddress.encode(message.address, writer.uint32(26).fork()).ldelim();
    }
    if (message.preview !== undefined) {
      PreviewAddress.encode(message.preview, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.address = SourceAddress.decode(reader, reader.uint32());
          break;
        case 4:
          message.preview = PreviewAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSourceRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      address: isSet(object.address)
        ? SourceAddress.fromJSON(object.address)
        : undefined,
      preview: isSet(object.preview)
        ? PreviewAddress.fromJSON(object.preview)
        : undefined,
    };
  },

  toJSON(message: CreateSourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.address !== undefined &&
      (obj.address = message.address
        ? SourceAddress.toJSON(message.address)
        : undefined);
    message.preview !== undefined &&
      (obj.preview = message.preview
        ? PreviewAddress.toJSON(message.preview)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateSourceRequest>): CreateSourceRequest {
    const message = createBaseCreateSourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.metadata = object.metadata ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? SourceAddress.fromPartial(object.address)
        : undefined;
    message.preview =
      object.preview !== undefined && object.preview !== null
        ? PreviewAddress.fromPartial(object.preview)
        : undefined;
    return message;
  },
};

function createBaseCreateSourceResponse(): CreateSourceResponse {
  return { source: undefined };
}

export const CreateSourceResponse = {
  encode(
    message: CreateSourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSourceResponse {
    return {
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
    };
  },

  toJSON(message: CreateSourceResponse): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateSourceResponse>): CreateSourceResponse {
    const message = createBaseCreateSourceResponse();
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBaseDeleteSourceRequest(): DeleteSourceRequest {
  return { collectionId: "", sourceId: "", force: undefined };
}

export const DeleteSourceRequest = {
  encode(
    message: DeleteSourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    if (message.force !== undefined) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSourceRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      force: isSet(object.force) ? Boolean(object.force) : undefined,
    };
  },

  toJSON(message: DeleteSourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteSourceRequest>): DeleteSourceRequest {
    const message = createBaseDeleteSourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.force = object.force ?? undefined;
    return message;
  },
};

function createBaseDeleteSourceResponse(): DeleteSourceResponse {
  return { projectIdsUpdated: [] };
}

export const DeleteSourceResponse = {
  encode(
    message: DeleteSourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.projectIdsUpdated) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.projectIdsUpdated.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSourceResponse {
    return {
      projectIdsUpdated: Array.isArray(object?.projectIdsUpdated)
        ? object.projectIdsUpdated.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DeleteSourceResponse): unknown {
    const obj: any = {};
    if (message.projectIdsUpdated) {
      obj.projectIdsUpdated = message.projectIdsUpdated.map((e) => e);
    } else {
      obj.projectIdsUpdated = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteSourceResponse>): DeleteSourceResponse {
    const message = createBaseDeleteSourceResponse();
    message.projectIdsUpdated = object.projectIdsUpdated?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddSourceToProjectRequest(): AddSourceToProjectRequest {
  return { collectionId: "", projectId: "", sourceId: "", trigger: undefined };
}

export const AddSourceToProjectRequest = {
  encode(
    message: AddSourceToProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    if (message.trigger !== undefined) {
      SourceTrigger.encode(message.trigger, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddSourceToProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSourceToProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        case 4:
          message.trigger = SourceTrigger.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSourceToProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      trigger: isSet(object.trigger)
        ? SourceTrigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: AddSourceToProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? SourceTrigger.toJSON(message.trigger)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddSourceToProjectRequest>
  ): AddSourceToProjectRequest {
    const message = createBaseAddSourceToProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? SourceTrigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAddSourceToProjectResponse(): AddSourceToProjectResponse {
  return { project: undefined, broadcastUpdated: false };
}

export const AddSourceToProjectResponse = {
  encode(
    message: AddSourceToProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcastUpdated === true) {
      writer.uint32(16).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddSourceToProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSourceToProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSourceToProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: AddSourceToProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddSourceToProjectResponse>
  ): AddSourceToProjectResponse {
    const message = createBaseAddSourceToProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseUpdateSourceInProjectRequest(): UpdateSourceInProjectRequest {
  return {
    collectionId: "",
    projectId: "",
    sourceId: "",
    updateMask: undefined,
    trigger: undefined,
  };
}

export const UpdateSourceInProjectRequest = {
  encode(
    message: UpdateSourceInProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      SourceTrigger.encode(message.trigger, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSourceInProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSourceInProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        case 4:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.trigger = SourceTrigger.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSourceInProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      trigger: isSet(object.trigger)
        ? SourceTrigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: UpdateSourceInProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? SourceTrigger.toJSON(message.trigger)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateSourceInProjectRequest>
  ): UpdateSourceInProjectRequest {
    const message = createBaseUpdateSourceInProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? SourceTrigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseUpdateSourceInProjectResponse(): UpdateSourceInProjectResponse {
  return { project: undefined };
}

export const UpdateSourceInProjectResponse = {
  encode(
    message: UpdateSourceInProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSourceInProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSourceInProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSourceInProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
    };
  },

  toJSON(message: UpdateSourceInProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateSourceInProjectResponse>
  ): UpdateSourceInProjectResponse {
    const message = createBaseUpdateSourceInProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    return message;
  },
};

function createBaseGetSourceRequest(): GetSourceRequest {
  return { collectionId: "", sourceId: "" };
}

export const GetSourceRequest = {
  encode(
    message: GetSourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSourceRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
    };
  },

  toJSON(message: GetSourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSourceRequest>): GetSourceRequest {
    const message = createBaseGetSourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    return message;
  },
};

function createBaseGetSourceResponse(): GetSourceResponse {
  return { source: undefined };
}

export const GetSourceResponse = {
  encode(
    message: GetSourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSourceResponse {
    return {
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
    };
  },

  toJSON(message: GetSourceResponse): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSourceResponse>): GetSourceResponse {
    const message = createBaseGetSourceResponse();
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBaseGetSourcesRequest(): GetSourcesRequest {
  return { collectionId: "" };
}

export const GetSourcesRequest = {
  encode(
    message: GetSourcesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSourcesRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
    };
  },

  toJSON(message: GetSourcesRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSourcesRequest>): GetSourcesRequest {
    const message = createBaseGetSourcesRequest();
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

function createBaseGetSourcesResponse(): GetSourcesResponse {
  return { sources: [] };
}

export const GetSourcesResponse = {
  encode(
    message: GetSourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sources) {
      Source.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sources.push(Source.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSourcesResponse {
    return {
      sources: Array.isArray(object?.sources)
        ? object.sources.map((e: any) => Source.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetSourcesResponse): unknown {
    const obj: any = {};
    if (message.sources) {
      obj.sources = message.sources.map((e) =>
        e ? Source.toJSON(e) : undefined
      );
    } else {
      obj.sources = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetSourcesResponse>): GetSourcesResponse {
    const message = createBaseGetSourcesResponse();
    message.sources = object.sources?.map((e) => Source.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateSourceRequest(): UpdateSourceRequest {
  return {
    collectionId: "",
    sourceId: "",
    updateMask: undefined,
    metadata: undefined,
    address: undefined,
    preview: undefined,
  };
}

export const UpdateSourceRequest = {
  encode(
    message: UpdateSourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.metadata !== undefined) {
      Value.encode(
        Value.wrap(message.metadata),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.address !== undefined) {
      SourceAddress.encode(message.address, writer.uint32(50).fork()).ldelim();
    }
    if (message.preview !== undefined) {
      PreviewAddress.encode(message.preview, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        case 4:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.metadata = Value.unwrap(
            Value.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.address = SourceAddress.decode(reader, reader.uint32());
          break;
        case 7:
          message.preview = PreviewAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSourceRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
      address: isSet(object.address)
        ? SourceAddress.fromJSON(object.address)
        : undefined,
      preview: isSet(object.preview)
        ? PreviewAddress.fromJSON(object.preview)
        : undefined,
    };
  },

  toJSON(message: UpdateSourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.address !== undefined &&
      (obj.address = message.address
        ? SourceAddress.toJSON(message.address)
        : undefined);
    message.preview !== undefined &&
      (obj.preview = message.preview
        ? PreviewAddress.toJSON(message.preview)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateSourceRequest>): UpdateSourceRequest {
    const message = createBaseUpdateSourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.updateMask = object.updateMask ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? SourceAddress.fromPartial(object.address)
        : undefined;
    message.preview =
      object.preview !== undefined && object.preview !== null
        ? PreviewAddress.fromPartial(object.preview)
        : undefined;
    return message;
  },
};

function createBaseUpdateSourceResponse(): UpdateSourceResponse {
  return { source: undefined, broadcastUpdated: false };
}

export const UpdateSourceResponse = {
  encode(
    message: UpdateSourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcastUpdated === true) {
      writer.uint32(16).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = Source.decode(reader, reader.uint32());
          break;
        case 2:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSourceResponse {
    return {
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: UpdateSourceResponse): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateSourceResponse>): UpdateSourceResponse {
    const message = createBaseUpdateSourceResponse();
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseRemoveSourceFromProjectRequest(): RemoveSourceFromProjectRequest {
  return { collectionId: "", projectId: "", sourceId: "", force: undefined };
}

export const RemoveSourceFromProjectRequest = {
  encode(
    message: RemoveSourceFromProjectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    if (message.force !== undefined) {
      writer.uint32(32).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSourceFromProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSourceFromProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        case 4:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSourceFromProjectRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      force: isSet(object.force) ? Boolean(object.force) : undefined,
    };
  },

  toJSON(message: RemoveSourceFromProjectRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveSourceFromProjectRequest>
  ): RemoveSourceFromProjectRequest {
    const message = createBaseRemoveSourceFromProjectRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.force = object.force ?? undefined;
    return message;
  },
};

function createBaseRemoveSourceFromProjectResponse(): RemoveSourceFromProjectResponse {
  return { project: undefined, broadcastUpdated: false };
}

export const RemoveSourceFromProjectResponse = {
  encode(
    message: RemoveSourceFromProjectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcastUpdated === true) {
      writer.uint32(16).bool(message.broadcastUpdated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveSourceFromProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSourceFromProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.broadcastUpdated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSourceFromProjectResponse {
    return {
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
      broadcastUpdated: isSet(object.broadcastUpdated)
        ? Boolean(object.broadcastUpdated)
        : false,
    };
  },

  toJSON(message: RemoveSourceFromProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    message.broadcastUpdated !== undefined &&
      (obj.broadcastUpdated = message.broadcastUpdated);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveSourceFromProjectResponse>
  ): RemoveSourceFromProjectResponse {
    const message = createBaseRemoveSourceFromProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    message.broadcastUpdated = object.broadcastUpdated ?? false;
    return message;
  },
};

function createBaseCreateAccessTokenRequest(): CreateAccessTokenRequest {
  return {
    serviceUserId: "",
    displayName: undefined,
    role: undefined,
    maxDuration: undefined,
  };
}

export const CreateAccessTokenRequest = {
  encode(
    message: CreateAccessTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceUserId !== "") {
      writer.uint32(10).string(message.serviceUserId);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    if (message.role !== undefined) {
      writer.uint32(16).int32(roleToNumber(message.role));
    }
    if (message.maxDuration !== undefined) {
      writer.uint32(24).uint32(message.maxDuration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceUserId = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 2:
          message.role = roleFromJSON(reader.int32());
          break;
        case 3:
          message.maxDuration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAccessTokenRequest {
    return {
      serviceUserId: isSet(object.serviceUserId)
        ? String(object.serviceUserId)
        : "",
      displayName: isSet(object.displayName)
        ? String(object.displayName)
        : undefined,
      role: isSet(object.role) ? roleFromJSON(object.role) : undefined,
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
    };
  },

  toJSON(message: CreateAccessTokenRequest): unknown {
    const obj: any = {};
    message.serviceUserId !== undefined &&
      (obj.serviceUserId = message.serviceUserId);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.role !== undefined &&
      (obj.role =
        message.role !== undefined ? roleToJSON(message.role) : undefined);
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateAccessTokenRequest>
  ): CreateAccessTokenRequest {
    const message = createBaseCreateAccessTokenRequest();
    message.serviceUserId = object.serviceUserId ?? "";
    message.displayName = object.displayName ?? undefined;
    message.role = object.role ?? undefined;
    message.maxDuration = object.maxDuration ?? undefined;
    return message;
  },
};

function createBaseCreateAccessTokenResponse(): CreateAccessTokenResponse {
  return { accessToken: "" };
}

export const CreateAccessTokenResponse = {
  encode(
    message: CreateAccessTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAccessTokenResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
    };
  },

  toJSON(message: CreateAccessTokenResponse): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateAccessTokenResponse>
  ): CreateAccessTokenResponse {
    const message = createBaseCreateAccessTokenResponse();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseGuestAccessTokenDirect(): GuestAccessTokenDirect {
  return { displayName: "", serviceUserId: undefined };
}

export const GuestAccessTokenDirect = {
  encode(
    message: GuestAccessTokenDirect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.serviceUserId !== undefined) {
      writer.uint32(18).string(message.serviceUserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuestAccessTokenDirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestAccessTokenDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        case 2:
          message.serviceUserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestAccessTokenDirect {
    return {
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      serviceUserId: isSet(object.serviceUserId)
        ? String(object.serviceUserId)
        : undefined,
    };
  },

  toJSON(message: GuestAccessTokenDirect): unknown {
    const obj: any = {};
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.serviceUserId !== undefined &&
      (obj.serviceUserId = message.serviceUserId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuestAccessTokenDirect>
  ): GuestAccessTokenDirect {
    const message = createBaseGuestAccessTokenDirect();
    message.displayName = object.displayName ?? "";
    message.serviceUserId = object.serviceUserId ?? undefined;
    return message;
  },
};

function createBaseGuestAccessTokenExchange(): GuestAccessTokenExchange {
  return { maxDuration: undefined };
}

export const GuestAccessTokenExchange = {
  encode(
    message: GuestAccessTokenExchange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxDuration !== undefined) {
      writer.uint32(8).uint32(message.maxDuration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuestAccessTokenExchange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestAccessTokenExchange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDuration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestAccessTokenExchange {
    return {
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
    };
  },

  toJSON(message: GuestAccessTokenExchange): unknown {
    const obj: any = {};
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuestAccessTokenExchange>
  ): GuestAccessTokenExchange {
    const message = createBaseGuestAccessTokenExchange();
    message.maxDuration = object.maxDuration ?? undefined;
    return message;
  },
};

function createBaseGuestAccessToken(): GuestAccessToken {
  return { direct: undefined, exchange: undefined };
}

export const GuestAccessToken = {
  encode(
    message: GuestAccessToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.direct !== undefined) {
      GuestAccessTokenDirect.encode(
        message.direct,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.exchange !== undefined) {
      GuestAccessTokenExchange.encode(
        message.exchange,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuestAccessToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestAccessToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.direct = GuestAccessTokenDirect.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.exchange = GuestAccessTokenExchange.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestAccessToken {
    return {
      direct: isSet(object.direct)
        ? GuestAccessTokenDirect.fromJSON(object.direct)
        : undefined,
      exchange: isSet(object.exchange)
        ? GuestAccessTokenExchange.fromJSON(object.exchange)
        : undefined,
    };
  },

  toJSON(message: GuestAccessToken): unknown {
    const obj: any = {};
    message.direct !== undefined &&
      (obj.direct = message.direct
        ? GuestAccessTokenDirect.toJSON(message.direct)
        : undefined);
    message.exchange !== undefined &&
      (obj.exchange = message.exchange
        ? GuestAccessTokenExchange.toJSON(message.exchange)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GuestAccessToken>): GuestAccessToken {
    const message = createBaseGuestAccessToken();
    message.direct =
      object.direct !== undefined && object.direct !== null
        ? GuestAccessTokenDirect.fromPartial(object.direct)
        : undefined;
    message.exchange =
      object.exchange !== undefined && object.exchange !== null
        ? GuestAccessTokenExchange.fromPartial(object.exchange)
        : undefined;
    return message;
  },
};

function createBaseCreateGuestAccessTokenRequest(): CreateGuestAccessTokenRequest {
  return {
    collectionId: "",
    projectId: "",
    maxDuration: undefined,
    role: Role.ROLE_UNSPECIFIED,
    token: undefined,
    url: undefined,
  };
}

export const CreateGuestAccessTokenRequest = {
  encode(
    message: CreateGuestAccessTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.maxDuration !== undefined) {
      writer.uint32(24).uint32(message.maxDuration);
    }
    if (message.role !== Role.ROLE_UNSPECIFIED) {
      writer.uint32(32).int32(roleToNumber(message.role));
    }
    if (message.token !== undefined) {
      GuestAccessToken.encode(message.token, writer.uint32(42).fork()).ldelim();
    }
    if (message.url !== undefined) {
      writer.uint32(50).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuestAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.maxDuration = reader.uint32();
          break;
        case 4:
          message.role = roleFromJSON(reader.int32());
          break;
        case 5:
          message.token = GuestAccessToken.decode(reader, reader.uint32());
          break;
        case 6:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuestAccessTokenRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      maxDuration: isSet(object.maxDuration)
        ? Number(object.maxDuration)
        : undefined,
      role: isSet(object.role)
        ? roleFromJSON(object.role)
        : Role.ROLE_UNSPECIFIED,
      token: isSet(object.token)
        ? GuestAccessToken.fromJSON(object.token)
        : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: CreateGuestAccessTokenRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.maxDuration !== undefined &&
      (obj.maxDuration = Math.round(message.maxDuration));
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    message.token !== undefined &&
      (obj.token = message.token
        ? GuestAccessToken.toJSON(message.token)
        : undefined);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuestAccessTokenRequest>
  ): CreateGuestAccessTokenRequest {
    const message = createBaseCreateGuestAccessTokenRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.maxDuration = object.maxDuration ?? undefined;
    message.role = object.role ?? Role.ROLE_UNSPECIFIED;
    message.token =
      object.token !== undefined && object.token !== null
        ? GuestAccessToken.fromPartial(object.token)
        : undefined;
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseCreateGuestAccessTokenResponse(): CreateGuestAccessTokenResponse {
  return { accessToken: "", url: undefined };
}

export const CreateGuestAccessTokenResponse = {
  encode(
    message: CreateGuestAccessTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuestAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuestAccessTokenResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: CreateGuestAccessTokenResponse): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuestAccessTokenResponse>
  ): CreateGuestAccessTokenResponse {
    const message = createBaseCreateGuestAccessTokenResponse();
    message.accessToken = object.accessToken ?? "";
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseCreateWebRtcAccessTokenRequest(): CreateWebRtcAccessTokenRequest {
  return { collectionId: "", projectId: "", displayName: "" };
}

export const CreateWebRtcAccessTokenRequest = {
  encode(
    message: CreateWebRtcAccessTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateWebRtcAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWebRtcAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateWebRtcAccessTokenRequest {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: CreateWebRtcAccessTokenRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateWebRtcAccessTokenRequest>
  ): CreateWebRtcAccessTokenRequest {
    const message = createBaseCreateWebRtcAccessTokenRequest();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseCreateWebRtcAccessTokenResponse(): CreateWebRtcAccessTokenResponse {
  return { webrtcAccess: undefined };
}

export const CreateWebRtcAccessTokenResponse = {
  encode(
    message: CreateWebRtcAccessTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.webrtcAccess !== undefined) {
      WebRtcAccess.encode(
        message.webrtcAccess,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateWebRtcAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWebRtcAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.webrtcAccess = WebRtcAccess.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateWebRtcAccessTokenResponse {
    return {
      webrtcAccess: isSet(object.webrtcAccess)
        ? WebRtcAccess.fromJSON(object.webrtcAccess)
        : undefined,
    };
  },

  toJSON(message: CreateWebRtcAccessTokenResponse): unknown {
    const obj: any = {};
    message.webrtcAccess !== undefined &&
      (obj.webrtcAccess = message.webrtcAccess
        ? WebRtcAccess.toJSON(message.webrtcAccess)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateWebRtcAccessTokenResponse>
  ): CreateWebRtcAccessTokenResponse {
    const message = createBaseCreateWebRtcAccessTokenResponse();
    message.webrtcAccess =
      object.webrtcAccess !== undefined && object.webrtcAccess !== null
        ? WebRtcAccess.fromPartial(object.webrtcAccess)
        : undefined;
    return message;
  },
};

function createBaseRefreshAccessTokenRequest(): RefreshAccessTokenRequest {
  return {};
}

export const RefreshAccessTokenRequest = {
  encode(
    _: RefreshAccessTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefreshAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RefreshAccessTokenRequest {
    return {};
  },

  toJSON(_: RefreshAccessTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<RefreshAccessTokenRequest>
  ): RefreshAccessTokenRequest {
    const message = createBaseRefreshAccessTokenRequest();
    return message;
  },
};

function createBaseRefreshAccessTokenResponse(): RefreshAccessTokenResponse {
  return {};
}

export const RefreshAccessTokenResponse = {
  encode(
    _: RefreshAccessTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefreshAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RefreshAccessTokenResponse {
    return {};
  },

  toJSON(_: RefreshAccessTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<RefreshAccessTokenResponse>
  ): RefreshAccessTokenResponse {
    const message = createBaseRefreshAccessTokenResponse();
    return message;
  },
};

function createBaseGuestCode(): GuestCode {
  return {
    collectionId: "",
    projectId: "",
    code: "",
    url: "",
    autoDelete: undefined,
  };
}

export const GuestCode = {
  encode(
    message: GuestCode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.autoDelete !== undefined) {
      Timestamp.encode(
        toTimestamp(message.autoDelete),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuestCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.autoDelete = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestCode {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      code: isSet(object.code) ? String(object.code) : "",
      url: isSet(object.url) ? String(object.url) : "",
      autoDelete: isSet(object.autoDelete)
        ? String(object.autoDelete)
        : undefined,
    };
  },

  toJSON(message: GuestCode): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.code !== undefined && (obj.code = message.code);
    message.url !== undefined && (obj.url = message.url);
    message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
    return obj;
  },

  fromPartial(object: DeepPartial<GuestCode>): GuestCode {
    const message = createBaseGuestCode();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.code = object.code ?? "";
    message.url = object.url ?? "";
    message.autoDelete = object.autoDelete ?? undefined;
    return message;
  },
};

function createBaseGuestCodeRedirectRequest(): GuestCodeRedirectRequest {
  return { serviceId: "", code: "" };
}

export const GuestCodeRedirectRequest = {
  encode(
    message: GuestCodeRedirectRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuestCodeRedirectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestCodeRedirectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuestCodeRedirectRequest {
    return {
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
      code: isSet(object.code) ? String(object.code) : "",
    };
  },

  toJSON(message: GuestCodeRedirectRequest): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuestCodeRedirectRequest>
  ): GuestCodeRedirectRequest {
    const message = createBaseGuestCodeRedirectRequest();
    message.serviceId = object.serviceId ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseGuestCodeRedirectResponse(): GuestCodeRedirectResponse {
  return {};
}

export const GuestCodeRedirectResponse = {
  encode(
    _: GuestCodeRedirectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuestCodeRedirectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuestCodeRedirectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GuestCodeRedirectResponse {
    return {};
  },

  toJSON(_: GuestCodeRedirectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GuestCodeRedirectResponse>
  ): GuestCodeRedirectResponse {
    const message = createBaseGuestCodeRedirectResponse();
    return message;
  },
};

function createBaseJsonWebKey(): JsonWebKey {
  return { alg: "", kty: "", use: "", kid: "", e: "", n: "" };
}

export const JsonWebKey = {
  encode(
    message: JsonWebKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alg !== "") {
      writer.uint32(10).string(message.alg);
    }
    if (message.kty !== "") {
      writer.uint32(18).string(message.kty);
    }
    if (message.use !== "") {
      writer.uint32(26).string(message.use);
    }
    if (message.kid !== "") {
      writer.uint32(34).string(message.kid);
    }
    if (message.e !== "") {
      writer.uint32(42).string(message.e);
    }
    if (message.n !== "") {
      writer.uint32(50).string(message.n);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JsonWebKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJsonWebKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alg = reader.string();
          break;
        case 2:
          message.kty = reader.string();
          break;
        case 3:
          message.use = reader.string();
          break;
        case 4:
          message.kid = reader.string();
          break;
        case 5:
          message.e = reader.string();
          break;
        case 6:
          message.n = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JsonWebKey {
    return {
      alg: isSet(object.alg) ? String(object.alg) : "",
      kty: isSet(object.kty) ? String(object.kty) : "",
      use: isSet(object.use) ? String(object.use) : "",
      kid: isSet(object.kid) ? String(object.kid) : "",
      e: isSet(object.e) ? String(object.e) : "",
      n: isSet(object.n) ? String(object.n) : "",
    };
  },

  toJSON(message: JsonWebKey): unknown {
    const obj: any = {};
    message.alg !== undefined && (obj.alg = message.alg);
    message.kty !== undefined && (obj.kty = message.kty);
    message.use !== undefined && (obj.use = message.use);
    message.kid !== undefined && (obj.kid = message.kid);
    message.e !== undefined && (obj.e = message.e);
    message.n !== undefined && (obj.n = message.n);
    return obj;
  },

  fromPartial(object: DeepPartial<JsonWebKey>): JsonWebKey {
    const message = createBaseJsonWebKey();
    message.alg = object.alg ?? "";
    message.kty = object.kty ?? "";
    message.use = object.use ?? "";
    message.kid = object.kid ?? "";
    message.e = object.e ?? "";
    message.n = object.n ?? "";
    return message;
  },
};

function createBaseGetJsonWebKeySetRequest(): GetJsonWebKeySetRequest {
  return {};
}

export const GetJsonWebKeySetRequest = {
  encode(
    _: GetJsonWebKeySetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetJsonWebKeySetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJsonWebKeySetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetJsonWebKeySetRequest {
    return {};
  },

  toJSON(_: GetJsonWebKeySetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GetJsonWebKeySetRequest>
  ): GetJsonWebKeySetRequest {
    const message = createBaseGetJsonWebKeySetRequest();
    return message;
  },
};

function createBaseGetJsonWebKeySetResponse(): GetJsonWebKeySetResponse {
  return { keys: [] };
}

export const GetJsonWebKeySetResponse = {
  encode(
    message: GetJsonWebKeySetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keys) {
      JsonWebKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetJsonWebKeySetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJsonWebKeySetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(JsonWebKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJsonWebKeySetResponse {
    return {
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => JsonWebKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetJsonWebKeySetResponse): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) =>
        e ? JsonWebKey.toJSON(e) : undefined
      );
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJsonWebKeySetResponse>
  ): GetJsonWebKeySetResponse {
    const message = createBaseGetJsonWebKeySetResponse();
    message.keys = object.keys?.map((e) => JsonWebKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetTestTokenRequest(): GetTestTokenRequest {
  return {};
}

export const GetTestTokenRequest = {
  encode(
    _: GetTestTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTestTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTestTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetTestTokenRequest {
    return {};
  },

  toJSON(_: GetTestTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetTestTokenRequest>): GetTestTokenRequest {
    const message = createBaseGetTestTokenRequest();
    return message;
  },
};

function createBaseGetTestTokenResponse(): GetTestTokenResponse {
  return { accessToken: "" };
}

export const GetTestTokenResponse = {
  encode(
    message: GetTestTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTestTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTestTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTestTokenResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
    };
  },

  toJSON(message: GetTestTokenResponse): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTestTokenResponse>): GetTestTokenResponse {
    const message = createBaseGetTestTokenResponse();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseDestinationCreateEvent(): DestinationCreateEvent {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    destination: undefined,
  };
}

export const DestinationCreateEvent = {
  encode(
    message: DestinationCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationCreateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      destination: isSet(object.destination)
        ? Destination.fromJSON(object.destination)
        : undefined,
    };
  },

  toJSON(message: DestinationCreateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationCreateEvent>
  ): DestinationCreateEvent {
    const message = createBaseDestinationCreateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    return message;
  },
};

function createBaseDestinationDeleteEvent(): DestinationDeleteEvent {
  return { collectionId: "", projectId: "", destinationId: "" };
}

export const DestinationDeleteEvent = {
  encode(
    message: DestinationDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationDeleteEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationDeleteEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
    };
  },

  toJSON(message: DestinationDeleteEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationDeleteEvent>
  ): DestinationDeleteEvent {
    const message = createBaseDestinationDeleteEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    return message;
  },
};

function createBaseDestinationUpdateEvent(): DestinationUpdateEvent {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    updateMask: [],
    destination: undefined,
  };
}

export const DestinationUpdateEvent = {
  encode(
    message: DestinationUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    for (const v of message.updateMask) {
      writer.uint32(34).string(v!);
    }
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.updateMask.push(reader.string());
          break;
        case 5:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationUpdateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      updateMask: Array.isArray(object?.updateMask)
        ? object.updateMask.map((e: any) => String(e))
        : [],
      destination: isSet(object.destination)
        ? Destination.fromJSON(object.destination)
        : undefined,
    };
  },

  toJSON(message: DestinationUpdateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    if (message.updateMask) {
      obj.updateMask = message.updateMask.map((e) => e);
    } else {
      obj.updateMask = [];
    }
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationUpdateEvent>
  ): DestinationUpdateEvent {
    const message = createBaseDestinationUpdateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.updateMask = object.updateMask?.map((e) => e) || [];
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    return message;
  },
};

function createBaseDestinationStateEvent(): DestinationStateEvent {
  return {
    collectionId: "",
    projectId: "",
    destinationId: "",
    connect: undefined,
  };
}

export const DestinationStateEvent = {
  encode(
    message: DestinationStateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.destinationId !== "") {
      writer.uint32(26).string(message.destinationId);
    }
    if (message.connect !== undefined) {
      writer.uint32(32).int32(connectStateToNumber(message.connect));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DestinationStateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationStateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.destinationId = reader.string();
          break;
        case 4:
          message.connect = connectStateFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationStateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      destinationId: isSet(object.destinationId)
        ? String(object.destinationId)
        : "",
      connect: isSet(object.connect)
        ? connectStateFromJSON(object.connect)
        : undefined,
    };
  },

  toJSON(message: DestinationStateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.destinationId !== undefined &&
      (obj.destinationId = message.destinationId);
    message.connect !== undefined &&
      (obj.connect =
        message.connect !== undefined
          ? connectStateToJSON(message.connect)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DestinationStateEvent>
  ): DestinationStateEvent {
    const message = createBaseDestinationStateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.destinationId = object.destinationId ?? "";
    message.connect = object.connect ?? undefined;
    return message;
  },
};

function createBaseProjectCreateEvent(): ProjectCreateEvent {
  return { collectionId: "", projectId: "", project: undefined };
}

export const ProjectCreateEvent = {
  encode(
    message: ProjectCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectCreateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
    };
  },

  toJSON(message: ProjectCreateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectCreateEvent>): ProjectCreateEvent {
    const message = createBaseProjectCreateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    return message;
  },
};

function createBaseProjectDeleteEvent(): ProjectDeleteEvent {
  return { collectionId: "", projectId: "" };
}

export const ProjectDeleteEvent = {
  encode(
    message: ProjectDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectDeleteEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectDeleteEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: ProjectDeleteEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectDeleteEvent>): ProjectDeleteEvent {
    const message = createBaseProjectDeleteEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseProjectUpdateEvent(): ProjectUpdateEvent {
  return {
    collectionId: "",
    projectId: "",
    updateMask: [],
    project: undefined,
  };
}

export const ProjectUpdateEvent = {
  encode(
    message: ProjectUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    for (const v of message.updateMask) {
      writer.uint32(26).string(v!);
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.updateMask.push(reader.string());
          break;
        case 4:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectUpdateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      updateMask: Array.isArray(object?.updateMask)
        ? object.updateMask.map((e: any) => String(e))
        : [],
      project: isSet(object.project)
        ? Project.fromJSON(object.project)
        : undefined,
    };
  },

  toJSON(message: ProjectUpdateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    if (message.updateMask) {
      obj.updateMask = message.updateMask.map((e) => e);
    } else {
      obj.updateMask = [];
    }
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectUpdateEvent>): ProjectUpdateEvent {
    const message = createBaseProjectUpdateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.updateMask = object.updateMask?.map((e) => e) || [];
    message.project =
      object.project !== undefined && object.project !== null
        ? Project.fromPartial(object.project)
        : undefined;
    return message;
  },
};

function createBaseProjectBroadcastStateEvent(): ProjectBroadcastStateEvent {
  return {
    collectionId: "",
    projectId: "",
    broadcastId: "",
    phase: undefined,
    error: undefined,
  };
}

export const ProjectBroadcastStateEvent = {
  encode(
    message: ProjectBroadcastStateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.broadcastId !== "") {
      writer.uint32(26).string(message.broadcastId);
    }
    if (message.phase !== undefined) {
      writer.uint32(32).int32(projectBroadcastPhaseToNumber(message.phase));
    }
    if (message.error !== undefined) {
      writer.uint32(40).int32(projectBroadcastErrorToNumber(message.error));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectBroadcastStateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectBroadcastStateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.broadcastId = reader.string();
          break;
        case 4:
          message.phase = projectBroadcastPhaseFromJSON(reader.int32());
          break;
        case 5:
          message.error = projectBroadcastErrorFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectBroadcastStateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "",
      phase: isSet(object.phase)
        ? projectBroadcastPhaseFromJSON(object.phase)
        : undefined,
      error: isSet(object.error)
        ? projectBroadcastErrorFromJSON(object.error)
        : undefined,
    };
  },

  toJSON(message: ProjectBroadcastStateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.broadcastId !== undefined &&
      (obj.broadcastId = message.broadcastId);
    message.phase !== undefined &&
      (obj.phase =
        message.phase !== undefined
          ? projectBroadcastPhaseToJSON(message.phase)
          : undefined);
    message.error !== undefined &&
      (obj.error =
        message.error !== undefined
          ? projectBroadcastErrorToJSON(message.error)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectBroadcastStateEvent>
  ): ProjectBroadcastStateEvent {
    const message = createBaseProjectBroadcastStateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.broadcastId = object.broadcastId ?? "";
    message.phase = object.phase ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseCollectionCreateEvent(): CollectionCreateEvent {
  return { collectionId: "", collection: undefined };
}

export const CollectionCreateEvent = {
  encode(
    message: CollectionCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectionCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionCreateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: CollectionCreateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionCreateEvent>
  ): CollectionCreateEvent {
    const message = createBaseCollectionCreateEvent();
    message.collectionId = object.collectionId ?? "";
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseCollectionDeleteEvent(): CollectionDeleteEvent {
  return { collectionId: "" };
}

export const CollectionDeleteEvent = {
  encode(
    message: CollectionDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectionDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionDeleteEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionDeleteEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
    };
  },

  toJSON(message: CollectionDeleteEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionDeleteEvent>
  ): CollectionDeleteEvent {
    const message = createBaseCollectionDeleteEvent();
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

function createBaseCollectionUpdateEvent(): CollectionUpdateEvent {
  return { collectionId: "", updateMask: [], collection: undefined };
}

export const CollectionUpdateEvent = {
  encode(
    message: CollectionUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    for (const v of message.updateMask) {
      writer.uint32(18).string(v!);
    }
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectionUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.updateMask.push(reader.string());
          break;
        case 3:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionUpdateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      updateMask: Array.isArray(object?.updateMask)
        ? object.updateMask.map((e: any) => String(e))
        : [],
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: CollectionUpdateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    if (message.updateMask) {
      obj.updateMask = message.updateMask.map((e) => e);
    } else {
      obj.updateMask = [];
    }
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CollectionUpdateEvent>
  ): CollectionUpdateEvent {
    const message = createBaseCollectionUpdateEvent();
    message.collectionId = object.collectionId ?? "";
    message.updateMask = object.updateMask?.map((e) => e) || [];
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseSourceCreateEvent(): SourceCreateEvent {
  return { collectionId: "", sourceId: "", source: undefined };
}

export const SourceCreateEvent = {
  encode(
    message: SourceCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCreateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceCreateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
    };
  },

  toJSON(message: SourceCreateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceCreateEvent>): SourceCreateEvent {
    const message = createBaseSourceCreateEvent();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBaseSourceDeleteEvent(): SourceDeleteEvent {
  return { collectionId: "", sourceId: "" };
}

export const SourceDeleteEvent = {
  encode(
    message: SourceDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceDeleteEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceDeleteEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
    };
  },

  toJSON(message: SourceDeleteEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceDeleteEvent>): SourceDeleteEvent {
    const message = createBaseSourceDeleteEvent();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    return message;
  },
};

function createBaseSourceUpdateEvent(): SourceUpdateEvent {
  return { collectionId: "", sourceId: "", updateMask: [], source: undefined };
}

export const SourceUpdateEvent = {
  encode(
    message: SourceUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    for (const v of message.updateMask) {
      writer.uint32(26).string(v!);
    }
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceUpdateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.updateMask.push(reader.string());
          break;
        case 4:
          message.source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceUpdateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      updateMask: Array.isArray(object?.updateMask)
        ? object.updateMask.map((e: any) => String(e))
        : [],
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
    };
  },

  toJSON(message: SourceUpdateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    if (message.updateMask) {
      obj.updateMask = message.updateMask.map((e) => e);
    } else {
      obj.updateMask = [];
    }
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceUpdateEvent>): SourceUpdateEvent {
    const message = createBaseSourceUpdateEvent();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.updateMask = object.updateMask?.map((e) => e) || [];
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBaseSourceAddEvent(): SourceAddEvent {
  return { collectionId: "", sourceId: "", projectId: "", source: undefined };
}

export const SourceAddEvent = {
  encode(
    message: SourceAddEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    if (message.source !== undefined) {
      Source.encode(message.source, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceAddEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceAddEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.projectId = reader.string();
          break;
        case 4:
          message.source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceAddEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      source: isSet(object.source) ? Source.fromJSON(object.source) : undefined,
    };
  },

  toJSON(message: SourceAddEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.source !== undefined &&
      (obj.source = message.source ? Source.toJSON(message.source) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceAddEvent>): SourceAddEvent {
    const message = createBaseSourceAddEvent();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.projectId = object.projectId ?? "";
    message.source =
      object.source !== undefined && object.source !== null
        ? Source.fromPartial(object.source)
        : undefined;
    return message;
  },
};

function createBaseSourceRemoveEvent(): SourceRemoveEvent {
  return { collectionId: "", sourceId: "", projectId: "" };
}

export const SourceRemoveEvent = {
  encode(
    message: SourceRemoveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.sourceId !== "") {
      writer.uint32(18).string(message.sourceId);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceRemoveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.sourceId = reader.string();
          break;
        case 3:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceRemoveEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: SourceRemoveEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceRemoveEvent>): SourceRemoveEvent {
    const message = createBaseSourceRemoveEvent();
    message.collectionId = object.collectionId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseSourceStateEvent(): SourceStateEvent {
  return { collectionId: "", projectId: "", sourceId: "", connect: undefined };
}

export const SourceStateEvent = {
  encode(
    message: SourceStateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.sourceId !== "") {
      writer.uint32(26).string(message.sourceId);
    }
    if (message.connect !== undefined) {
      writer.uint32(32).int32(connectStateToNumber(message.connect));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceStateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceStateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.sourceId = reader.string();
          break;
        case 4:
          message.connect = connectStateFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceStateEvent {
    return {
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      sourceId: isSet(object.sourceId) ? String(object.sourceId) : "",
      connect: isSet(object.connect)
        ? connectStateFromJSON(object.connect)
        : undefined,
    };
  },

  toJSON(message: SourceStateEvent): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.sourceId !== undefined && (obj.sourceId = message.sourceId);
    message.connect !== undefined &&
      (obj.connect =
        message.connect !== undefined
          ? connectStateToJSON(message.connect)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceStateEvent>): SourceStateEvent {
    const message = createBaseSourceStateEvent();
    message.collectionId = object.collectionId ?? "";
    message.projectId = object.projectId ?? "";
    message.sourceId = object.sourceId ?? "";
    message.connect = object.connect ?? undefined;
    return message;
  },
};

function createBaseCollectionEvent(): CollectionEvent {
  return { create: undefined, update: undefined, delete: undefined };
}

export const CollectionEvent = {
  encode(
    message: CollectionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.create !== undefined) {
      CollectionCreateEvent.encode(
        message.create,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.update !== undefined) {
      CollectionUpdateEvent.encode(
        message.update,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delete !== undefined) {
      CollectionDeleteEvent.encode(
        message.delete,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = CollectionCreateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.update = CollectionUpdateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.delete = CollectionDeleteEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionEvent {
    return {
      create: isSet(object.create)
        ? CollectionCreateEvent.fromJSON(object.create)
        : undefined,
      update: isSet(object.update)
        ? CollectionUpdateEvent.fromJSON(object.update)
        : undefined,
      delete: isSet(object.delete)
        ? CollectionDeleteEvent.fromJSON(object.delete)
        : undefined,
    };
  },

  toJSON(message: CollectionEvent): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create
        ? CollectionCreateEvent.toJSON(message.create)
        : undefined);
    message.update !== undefined &&
      (obj.update = message.update
        ? CollectionUpdateEvent.toJSON(message.update)
        : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete
        ? CollectionDeleteEvent.toJSON(message.delete)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CollectionEvent>): CollectionEvent {
    const message = createBaseCollectionEvent();
    message.create =
      object.create !== undefined && object.create !== null
        ? CollectionCreateEvent.fromPartial(object.create)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? CollectionUpdateEvent.fromPartial(object.update)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? CollectionDeleteEvent.fromPartial(object.delete)
        : undefined;
    return message;
  },
};

function createBaseDestinationEvent(): DestinationEvent {
  return {
    create: undefined,
    update: undefined,
    delete: undefined,
    state: undefined,
  };
}

export const DestinationEvent = {
  encode(
    message: DestinationEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.create !== undefined) {
      DestinationCreateEvent.encode(
        message.create,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.update !== undefined) {
      DestinationUpdateEvent.encode(
        message.update,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delete !== undefined) {
      DestinationDeleteEvent.encode(
        message.delete,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.state !== undefined) {
      DestinationStateEvent.encode(
        message.state,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestinationEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = DestinationCreateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.update = DestinationUpdateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.delete = DestinationDeleteEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.state = DestinationStateEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestinationEvent {
    return {
      create: isSet(object.create)
        ? DestinationCreateEvent.fromJSON(object.create)
        : undefined,
      update: isSet(object.update)
        ? DestinationUpdateEvent.fromJSON(object.update)
        : undefined,
      delete: isSet(object.delete)
        ? DestinationDeleteEvent.fromJSON(object.delete)
        : undefined,
      state: isSet(object.state)
        ? DestinationStateEvent.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: DestinationEvent): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create
        ? DestinationCreateEvent.toJSON(message.create)
        : undefined);
    message.update !== undefined &&
      (obj.update = message.update
        ? DestinationUpdateEvent.toJSON(message.update)
        : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete
        ? DestinationDeleteEvent.toJSON(message.delete)
        : undefined);
    message.state !== undefined &&
      (obj.state = message.state
        ? DestinationStateEvent.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DestinationEvent>): DestinationEvent {
    const message = createBaseDestinationEvent();
    message.create =
      object.create !== undefined && object.create !== null
        ? DestinationCreateEvent.fromPartial(object.create)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? DestinationUpdateEvent.fromPartial(object.update)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? DestinationDeleteEvent.fromPartial(object.delete)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? DestinationStateEvent.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseProjectEvent(): ProjectEvent {
  return {
    create: undefined,
    update: undefined,
    delete: undefined,
    state: undefined,
  };
}

export const ProjectEvent = {
  encode(
    message: ProjectEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.create !== undefined) {
      ProjectCreateEvent.encode(
        message.create,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.update !== undefined) {
      ProjectUpdateEvent.encode(
        message.update,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delete !== undefined) {
      ProjectDeleteEvent.encode(
        message.delete,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.state !== undefined) {
      ProjectBroadcastStateEvent.encode(
        message.state,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = ProjectCreateEvent.decode(reader, reader.uint32());
          break;
        case 2:
          message.update = ProjectUpdateEvent.decode(reader, reader.uint32());
          break;
        case 3:
          message.delete = ProjectDeleteEvent.decode(reader, reader.uint32());
          break;
        case 4:
          message.state = ProjectBroadcastStateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectEvent {
    return {
      create: isSet(object.create)
        ? ProjectCreateEvent.fromJSON(object.create)
        : undefined,
      update: isSet(object.update)
        ? ProjectUpdateEvent.fromJSON(object.update)
        : undefined,
      delete: isSet(object.delete)
        ? ProjectDeleteEvent.fromJSON(object.delete)
        : undefined,
      state: isSet(object.state)
        ? ProjectBroadcastStateEvent.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: ProjectEvent): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create
        ? ProjectCreateEvent.toJSON(message.create)
        : undefined);
    message.update !== undefined &&
      (obj.update = message.update
        ? ProjectUpdateEvent.toJSON(message.update)
        : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete
        ? ProjectDeleteEvent.toJSON(message.delete)
        : undefined);
    message.state !== undefined &&
      (obj.state = message.state
        ? ProjectBroadcastStateEvent.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectEvent>): ProjectEvent {
    const message = createBaseProjectEvent();
    message.create =
      object.create !== undefined && object.create !== null
        ? ProjectCreateEvent.fromPartial(object.create)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? ProjectUpdateEvent.fromPartial(object.update)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? ProjectDeleteEvent.fromPartial(object.delete)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? ProjectBroadcastStateEvent.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseSourceEvent(): SourceEvent {
  return {
    create: undefined,
    update: undefined,
    delete: undefined,
    add: undefined,
    remove: undefined,
    state: undefined,
  };
}

export const SourceEvent = {
  encode(
    message: SourceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.create !== undefined) {
      SourceCreateEvent.encode(
        message.create,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.update !== undefined) {
      SourceUpdateEvent.encode(
        message.update,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.delete !== undefined) {
      SourceDeleteEvent.encode(
        message.delete,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.add !== undefined) {
      SourceAddEvent.encode(message.add, writer.uint32(34).fork()).ldelim();
    }
    if (message.remove !== undefined) {
      SourceDeleteEvent.encode(
        message.remove,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.state !== undefined) {
      SourceStateEvent.encode(message.state, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = SourceCreateEvent.decode(reader, reader.uint32());
          break;
        case 2:
          message.update = SourceUpdateEvent.decode(reader, reader.uint32());
          break;
        case 3:
          message.delete = SourceDeleteEvent.decode(reader, reader.uint32());
          break;
        case 4:
          message.add = SourceAddEvent.decode(reader, reader.uint32());
          break;
        case 5:
          message.remove = SourceDeleteEvent.decode(reader, reader.uint32());
          break;
        case 6:
          message.state = SourceStateEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceEvent {
    return {
      create: isSet(object.create)
        ? SourceCreateEvent.fromJSON(object.create)
        : undefined,
      update: isSet(object.update)
        ? SourceUpdateEvent.fromJSON(object.update)
        : undefined,
      delete: isSet(object.delete)
        ? SourceDeleteEvent.fromJSON(object.delete)
        : undefined,
      add: isSet(object.add) ? SourceAddEvent.fromJSON(object.add) : undefined,
      remove: isSet(object.remove)
        ? SourceDeleteEvent.fromJSON(object.remove)
        : undefined,
      state: isSet(object.state)
        ? SourceStateEvent.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: SourceEvent): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create
        ? SourceCreateEvent.toJSON(message.create)
        : undefined);
    message.update !== undefined &&
      (obj.update = message.update
        ? SourceUpdateEvent.toJSON(message.update)
        : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete
        ? SourceDeleteEvent.toJSON(message.delete)
        : undefined);
    message.add !== undefined &&
      (obj.add = message.add ? SourceAddEvent.toJSON(message.add) : undefined);
    message.remove !== undefined &&
      (obj.remove = message.remove
        ? SourceDeleteEvent.toJSON(message.remove)
        : undefined);
    message.state !== undefined &&
      (obj.state = message.state
        ? SourceStateEvent.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SourceEvent>): SourceEvent {
    const message = createBaseSourceEvent();
    message.create =
      object.create !== undefined && object.create !== null
        ? SourceCreateEvent.fromPartial(object.create)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? SourceUpdateEvent.fromPartial(object.update)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? SourceDeleteEvent.fromPartial(object.delete)
        : undefined;
    message.add =
      object.add !== undefined && object.add !== null
        ? SourceAddEvent.fromPartial(object.add)
        : undefined;
    message.remove =
      object.remove !== undefined && object.remove !== null
        ? SourceDeleteEvent.fromPartial(object.remove)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? SourceStateEvent.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseLiveEvent(): LiveEvent {
  return {
    collection: undefined,
    destination: undefined,
    project: undefined,
    source: undefined,
    unspecified: undefined,
  };
}

export const LiveEvent = {
  encode(
    message: LiveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      CollectionEvent.encode(
        message.collection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.destination !== undefined) {
      DestinationEvent.encode(
        message.destination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.project !== undefined) {
      ProjectEvent.encode(message.project, writer.uint32(26).fork()).ldelim();
    }
    if (message.source !== undefined) {
      SourceEvent.encode(message.source, writer.uint32(34).fork()).ldelim();
    }
    if (message.unspecified !== undefined) {
      writer.uint32(40).int32(nullValueToNumber(message.unspecified));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = CollectionEvent.decode(reader, reader.uint32());
          break;
        case 2:
          message.destination = DestinationEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.project = ProjectEvent.decode(reader, reader.uint32());
          break;
        case 4:
          message.source = SourceEvent.decode(reader, reader.uint32());
          break;
        case 5:
          message.unspecified = nullValueFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiveEvent {
    return {
      collection: isSet(object.collection)
        ? CollectionEvent.fromJSON(object.collection)
        : undefined,
      destination: isSet(object.destination)
        ? DestinationEvent.fromJSON(object.destination)
        : undefined,
      project: isSet(object.project)
        ? ProjectEvent.fromJSON(object.project)
        : undefined,
      source: isSet(object.source)
        ? SourceEvent.fromJSON(object.source)
        : undefined,
      unspecified: isSet(object.unspecified)
        ? nullValueFromJSON(object.unspecified)
        : undefined,
    };
  },

  toJSON(message: LiveEvent): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? CollectionEvent.toJSON(message.collection)
        : undefined);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? DestinationEvent.toJSON(message.destination)
        : undefined);
    message.project !== undefined &&
      (obj.project = message.project
        ? ProjectEvent.toJSON(message.project)
        : undefined);
    message.source !== undefined &&
      (obj.source = message.source
        ? SourceEvent.toJSON(message.source)
        : undefined);
    message.unspecified !== undefined &&
      (obj.unspecified =
        message.unspecified !== undefined
          ? nullValueToJSON(message.unspecified)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiveEvent>): LiveEvent {
    const message = createBaseLiveEvent();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? CollectionEvent.fromPartial(object.collection)
        : undefined;
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? DestinationEvent.fromPartial(object.destination)
        : undefined;
    message.project =
      object.project !== undefined && object.project !== null
        ? ProjectEvent.fromPartial(object.project)
        : undefined;
    message.source =
      object.source !== undefined && object.source !== null
        ? SourceEvent.fromPartial(object.source)
        : undefined;
    message.unspecified = object.unspecified ?? undefined;
    return message;
  },
};

/**
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 */
export interface CollectionService {
  /**
   * Create Collection
   *
   * Create a new collection of related projects and collection live sources
   */
  CreateCollection(
    request: CreateCollectionRequest
  ): Promise<CreateCollectionResponse>;
  /**
   * Get Collection
   *
   * Get an existing collection of related projects and collection live sources
   */
  GetCollection(request: GetCollectionRequest): Promise<GetCollectionResponse>;
  /**
   * Get Collections
   *
   * Get all collections owned by the user
   */
  GetCollections(
    request: GetCollectionsRequest
  ): Promise<GetCollectionsResponse>;
  /**
   * Update Collection
   *
   * Update select collection document data
   */
  UpdateCollection(
    request: UpdateCollectionRequest
  ): Promise<UpdateCollectionResponse>;
  /**
   * Delete Collection
   *
   * Delete a collection of related projects and collection live sources
   */
  DeleteCollection(
    request: DeleteCollectionRequest
  ): Promise<DeleteCollectionResponse>;
}

export class CollectionServiceClientImpl implements CollectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCollection = this.CreateCollection.bind(this);
    this.GetCollection = this.GetCollection.bind(this);
    this.GetCollections = this.GetCollections.bind(this);
    this.UpdateCollection = this.UpdateCollection.bind(this);
    this.DeleteCollection = this.DeleteCollection.bind(this);
  }
  CreateCollection(
    request: CreateCollectionRequest
  ): Promise<CreateCollectionResponse> {
    const data = CreateCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.CollectionService",
      "CreateCollection",
      data
    );
    return promise.then((data) =>
      CreateCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  GetCollection(request: GetCollectionRequest): Promise<GetCollectionResponse> {
    const data = GetCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.CollectionService",
      "GetCollection",
      data
    );
    return promise.then((data) =>
      GetCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  GetCollections(
    request: GetCollectionsRequest
  ): Promise<GetCollectionsResponse> {
    const data = GetCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.CollectionService",
      "GetCollections",
      data
    );
    return promise.then((data) =>
      GetCollectionsResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateCollection(
    request: UpdateCollectionRequest
  ): Promise<UpdateCollectionResponse> {
    const data = UpdateCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.CollectionService",
      "UpdateCollection",
      data
    );
    return promise.then((data) =>
      UpdateCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteCollection(
    request: DeleteCollectionRequest
  ): Promise<DeleteCollectionResponse> {
    const data = DeleteCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.CollectionService",
      "DeleteCollection",
      data
    );
    return promise.then((data) =>
      DeleteCollectionResponse.decode(new _m0.Reader(data))
    );
  }
}

/**
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 */
export const CollectionServiceDefinition = {
  name: "CollectionService",
  fullName: "live.v21.CollectionService",
  methods: {
    /**
     * Create Collection
     *
     * Create a new collection of related projects and collection live sources
     */
    createCollection: {
      name: "CreateCollection",
      requestType: CreateCollectionRequest,
      requestStream: false,
      responseType: CreateCollectionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Collection
     *
     * Get an existing collection of related projects and collection live sources
     */
    getCollection: {
      name: "GetCollection",
      requestType: GetCollectionRequest,
      requestStream: false,
      responseType: GetCollectionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Collections
     *
     * Get all collections owned by the user
     */
    getCollections: {
      name: "GetCollections",
      requestType: GetCollectionsRequest,
      requestStream: false,
      responseType: GetCollectionsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Update Collection
     *
     * Update select collection document data
     */
    updateCollection: {
      name: "UpdateCollection",
      requestType: UpdateCollectionRequest,
      requestStream: false,
      responseType: UpdateCollectionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Delete Collection
     *
     * Delete a collection of related projects and collection live sources
     */
    deleteCollection: {
      name: "DeleteCollection",
      requestType: DeleteCollectionRequest,
      requestStream: false,
      responseType: DeleteCollectionResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/** The Project Service operates on a Project. */
export interface ProjectService {
  /**
   * Create Project
   *
   * Create a new project
   */
  CreateProject(request: CreateProjectRequest): Promise<CreateProjectResponse>;
  /**
   * Get Project
   *
   * Get an existing project
   */
  GetProject(request: GetProjectRequest): Promise<GetProjectResponse>;
  /**
   * Delete Project
   *
   * Delete a project
   */
  DeleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse>;
  /**
   * Update Project
   *
   * Updates a project
   */
  UpdateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse>;
  /**
   * Start Broadcast
   *
   * Start broadcasting a project
   */
  StartProjectBroadcast(
    request: StartProjectBroadcastRequest
  ): Promise<StartProjectBroadcastResponse>;
  /**
   * Stop Broadcast
   *
   * Stop broadcasting a project
   */
  StopProjectBroadcast(
    request: StopProjectBroadcastRequest
  ): Promise<StopProjectBroadcastResponse>;
  /**
   * Start WebRTC
   *
   * Start WebRTC services
   */
  StartProjectWebRtc(
    request: StartProjectWebRtcRequest
  ): Promise<StartProjectWebRtcResponse>;
  /**
   * Stop WebRTC
   *
   * Stop WebRTC services
   */
  StopProjectWebRtc(
    request: StopProjectWebRtcRequest
  ): Promise<StopProjectWebRtcResponse>;
  /**
   * Get Snapshot
   *
   * Get a snapshot of the current output frame of the broadcast
   */
  GetProjectBroadcastSnapshot(
    request: GetProjectBroadcastSnapshotRequest
  ): Promise<GetProjectBroadcastSnapshotResponse>;
  /**
   * Get Broadcast Status
   *
   * Get the broadcast status of the project
   */
  GetProjectBroadcastStatus(
    request: GetProjectBroadcastStatusRequest
  ): Promise<GetProjectBroadcastStatusResponse>;
}

export class ProjectServiceClientImpl implements ProjectService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateProject = this.CreateProject.bind(this);
    this.GetProject = this.GetProject.bind(this);
    this.DeleteProject = this.DeleteProject.bind(this);
    this.UpdateProject = this.UpdateProject.bind(this);
    this.StartProjectBroadcast = this.StartProjectBroadcast.bind(this);
    this.StopProjectBroadcast = this.StopProjectBroadcast.bind(this);
    this.StartProjectWebRtc = this.StartProjectWebRtc.bind(this);
    this.StopProjectWebRtc = this.StopProjectWebRtc.bind(this);
    this.GetProjectBroadcastSnapshot =
      this.GetProjectBroadcastSnapshot.bind(this);
    this.GetProjectBroadcastStatus = this.GetProjectBroadcastStatus.bind(this);
  }
  CreateProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    const data = CreateProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "CreateProject",
      data
    );
    return promise.then((data) =>
      CreateProjectResponse.decode(new _m0.Reader(data))
    );
  }

  GetProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    const data = GetProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "GetProject",
      data
    );
    return promise.then((data) =>
      GetProjectResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    const data = DeleteProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "DeleteProject",
      data
    );
    return promise.then((data) =>
      DeleteProjectResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    const data = UpdateProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "UpdateProject",
      data
    );
    return promise.then((data) =>
      UpdateProjectResponse.decode(new _m0.Reader(data))
    );
  }

  StartProjectBroadcast(
    request: StartProjectBroadcastRequest
  ): Promise<StartProjectBroadcastResponse> {
    const data = StartProjectBroadcastRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "StartProjectBroadcast",
      data
    );
    return promise.then((data) =>
      StartProjectBroadcastResponse.decode(new _m0.Reader(data))
    );
  }

  StopProjectBroadcast(
    request: StopProjectBroadcastRequest
  ): Promise<StopProjectBroadcastResponse> {
    const data = StopProjectBroadcastRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "StopProjectBroadcast",
      data
    );
    return promise.then((data) =>
      StopProjectBroadcastResponse.decode(new _m0.Reader(data))
    );
  }

  StartProjectWebRtc(
    request: StartProjectWebRtcRequest
  ): Promise<StartProjectWebRtcResponse> {
    const data = StartProjectWebRtcRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "StartProjectWebRtc",
      data
    );
    return promise.then((data) =>
      StartProjectWebRtcResponse.decode(new _m0.Reader(data))
    );
  }

  StopProjectWebRtc(
    request: StopProjectWebRtcRequest
  ): Promise<StopProjectWebRtcResponse> {
    const data = StopProjectWebRtcRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "StopProjectWebRtc",
      data
    );
    return promise.then((data) =>
      StopProjectWebRtcResponse.decode(new _m0.Reader(data))
    );
  }

  GetProjectBroadcastSnapshot(
    request: GetProjectBroadcastSnapshotRequest
  ): Promise<GetProjectBroadcastSnapshotResponse> {
    const data = GetProjectBroadcastSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "GetProjectBroadcastSnapshot",
      data
    );
    return promise.then((data) =>
      GetProjectBroadcastSnapshotResponse.decode(new _m0.Reader(data))
    );
  }

  GetProjectBroadcastStatus(
    request: GetProjectBroadcastStatusRequest
  ): Promise<GetProjectBroadcastStatusResponse> {
    const data = GetProjectBroadcastStatusRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.ProjectService",
      "GetProjectBroadcastStatus",
      data
    );
    return promise.then((data) =>
      GetProjectBroadcastStatusResponse.decode(new _m0.Reader(data))
    );
  }
}

/** The Project Service operates on a Project. */
export const ProjectServiceDefinition = {
  name: "ProjectService",
  fullName: "live.v21.ProjectService",
  methods: {
    /**
     * Create Project
     *
     * Create a new project
     */
    createProject: {
      name: "CreateProject",
      requestType: CreateProjectRequest,
      requestStream: false,
      responseType: CreateProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Project
     *
     * Get an existing project
     */
    getProject: {
      name: "GetProject",
      requestType: GetProjectRequest,
      requestStream: false,
      responseType: GetProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Delete Project
     *
     * Delete a project
     */
    deleteProject: {
      name: "DeleteProject",
      requestType: DeleteProjectRequest,
      requestStream: false,
      responseType: DeleteProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Update Project
     *
     * Updates a project
     */
    updateProject: {
      name: "UpdateProject",
      requestType: UpdateProjectRequest,
      requestStream: false,
      responseType: UpdateProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Start Broadcast
     *
     * Start broadcasting a project
     */
    startProjectBroadcast: {
      name: "StartProjectBroadcast",
      requestType: StartProjectBroadcastRequest,
      requestStream: false,
      responseType: StartProjectBroadcastResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Stop Broadcast
     *
     * Stop broadcasting a project
     */
    stopProjectBroadcast: {
      name: "StopProjectBroadcast",
      requestType: StopProjectBroadcastRequest,
      requestStream: false,
      responseType: StopProjectBroadcastResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Start WebRTC
     *
     * Start WebRTC services
     */
    startProjectWebRtc: {
      name: "StartProjectWebRtc",
      requestType: StartProjectWebRtcRequest,
      requestStream: false,
      responseType: StartProjectWebRtcResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Stop WebRTC
     *
     * Stop WebRTC services
     */
    stopProjectWebRtc: {
      name: "StopProjectWebRtc",
      requestType: StopProjectWebRtcRequest,
      requestStream: false,
      responseType: StopProjectWebRtcResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Snapshot
     *
     * Get a snapshot of the current output frame of the broadcast
     */
    getProjectBroadcastSnapshot: {
      name: "GetProjectBroadcastSnapshot",
      requestType: GetProjectBroadcastSnapshotRequest,
      requestStream: false,
      responseType: GetProjectBroadcastSnapshotResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Broadcast Status
     *
     * Get the broadcast status of the project
     */
    getProjectBroadcastStatus: {
      name: "GetProjectBroadcastStatus",
      requestType: GetProjectBroadcastStatusRequest,
      requestStream: false,
      responseType: GetProjectBroadcastStatusResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/**
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 */
export interface DestinationService {
  /**
   * Create Destination
   *
   * Create a new Destination
   */
  CreateDestination(
    request: CreateDestinationRequest
  ): Promise<CreateDestinationResponse>;
  /**
   * Get Destination
   *
   * Get an existing Destination.
   */
  GetDestination(
    request: GetDestinationRequest
  ): Promise<GetDestinationResponse>;
  /**
   * Update Destination
   *
   * Update a destination
   */
  UpdateDestination(
    request: UpdateDestinationRequest
  ): Promise<UpdateDestinationResponse>;
  /**
   * Delete Destination
   *
   * Delete a destination
   */
  DeleteDestination(
    request: DeleteDestinationRequest
  ): Promise<DeleteDestinationResponse>;
}

export class DestinationServiceClientImpl implements DestinationService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDestination = this.CreateDestination.bind(this);
    this.GetDestination = this.GetDestination.bind(this);
    this.UpdateDestination = this.UpdateDestination.bind(this);
    this.DeleteDestination = this.DeleteDestination.bind(this);
  }
  CreateDestination(
    request: CreateDestinationRequest
  ): Promise<CreateDestinationResponse> {
    const data = CreateDestinationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.DestinationService",
      "CreateDestination",
      data
    );
    return promise.then((data) =>
      CreateDestinationResponse.decode(new _m0.Reader(data))
    );
  }

  GetDestination(
    request: GetDestinationRequest
  ): Promise<GetDestinationResponse> {
    const data = GetDestinationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.DestinationService",
      "GetDestination",
      data
    );
    return promise.then((data) =>
      GetDestinationResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateDestination(
    request: UpdateDestinationRequest
  ): Promise<UpdateDestinationResponse> {
    const data = UpdateDestinationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.DestinationService",
      "UpdateDestination",
      data
    );
    return promise.then((data) =>
      UpdateDestinationResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteDestination(
    request: DeleteDestinationRequest
  ): Promise<DeleteDestinationResponse> {
    const data = DeleteDestinationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.DestinationService",
      "DeleteDestination",
      data
    );
    return promise.then((data) =>
      DeleteDestinationResponse.decode(new _m0.Reader(data))
    );
  }
}

/**
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 */
export const DestinationServiceDefinition = {
  name: "DestinationService",
  fullName: "live.v21.DestinationService",
  methods: {
    /**
     * Create Destination
     *
     * Create a new Destination
     */
    createDestination: {
      name: "CreateDestination",
      requestType: CreateDestinationRequest,
      requestStream: false,
      responseType: CreateDestinationResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Destination
     *
     * Get an existing Destination.
     */
    getDestination: {
      name: "GetDestination",
      requestType: GetDestinationRequest,
      requestStream: false,
      responseType: GetDestinationResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Update Destination
     *
     * Update a destination
     */
    updateDestination: {
      name: "UpdateDestination",
      requestType: UpdateDestinationRequest,
      requestStream: false,
      responseType: UpdateDestinationResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Delete Destination
     *
     * Delete a destination
     */
    deleteDestination: {
      name: "DeleteDestination",
      requestType: DeleteDestinationRequest,
      requestStream: false,
      responseType: DeleteDestinationResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/** The Source Service operates on Collection Live Sources and Project Sources. */
export interface SourceService {
  /**
   * Create Collection Live Source
   *
   * Create a new live source in a collection
   * ### Permissions
   * * scope: `SCOPE_VAPI_CREATE`
   */
  CreateSource(request: CreateSourceRequest): Promise<CreateSourceResponse>;
  /**
   * Delete Live Source
   *
   * Deletes a live source from a collection
   */
  DeleteSource(request: DeleteSourceRequest): Promise<DeleteSourceResponse>;
  /**
   * Update Source
   *
   * Update attributes of the Source.
   */
  UpdateSource(request: UpdateSourceRequest): Promise<UpdateSourceResponse>;
  /**
   * Update Source
   *
   * Update attributes of the Source.
   */
  UpdateSourceInProject(
    request: UpdateSourceInProjectRequest
  ): Promise<UpdateSourceInProjectResponse>;
  /**
   * Get Source
   *
   * Get an existing source in a project
   */
  GetSource(request: GetSourceRequest): Promise<GetSourceResponse>;
  /**
   * Get Source
   *
   * Get existing sources in a collection
   */
  GetSources(request: GetSourcesRequest): Promise<GetSourcesResponse>;
  /**
   * Add Source to Project
   *
   * Add a source to a project
   */
  AddSourceToProject(
    request: AddSourceToProjectRequest
  ): Promise<AddSourceToProjectResponse>;
  /**
   * Delete Source From Project
   *
   * Removes a source from a project.
   */
  RemoveSourceFromProject(
    request: RemoveSourceFromProjectRequest
  ): Promise<RemoveSourceFromProjectResponse>;
}

export class SourceServiceClientImpl implements SourceService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSource = this.CreateSource.bind(this);
    this.DeleteSource = this.DeleteSource.bind(this);
    this.UpdateSource = this.UpdateSource.bind(this);
    this.UpdateSourceInProject = this.UpdateSourceInProject.bind(this);
    this.GetSource = this.GetSource.bind(this);
    this.GetSources = this.GetSources.bind(this);
    this.AddSourceToProject = this.AddSourceToProject.bind(this);
    this.RemoveSourceFromProject = this.RemoveSourceFromProject.bind(this);
  }
  CreateSource(request: CreateSourceRequest): Promise<CreateSourceResponse> {
    const data = CreateSourceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "CreateSource",
      data
    );
    return promise.then((data) =>
      CreateSourceResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteSource(request: DeleteSourceRequest): Promise<DeleteSourceResponse> {
    const data = DeleteSourceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "DeleteSource",
      data
    );
    return promise.then((data) =>
      DeleteSourceResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateSource(request: UpdateSourceRequest): Promise<UpdateSourceResponse> {
    const data = UpdateSourceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "UpdateSource",
      data
    );
    return promise.then((data) =>
      UpdateSourceResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateSourceInProject(
    request: UpdateSourceInProjectRequest
  ): Promise<UpdateSourceInProjectResponse> {
    const data = UpdateSourceInProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "UpdateSourceInProject",
      data
    );
    return promise.then((data) =>
      UpdateSourceInProjectResponse.decode(new _m0.Reader(data))
    );
  }

  GetSource(request: GetSourceRequest): Promise<GetSourceResponse> {
    const data = GetSourceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "GetSource",
      data
    );
    return promise.then((data) =>
      GetSourceResponse.decode(new _m0.Reader(data))
    );
  }

  GetSources(request: GetSourcesRequest): Promise<GetSourcesResponse> {
    const data = GetSourcesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "GetSources",
      data
    );
    return promise.then((data) =>
      GetSourcesResponse.decode(new _m0.Reader(data))
    );
  }

  AddSourceToProject(
    request: AddSourceToProjectRequest
  ): Promise<AddSourceToProjectResponse> {
    const data = AddSourceToProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "AddSourceToProject",
      data
    );
    return promise.then((data) =>
      AddSourceToProjectResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveSourceFromProject(
    request: RemoveSourceFromProjectRequest
  ): Promise<RemoveSourceFromProjectResponse> {
    const data = RemoveSourceFromProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.SourceService",
      "RemoveSourceFromProject",
      data
    );
    return promise.then((data) =>
      RemoveSourceFromProjectResponse.decode(new _m0.Reader(data))
    );
  }
}

/** The Source Service operates on Collection Live Sources and Project Sources. */
export const SourceServiceDefinition = {
  name: "SourceService",
  fullName: "live.v21.SourceService",
  methods: {
    /**
     * Create Collection Live Source
     *
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     */
    createSource: {
      name: "CreateSource",
      requestType: CreateSourceRequest,
      requestStream: false,
      responseType: CreateSourceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Delete Live Source
     *
     * Deletes a live source from a collection
     */
    deleteSource: {
      name: "DeleteSource",
      requestType: DeleteSourceRequest,
      requestStream: false,
      responseType: DeleteSourceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Update Source
     *
     * Update attributes of the Source.
     */
    updateSource: {
      name: "UpdateSource",
      requestType: UpdateSourceRequest,
      requestStream: false,
      responseType: UpdateSourceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Update Source
     *
     * Update attributes of the Source.
     */
    updateSourceInProject: {
      name: "UpdateSourceInProject",
      requestType: UpdateSourceInProjectRequest,
      requestStream: false,
      responseType: UpdateSourceInProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Source
     *
     * Get an existing source in a project
     */
    getSource: {
      name: "GetSource",
      requestType: GetSourceRequest,
      requestStream: false,
      responseType: GetSourceResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get Source
     *
     * Get existing sources in a collection
     */
    getSources: {
      name: "GetSources",
      requestType: GetSourcesRequest,
      requestStream: false,
      responseType: GetSourcesResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Add Source to Project
     *
     * Add a source to a project
     */
    addSourceToProject: {
      name: "AddSourceToProject",
      requestType: AddSourceToProjectRequest,
      requestStream: false,
      responseType: AddSourceToProjectResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Delete Source From Project
     *
     * Removes a source from a project.
     */
    removeSourceFromProject: {
      name: "RemoveSourceFromProject",
      requestType: RemoveSourceFromProjectRequest,
      requestStream: false,
      responseType: RemoveSourceFromProjectResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/**
 * The Backend Authentication Service provides token services for partner
 * backend systems
 */
export interface BackendAuthenticationService {
  /**
   * Create Access Token
   *
   * Create an access token for a session host
   */
  CreateAccessToken(
    request: CreateAccessTokenRequest
  ): Promise<CreateAccessTokenResponse>;
}

export class BackendAuthenticationServiceClientImpl
  implements BackendAuthenticationService
{
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAccessToken = this.CreateAccessToken.bind(this);
  }
  CreateAccessToken(
    request: CreateAccessTokenRequest
  ): Promise<CreateAccessTokenResponse> {
    const data = CreateAccessTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.BackendAuthenticationService",
      "CreateAccessToken",
      data
    );
    return promise.then((data) =>
      CreateAccessTokenResponse.decode(new _m0.Reader(data))
    );
  }
}

/**
 * The Backend Authentication Service provides token services for partner
 * backend systems
 */
export const BackendAuthenticationServiceDefinition = {
  name: "BackendAuthenticationService",
  fullName: "live.v21.BackendAuthenticationService",
  methods: {
    /**
     * Create Access Token
     *
     * Create an access token for a session host
     */
    createAccessToken: {
      name: "CreateAccessToken",
      requestType: CreateAccessTokenRequest,
      requestStream: false,
      responseType: CreateAccessTokenResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/** The Authentication Service provides token services for clients */
export interface AuthenticationService {
  /**
   * Create Guest Access Token
   *
   * Create an access token for a guest
   */
  CreateGuestAccessToken(
    request: CreateGuestAccessTokenRequest
  ): Promise<CreateGuestAccessTokenResponse>;
  /**
   * Refresh Access Token
   *
   * Forcibly refresh an access token prior to expiration
   */
  RefreshAccessToken(
    request: RefreshAccessTokenRequest
  ): Promise<RefreshAccessTokenResponse>;
  /**
   * Create WebRTC Access Token
   *
   * Create a WebRTC Access Token
   */
  CreateWebRtcAccessToken(
    request: CreateWebRtcAccessTokenRequest
  ): Promise<CreateWebRtcAccessTokenResponse>;
}

export class AuthenticationServiceClientImpl implements AuthenticationService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGuestAccessToken = this.CreateGuestAccessToken.bind(this);
    this.RefreshAccessToken = this.RefreshAccessToken.bind(this);
    this.CreateWebRtcAccessToken = this.CreateWebRtcAccessToken.bind(this);
  }
  CreateGuestAccessToken(
    request: CreateGuestAccessTokenRequest
  ): Promise<CreateGuestAccessTokenResponse> {
    const data = CreateGuestAccessTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.AuthenticationService",
      "CreateGuestAccessToken",
      data
    );
    return promise.then((data) =>
      CreateGuestAccessTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RefreshAccessToken(
    request: RefreshAccessTokenRequest
  ): Promise<RefreshAccessTokenResponse> {
    const data = RefreshAccessTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.AuthenticationService",
      "RefreshAccessToken",
      data
    );
    return promise.then((data) =>
      RefreshAccessTokenResponse.decode(new _m0.Reader(data))
    );
  }

  CreateWebRtcAccessToken(
    request: CreateWebRtcAccessTokenRequest
  ): Promise<CreateWebRtcAccessTokenResponse> {
    const data = CreateWebRtcAccessTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.AuthenticationService",
      "CreateWebRtcAccessToken",
      data
    );
    return promise.then((data) =>
      CreateWebRtcAccessTokenResponse.decode(new _m0.Reader(data))
    );
  }
}

/** The Authentication Service provides token services for clients */
export const AuthenticationServiceDefinition = {
  name: "AuthenticationService",
  fullName: "live.v21.AuthenticationService",
  methods: {
    /**
     * Create Guest Access Token
     *
     * Create an access token for a guest
     */
    createGuestAccessToken: {
      name: "CreateGuestAccessToken",
      requestType: CreateGuestAccessTokenRequest,
      requestStream: false,
      responseType: CreateGuestAccessTokenResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Refresh Access Token
     *
     * Forcibly refresh an access token prior to expiration
     */
    refreshAccessToken: {
      name: "RefreshAccessToken",
      requestType: RefreshAccessTokenRequest,
      requestStream: false,
      responseType: RefreshAccessTokenResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Create WebRTC Access Token
     *
     * Create a WebRTC Access Token
     */
    createWebRtcAccessToken: {
      name: "CreateWebRtcAccessToken",
      requestType: CreateWebRtcAccessTokenRequest,
      requestStream: false,
      responseType: CreateWebRtcAccessTokenResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

/** The Public Authentication Service provides token verification services */
export interface PublicAuthenticationService {
  /**
   * Get Public Keys
   *
   * Get public keys used to sign access tokens
   */
  GetJsonWebKeySet(
    request: GetJsonWebKeySetRequest
  ): Promise<GetJsonWebKeySetResponse>;
  /**
   * Exchange Guest Access Token
   *
   * Exchange a guest access token with updated user identifiers
   */
  GuestCodeRedirect(
    request: GuestCodeRedirectRequest
  ): Promise<GuestCodeRedirectResponse>;
}

export class PublicAuthenticationServiceClientImpl
  implements PublicAuthenticationService
{
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetJsonWebKeySet = this.GetJsonWebKeySet.bind(this);
    this.GuestCodeRedirect = this.GuestCodeRedirect.bind(this);
  }
  GetJsonWebKeySet(
    request: GetJsonWebKeySetRequest
  ): Promise<GetJsonWebKeySetResponse> {
    const data = GetJsonWebKeySetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.PublicAuthenticationService",
      "GetJsonWebKeySet",
      data
    );
    return promise.then((data) =>
      GetJsonWebKeySetResponse.decode(new _m0.Reader(data))
    );
  }

  GuestCodeRedirect(
    request: GuestCodeRedirectRequest
  ): Promise<GuestCodeRedirectResponse> {
    const data = GuestCodeRedirectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "live.v21.PublicAuthenticationService",
      "GuestCodeRedirect",
      data
    );
    return promise.then((data) =>
      GuestCodeRedirectResponse.decode(new _m0.Reader(data))
    );
  }
}

/** The Public Authentication Service provides token verification services */
export const PublicAuthenticationServiceDefinition = {
  name: "PublicAuthenticationService",
  fullName: "live.v21.PublicAuthenticationService",
  methods: {
    /**
     * Get Public Keys
     *
     * Get public keys used to sign access tokens
     */
    getJsonWebKeySet: {
      name: "GetJsonWebKeySet",
      requestType: GetJsonWebKeySetRequest,
      requestStream: false,
      responseType: GetJsonWebKeySetResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Exchange Guest Access Token
     *
     * Exchange a guest access token with updated user identifiers
     */
    guestCodeRedirect: {
      name: "GuestCodeRedirect",
      requestType: GuestCodeRedirectRequest,
      requestStream: false,
      responseType: GuestCodeRedirectResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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

function toTimestamp(dateStr: string): Timestamp {
  const date = new Date(dateStr);
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis).toISOString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
