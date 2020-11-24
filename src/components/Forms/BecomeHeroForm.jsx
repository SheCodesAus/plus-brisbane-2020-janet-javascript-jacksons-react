import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./Forms.css";

function BecomeHeroForm() {
    const [heroData, setHeroData] = useState({
        username: "",
        password:"",
        first_name: "",
        last_name: "",
        year_of_birth: "",
        phone: "",
        email: "",
        city:"",
        user_image: "",
        linkedin_url: "",
        bio:"",
        gender: "",
        is_bluecard:"",
        is_yellowcard: "",
        is_virtual_accepted:"",
        is_paid_preferred: "",
        is_staff:""
    });

    const history = useHistory();

    const handleHeroChange = (e) => {
        const { id, value } = e.target;
        setHeroData((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };
    
    const postHeroData = async () => {
        const response = await 
        fetch(`${process.env.REACT_APP_API_URL}becomehero/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(heroData),
        });
        return response.json();
    };

    const handleHeroSubmit = (e) => {
        e.preventDefault();
        if (heroData.username &&
            heroData.first_name &&
            heroData.last_name &&
            heroData.password
            // heroData.year_of_birth &&
            // heroData.phone &&
            // heroData.email &&
            // heroData.city &&
            // heroData.user_image &&
            // heroData.linkedin_url &&
            // heroData.bio &&
            // heroData.gender &&
            // heroData.is_bluecard &&
            // heroData.is_yellowcard &&
            // heroData.is_virtual_accepted &&
            // heroData.is_paid_preferred &&
            // heroData.is_staff
            ) {
            postHeroData().then((response) => {
                console.log(response);
                history.push("/");
            });
        }
    };

    const handleHeroCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <form>
            <div>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="year_of_birth">Year Of Birth</label>
                <input type="number" id="year_of_birth" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="user_image">Profile Image</label>
                <input type="url" id="user_image" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="linkedin_url">LinkedIn Profile</label>
                <input type="url" id="user_image" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="gender">I Identify my gender as</label>
                <select type="number" id="gender" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="1">Man</option>
                    <option  value="2">Woman</option>
                    <option  value="3">Transgender</option>
                    <option  value="4">Genderqueer</option>
                    <option  value="5">Agender</option>
                    <option  value="6">Genderless</option>
                    <option  value="7">Non-binary</option>
                    <option  value="8">Cis Man</option>
                    <option  value="9">Cis Woman</option>
                    <option  value="10">Trans Man</option>
                    <option  value="11">Trans Woman</option>
                    <option  value="12">Third Gender</option>
                    <option  value="13">Two-Spirit</option>
                    <option  value="14">Bigender</option>
                    <option  value="15">Genderfluid</option>
                    <option  value="16">Prefer Not To Say</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_staff">Are You Deep Tech Hero's Staff?</label>
                <select type="boolean" id="is_paid_preferred" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_bluecard">Do You Hold A Blue Card?</label>
                <select type="boolean" id="is_bluecard" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_yellowcard">Do You Hold A Yellow Card?</label>
                <select type="boolean" id="is_yellowcard" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_virtual_accepted">Do You Accept Virtual Event?</label>
                <select type="boolean" id="is_virtual_accepted" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_paid_preferred">Do You Prefer Paid Events?</label>
                <select type="boolean" id="is_paid_preferred" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleHeroChange}/>
            </div>

            <button type="submit" onClick={handleHeroSubmit}>Submit</button>
            <button type="cancel" onClick={handleHeroCancel}>Cancel</button>
        </form>
    )
}

export default BecomeHeroForm;