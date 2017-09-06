import { gql } from 'react-apollo';

export default gql`
  query UserQuery ($login: String!) {
    user (login: $login) {
      login
      name
      bio
      avatarUrl
      pinnedRepositories (last: 6) {
        totalCount
        nodes {
          nameWithOwner
          description
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
      repositories (last: 6) {
        totalCount
        nodes {
          nameWithOwner
          description
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
      pullRequests (last: 10) {
        totalCount
        nodes {
          repository {
            nameWithOwner
            description
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
      followers (last: 10) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
    }
  }
`;
