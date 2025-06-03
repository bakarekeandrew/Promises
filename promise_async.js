// Convert this Promise chain to use async/await:
// function processData() {
//     return fetchUser()
//         .then(user => fetchUserPosts(user.id))
//         .then(posts => posts.filter(post => post.published))
//         .catch(error => console.error('Error:', error));

async function processData(){
    try {
         const user = await fetchUser();
         const posts = await fetchUserPosts(user.id);
         const publishedPosts = posts.filter(post => post.published);
         return publishedPosts;
    }catch (error) {
        console.error('Error:', error);
        return [];
    }
}