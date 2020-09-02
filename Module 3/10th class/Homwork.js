var ProductName = prompt("Enter the product name"), Quantity = prompt("Enter the quantity"), Price = prompt("Enter the price"), Total, Tax = .16;

Total = ((Quantity * Price) * Tax) + (Quantity * Price);

console.log(Quantity);

if(Quantity > 1)
{
    console.log("The final price to buy " + Quantity + " " +  ProductName + "s is " + Total);
}
else
{
    console.log("The final price to buy " + Quantity + " " +  ProductName + " is " + Total);
}