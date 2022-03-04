import React from 'react'
import './About.css'

const About = () => {

  const tech = ['Flutter', 'React'];
  const tools = ['Figma', 'Spline (spline.design)']

  const listTech = tech.map((elem) => <li key={elem}>{elem}</li>)
  const listTools = tools.map((elem) => <li key={elem}>{elem}</li>)

  return (
    <div className='containerBody'>
      <h2 className='underlineHead'>Über mich</h2>
      <p>Juhu :) mein Name ist Simone und ich bin am schönen Bodensee aufgewachsen. Weil es so toll dort ist, habe ich in Konstanz studiert. Schon in der Schule fand ich Informatik toll. Also hab ich das einfach weiter gemacht und Information Engineering studiert.</p>
      <br></br>
      <p>Mit meinem Uni-Abschluss will ich nun die Arbeitswelt erkunden, mein Wissen einsetzen und noch viel Neues lernen!</p>
      <br></br>
      <p>Ich beschäftige mich gerade mit diesen Technologien & Tools:</p>
      <ul className='list'>{listTech}</ul>
      <br></br>
      <p>Design Tools:</p>
      <ul className='list'>{listTools}</ul>
      <br></br>
      <p>Hier ein kleiner Sneak Peak von eines 3D Spline Projekts: </p>
      <div id='splineProject'>

      </div>
    </div>
  )
}

export default About