#!/usr/bin/python3

if __name__ == "__main__":
    """Print the sum, difference, multiple and quotient of 10 and 5."""
    from calculator_1 import add, sub, mul, div

    x = 10
    y = 5

    print("{} + {} = {}".format(x, y, add(x, y)))
    print("{} - {} = {}".format(x, y, sub(x, y)))
    print("{} * {} = {}".format(x, y, mul(x, y)))
    print("{} / {} = {}".format(x, y, div(x, y)))
