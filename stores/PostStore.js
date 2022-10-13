export const usePostStore = defineStore('post', {
    state: () => ({
        posts: null,
        isLoading: true
    }),
    getters: {
        getPosts(){
            return this.posts
        },
        getLoading(){
            return this.isLoading
        }
    },
    actions: {
       setPosts(posts){
           this.posts = posts
       },
        setLoading(){
           this.isLoading = false
        }
    },
})