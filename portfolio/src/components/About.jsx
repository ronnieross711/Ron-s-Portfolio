import React from 'react';
import './About.css'


function About(props) {
    return (
        <div className='about'>
            <p className='first'>
                Two years ago I began my journey into tech, coding, and software developement. After a bit of self
                taught coding, I decided to go to a coding bootcamp. I chose General Assembly as my school and I 
                took their 12 week software engineering course. I am now a certified software developer and have
                learned to write and read code in several languages. Those being: HTML, CSS, JavaScript, React, Node.js,
                MongoDB, Mongoose, SQL, Python, Django, and C#.
            </p>
            <p className='second'>     
                I have a an old hard working mindset and I don't want things in life given to me. I enjoy working hard to succeed. 
                There's nothing like that feeling of success after hours or even
                days of trial and error. I learned carpentry from my father and I chose to 
                follow in my father's footsteps and become a carpenter after high school.  
                I worked for 9 years as a carpenter and then decided to super charge my skills by going to the 
                Nashville Guitar Craft Academy, where I built and custom designed an
                electric and acoustic guitar, and recived a certificate in acoustice guitar design.
                After twelve years in construction it was time to change my life.
            </p>
            <img src='/images/image1.png'
                 alt='Guitar'>
            </img>
            <img src='/images/image2.png'
                 alt='Guitar'>
            </img>
            <img src='/images/image3.png'
                 alt='Guitar'>
            </img>
            <img src='/images/image4.png'
                 alt='Guitar'>
            </img>
            <p className='third'>
                Then I decided to follow in my step father's footsteps and become a software developer and completely
                change my life. My step father is also a master of his craft and we began coding in C# in January of 2019.
                After many hours of coding and a few sleepless nights I have succefully completed a 12 week bootcamp at General Assembly
                and finished my portfolio. Just like building a guitar or a house, coding is very similar, because you start out
                not knowing anything and doing simple work, like picking up trash, or carrying material to the tradesmen, or
                moving a wheelbarrow full of concrete where it needs to go. But after years on the job, you finally become a 
                carpenter who can frame a house by looking at the blueprints and you understand what all of the symbols 
                on the page mean.  When you begin to code you start with simple coding exercises like getting an alert to 
                pop up and say "Hello World". After weeks of practice and concouring JavaScript you can then build your own 
                functional and dynamic website. I am by no means the greatest software developer in the world, but I know with hard
                work and determination I will be the best that I can be, and all it takes is hard work, time, and patience. This is my portfilio and I built
                it with REACT.

            </p>

            
            
        </div>
    );
}

export default About;