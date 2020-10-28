import Inventory from "./Inventory"

//gets unique category from the inventory because there are many duplicates
let categories = [...new Set(Inventory.map(x=>x.category))]

export const Categories = [
    {icon: "fas fa-tv", category: categories[0]},
    {icon: "fas fa-couch", category: categories[1]},
    {icon: "fas fa-tshirt", category: categories[2]},
    {icon: "fas fa-socks", category: categories[3]},
    {icon: "fas fa-tools", category: categories[4]}
]
/* 
0: "Electronics"
1: "Furniture"
2: "Clothing"
3: "Shoes"
4: "Tools" 
*/