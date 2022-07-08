#!/bin/bash
source ./utils.sh
load_dot_env ./.env

# replace the origin variable
declare -g OUTPUT_FOLDER="project_${OUTPUT_FOLDER}"
declare -g OUTPUT_IMAGE_FILE_NAME="${OUTPUT_FOLDER}/${OUTPUT_IMAGE_FILE_NAME}.tar"
declare -g PRODUCTION=$(find_json_value ../config.json production)
declare DEV_HOST=$(find_json_value ../config.json dev_host)
declare PRODUCT_HOST=$(find_json_value ../config.json product_host)

green_printf "production: $(yellow_printf ${PRODUCTION})"
green_printf "dev_host: $(yellow_printf ${DEV_HOST})"
green_printf "product_host: $(yellow_printf ${PRODUCT_HOST})"
green_printf "deploy version: $(yellow_printf ${DEPLOY_VERSION})"
green_printf "deploy port: $(yellow_printf ${DEPLOY_PORT})"
green_printf "output folder: $(yellow_printf ${OUTPUT_FOLDER})"
green_printf "docker image tag: $(yellow_printf ${IMAGE_NAME}:${DEPLOY_VERSION})"
green_printf "docker image file path: $(yellow_printf ${OUTPUT_IMAGE_FILE_NAME})"
green_printf "docker container name: $(yellow_printf ${CONTAINER_NAME})"
green_printf "server listen port: $(yellow_printf ${SERVER_LISTEN})"
