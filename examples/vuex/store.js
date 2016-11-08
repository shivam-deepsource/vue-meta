import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // STATE
  state: {
    post: null,
    posts: [{
      slug: 'a-sample-blog-post',
      title: 'A Sample Blog Post',
      content: 'This is the blog post content',
      published: true
    }, {
      slug: 'an-unpublished-blog-post',
      title: 'An Unpublished Blog Post',
      content: 'This is the blog post content',
      published: false
    }, {
      slug: 'another-blog-post',
      title: 'Another Blog Post',
      content: 'This is the blog post content',
      published: true
    }]
  },

  // GETTERS
  getters: {
    post (state) {
      return state.post
    },
    publishedPosts (state) {
      return state.posts.filter((post) => post.published)
    },
    publishedPostsCount (state, getters) {
      return getters.publishedPosts.length
    }
  },

  // MUTATIONS
  mutations: {
    getPost (state, { slug }) {
      state.post = state.posts.find((post) => post.slug === slug)
    }
  },

  // ACTIONS
  actions: {
    getPost ({ commit }, payload) {
      commit('getPost', payload)
    }
  }
})