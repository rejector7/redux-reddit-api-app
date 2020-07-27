### APP Design

#### Purpose

select and show posts of subreddit

#### functions
select subreddit
fetch and show subreddit
out-of-date fetch and update subreddit

#### state
{
  selectedsubreddit: 'frontend',
  postsBySubreddit: { 
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          id: 42,
          title: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          title: 'Creating a Simple Application Using React JS and Flux Architecture'
        }
      ]
    }
  }
}

#### actions
selectSubreddit
requestPosts
receivePosts


#### reducers
preState, action -> new state

selectedSubreddit
posts
postsBySubreddit

