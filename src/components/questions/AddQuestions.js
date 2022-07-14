import React, { useRef } from 'react';
import "./Questions.css"
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
const AddQuestions = () => {
    const editorRef = useRef(null);
  const log = () => {
        if (editorRef.current) 
        {
            console.log(editorRef.current.getContent());
        }
    }
    return(
        <>
           <div className="question_heading">
                Ask a Question here
           </div>
           <div className="Question_fields">
                <div className="tittle">
                    <div className="tittle-heading">
                        Tittle:
                    </div>
                    <div className="tittle_instruction">
                        Be spacific and Image you are asking question to another question.
                    </div>
                    <div className="tittle_textfield">
                        
                    <input type="text" className="input_title" placeholder='Enter Title of Quetion here'/>

                    </div>
                </div>
                <div className="body">
                    <div className="body_tittle">
                        Body:
                    </div>
                    <div className="body_instruction">
                        Include all information someone would need to aswer the question.
                    </div>
                    <div className="body_textfield">
                    <Editor
                            apiKey=''
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | image',
                                image_title: true,
                                automatic_uploads: true,
                                file_picker_types: 'image',
                                file_picker_callback: function (callback, value, meta) {
                                    if (meta.filetype == 'image') {
                                        var input = document.getElementById('my-file');
                                        input.click();
                                        input.onchange = function () {
                                            var file = input.files[0];
                                            var reader = new FileReader();
                                            reader.onload = function (e) {
                                                console.log('name',e.target.result);
                                                callback(e.target.result, {
                                                    alt: file.name
                                                });
                                            };
                                            reader.readAsDataURL(file);
                                        };
                                    }
                                },
                                paste_data_images: true,

                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            // tinymce.init({
                            //     selector: 'textarea',  // change this value according to your HTML
                            //     plugins: 'image',
                            //     toolbar: 'image',
                            //     image_list: [
                            //       { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
                            //       { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' }
                            //     ]
                            //   });
                        />
                    </div>

                </div>
                <div className='tag'>
                        <div className='tag_title'>
                            Tags
                        </div>
                        <div>
                        <Select 
                            options={options}
                            isMulti
                            multiValueLabel
                        />
                        </div>
                        
                </div>
           </div>
        </>
    )
}

export default AddQuestions;