#!/bin/bash
# Write a Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response. FYI: -s = Don't show download progress, -o /dev/null = don't display the body, -w "%{http_code}" = Write http response code to stdout after exit.
curl -s -o /dev/null -w "%{http_code}" "$1"
