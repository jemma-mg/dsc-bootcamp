import "./trip.css"
import tripData from "./"
import trip1 from "../../assets/kfm1"
import trip2 from "../../assets/kfm1"
import trip3 from "../../assets/kfm1"

function trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcards">
                <tripData 
                image = {trip1}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
                <tripData 
                image = {trip1}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
                <tripData 
                image = {trip1}
                heading = "Trip in Kozhikode"
                text = "Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices."
                />
            </div>
        </div>
    )
}

export default trip