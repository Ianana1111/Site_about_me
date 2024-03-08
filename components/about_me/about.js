import ImageSlideshow from "../images/image-slideshow";
import Footer from "../layout/footer";
import classes from './about.module.css';
import { useRef } from 'react';

export default function About(){

  const leftRef = useRef(null);

  const handleLeftScroll = (event) => {
    const leftElement = leftRef.current;
    const deltaY = event.deltaY;

    // 检查滚动方向以及是否到达顶部或底部
    if ((deltaY < 0 && leftElement.scrollTop <= 0) || (deltaY > 0 && leftElement.scrollTop + leftElement.clientHeight >= leftElement.scrollHeight)) {
      // 阻止默认滚动行为
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleScroll = (event) => {
    const deltaY = event.deltaY;
    const right = document.getElementById('right');
    const scrollTop = right.scrollTop;
    const scrollHeight = right.scrollHeight;
    const clientHeight = right.clientHeight;

    if ((deltaY < 0 && scrollTop <= 0) || (deltaY > 0 && scrollTop + clientHeight >= scrollHeight)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const Bookmark = useRef();
  const scrollToBookmark = () => {
    if(Bookmark.current) {
      const offset = 1;
      const yoffset = Bookmark.current.getBoundingClientRect().top + window.pageYOffset - offset;
      const maxScroll = document.documentElement.scrollHeight-window.innerHeight;
      const minn = Math.min(yoffset, maxScroll);
      window.scrollTo({top: minn, behavior: "smooth"})
      // Bookmark.current.scrollIntoView({behavior: 'smooth'});
    }
  }
  return(
    // <div className = {classes.slideshow}>
    //   <ImageSlideshow/>
    // </div>
    <>
    <div className={classes.container}>
      <div id="left" ref={leftRef} className={`${classes.left} ${classes.floatbox}`} onWheel={handleLeftScroll}>

        <p><a href = "#" onClick={scrollToBookmark}>Autobiography</a></p>

        <p><a href = "#" onClick={scrollToBookmark}>education</a></p>
        <p><a href = "#" onClick={scrollToBookmark}>fun fact</a></p>

      </div>
      <div id="right" className={classes.right} onWheel={handleScroll}>
        <div>
          <h1>About</h1>
          <h2 ref = {Bookmark}>Autobiography (先上中文版，英文隨後跟上)</h2>
          <p>
            民國92年11月14日生，時至今日，雖已20卻依然無所成，但至少活的還算開心。
            <br/>
            個性開朗，時而內向時而外放，時機不一定，看哪天社牛 MODE 有沒有啟動。
            <br/>
            平時興趣大致上就，跳舞、打CODE、聽音樂，若三者同時滿足則人生無憾，但至今仍無法邊跳舞邊打CODE。
            <br/>
            3C學經歷如下：國小是位電視佐YT兒童，國中成為全職YT兒童，高中病入膏肓，大概算是senior YT binge watcher，現在則準備從YT watcher 屆引退。
            但最近突然愛上看電影，只能說天有不測風雲，小鴨視頻別再吸引我了。
            <br/>
            這part最後一個。偏愛的音樂類型沒有固定，只要夠爽我都愛，在這不藏私，現在最愛的三首如下。

          </p>
          <div className={classes.ifras}>
            <iframe 
              className={classes.ifra}
              src="https://open.spotify.com/embed/track/1y1AKHWOSL3zFPNNKyLRNQ?utm_source=generator&theme=0" 
              width="33%" 
              height="200" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; 
              clipboard-write; 
              encrypted-media; 
              fullscreen; 
              picture-in-picture" 
              loading="lazy"
            >
            </iframe>
            <iframe 
              className={classes.ifra}
              src="https://open.spotify.com/embed/track/1jcW6AjFWRyfnTXwLlMMlJ?utm_source=generator&theme=0" 
              width="33%" 
              height="200" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; 
              clipboard-write; 
              encrypted-media; 
              fullscreen; 
              picture-in-picture" 
              loading="lazy">
            </iframe>
            <iframe 
              className={classes.ifra}
              src="https://open.spotify.com/embed/track/3lRTgW7hR3lcpkHTj2Hi83?utm_source=generator&theme=0" 
              width="33%" 
              height="200" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; 
              clipboard-write; 
              encrypted-media; 
              fullscreen; 
              picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div className={classes.right_2}>
          <h2 ref = {Bookmark}>Education（這裡先用文字表示）</h2>
          <p>高中：師大附中 1524</p>
          <p>大一：交大機械 115 級</p>
          <p>大二：台大資工二（之後開一篇分享轉系心得）</p>
        </div>
        <div className={classes.right_2}>
          <h2 ref = {Bookmark}>Fun fact</h2> 
          <p> 1. 我右眼實際應該100度，但每次都猜到2.0 </p>
          <p> 2. 我很害羞 </p>
          <p> 3. 我音樂都只聽旋律，歌詞永遠都記不起來</p>
          <p> 4. 曾經拿過國中閩南語朗讀全校第三，但一堆基本台語都不會</p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}