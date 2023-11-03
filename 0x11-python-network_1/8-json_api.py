#!/usr/bin/python3
"""
Write a Python script that takes in a URL, sends a
request to the URL and displays the body of the response.
"""
import requests
import sys

if __name__ == "__main__":
    url = "http://0.0.0.0:5000/search_user"
    if len(sys.argv) == 2:
        values = {'q': sys.argv[1]}
    else:
        values = {'q': ""}
    req = requests.post(url, values)
    try:
        if (len(req.json()) > 0):
            print('[{}] {}'.format(req.json()['id'], req.json()['name']))
        else:
            print("No result")
    except:
        print("Not a valid JSON")
