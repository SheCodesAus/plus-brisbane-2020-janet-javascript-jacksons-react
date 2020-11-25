import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Forms.css";

function BecomeHeroForm() {
    const [heroData, setHeroData] = useState({
        username:"",
        email:"",
        first_name:"",
        last_name: "",
        password:"",
        is_hero:"",
        is_host:"",
        rec_newsletter:"",
        year_of_birth:"",
        hero_phone:"",
        hero_location:"",
        hero_image:"",
        linkedin_url:"",
        hero_bio:"",
        gender: "",
        pref_pronoun:"",
        has_bluecard:"",
        has_yellowcard:"",
        is_virtual_accepted:"",
        is_paid_preferred:"",
        culture:"",
        badge_keynote:"",
        badge_facilitator:"",
        badge_mentor:"",
        badge_expert:"",
        badge_enthusiast:""
    });

    const history = useHistory();

    const handleHeroChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setHeroData((prevHeroData) => ({
            ...prevHeroData,
            [id]: value
        }));
    };
    
    const postHeroData = async() => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/becomehero/`, 
        {
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
        postHeroData().then((response) => {
            console.log(response);
            window.localStorage.setItem("username", response.username);
            history.push("/signin");
        });
    };

    const handleHeroCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <form>
            <div>
                <h2>Sign Up To Be A Deep Tech Hero!</h2>
                <h3>In Deep Tech we value and celebrate all cultures, genders and personalities. Your information will help us to build a tech community where diversity is respected</h3>
            </div>
            <div>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleHeroChange}/>
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
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="is_hero">Would you like to become a hero?</label>
                <select type="boolean" id="is_hero" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_host">Would you like to become a host?</label>
                <select type="boolean" id="is_host" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="rec_newsletter">Would you like to receive our newsletters?</label>
                <select type="boolean" id="rec_newsletter" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>          
            <div>
                <label htmlFor="year_of_birth">Year Of Birth</label>
                <input type="number" id="year_of_birth" min="1900" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="hero_phone">Phone Number</label>
                <input type="text" id="hero_phone" onChange={handleHeroChange}/>
            </div>
            
            <div>
                <label htmlFor="hero_location">Location</label>
                <input type="text" id="hero_location" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="hero_image">Profile Image</label>
                <input type="url" id="hero_image" placeholder="Please Enter URL" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="linkedin_url">LinkedIn Profile</label>
                <input type="url" id="user_image" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="hero_bio">Bio</label>
                <input type="text" id="hero_bio" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="gender">I Identify my gender as</label>
                <select type="text" id="gender" defaultValue="prefer not to say" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="transgender">Transgender</option>
                    <option  value="cisgender">Cisgender</option>
                    <option  value="agender">Agender</option>
                    <option  value="genderqueer">Genderqueer</option>
                    <option  value="feminine">Feminine</option>
                    <option  value="masculine">Masculine</option>
                    <option  value="prefer not to say">Prefer Not To Say</option>
                </select>
            </div>
            <div>
                <label htmlFor="pref_pronoun">I would like to be called</label>
                <select type="text" id="pref_pronoun" defaultValue="prefer not to say" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="they/them">They/Them</option>
                    <option  value="she/her">She/Her</option>
                    <option  value="he/him">He/Him</option>
                    <option  value="ze/zem">Ze/Zem</option>
                    <option  value="prefer not to say">Prefer Not To Say</option>
                </select>
            </div>
            <div>
                <label htmlFor="has_bluecard">Do You Hold A Blue Card?</label>
                <select type="boolean" id="has_bluecard" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="has_yellowcard">Do You Hold A Yellow Card?</label>
                <select type="boolean" id="has_yellowcard" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_virtual_accepted">Do You Accept Virtual Event?</label>
                <select type="boolean" id="is_virtual_accepted" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_paid_preferred">Do You Prefer Paid Events?</label>
                <select type="boolean" id="is_paid_preferred" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="culture">What culture do you belong to?</label>
                <input type="text" id="culture" onChange={handleHeroChange}/>
            </div>
            <div>
                <label htmlFor="badge_keynote">Badge KeyNote</label>
                <select type="boolean" id="badge_keynote" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="badge_facilitator">Badge Facilitator</label>
                <select type="boolean" id="badge_facilitator" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="badge_mentor">Badge Mentor</label>
                <select type="boolean" id="badge_mentor" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="badge_expert">Badge Expert</label>
                <select type="boolean" id="badge_expert" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="badge_enthusiast">Badge Expert</label>
                <select type="boolean" id="badge_enthusiast" defaultValue="false" onChange={handleHeroChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>
            <button type="cancel" onClick={handleHeroCancel}>Cancel</button>
            <button type="submit" onClick={handleHeroSubmit}>Submit</button>
        </form>
    )
}

export default BecomeHeroForm;