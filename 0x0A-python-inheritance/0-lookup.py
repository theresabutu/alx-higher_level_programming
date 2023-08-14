#!/usr/bin/python3
"""This helps to defines an object's attribute lookup function."""


def lookup(obj):
    """Returns a list of an object's available attributes."""
    return (dir(obj))
