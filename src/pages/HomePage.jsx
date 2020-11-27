import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";


function HomePage() {
    return (
        <div id="home-page">

            <div className="cover">
                <img src="https://res.cloudinary.com/dikrdv4qy/image/upload/v1606439814/Background_bdvap8.png"></img>
            </div>

            <div className="section1">
                <h1>Deep Tech Heroes</h1>
                <p>
                    Our mission is that Deep Tech which refer to the cutting edge and disruptive technologies that are based on engineering innovations and scientific advances and discoveries should start and continue to be a diverse and inclusive community. 
                    We want to avoid the pitfalls of other industries that have tried to become diverse after the fact. 
                    We believe that diversity of culture, gender, race, ethnicity, religious or spiritual beliefs, sexual orientation and ability are integral to getting the best out of people and technology. 
                    We want hosts that hold meet-ups, learnings, meetings, courses, accelerators and conferences that cater to all things Deep Tech and all people Deep Tech. Because no one should be left out. 
                    We have created a place where heroes can find event hosts that align with their values and ideals.
                    We want to grow a thriving, welcoming, thoughtful and creative environment where you can be yourself. 
                    Join us. Everybody’s welcome.
                </p>
            </div>

            <div className="section2">
                {/* <h2>How Does it Work?</h2> */}
                <div className="hero">
                    <h3>Are you a Hero?</h3>
                    <Link to="/"><img className= "Hero-img" src="https://res.cloudinary.com/flifree/image/upload/v1605350478/Deep%20Tech%20Heroes/DTH_18_kw6kn9.png" alt=""></img></Link>

                    <p>Are you an enthusiastic about all things deep tech and where it will take the world? Are you excited about the future with AI? Interested in how blockchain can disrupt governments? Or hoping to build the next great thing in robotics? 
                        Are you confident showing those who are new the ropes of your particular expertise?
                        Then become a Hero and help create and mould the next generation in deep tech!
                        Simply sign up fill in all the information and then have a look around and see what events you would be able to bring value to!
                    </p>

                    <Link to='/becomehero'><button type="button">Become a HERO</button></Link>
                </div>

                <div className="host">
                    <h3>Are you a Host?</h3>
                    <Link to="/"><img className= "Host-img" src="https://res.cloudinary.com/flifree/image/upload/v1605350477/Deep%20Tech%20Heroes/DTH_12_qg3kc9.png" alt=""></img></Link>

                    <p>Are you an organisation that is looking to create and innovate? Are you looking to help people from all walks of life find their place in this fantastic world? Do you want to host a webinar? A meet and greet? A masterclass? Do you need people with a specific focus in deep tech? 
                        Have a look around. Advertise your event and see the available Heroes. If you find a Hero who you think would be a great addition to your event make contact and find out what you have in common!
                    </p>

                    <Link to='/becomehost'><button type="button">Become a HOST</button></Link>
                </div>
            </div>


            <div className="hosts-name">
                <h3>Recent Hosts</h3>
                <div className="hosts-logos">
                    <Link to="/"><img src="data:image/png;base64,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" alt=""></img></Link>
                    <Link to="/"><img src="https://advance.qld.gov.au/sites/all/themes/advancedqld/img/share2.png" alt=""></img></Link>
                    <Link to="/"><img src="data:image/png;base64,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" alt=""></img></Link>
                </div>
            </div>
            <div className="partners-name">
                <h3>Our Partners</h3>
                <div className="partners-logos">
                    <Link to="/"><img src="data:image/png;base64,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" alt=""></img></Link>
                    <Link to="/"><img src="https://advance.qld.gov.au/sites/all/themes/advancedqld/img/share2.png" alt=""></img></Link>
                    <Link to="/"><img src="https://www.stemwomen.org.au/sites/default/files/2019-02/science-and-tech-logo.png" alt=""></img></Link>
                </div>
            </div>

        </div>

    )
}

export default HomePage;