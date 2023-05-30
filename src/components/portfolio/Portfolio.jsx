import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/img/rickandmorty.png"
import Img2 from "../../assets/img/primeraapp.png"
import Img3 from "../../assets/img/ecommerce.png"
import Img4 from "../../assets/img/crud.png"
import Img5 from "../../assets/img/wheatherapp.png"
import Img6 from "../../assets/img/pokedesk.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img6} alt="" /> 
          </div>
          <h3>Pokedesk</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/pokedesk" className='btn' target='_blank'>GitHub</a>
            <a href="https://delicate-axolotl-dd68bf.netlify.app/" className='btn btn-primary' target='_blank'>Netlyfi</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img4} alt="" />
          </div>
          <h3>CRUD React</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/entregable-4-crud" className='btn' target='_blank'>GitHub</a>
            <a href="https://sensational-macaron-88a752.netlify.app/" className='btn btn-primary' target='_blank'>Netlyfi</a>
          </div>
        </article>
        
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img5} alt="" />
          </div>
          <h3>Wheather App</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/entreglable2" className='btn' target='_blank'>GitHub</a>
            <a href="https://cute-sunflower-a71137.netlify.app/" className='btn btn-primary' target='_blank'>Netlyfi</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img3} alt="" />
          </div>
          <h3>E-commerce</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/ecommercer" className='btn' target='_blank'>GitHub</a>
            <a href="https://timely-taffy-ac9ab8.netlify.app" className='btn btn-primary' target='_blank'>Netlyfi</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img1} alt="" />
          </div>
          <h3>Rick and Morty</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/rickandmorty" className='btn' target='_blank'>GitHub</a>
            <a href="https://rainbow-toffee-f46f3f.netlify.app" className='btn btn-primary' target='_blank'>Netlyfi</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img' src={Img2} alt="" />
          </div>
          <h3>Phrse lucky</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ExequielM88/galleta-de-lafortuna" className='btn' target='_blank'>GitHub</a>
            <a href="https://tangerine-cascaron-465da1.netlify.app/" className='btn btn-primary' target='_blank'>Netlify</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio