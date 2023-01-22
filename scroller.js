window.onscroll = () => scroller()
const scroller = () => {
  const progressBar = document.querySelector('[data-scrollerProgress]') 
    bodyScroll = document.body.scrollTop,
    elementScroll = document.documentElement.scrollTop,
    heightScroll = document.documentElement.scrollHeight,
    heightClient = document.documentElement.clientHeight,
    sScroll = bodyScroll|| elementScroll,
    height = heightScroll - heightClient,
    scrolled = (sScroll / height) * 100,
  scrollerProgress.style.width = `${scrolled}%`;
}
