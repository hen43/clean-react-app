import React from 'react'
import CyberLions from "../assets/cyberlions.jpg"

export default function compress() {
  return (
        <section className="theThing">
            <img src={CyberLions} alt="le cyberli'on"></img>
            <div className="text">
            <h1>We're a High School Robotics Team Based In Westminster CA</h1>
            <div class="literallyJustALine"></div>
            <p>Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability.</p>
            </div>
        </section>
  )
}