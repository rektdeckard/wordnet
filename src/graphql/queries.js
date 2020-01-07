/* eslint-disable */
// this is an auto generated file. This will be overwritten
import graphql from 'graphql-tag';

export const getWordNet = graphql`query GetWordNet($id: ID!) {
  getWordNet(id: $id) {
    id
    nodes {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const listWordNets = graphql`query ListWordNets(
  $filter: ModelWordNetFilterInput
  $limit: Int
  $nextToken: String
) {
  listWordNets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nodes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNode = graphql`query GetNode($id: ID!) {
  getNode(id: $id) {
    id
    content
    graph {
      id
      nodes {
        nextToken
      }
    }
    edges {
      id
      content
      graph {
        id
      }
      edges {
        id
        content
      }
    }
  }
}
`;
export const listNodes = graphql`query ListNodes(
  $filter: ModelNodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      graph {
        id
      }
      edges {
        id
        content
      }
    }
    nextToken
  }
}
`;
