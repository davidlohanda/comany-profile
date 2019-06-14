import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import img1 from '../support/img/carousel2.png'
import img2 from '../support/img/carousel3.png'
import img3 from '../support/img/carousel4.png'
import img4 from '../support/img/carousel5.png'
import '../support/css/Bigetronstyle.css'

const items = [
    {
      src: img1,
      altText: '',
      caption: ''
    },
    {
        src: img2,
        altText: '',
        caption: ''
    },
    {
        src: img3,
        altText: '',
        caption: ''
    },
    {
        src: img4,
        altText: '',
        caption: ''
    },

  ];

class Bigetron extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

    render(){
        const { activeIndex } = this.state;
  
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src}  alt={item.altText} className="slideimg" />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
        return(
         <div className="bigetron-container ">
             <div className="b-content-1">
                <span>est. 2015</span>
             </div>
             <div className="b-content-2">
                <div className="b21">
                     <div className="bigimg-container">
                        <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                     </div>
                     <div className="bigtext-container">
                        <p className="b21-2 animated slideInDown duration-0.5s">We are providing wide range of <span>Electrical Switchboards</span></p>
                    </div>
                </div>
             </div>
         </div>
        )
    }
}

export default Bigetron