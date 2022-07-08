#!/bin/bash
source ./utils.sh
source ./init.sh

yellow_printf "cd to the root folder"
cd ../

yellow_printf "try to docker load image"

docker load -i "${OUTPUT_IMAGE_FILE_NAME}" && \
green_printf "load image success" || \
exit 1

yellow_printf "remove docker container"
docker rm -f ${CONTAINER_NAME}
  
yellow_printf "docker run the image"
docker run -d -p ${DEPLOY_PORT}:${SERVER_LISTEN} --name "${CONTAINER_NAME}" ${IMAGE_NAME}:${DEPLOY_VERSION}


yellow_printf "docker logs follow"
docker logs -f ${CONTAINER_NAME}