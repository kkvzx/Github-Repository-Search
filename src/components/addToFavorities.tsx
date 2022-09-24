export const addToFavorites = (data: any, favorites: any, setFavorites: any) => {
  // checks if item is already in favorites if yes then delete it
  if (favorites.filter((fav: any) => fav.sourceUrl === data.sourceUrl).length > 0) {
    setFavorites((prev: any) => prev.filter((fav: any) => fav.sourceUrl !== data.sourceUrl));
  } else {
    setFavorites((prev: any) => [...prev, data]);
  }
};

// Jeżeli chce żeby to zadziałało to tutaj musi się odbywać zapisanie do localstorage
