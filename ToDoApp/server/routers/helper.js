
const api = {
  GET: {
    projects: {
      value: '/projects'
    },
    users: {
      value: '/get-users'
    }
  },

  POST: {
    addProject: {
      value: '/add-project',
    },
    signUp: {
      value: '/sign-up',
    },
    getUser: {
      value: '/get-user',
    },
    logIn: {
      value: '/log-in',
    }
  },

  DELETE: {
    project: {
      value: '/delete-project'
    },
    user: {
      value: '/delete-user',
    }
  },

  PATCH: {
    editProject:{
      add: {
        value : '/add-task',
      },

      done:{
        value : '/done-task',
      },

      delete:{
        value: '/delete-task'
      },
    },

    editUser :{
      value: '/edit-user'
    }
  }
}

module.exports = { api }