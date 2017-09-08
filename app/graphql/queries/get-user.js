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
          id
          isFork
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
      repositories (last: 100) {
        totalCount
        nodes {
          id
          isFork
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
      pullRequests (last: 100) {
        totalCount
        nodes {
          id
          title
          merged
          repository {
            id
            isFork
            nameWithOwner
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
          commits (last: 100) {
            nodes {
              commit {
                message
              }
            }
          }
        }
      }
      followers (last: 100) {
        totalCount
        nodes {
          id
          login
          avatarUrl
        }
      }
    }
  }
`;
