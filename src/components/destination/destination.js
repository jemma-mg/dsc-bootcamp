import React from 'react'
import "./destination.css"
import DestinationData from './destinationData'
import kfm1 from "../../assets/kfm1.jpg"
import kfm2 from "../../assets/kfm2.jpg"

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        
        <DestinationData
        className = "first__desc"
        heading = "Kerala Folklore Museum"
        text = "This Unique museum is the best example of traditional Kerala architecture. The structure is made of wood, laterite stone and clay tiles. Museum occupies the largest ethnic collections of more than 6000 art works.Folklore Museum is a treasure trove discovered from the forgotten centuries.The entire structure is made of wood,laterite stone and granite stone with clay tiles.The traditional building is an architectural Museum with  three basic architectural schools of Kerala ,namely -Malabar,Cochin and travancore .The museum houses more than 10000  objects collected from various parts of South India by a single person alone.Musical instruments ,performing ritual art costumes,stone scuptures,wooden sculptures,bronze sculptures etc ;are the main attractions of the museum.Now the Museum serves as an art educator to the young generation to study the value of south Indian culture and heritage,also caters to art lovers."
        img1 = { kfm1 }
        img2 = { kfm2 }
        />

        <DestinationData
        className = "first__desc__reverse"
        heading = "Kerala Folklore Museum"
        text = "This Unique museum is the best example of traditional Kerala architecture. The structure is made of wood, laterite stone and clay tiles. Museum occupies the largest ethnic collections of more than 6000 art works.Folklore Museum is a treasure trove discovered from the forgotten centuries.The entire structure is made of wood,laterite stone and granite stone with clay tiles.The traditional building is an architectural Museum with  three basic architectural schools of Kerala ,namely -Malabar,Cochin and travancore .The museum houses more than 10000  objects collected from various parts of South India by a single person alone.Musical instruments ,performing ritual art costumes,stone scuptures,wooden sculptures,bronze sculptures etc ;are the main attractions of the museum.Now the Museum serves as an art educator to the young generation to study the value of south Indian culture and heritage,also caters to art lovers."
        img1 = { kfm1 }
        img2 = { kfm2 }
        />

        <DestinationData
        className = "first__desc"
        heading = "Kerala Folklore Museum"
        text = "This Unique museum is the best example of traditional Kerala architecture. The structure is made of wood, laterite stone and clay tiles. Museum occupies the largest ethnic collections of more than 6000 art works.Folklore Museum is a treasure trove discovered from the forgotten centuries.The entire structure is made of wood,laterite stone and granite stone with clay tiles.The traditional building is an architectural Museum with  three basic architectural schools of Kerala ,namely -Malabar,Cochin and travancore .The museum houses more than 10000  objects collected from various parts of South India by a single person alone.Musical instruments ,performing ritual art costumes,stone scuptures,wooden sculptures,bronze sculptures etc ;are the main attractions of the museum.Now the Museum serves as an art educator to the young generation to study the value of south Indian culture and heritage,also caters to art lovers."
        img1 = { kfm1 }
        img2 = { kfm2 }
        />

    </div>
  )
}

export default Destination