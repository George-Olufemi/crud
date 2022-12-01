import React from 'react'
import Form from './components/form'

const Post = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-xl mt-[30px] font-[700] mb-[30px] text-center">Create your Post</h1>
        <div className="flex justify-center items-center">
          <Form />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Post;