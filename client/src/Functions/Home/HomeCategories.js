import React from "react"
import { Link } from "react-router-dom"
import uuid from "uuid/dist/v1"

const HomeCategories = () => {
    const categories = [
      {
        title: "Computers",
        imgSrc: () => require("../../Images/Computer.png"),
        link: "/Electronics/Computers",
        id: uuid()
      },
      {
        title: "Furniture",
        imgSrc: () => require("../../Images/Furniture.png" ),
        link: "/Furniture",
        id: uuid()
      },
      {
        title: "Kids Clothing",
        link: "/Clothing/Children",
        imgSrc: () => require("../../Images/Kids_Clothes.jpg" ),
        id: uuid()
      },
      {
        title: "Musical Instruments",
        link: "/Electronics/Musical Instruments",
        imgSrc: () => require("../../Images/Instruments.png" ),
        id: uuid()
      },
      {
        title: "Phones",
        link: "/Electronics/Phones",
        imgSrc: () => require("../../Images/Phones.png" ),
        id: uuid()
      },{
        title: "Shoes",
        link: "/Shoes",
        imgSrc: () => require("../../Images/Shoes..png" ),
        id: uuid()
      },{
        title: "Tools",
        link: "/Tools",
        imgSrc: () => require("../../Images/Tools.png" ),
        id: uuid()
      },
      {
        title: "Women's Clothing",
        link: "/Clothing/Women",
        imgSrc: () => require("../../Images/Adult_Clothes.png" ),
        id: uuid()
      }
    ]
  
    return categories.map(
      x =>( 
          <React.Fragment key={x.id}>
            <Link to={x.link}>                 
                <img src={x.imgSrc()} alt=""/>
                <p>{x.title}</p>
            </Link>
            </React.Fragment>
      )    
    )
  }

  export default HomeCategories