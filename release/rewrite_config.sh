#!/bin/bash
source ./utils.sh

config="../config.json"
copy_config="../config.origin.json"

yellow_printf "rename origin config.json"
mv ${config} ${copy_config}

yellow_printf "rewrite the config file to production"
rewrite_config_file ${copy_config} ${config}
green_printf "convert the 'production' flag to 'true'"
