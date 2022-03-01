const routes = {
  home: {
    value: '/',
  },
  login: {
    value: '/log-in',
  },
  user: {
    value: '/user',
    detail: {
      value: (userId) => `/house-detail/:${userId}`,
    }
  },
  project: {
    value: '/project'
  },
}

export default routes
