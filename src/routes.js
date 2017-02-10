import TweetListPage from './pages/TweetListPage'
import TweetPage from './pages/TweetPage'

export default [
  {
    path: '/',
    component: TweetListPage
  },
  {
    path: '/tweets/:id',
    component: TweetPage
  }
]
