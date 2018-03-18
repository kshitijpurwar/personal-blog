import React, { Component } from "react";
import Helmet from "react-helmet";
import Prism from "prismjs"

export default class Template extends Component{
  render(){
    const { data } = this.props; 
    const post = data.markdownRemark;    
      return (
        <div className="blog-post-container">
          <Helmet title={`Personal Blog - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
              />
          </div>
        </div>
    );
  }

};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`