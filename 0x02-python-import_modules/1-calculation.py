#!/usr/bin/python3

if __name__ == "__main__":
    """Print the sum, difference, multiple and quotient of 10 and 5."""
    from calculator_1 import add, sub, mul, div

    a = 10
    b = 5

    print("{} + {} = {}".format(x, y, add(a, b)))
    print("{} - {} = {}".format(x, y, sub(a, b)))
    print("{} * {} = {}".format(x, y, mul(a, b)))
    print("{} / {} = {}".format(x, y, div(a, b)))
