import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
            edges {
                node {
                  ownerAvatarUrl
                  fullName
                  description
                  language
                  stargazersCount
                  forksCount
                  reviewCount
                  ratingAverage
                  id
                }
            }
        }
    }
`;

export const ME = gql`
query Me{
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
query repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    
      ownerAvatarUrl
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
    id
    reviews {
      edges {
        node {
          id
          rating
          createdAt
          text
           user {
            username
          }
        }
      }
    }
  }
} 
`