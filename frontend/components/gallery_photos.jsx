const getGalleryItem = () => {
  const collectionId = 1522732;
  const numImagesAvailable = 100;

  // const randIndex = Math.floor(Math.random()*numImagesAvailable);
  const randIndex = 4;
  let photo_url = `https://source.unsplash.com/collection/${collectionId}/480x480/?sig=${randIndex}`;
  return photo_url;
}

export default getGalleryItem;
