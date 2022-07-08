#!/bin/bash
source ./utils.sh
source ./init.sh

yellow_printf "cd to the root folder"
cd ../

yellow_printf "remove output folder"
rm -rf "${OUTPUT_FOLDER}" && green_printf "remove success"

yellow_printf "build the docker image"
docker build -t "${IMAGE_NAME}:${DEPLOY_VERSION}" ./

yellow_printf "output the docker image"
mkdir "${OUTPUT_FOLDER}"
docker save -o "${OUTPUT_IMAGE_FILE_NAME}" "${IMAGE_NAME}:${DEPLOY_VERSION}"
