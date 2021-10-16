function photoAlbum(index, identity) {
  const photoAlbum = [];

  identity.forEach((photo, i) => {
    if (typeof photoAlbum[index[i]] === "undefined") {
      photoAlbum.push(photo);
    } else {
      const deleted = photoAlbum.splice(index[i]);
      photoAlbum.push(photo);
      photoAlbum.push(...deleted);
    }
  });

  console.log(photoAlbum, "\n");
}

photoAlbum([0, 1, 2, 1, 2], [0, 1, 2, 3, 4]);

photoAlbum([0, 1, 1], [0, 1, 2]);

photoAlbum([0, 0], [0, 1]);
