import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/**
 * Queries Data for Page with GraphQL
 * - name of the constant isn’t important, as Gatsby looks for an exported graphql string from the file rather than a specific variable
 * - you can only have one page query per file
 * - data prop contains the results of the page GraphQL query, and matches the shape of the query
 * - see {@link https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/ | docs} for more
 */
export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around"
      />
      <h1>About This Site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
