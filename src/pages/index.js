import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo
        title="About This Site"
        description="More information about this site."
      />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Frontend Masters!</h1>
      </main>
    </>
  );
}
