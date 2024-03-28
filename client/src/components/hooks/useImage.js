import { useEffect, useState } from 'react';

const useImage = (filePath) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    console.log('filePath =', filePath);
    const fetchImage = async () => {
      try {
        if (!filePath) {
          throw new Error('File name is missing.');
        }
        const response = await import(`../../../public/resources/images/${filePath}`);
        setImage(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [filePath]);
  return { loading, error, image };
}

export default useImage;
