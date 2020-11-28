import uuid from "uuid/dist/v1"

export const subCategory = [
    /*Electronics Category */
    {id: uuid(), category: "Electronics", title: "Cameras", imgSrc: ()=> require("../Images/Camera.png")},
    {id: uuid(), category: "Electronics", title: "Computers", imgSrc: ()=> require("../Images/Computer2.png")},
    {id: uuid(), category: "Electronics", title: "Headphones", imgSrc: ()=> require("../Images/HeadPhones.png")},
    {id: uuid(), category: "Electronics", title: "Musical Instruments", imgSrc: ()=> require("../Images/Instruments.png")},
    {id: uuid(), category: "Electronics", title: "Phones", imgSrc: ()=> require("../Images/Phones.png")},
    {id: uuid(), category: "Electronics", title: "Printers", imgSrc: ()=> require("../Images/Printer.png")},
    {id: uuid(), category: "Electronics", title: "Smart Watches", imgSrc: ()=> require("../Images/SmartWatch.png")},
    {id: uuid(), category: "Electronics", title: "Televisions", imgSrc: ()=> require("../Images/TV.png")},
    {id: uuid(), category: "Electronics", title: "Video Games", imgSrc: ()=> require("../Images/Console.png")},
    /*Furniture Category */
    {id: uuid(), category: "Furniture", title: "Beds", imgSrc: ()=> require("../Images/Bed.png")},
    {id: uuid(), category: "Furniture", title: "Desks", imgSrc: ()=> require("../Images/Desk.png")},
    {id: uuid(), category: "Furniture", title: "Dining Rooms", imgSrc: ()=> require("../Images/DiningRoom.png")},
    {id: uuid(), category: "Furniture", title: "Dressers", imgSrc: ()=> require("../Images/Dresser.png")},
    {id: uuid(), category: "Furniture", title: "Office Chairs", imgSrc: ()=> require("../Images/OfficeChair.png")},
    {id: uuid(), category: "Furniture", title: "Sofas", imgSrc: ()=> require("../Images/Furniture.png")},
    /*Clothing Category */
    {id: uuid(), category: "Clothing", title: "Children", imgSrc: ()=> require("../Images/Kids_Clothing.png")},
    {id: uuid(), category: "Clothing", title: "Jewelry", imgSrc: ()=> require("../Images/Jewelry.png")},
    {id: uuid(), category: "Clothing", title: "Men", imgSrc: ()=> require("../Images/Men's Clothing.png")},
    {id: uuid(), category: "Clothing", title: "Men's Accessories", imgSrc: ()=> require("../Images/Belt.png")},
    {id: uuid(), category: "Clothing", title: "Women", imgSrc: ()=> require("../Images/Women's Clothing.png")},
    /*
    Shoes Category 
    ---Men---
    */
    {id: uuid(), category: "Shoes", title: "Men's Boots", imgSrc: ()=> require("../Images/Boots Male.png"), gender: "Male"},
    {id: uuid(), category: "Shoes", title: "Men's Athletic Shoes", imgSrc: ()=> require("../Images/Athletic Male.png"), gender: "Male"},
    {id: uuid(), category: "Shoes", title: "Men's Casual Shoes", imgSrc: ()=> require("../Images/Casual Shoes.png"), gender: "Male"},
    {id: uuid(), category: "Shoes", title: "Men's Dress Shoes", imgSrc: ()=> require("../Images/Dress Shoes.png"), gender: "Male"},
    {id: uuid(), category: "Shoes", title: "Men's Slippers", imgSrc: ()=> require("../Images/Slippers Male.png"), gender: "Male"},
    /*
    ---WoMen---
    */
    {id: uuid(), category: "Shoes", title: "Women's Boots", imgSrc: ()=> require("../Images/Boot Female.png"), gender: "Female"},
    {id: uuid(), category: "Shoes", title: "Women's Dress Shoes", imgSrc: ()=> require("../Images/Dress Shoes female.png"), gender: "Female"},
    {id: uuid(), category: "Shoes", title: "Heels & Humps", imgSrc: ()=> require("../Images/Heels.png"), gender: "Female"},
    {id: uuid(), category: "Shoes", title: "Women's Slippers", imgSrc: ()=> require("../Images/Slippers Female.png"), gender: "Female"},
    /*
    Tools Category
    */
    {id: uuid(), category: "Tools", title: "Air Tools & Compressors", imgSrc: ()=> require("../Images/Airtools.png")},
    {id: uuid(), category: "Tools", title: "Drills", imgSrc: ()=> require("../Images/Drill Drivers.png")},
    {id: uuid(), category: "Tools", title: "Measuring Tools", imgSrc: ()=> require("../Images//Measure Tool.png")},
    {id: uuid(), category: "Tools", title: "Power Saws", imgSrc: ()=> require("../Images/Power Saw.png")},
    {id: uuid(), category: "Tools", title: "Protective Gears", imgSrc: ()=> require("../Images/Protective EQ.png")},
    {id: uuid(), category: "Tools", title: "Tool Set", imgSrc: ()=> require("../Images/Tool Set.png")},
    {id: uuid(), category: "Tools", title: "Tool Storage", imgSrc: ()=> require("../Images/Tool Storage.png")}

]