function init() {
    console.log("Register page");

    $("#btnSave").click(SaveProperty);
}

function Property(title, bedrooms, bathrooms, price, area, description, parking){
    this.title = title;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = price;
    this.area = area;
    this.description = description;
    this.parking = parking;
}

function SaveProperty() {
    let title = $("#txtTitle").val();
    let beds = parseInt($("#txtBeds").val());
    let bath = parseInt($("#txtBaths").val());
    let price = parseFloat($("txtprice").val());
    let area = $("#txtArea").val();
    let description = $("#txtDescription").val();
    let parking = $("#radio_0").is(":checked");
    var prop = new Property(title, beds, bath, price, area, description, parking);
    console.log(prop);
    
    $(".form-control").val('');
}

window.onload = init;