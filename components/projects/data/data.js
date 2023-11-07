const imageContext = import.meta.globEager('./project-images/*.{jpg,svg}');

const projects = Object.entries(imageContext).map(([imagePath, imageImport]) => {
  const fileName = imagePath.replace('./project-images/', ''); // Get the file name
  const [title, category] = fileName.split('-'); // Split the file name into title and category

  return {
    id: title,
    title: title,
    category: category, // Use the extracted category
    img: imageImport.default,
  };
});

export default projects;
