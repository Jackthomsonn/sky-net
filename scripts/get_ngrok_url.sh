#!/bin/bash
# get_ngrok_url.sh

echo $(curl -s $(docker port skynet_ngrok 4040)/api/tunnels | grep -P "http://.*?ngrok.io" -oh)