import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div id="home-page">
            <h1>Deep Tech Heroes</h1>

            <Link to="/"><img src="https://res.cloudinary.com/flifree/image/upload/v1605350477/Deep%20Tech%20Heroes/DTH_10_cwdfqx.png" alt=""></img></Link>

            <h2>Diversity from the start</h2>
        
            <p>We love our unique hosts and heroes!

            We believe that deep tech should start and continue to be a diverse and inclusive community. 
   
            We want to avoid the pitfalls of other industries that have tried to become diverse after the fact. 
   
            We believe that diversity of culture, gender, race, ethnicity, religious or spiritual beliefs, sexual orientation and ability are integral to getting the best out of people and technology. 
   
            We want hosts that hold meet-ups, learnings, meetings, courses, accelerators and conferences that cater to all things Deep Tech and all people Deep Tech. Because no one should be left out. 
   
            We have created a place where heroes can find event hosts that align with their values and ideals.
   
            We want to grow a thriving, welcoming, thoughtful and creative environment where you can be yourself. 
   
            Join us. Everybody’s welcome.</p>

            <h2>What is Deep Tech?</h2>

            <p>
            Many people have various determinations of what deep tech means but we use the term to in refer to the cutting -edge and disruptive technologies that are based on engineering innovations and scientific advances and discoveries. In 2019 the Boston Consulting Group and Hello Tomorrow reported that the most prominent deep tech fields included, advanced materials, advanced manufacturing, artificial intelligence, biotechnology. blockchain, robotics, photonics, electronics and quantum computing.  Innovations in these fields have the power to create new markets and disrupt existing ones. Deep tech often addresses societal and environmental challenges that impact everyday life.     
            </p>

            <h2>How Does it Work?</h2>

            <h3>Are you a Hero?</h3>

            <Link to="/"><img src="https://res.cloudinary.com/flifree/image/upload/v1605350478/Deep%20Tech%20Heroes/DTH_18_kw6kn9.png" alt=""></img></Link>

            <p>Are you an enthusiastic about all things deep tech and where it will take the world? Are you excited about the future with AI? Interested in how blockchain can disrupt governments? Or hoping to build the next great thing in robotics? 
 
            Are you confident showing those who are new the ropes of your particular expertise?
  
            Then become a Hero and help create and mould the next generation in deep tech!
  
            Simply sign up fill in all the information and then have a look around and see what events you would be able to bring value to!
             </p>

            <Link to='/becomehero'><button type="button">Become a HERO</button></Link>

            <h3>Are you a Host?</h3>

            <Link to="/"><img src="https://res.cloudinary.com/flifree/image/upload/v1605350477/Deep%20Tech%20Heroes/DTH_12_qg3kc9.png" alt=""></img></Link>

            <p>Are you an organisation that is looking to create and innovate? Are you looking to help people from all walks of life find their place in this fantastic world? Do you want to host a webinar? A meet and greet? A masterclass? Do you need people with a specific focus in deep tech? 
 
            Have a look around. Advertise your event and see the available Heroes. If you find a Hero who you think would be a great addition to your event make contact and find out what you have in common!
 
             </p>

            <Link to='/becomehost'><button type="button">Become a HOST</button></Link>

            

        </div>

    )
}

export default HomePage;