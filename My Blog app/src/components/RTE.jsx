import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

function RTE ({name, control, defaultValue =""}){
    return (
      <div className='w-full'>
        <Controller
        name={name}
        control={control}
        render={({field: {onChange} }) => (
          <Editor
            apiKey='ukjun9dd2vmc12fgd0ipdaxvswctsndf6uva3e1bz137y4ts'
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              paste_data_images: true,
              file_picker_callback: (cb, value, meta) => {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                
                input.addEventListener('change', (e) => {
                  const file = e.target.files[0];
                
                  const reader = new FileReader();
                  reader.addEventListener('load', () => {
                    const id = 'blobid' + (new Date()).getTime();
                    const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                    const base64 = reader.result.split(',')[1];
                    const blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
                    cb(blobInfo.blobUri(), { title: file.name });
                  });
                  reader.readAsDataURL(file);
                });
                
                input.click();
              },
            }}
            onEditorChange={onChange}
            // {...field}
          />
        )}
      />
      </div>
  );
};

export default RTE;