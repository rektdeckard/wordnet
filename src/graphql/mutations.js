/* eslint-disable */
// this is an auto generated file. This will be overwritten
import graphql from 'graphql-tag';

export const createWordNet = graphql`mutation CreateWordNet(
  $input: CreateWordNetInput!
  $condition: ModelWordNetConditionInput
) {
  createWordNet(input: $input, condition: $condition) {
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
export const updateWordNet = graphql`mutation UpdateWordNet(
  $input: UpdateWordNetInput!
  $condition: ModelWordNetConditionInput
) {
  updateWordNet(input: $input, condition: $condition) {
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
export const deleteWordNet = graphql`mutation DeleteWordNet(
  $input: DeleteWordNetInput!
  $condition: ModelWordNetConditionInput
) {
  deleteWordNet(input: $input, condition: $condition) {
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
export const createNode = graphql`mutation CreateNode(
  $input: CreateNodeInput!
  $condition: ModelNodeConditionInput
) {
  createNode(input: $input, condition: $condition) {
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
export const updateNode = graphql`mutation UpdateNode(
  $input: UpdateNodeInput!
  $condition: ModelNodeConditionInput
) {
  updateNode(input: $input, condition: $condition) {
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
export const deleteNode = graphql`mutation DeleteNode(
  $input: DeleteNodeInput!
  $condition: ModelNodeConditionInput
) {
  deleteNode(input: $input, condition: $condition) {
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
