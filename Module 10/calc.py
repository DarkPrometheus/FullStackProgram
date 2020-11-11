# Imports
# Global vars
# Functions
# Instructions

def main():
    Loop = True
    while Loop:
        print("***********")
        print("PyCalc")
        print("***********")

        print("1. Add")
        print("2. Substract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")

        Menu = input("Select a option: ")
        if Menu == "5":
            break

        Num1 = int(input("Number 1: "))
        Num2 = int(input("Number 2: "))

        print()
        print()

        if Menu == "1":
            print("Result: " + str(Add(Num1, Num2)))
        elif Menu == "2":
            print("Result: " + str(Substract(Num1, Num2)))
        elif Menu == "3":
            print("Result: " + str(Multiply(Num1, Num2)))
        elif Menu == "4":
            print("Result: " + str(Divide(Num1, Num2)))

        print()
        print()


def Add(Num1, Num2):
    return Num1 + Num2


def Substract(Num1, Num2):
    return Num1 - Num2


def Multiply(Num1, Num2):
    return Num1 * Num2


def Divide(Num1, Num2):
    if Num1 == 0:
        return "Error"
    if Num2 == 0:
        return "Error"
    return Num1 / Num2


main()
