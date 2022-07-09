#!/bin/bash
source ./utils.sh

config="../config.json"
copy_config="../config.origin.json"

yellow_printf "rename origin config.json"
mv ${config} ${copy_config}

# make sure that the production flag is 'true'
# it can don't need to modify the config file every drone deploy
yellow_printf "rewrite the config file to production"
rewrite_config_file ${copy_config} ${config}
green_printf "convert the 'production' flag to 'true'"
