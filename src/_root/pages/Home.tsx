import PostCard from '@/components/shared/PostCard'
import { useGetRecentPost } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite'
import { Loader } from 'lucide-react'
import React from 'react'

const Home = () => {
  const { data:posts, isPending: isPostLoading, isError: isErrorPost } = useGetRecentPost()

  return (
      <div className="home-container">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feeds</h2>
          { isPostLoading && !posts ? (
            <Loader />
          ): (
            <ul className='flex flex-col flex-1 gap-9 w-full'>
              { posts?.documents.map((post: Models.Document)=>(
                <PostCard post={post} key={post.$id} />
              ))}
            </ul>
          )}
        </div>
      </div>
  )
}

export default Home