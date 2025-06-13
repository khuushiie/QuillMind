import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import AISuggestionPanel from './AISuggestionPanel';

function RichTextEditor({ initialContent, onSave, documentId }) {
  const [content, setContent] = useState(initialContent || '');

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-3/4 bg-white rounded-lg shadow p-4">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="h-96"
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['link', 'image'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['clean']
            ]
          }}
        />
        <button
          onClick={() => onSave(content, documentId)}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Document
        </button>
      </div>
      <AISuggestionPanel content={content} />
    </div>
  );
}
export default RichTextEditor;