import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Prism from '../../prism'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import './index.css'
import '../styles/layout-override.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Personal Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div 
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style= {{ flex: 1 , background: '#efefef'}}> {children()} </div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>

              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Personal Blog"
                  description="Articles and thoughts that I have collected over the years."
                />
                <Sidebar
                  title="About author"
                  description="I am a UI Engineer learning React and Node.js based in Bangalore. Browser is my playground, I just switch between Chrome and Terminal all day, and work in between"
                  />
              </div>
            </div>
          )
        }
      </Media>

    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
