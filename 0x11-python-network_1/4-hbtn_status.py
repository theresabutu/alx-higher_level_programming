#!/usr/bin/python3
"""
Write a Python script that fetches https://intranet.hbtn.io/status

You must use the package requests
"""
import requests

if __name__ == "__main__":

    url = "https://intranet.hbtn.io/status"
    req = requests.get(url)
    print('Body response:')
    print('\t- type: {}'.format(type(req.text)))
    print('\t- content: {}'.format(req.text))
