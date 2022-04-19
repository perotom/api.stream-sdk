# ---------------------------------------------------------------------------------------------
# Copyright (c) Infiniscene, Inc. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for license information.
# ---------------------------------------------------------------------------------------------
# TS
LIGHTSTREAM_PROTO_ROOT=$PWD/../../lightstream/lightstream/proto
OUTPUT_DIR=$PWD/sdk/js/src/liveapi/proto/ts
docker run -v $OUTPUT_DIR:/workspace/generated/nodejs -v $LIGHTSTREAM_PROTO_ROOT:/workspace/proto inf1lightstreameus2.azurecr.io/lsproto -b "true"
rm -rf $OUTPUT_DIR/platform
rm -rf $OUTPUT_DIR/service
rm -rf $OUTPUT_DIR/account
rm -rf $OUTPUT_DIR/chargebee
rm -rf $OUTPUT_DIR/protoc-gen-openapiv2
rm -rf $OUTPUT_DIR/security

# JAVA
# LIGHTSTREAM_PROTO_ROOT=$PWD/../../lightstream/lightstream/proto
# OUTPUT_DIR=$PWD/sdk/java/src/proto
# docker run -v $OUTPUT_DIR:/workspace/generated/java -v $LIGHTSTREAM_PROTO_ROOT:/workspace/proto inf1lightstreameus2.azurecr.io/lsproto -j "true"
# rm -rf $OUTPUT_DIR/account
# rm -rf $OUTPUT_DIR/chargebee
# rm -rf $OUTPUT_DIR/platform
# rm -rf $OUTPUT_DIR/service
# rm -rf $OUTPUT_DIR/protoc-gen-openapiv2

npx license-check-and-add add -f build/license-header.json