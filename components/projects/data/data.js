const imageContext = import.meta.globEager('./project-images/*.{jpg,svg}');

const projects = Object.entries(imageContext).map(([imagePath, imageImport]) => {
  const title = imagePath.replace('./project-images/', '').replace(/\.(jpg|svg)/, '');

  return {
    id: title,
    title: title,
    category: 'Web Application',
    img: imageImport.default,
  };
});

export default projects;

