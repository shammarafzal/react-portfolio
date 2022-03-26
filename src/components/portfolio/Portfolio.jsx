import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Nilesisters',
    github: 'https://github.com/shammarafzal/nilesisters',
    demo: 'https://apps.apple.com/pk/app/nilesisters/id1563066011'
  },

  {
    id: 2,
    image: IMG2,
    title: 'MyCareShift',
    github: 'https://github.com/shammarafzal/mycareshift',
    demo: 'https://apps.apple.com/pk/app/mycareshift/id1601412203'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Self Love Bible',
    github: 'https://github.com/shammarafzal/selflove',
    demo: 'https://play.google.com/store/apps/details?id=au.com.theselflovebible.selflove.self_love'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Curreny Dashboard',
    github: 'https://github.com/shammarafzal/majestic_capital_dapp',
    demo: 'https://www.figma.com/proto/gXBLT5PZvudxL0Be0XfroR/Crypto-Exchange-Web-Design?node-id=248%3A2438&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=248%3A2438'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dreamy Cakes',
    github: 'https://github.com/shammarafzal/',
    demo: 'https://dreamycakes.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Strato - Domain & Hosting Provider',
    github: 'https://github.com/shammarafzal/',
    demo: 'https://www.strato.de/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          {
            data.map(({id, image,title, github, demo})=> {
              return(
              <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                    
              </article>
              )
            })
          }    
      </div>

    </section>
  )
}

export default Portfolio