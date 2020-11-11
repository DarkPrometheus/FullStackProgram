from menu import *
from product import Product

Catalog = []


def main():
    Loop = True
    while Loop:
        Menu()
        MenuOption = input("Select a option: ")
        if MenuOption == "5":
            break

        print()
        print()

        if MenuOption == "1":
            RegisterProduct()
        elif MenuOption == "2":
            DisplayCatalog()
        elif MenuOption == "3":
            DisplayOutOfStock()
        elif MenuOption == "4":
            CheapestProduct()


def RegisterProduct():
    Clear()
    Header("Register")
    Title = input("Provide the title: ")
    Category = input("Provide the category: ")
    Stock = int(input("Provide the stock: "))
    Price = float(input("Provide the price: "))

    # Validaciones

    product = Product(0, Title, Category, Stock, Price)
    Catalog.append(product)


def DisplayCatalog():
    Clear()
    Header("Cataglog")
    for p in Catalog:
        ProductInfo(p)
    input("Press Enter to continue...")


def DisplayOutOfStock():
    Clear()
    Header("Out of stock")
    for p in Catalog:
        if p.Stock == 0:
            ProductInfo(p)
    input("Press Enter to continue...")


def ProductInfo(Product):
    Header("Product" + Product.Title)
    print("Id:" + str(Product.id))
    print("Category:" + Product.Category)
    print("Stock:" + str(Product.Stock))
    print("Price:" + str(Product.Price))


def CheapestProduct():
    Mayor = 0
    Prod = []
    Values = []
    for p in Catalog:
        Temp = p.Stock * p.Price
        Values.append(Temp)
        if Temp > Mayor:
            Mayor = Temp
            Prod = p

    ProductInfo(Prod)

    input("Press Enter to continue...")


main()
