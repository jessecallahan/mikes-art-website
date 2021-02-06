import React from 'react'
import Card from 'react-bootstrap/Card';
import Img from './bio.jpg'

export default function Bio() {
  return (
    <Card style={{ width: '60rem', height: 'auto' }} border="info" >
      <Card.Body>
        <Card.Title><a href='https://soundcloud.com/the-standing-waves' target="_blank" rel="noreferrer">MUSIC LINKS</a></Card.Title>
        <Card.Text>
          <img className="bio-image" alt="self potrait" src={Img}></img>
          <p>My first art gig came during a hot stay in Puerto Vallarta, Mexico in the 1970's. The owners of a resturant that I frequented  offered me free beverages as long as I would sit on their patio and draw. At the time I was experimenting with a rapidograh ink pen to sachieve fine detail in my drawings. The owners believed that having a young "art student" on the premises was good for business. I never saw much traffic in the place but they had great coffee and fresh juices. Later the couple began feeding me breakfast and lunches. The commercial facade ended and I became the couple's adopted son. My mother attributed my good fortune to the fact "her angels were looking after me." Perhaps.</p>
          <p>I sketched on-and-off for years, but a marketing careeer in the technology business effectively choked off any significant artistic efforts for 20 years. Then in 2005 I started working with children after school ay my wife's day care doing digital music (click here) and animation at my wife's day care. This launched a career change from business to education.</p>
          <p>The first job offered to me was as a K-8 art teacher--even though I lacked the credentials. I taught art for several years and my passion continued to grow. I took art lessons at Gage Academy of Art, a bastion of realist expression and classical art instruction in order to stay ahead of my middle school students. My own work blossomed. </p>
          <p>When I switched to aqua oil medium in 2011 the "Life Card Series" was born. These paintings feature a naive style, caricatured friend and acquaintances, high chroma color, and often water images.</p>
          <p>The artwork archived here spans the years 2005 to 2020. Media employed includes ink pen, pencil, graphite, charcoal, ink brush, platemaking, aqua oil, watercolor, and classic oil. Most of my art is representational. Of late I have been emulating the styles of the great realist .masters.</p>
          <p>Overlapping my efforts in visual art was a five year period 2002-2007 of musical composition and recording. Many of the musical pieces--and the most interesting--were done with kids. Our musical collective was called "The Standing Waves". You here some of this music <a href='https://soundcloud.com/the-standing-waves' target="_blank" rel="noreferrer">here</a></p>
          <p>Many thanks to Jesse Callahan who built this web site; Tamie Callahan who provided unflinching support for my "crazy" painting; Grandmother Peggy and my Aunt Molly who created wonderful paintings and sculpture far into their golden years; Room Nine Community School/Cascade K-8 where I was given every chance to learn and inspire; the Gage Academy master artists that bolstered my technique; Toby Callahan an artist in his own right who always had a nice word to say; Aime Palmer my partner in crime in my art classes and also a great painter; Gerardo Ruiz who provide guidance and a studio to work in during stays at San Miguel de Allende, Mx.; and the students and parents that were enthusiastic cheerleaders for my artisitic endeavors and teaching techniques.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
