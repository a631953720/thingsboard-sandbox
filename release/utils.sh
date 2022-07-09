#!/bin/bash

# colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
green='\033[0;32m'
RESET_COLOR='\033[0m'

function red_printf() {
  printf "${RED}${1}${RESET_COLOR}\n"
}

function yellow_printf() {
  printf "${YELLOW}${1}${RESET_COLOR}\n"
}

function green_printf() {
  printf "${green}${1}${RESET_COLOR}\n"
}

# reference: https://gist.github.com/mihow/9c7f559807069a03e302605691f85572?permalink_comment_id=4216723#gistcomment-4216723
function load_dot_env() {
  yellow_printf "------ read env start ------"
  while read -r LINE; do
    # can ignore 
    if [[ $LINE == *'='* ]] && [[ $LINE != '#'* ]]; then
      ENV_VAR="$(echo $LINE | envsubst)"
      # "declare -g" to export to global attributes, otherwise these attributes only available in this function scope
      eval "declare -g $ENV_VAR"
      echo $LINE
    fi
  done < $1
  yellow_printf "------ read env end ------"
}

# will read the file line by line
# only can get string, number, and boolean
# only return the first result
function find_json_value() {
  while read -r LINE; do
    # can ignore 
    if [[ $LINE == *$2* ]]; then
      FIND_VALUE=$LINE
      CUT_VALUE=${FIND_VALUE#*:}
      REAULT=${CUT_VALUE//["$,"]}
      break
    fi
  done < $1
  echo $REAULT
}

# this function case only for this project situation
function rewrite_config_file() {
  target_file=$1
  new_file=$2
  # make sure the file is empty
  echo '' > $new_file
  while read -r LINE; do
    if [[ $LINE == *production* ]];
    then
      echo '"production": true' >> $new_file
    else
      echo $LINE >> $new_file
    fi

  done < $target_file
}
