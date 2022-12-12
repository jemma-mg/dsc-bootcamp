import "./trip.css"
import TripData from "./tripData"
import trip1 from "../../assets/1.jpg"
import trip2 from "../../assets/2.jpg"
import trip3 from "../../assets/4.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcards">
                <TripData 
                image = {trip1}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
                <TripData 
                image = {trip2}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
                <TripData 
                image = {trip3}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
            </div>
        </div>
    )
}

export default Trip