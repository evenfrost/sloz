const isElementInViewport = el => {
  const rect = el.getBoundingClientRect();
  const elementHeight = el.offsetHeight;

  return (rect.top + elementHeight) >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
};

const init = (selector = 'img[data-src]', config = {
  wait: 3000,
}) => {
  const images = Array.from(document.querySelectorAll(selector));

  if (!images.length) return;

  const imagesInViewport = [];
  const imagesInViewportLoaded = [];
  const imagesNotInViewport = [];
  let othersLoaded = false;

  images.forEach(image => {
    if (isElementInViewport(image)) {
      imagesInViewport.push(image);
    } else {
      imagesNotInViewport.push(image);
    }
  });

  const loadOtherImages = () => {
    othersLoaded = true;

    imagesNotInViewport.forEach(otherImage => {
      otherImage.src = otherImage.dataset.src;
    });
  };

  const forceLoadTimeout = setTimeout(loadOtherImages, config.wait);

  imagesInViewport.forEach((image, index) => {
    image.src = image.dataset.src;

    image.onload = () => {
      imagesInViewportLoaded.push(index);

      // naive check if all images in viewport are loaded
      if (imagesInViewportLoaded.length === imagesInViewport.length) {
        // if they did and force loading is not yet processed, load other images
        if (!othersLoaded) {
          clearTimeout(forceLoadTimeout);
          loadOtherImages();
        }
      }
    };
  });
};

export default init;
