import os


def Menu():
    Clear()

    print("- " * 20)
    print("    Welcome to warehouse PyControl")
    print("- " * 20)

    print("1. Register product")
    print("2. Display cataglog")
    print("3. Display products out of stock")
    print("4. Cheapest Product")
    print("5. Exit")


def Clear():
    return os.system('cls')


def Header(Text):
    print("- " * 20)
    print(Text)
    print("- " * 20)
