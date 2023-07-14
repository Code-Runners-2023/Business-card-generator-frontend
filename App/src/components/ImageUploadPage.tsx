import React from 'react';

const ImageUploadPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="file" id="input_file" style={{ marginBottom: '10px' }} />
      <button type="submit" id="button_submit">
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploadPage;
