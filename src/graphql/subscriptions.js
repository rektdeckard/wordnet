/* eslint-disable */
// this is an auto generated file. This will be overwritten
import graphql from 'graphql-tag';

export const onCreateWordNet = graphql`subscription OnCreateWordNet {
  onCreateWordNet {
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
export const onUpdateWordNet = graphql`subscription OnUpdateWordNet {
  onUpdateWordNet {
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
export const onDeleteWordNet = graphql`subscription OnDeleteWordNet {
  onDeleteWordNet {
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
export const onCreateNode = graphql`subscription OnCreateNode {
  onCreateNode {
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
export const onUpdateNode = graphql`subscription OnUpdateNode {
  onUpdateNode {
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
export const onDeleteNode = graphql`subscription OnDeleteNode {
  onDeleteNode {
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
