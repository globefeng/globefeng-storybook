export const DoScroll = () => {
  window.scrollTo(0, window.scrollY < 100 ? window.scrollY : 100);
}