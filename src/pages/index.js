import React from 'react'
import { Transition, Trail } from 'react-spring'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div class="entirePage">
  <Layout>

  <div class="mainBody">
    <h3>About me</h3>
    <p>As a graduate of George Mason University with a BA in Communication, I have professionally paired my education with my natural affinity for technology to find a passion for digital marketing. I primarily learned digital marketing skills in my previous position at KME.digital, where SEO/SEM and Google Analytics were a major part of my duties.

I am experienced in designing Adwords campaigns, conducting keyword research, managing social media accounts, and implementing best practices for on and off-site SEO. I am accustomed to conducting extensive research in order to understand an industry, target market, and determine appropriate cost-per-click.


Additionally, I have a strong foundation of political knowledge and a keen interest in current events, having also minored in Government at GMU. I volunteered in the Obama '12 campaign, as well as the Perriello ’17 campaign.

What a load of cobblers cup of tea chuffed marvelous Elementary my dear Watson the black death pulled a right corker, numbskull naff the lakes the black death wellies. A cracking Time Lord a bottle of plonk bloody shambles bogroll, the chippy up the duff bangers and mash ear hole it's me peepers, it's nicked throw a spanner in the works pulled a right corker.</p>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2 (portfolio)</Link>
    </div>
  </Layout>
  </div>
)

export default IndexPage
