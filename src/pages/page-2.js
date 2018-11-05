import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const SecondPage = () => (
  <div class="entirePage">
  <Layout>

  <div class="mainBody">
    <h3>Portfolio</h3>

    <Link to="https://ajc-147.github.io/rps/?no-cache=1">RPS</Link>
    <br/>
    <Link to="https://ajc-147.github.io/hangmanJS/?no-cache=1">Hangman</Link>
    <br/>
    <Link to="https://ajc-147.github.io/unit-4-game/?no-cache=1">Crystal Collector</Link>
    <br/>
    <Link to="https://ajc-147.github.io/triviaJS/?no-cache=1">Basic Trivia</Link>
    <br/>
    <Link to="https://ajc-147.github.io/GIPHY/?no-cache=1">Giphy</Link>
    <br/>
    <Link to="https://ajc-147.github.io/evening-generator/?no-cache=1">Evening Generator</Link>
    <br/>
    <Link to="http://sheltered-scrubland-82709.herokuapp.com/">Democracy for Sale</Link>
    <br/>
    <Link to="https://hidden-savannah-90847.herokuapp.com/">PaceMaker</Link>
    <hr/>


    <Link to="/">Go back to About me</Link>
    </div>
  </Layout>
  </div>
)

export default SecondPage
