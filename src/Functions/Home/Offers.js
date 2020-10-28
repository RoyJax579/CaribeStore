import React from "react"
import { Link } from "react-router-dom"
import uuid from "uuid/dist/v1"
const Offers = () =>{
    const OffersInfo = [
        {
          title: "Payment Methods",
          imgSrc: () => require("../../Images/Payment.png"),
          details: "Check out how we like to receive our payments!",
          buttonText: "Check it Out!",
          id: uuid()
        },
        {
          title: "Top Buys",
          imgSrc: () => require("../../Images/Favorites2.png"),
          details: "These are our customer's favorites! Check em' out!",
          buttonText: "Check it Out!",
          id: uuid()
        }
      ]
      
      const BoxInfo = OffersInfo.map(x => {
        return (
          <React.Fragment key={x.id}>
            <div className="box">
                <h1>{x.title}</h1>
                <img src={x.imgSrc()} height="200px" alt="" />
                <p>{x.details}</p>
                <Link to="Payment.php">{x.buttonText}</Link>
            </div>
            </React.Fragment>
        )
      })

      return BoxInfo
}

export default Offers