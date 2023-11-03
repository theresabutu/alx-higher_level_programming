#!/usr/bin/python3
"""
Write a Python script that takes 2 arguments in order to solve this challenge.
Please list 10 commits (from the most recent to oldest)
 of the repository “rails” by the user “rails”
You must use the Github API, here is the documentation
 https://developer.github.com/v3/repos/commits/
Print all commits by: `<sha>: <author name>` (one by line)
"""
import requests
from sys import argv

if __name__ == "__main__":
    url = "https://api.github.com/repos/{}/{}/commits".format(argv[2], argv[1])
    req = requests.get(url)
    for i in req.json()[:10]:
        sha = i.get('sha')
        name = i.get('commit').get('author').get('name')
        print('{}: {}'.format(sha, name))
