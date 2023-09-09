import React from 'react'
import NavComp from './NavComp'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {FaGraduationCap,FaJava,FaPython,FaReact,FaNodeJs} from 'react-icons/fa'
import {LuBrainCircuit} from 'react-icons/lu'
import {FiLink} from 'react-icons/fi'
import {TbBrandCpp} from 'react-icons/tb'
import Resume from '../Assets/AnudeepGudeResume.pdf'

const Landing = () => {


  const openResume = () => {
    window.open(Resume)
  }

  return (
    <>
      <section style={{minWidth:"100vw",minHeight:"100vh",overflow:"hidden"}}>
          <div className='home'>
            <NavComp/>
            <div className='header text-center py-5'>
              <p className='h1'>I AM</p>
              <p className='header-head'>ANUDEEP GUDE</p>
              <p className='header-text'>An aspiring full stack developer with a passion for creating impactful web applications. 
                  Proficient in programming languages like C++, Java, and Python, I'm ready to tackle the challenges of building robust and user-friendly software solutions. 
                   With expertise in React JS, Node JS, and Bootstrap, I excel at crafting dynamic and engaging user interfaces. 
                   Join me on this exciting journey as we unlock the potential of full stack development and make a lasting impact in the digital world.</p>
            </div>
            <section id='about' className='about'>
                <p className='edu-text'><IoPersonCircleOutline className='icon'/>About Me</p>
                <div className='about-me'>
                    <div className='about-1'>
                          <img className='rounded-circle mypic' alt='Mypic' src={require('../Assets/mypic2.png')} ></img>
                    </div>
                    <div className='mydetails'>
                      <p><span>Full Name</span> : Anudeep Gude</p>
                      <p><span>Date of Birth</span> : 25 - May - 2003</p>
                      <p><span>Email - id </span> : anudeepgude765@gmail.com</p>
                      <p><span>Address </span> : 1-29, near Hanuman temple , Peda golugonda peta, Nathavaram mandal , Anakapalli district</p>
                    </div>
                </div>
            </section>
            <div className='resume'>
              <button onClick={openResume}>Have a Look at my RESUME <FiLink className='links'/></button>
            </div>

            <div className='education'>
                <p className='edu-text'><FaGraduationCap className='icon'/>Education</p>
                <div className='edu-details'>
                  <div className='academics'>
                    <div>
                      <p>Bachelor of Technology</p>
                      <p>Computer Science and Enginnering in AI & ML</p>
                      <p>at Anil Neerukonda Institute of Technology and Sciences , Vishakapatnam</p>
                      <p><span>CGPA :</span> 9.55</p>
                    </div>
                  </div>
                  <div className='academics'>
                    <div>
                      <p>Senior Secondary</p>
                      <p>Board of Intermediate , Andhra Pradesh</p>
                      <p>at ScriChaitanya Junior College , Vishakapatnam</p>
                      <p><span>CGPA :</span> 9.69</p>
                    </div>
                  </div>
                  <div className='academics'>
                    <div>
                      <p>Secondary (X)</p>
                      <p>Board of Secondary Education</p>
                      <p>at Gowtham Model School, Payakarao Peta, Tuni</p>
                      <p><span>CGPA :</span> 9.80</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='skills'>
              <p className='edu-text'><LuBrainCircuit className='icon'/>Skills</p>
              <div className='skill-list'>
                  <div className='skill-card'>
                    <FaJava  className='icon' />
                      <p>Java</p>
                      <div className='line'></div>
                      <p>Java Pro with <span className='level'>Intermediate</span> Expertise</p>
                  </div>
                  <div className='skill-card'>
                    <TbBrandCpp  className='icon' />
                      <p>CPP</p>
                      <div className='line'></div>
                      <p>C++ Pro with <span className='level'>Intermediate</span> Prowess</p>
                  </div>
                  <div className='skill-card'>
                    <FaPython  className='icon' />
                      <p>Python</p>
                      <div className='line'></div>
                      <p>Python pro with <span className='level'>Intermediate</span> coding chops.</p>
                  </div>
                  <div className='skill-card'>
                    <FaReact  className='icon' />
                      <p>ReactJS</p>
                      <div className='line'></div>
                      <p>ReactJS pro with <span className='level'>Intermediate</span> coding skills.</p>
                  </div>
                  <div className='skill-card'>
                    <FaNodeJs  className='icon' />
                      <p>NodeJS</p>
                      <div className='line'></div>
                      <p>Node.js ninja, coding with <span className='level'>finesse</span>.</p>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Landing


