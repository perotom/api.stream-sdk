# ---------------------------------------------------------------------------------------------
# Copyright (c) Infiniscene, Inc. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for license information.
# ---------------------------------------------------------------------------------------------

#LIGHTSTREAM_PROTO_ROOT=$PWD/../../lightstream/lightstream/proto
#cp -r $LIGHTSTREAM_PROTO_ROOT/idl/* $PWD/deps/proto/idl/

rm -rf $PWD/deps/proto/idl/apis/*
rm -rf $PWD/deps/proto/idl/live/*
rm -rf $PWD/deps/proto/idl/common/*

mkdir -p $PWD/deps/proto/idl/apis/layout/v2
curl -o $PWD/deps/proto/idl/apis/layout/v2/api.proto https://live.stream.horse/layout/v2/api.proto
mkdir -p $PWD/deps/proto/idl/apis/event/v2
curl -o $PWD/deps/proto/idl/apis/event/v2/api.proto https://live.stream.horse/event/v2/api.proto
mkdir -p $PWD/deps/proto/idl/live/v21
curl -o $PWD/deps/proto/idl/live/v21/api.proto https://live.stream.horse/live/v2/proto/live/v21/api.proto
mkdir -p $PWD/deps/proto/idl/common/v21
curl -o $PWD/deps/proto/idl/common/v21/ext.proto https://live.stream.horse/live/v2/proto/common/v21/ext.proto

# TS
OUTPUT_DIR=$PWD/sdk/js/src/liveapi/proto/ts
docker run -v $OUTPUT_DIR:/workspace/generated/nodejs -v $PWD/deps/proto:/workspace/proto inf1lightstreameus2.azurecr.io/lsproto -b "true"
rm -rf $OUTPUT_DIR/platform
rm -rf $OUTPUT_DIR/service
rm -rf $OUTPUT_DIR/account
rm -rf $OUTPUT_DIR/demo
rm -rf $OUTPUT_DIR/chargebee
rm -rf $OUTPUT_DIR/protoc-gen-openapiv2
rm -rf $OUTPUT_DIR/security

# JAVA
OUTPUT_DIR=$PWD/sdk/java/src/proto
docker run -v $OUTPUT_DIR:/workspace/generated/java -v $PWD/deps/proto:/workspace/proto inf1lightstreameus2.azurecr.io/lsproto -j "true"
rm -rf $OUTPUT_DIR/platform
rm -rf $OUTPUT_DIR/service
rm -rf $OUTPUT_DIR/account
rm -rf $OUTPUT_DIR/demo
rm -rf $OUTPUT_DIR/chargebee
rm -rf $OUTPUT_DIR/protoc-gen-openapiv2
rm -rf $OUTPUT_DIR/security
rm -rf $OUTPUT_DIR/audit

npx license-check-and-add add -f build/license-header.json