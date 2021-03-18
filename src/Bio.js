import React from 'react'
import Card from 'react-bootstrap/Card';
import Img from './bio.jpg'

export default function Bio() {
  return (
    <Card style={{ width: '60rem', height: 'auto' }} border="info" >
      <Card.Body>
        <Card.Title>MICHAEL'S EXCELLENT ART ADVENTURE</Card.Title>
        <Card.Text>
          <img className="bio-image" alt="self potrait" src={Img}></img>
          <p class="font-weight-bold">Visual Arts - </p>
          <p>My first art gig came during a hot stay in Puerto Vallarta, Mexico in the 1970's. The owners of a resturant that I frequented  offered me free beverages as long as I would sit on their patio and draw. At the time I was experimenting with a rapidograh ink pen to achieve fine detail in my drawings.The owners believed that having a young "art student" on the premises was good for business.</p>
          <p>I never saw much tourist traffic in the place, but they had great coffee and fresh juices. Later the couple began feeding me lunches.The commercial facade ended and I became the couple's adopted son for awhile. My mother attributed my good fortune to the fact "her angels were looking after me." Perhaps.</p>
          <p>I sketched on-and-off for years, but a renewed interest in playing music and a demanding career in technology marketing limited  time spent creating visual art.</p>
          <p>Then, 2002 I started working with 8, 9, and 10 year old kids at the day care run by my wife Tamie. We had a blast creating digital music and cell animation together after school. This launched a major career change for me from business to education. </p>
          <p>The first job offered to me after graduation was as a K-8 art teacher, though I lacked the art credentials. I quickly enrolled in lessons at the Gage Academy of Art, a bastion of realism and classical art instruction. My motivation  was simply to stay more than a week or two to ahead of the middle school students!!</p>
          <p>As it turns out children don't mind adults learning along with them in a supported environment. And, we explored every art medium we could lay our hands on! The art program became recognized throughout the district. The kid's parents even nominated me for a "Heroes in the Classroom" award sponsored by the Seahawks. That's the power of art!</p>
          <p>My personal art was also progressing. In 2011, I switched to the aqua oil medium to create my "Life Card Series". These are scenes and people of my past. The paintings feature a naive style, high chroma color, caricatures, and nature imagery.</p>
          <p>More recently my art has taken a realist bent: "Self Portrait", "Hailey", "Zorn", and "Still Life" are examples.</p>
          <p class="font-weight-bold">The Music -</p>
          <p>During the period 2002-2007, I focused heavily on digital music composition and recording. I had been playing acoustic guitar for years but now turned to synthesizers, piano, and electric guitar.</p>
          <p>Much of the music from this period---and the most interesting---was done with children. The musical collective became known as "The Standing Waves".</p>
          <p>You can hear a sample  of the The Standing Waves sessions by clicking <a href="https://soundcloud.com/the-standing-waves" target="_blank">HERE</a>.</p>
          <p>My son, Jesse Callahan, was also a musical collaborator with me and he later joined the Dropping Gems record label. Jesse also built this web archival site. MANY THANKS!</p>
          <p>The artist formerly known as MC
          Seattle, WA
February 2021</p>
        </Card.Text>
      </Card.Body>
    </Card >
  )
}
