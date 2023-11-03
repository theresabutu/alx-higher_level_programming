#!/usr/bin/python3
"""
Write a Python script that takes in a URL, sends a
request to the URL and displays the body of the response
 (decoded in utf-8).
"""
import urllib.request
import urllib.error
import urllib.parse
import sys

if __name__ == "__main__":

    url = sys.argv[1]
    req = urllib.request.Request(url)
    try:
        with urllib.request.urlopen(req) as response:
            page = response.read()
            print(page.decode('UTF-8'))
    except urllib.error.HTTPError as e:
        print('Error code: {}'.format(e.code))
