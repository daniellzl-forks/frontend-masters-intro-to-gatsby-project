/**
 * {SanityEpisode.slug__current}.js
 * - curly braces denote that we're using GraphQL data to create the pages
 * - then we set the GraphQL type, followed by the field to use
 *
 * @example
 *  {SanityEpisode.slug__current}.js
 *  for episode "Serverless Functions and TypeScript on Netlify" becomes
 *  http://localhost:8000/episode/serverless-functions-and-typescript-on-netlify
 */

import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout.js';

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;

  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={episode?.image?.asset?.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date}) - {episode.description}
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
        </li>
      </ul>
    </Layout>
  );
}
