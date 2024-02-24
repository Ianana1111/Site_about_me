import classes from './footer.module.css';
import Image from 'next/image';
export default function Footer() {
  return (
    <>
      <div className={classes.ContactInfo}>
        <div className={classes.circle}>
          <a href="https://www.facebook.com/profile.php?id=100015369339061">
            <Image 
              src = "/images/icons/fbi.png" 
              alt = "connect to fb official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://www.linkedin.com/in/i-chen-lee-284315249/">
            <Image 
              src = "/images/icons/linkedin.png" 
              alt = "connect to github official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://twitter.com/liyiche36486829">
            <Image 
              src = "/images/icons/twi.png" 
              alt = "connect to twi official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://www.instagram.com/hakaman_joymua/">
            <Image 
              src = "/images/icons/insta_log.png" 
              alt = "connect to ig official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://github.com/Ianana1111">
            <Image 
              src = "/images/icons/github.png" 
              alt = "connect to github official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCM9WxxNJIJWC8mo3p93ZxjQ">
            <Image 
              src = "/images/icons/YouTube.png" 
              alt = "connect to github official web" 
              width={37}
              height={37}
            />
          </a>
          <a href="https://gitlab.com/ian52759">
            <Image 
              src = "/images/icons/gitlab.png" 
              alt = "connect to github official web" 
              width={37}
              height={37}
            />
          </a>
        </div>
      </div>

      <div className={classes.copyright}>
        &copy; I CHEN LEE. All Rights Reserved.
      </div>
    </>
  );
}

{/* <div className={classes.intro}>
          <img src="/assets/images/logo/dog_sleep.png" alt="email"/>
            <p>此網站目的為提供題目解題思想和程式碼解答，順便紀錄大學生活，</p><br/>
            <p>另外也順便展示期間所做project樣貌，煩請各位多加指點</p>
        </div> */}