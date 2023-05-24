import Data from "../component/data"
import Star from "../images/staar.jpeg"

export default function Container1(proops) {
    let badgeText;
    if(proops.items.openSpots === 0)
    {
        badgeText= "SOLD OUT"
    }
    else if(proops.items.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="container2">
            
            <div className="contactcard">
                {badgeText && <div className="badge">{badgeText}</div>} 
                {/* if first statement is true then the statement wll run */}
                <img src={require(`../images/${proops.items.img}`)} className="images" />

                <div className="statscontainer">

                    <img src={Star} className="starimg" />


                    <p> {proops.items.stats.rating}</p>
                    <p className="greyclr">  ({proops.items.stats.reviewCount})<strong>.</strong>  </p>
                    <p className="greyclr"> {proops.items.location}</p>
                </div>
                <h3 className="contactname">{proops.items.name}</h3>
                <p className="phonenumber">{proops.items.phone}</p>
                <p className="emial">  <strong>
                    {proops.items.email} </strong></p>
                <p className="price"> <strong>From ${proops.items.price}</strong>/person</p>
                <p> {proops.items.description}</p>







            </div>
        </div>


    )
}