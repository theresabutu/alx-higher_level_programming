#!/usr/bin/python3
"""
Write a Python script that takes in a URL and an email
address, sends a POST request to the passed URL with
the email as a parameter, and finally displays the
body of the response.
get -> param=
post -> data=
"""
import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    values = {'email': sys.argv[2]}
    req = requests.post(url, data=values)
    print(req.text)
