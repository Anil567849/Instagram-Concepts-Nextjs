import Posts from './_components/Posts'
import Story from './_components/Story'
 
async function getStory(username: string) {
  const res = await fetch(`https://api.instagram.com/story/${username}`)
  return res.json()
}
 
async function getPost(username: string) {
  const res = await fetch(`https://api.instagram.com/post/${username}`)
  return res.json()
}
 
export default async function Page({ params: { username }}: {
  params: { username: string }
}) {
  const storyData = getStory(username)
  const postData = getPost(username)
 
  // parallel fetching
  const [stories, posts] = await Promise.all([storyData, postData])
 
  return (
    <>
      <Story stories={stories} />
      <Posts posts={posts} />
    </>
  )
}