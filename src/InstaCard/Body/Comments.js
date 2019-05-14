import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { comments } = data;
  const sortedComments = comments.sort((a, b) => {
    return parseInt(a.postedAt) - parseInt(b.postedAt)
  })
  const commentList = sortedComments.map((comment) => 
    <Comment
      key={`comment-${comment.postedAt}`}
      theme={theme}
      username={comment.poster}
      comment={comment.body} />
  )
  return (
    <ul className="comments">
      {commentList}
    </ul>
  );
};

Comments.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object
}

Comments.defaultProps = {
  theme: 'light',
  data: {
    commentOne: {
      poster: "posterone",
      body: "This is the insta-card"
    },
    commentTwo: {
      poster: "postertwo",
      body: "So cool!"
    }
  }
}


export default Comments;