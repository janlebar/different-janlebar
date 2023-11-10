/* const imageContext = import.meta.globEager('./project-images/*.{jpg,svg}');

const projects = Object.entries(imageContext).map(([imagePath, imageImport]) => {
  if (!imagePath) {
    // Handle the case where imagePath is undefined (e.g., invalid path or no matching files)
    return null;
  }
  
  const fileName = imagePath.replace('./project-images/', ''); // Get the file name
  const [title, category] = fileName.split('-'); // Split the file name into title and category

  // Remove the file extensions (.svg or .jpg) from the category
  const categoryWithoutExtension = category.replace(/\.(svg|jpg)/, '');

  return {
    id: title,
    title: title,
    category: categoryWithoutExtension, // Use the extracted category without the extension
    img: imageImport.default,
  };
}).filter(Boolean); // Remove null entries */

const projects 

export default projects;
