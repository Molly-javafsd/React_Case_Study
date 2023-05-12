
import React from 'react';
import { Slide } from 'react-slideshow-image';

export default function Grocery() {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
    
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      
    },
    {
      url: 'https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      
    },
    {
      url: 'https://media.istockphoto.com/id/1479168465/photo/nutrition-is-key.jpg?b=1&s=170667a&w=0&k=20&c=0KBbxAWXL-ouDasYFBP9GID2QkekvaqKWCFUgmqFYuY=',
      
    },
    {
      url:'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url:'https://plus.unsplash.com/premium_photo-1661381015121-f7fcb9aa6768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index}>
          <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}
