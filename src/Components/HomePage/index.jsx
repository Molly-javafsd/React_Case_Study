import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
  
}
const slideImages = [
  {
    url: 'https://www.cio.com/wp-content/uploads/2023/01/shopping-basket-with-fresh-food-grocery-supermarket-food-and-eats-picture-id1216828053-100862854-orig.jpg?quality=50&strip=all',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80',
    
  },
  {
    url: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
    
  },
  {
    url:'https://www.thespruceeats.com/thmb/6lfcov0DyrPVtE6zhX2law4RFA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg',
  },
  {
    url:'https://housing.com/news/wp-content/uploads/2022/11/ROOT-VEGETABLES-FEATURE-compressed.jpg',
  },
];

const Slideshow = () => {
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
export default Slideshow;