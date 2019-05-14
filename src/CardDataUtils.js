import moment from 'moment-timezone';
import imageOne from './images/image-one.jpg';
import imageTwo from './images/image-two.jpg';
import avatarOne from './images/avatar-one.png';
import avatarTwo from './images/avatar-two.png';

const firstDate = moment('2019-05-11 15:30', 'YYYY-MM-DD mm:ss').format('X')
const secondDate = moment('2019-05-11 17:30', 'YYYY-MM-DD mm:ss').format('X')
const thirdDate = moment('2019-05-13 15:30', 'YYYY-MM-DD mm:ss').format('X')
const fourthDate = moment('2019-05-13 17:30', 'YYYY-MM-DD mm:ss').format('X')

const cardDataOne = {
  id: 1,
  poster: "posteruser1",
  posterAvatar: avatarOne,
  imageUrl: imageOne,
  comments: [
    {
      postedAt: secondDate,
      poster: "commenter2",
      body: "So cool!"
    },
    {
      postedAt: firstDate,
      poster: 'commenter1',
      body: 'This is the insta-card'
    }
  ]
}

const cardDataTwo = {
  id: 2,
  poster: "posteruser2",
  posterAvatar: avatarTwo,
  imageUrl: imageTwo,
  comments: [
    {
      postedAt: thirdDate,
      poster: "commenter3",
      body: "Nice photo!"
    },
    {
      postedAt: fourthDate,
      poster: "commenter4",
      body: "Cute cat!"
    }
  ]
}

export const fetchData = (id = 1) => {
  return new Promise(function (resolve) {
    const data = id === 1 ? cardDataOne : cardDataTwo;
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}