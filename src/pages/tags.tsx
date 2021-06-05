import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: any) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue}
              {' '}
              (
              {tag.totalCount}
              )
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
