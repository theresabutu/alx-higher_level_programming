#!/usr/bin/python3
"""This defines an inherited list class MyList."""


class MyList(list):
    """MyList which is a class implements sorted printing for the built-in list class."""

    def print_sorted(self):
        """This prints a list in sorted ascending order."""
        print(sorted(self))
