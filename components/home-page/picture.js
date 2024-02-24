import classes from './picture.module.css';
import Image from 'next/image';

export default function Picture(){

  // const track = document.getElementById("image-track");

  // const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

  // const handleOnUp = () => {
  //   track.dataset.mouseDownAt = "0";  
  //   track.dataset.prevPercentage = track.dataset.percentage;
  // }

  // const handleOnMove = e => {
  //   if(track.dataset.mouseDownAt === "0") return;
    
  //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //         maxDelta = window.innerWidth / 2;
    
  //   const percentage = (mouseDelta / maxDelta) * -100,
  //         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
  //         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
  //   track.dataset.percentage = nextPercentage;
    
  //   track.animate({
  //     transform: `translate(${nextPercentage}%, -50%)`
  //   }, { duration: 1200, fill: "forwards" });
    
  //   for(const image of track.getElementsByClassName("image")) {
  //     image.animate({
  //       objectPosition: `${100 + nextPercentage}% center`
  //     }, { duration: 1200, fill: "forwards" });
  //   }
  // }

  // /* -- Had to add extra lines for touch events -- */

  // window.onmousedown = e => handleOnDown(e);

  // window.ontouchstart = e => handleOnDown(e.touches[0]);

  // window.onmouseup = e => handleOnUp(e);

  // window.ontouchend = e => handleOnUp(e.touches[0]);

  // window.onmousemove = e => handleOnMove(e);

  // window.ontouchmove = e => handleOnMove(e.touches[0]);
  return(
    <div className={classes.pic}>
      <div className={classes.imagetrack}>
        <Image 
            src = "/images/gall/claudio-schwarz-U34DyN6K_Eo-unsplash.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/clownwrasseedit.png" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/Dendrogyra-Cylindrus.jpeg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/dm-david-t_95LoJ4AE0-unsplash.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/eeledit.png" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/neom-EQ7x8WJMR4Q-unsplash.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/neom-YpUFf0kOWQ0-unsplash.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/spawnedit2.png" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/toa-heftiba-lhx3KMJv7V0-unsplash.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
        <Image 
            src = "/images/gall/Yellowtail-Flounder.jpg" 
            alt = "An image showing -5" 
            width = {300}
            height = {400}
            className={classes.image}
            draggable="false"
        />
      </div>
    </div>
  )
}