#!/bin/bash
source ./utils.sh
load_dot_env ./.env

# replace the origin variable
declare -g OUTPUT_FOLDER="project_${OUTPUT_FOLDER}"
declare -g OUTPUT_IMAGE_FILE_NAME="${OUTPUT_FOLDER}/${OUTPUT_IMAGE_FILE_NAME}.tar"
# declare -g SERVER_PORT=$(find_json_value ../config.json port)

green_printf "deploy version: $(yellow_printf ${DEPLOY_VERSION})"
green_printf "deploy port: $(yellow_printf ${DEPLOY_PORT})"
green_printf "output folder: $(yellow_printf ${OUTPUT_FOLDER})"
green_printf "docker image tag: $(yellow_printf ${IMAGE_NAME}:${DEPLOY_VERSION})"
green_printf "docker image file path: $(yellow_printf ${OUTPUT_IMAGE_FILE_NAME})"
green_printf "docker container name: $(yellow_printf ${CONTAINER_NAME})"
green_printf "server listen port: $(yellow_printf ${SERVER_LISTEN})"
