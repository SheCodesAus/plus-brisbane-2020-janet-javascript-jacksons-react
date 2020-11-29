import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import HostCard from "./HostCard";

function HostCarousel() {
    const [hostList, setHostList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/hosts`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHostList(data);
        });
    }, []);

    return (
        <Carousel>
            {hostList.map(hostData => <div key={hostData.id}><HostCard hostData={hostData}/></div>)}
        </Carousel>
    );
}

export default HostCarousel;