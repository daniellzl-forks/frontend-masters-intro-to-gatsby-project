/* 
  Example GraphQL query for siteMetdata

  query GetSiteMetadata {
    site {
      siteMetadata {
        siteUrl
        title
        description
        image
      }
    }
  }
*/
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'Frontend Masters Intro to Gatsby course project',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: ['gatsby-plugin-react-helmet'],
};
