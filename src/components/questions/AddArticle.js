import React, { useEffect, useRef, useState } from 'react';
import "./Questions.scss"
import { Editor } from '@tinymce/tinymce-react';
import { WithContext as ReactTags } from 'react-tag-input';
import UploadHeroImage from "./upload-to-cloud"
import { create, CID } from "ipfs-http-client";
import { prototype } from "stream";

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];
const AddArticle = () => {
    const editorRef = useRef(null);
    const [title,setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const handleAddition = tag => {
        setTags([...tags, tag]);
        console.log(tag)
      };


    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
      };
      const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };


      const [heroImg,setHeroImage] =  useState(null)

      async function  DataStoring  ()
    {

      if (editorRef.current) 
      {
        console.log(title)
      }
      console.log(editorRef.current.getContent())
      console.log(typeof(editorRef.current.getContent()))
     
        //nft storage
        const client = create("https://ipfs.infura.io:5001/api/v0")
        const StringTitle = JSON.stringify(title);
        const Stringtags = JSON.stringify(tags);
        const { cid } = await client.add([StringTitle,editorRef.current.getContent(),Stringtags,uploadImage])
        console.log(cid);
<<<<<<< HEAD
    // console.log(cid._baseCache);
=======
        console.log(cid._baseCache);
>>>>>>> 947ca4d85a384351f9370f5f98aecda70d230091
  }


    // function for uploading hero image
    const client = create('https://ipfs.infura.io:5001/api/v0')
    const [uploadImage,setUploadedImage] = useState();
    const heroImage = useRef(null); 
    function reset ()
    {
        setHeroImage(null)
    }
    async function UploadImage(e)
    {
        const file = e.target.files[0];
        console.log(file);
        setHeroImage(file);
       
        try
        {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setUploadedImage(url);
            console.log(url);


        }
        catch (error) 
        {
            console.log('Error uploading file: ', error)
        }  
    }
    return(
        <>
            <div className="question_heading">
                Add the artical
            </div>
            <div className="Question_fields">
                <div className="title">
                    <div className="title-heading">
                        Title:
                    </div>
                    <div className="title_instruction">
                        Be spacific and Imagine you are asking writing article to someone
                    </div>
                    <div className="title_textfield">
                        <input type="text" className="input_title" placeholder='Enter Title of Article here' onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                </div>
                <div className='featured-image'>
                    {
                        heroImg
                        ?
                        <>
                            <img src={uploadImage} className="uploaded_image" />
                            <button onClick={(e)=>{reset()}}>
                                Cancel
                            </button>
                         </>
                        :
                            <div onClick={(e)=> {heroImage.current.click()}}><UploadHeroImage/></div>
                    }
                </div>
                <input
                    type="file"
                    name="hero-image"
                    className='aa_input-featured-image'
                    ref = {heroImage}
                    onChange={(e)=>{UploadImage(e)}}
                    hidden
                />
                <div className="body">
                    <div className="body_title">
                        Body:
                    </div>
                    <div className="body_instruction">
                        Include all information someone would need to know from this article.
                    </div>
                    <div className="body_textfield">
                    <input id="my-file" type="file" name="my-file" style={{display:"none"}} onChange="" />

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
        <div className="tag">
          <div className="tag_title">Tags</div>
          <div className="tag-input">
            <ReactTags
              tags={tags}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleTagClick={handleTagClick}
              inputFieldPosition="inline"
              autocomplete
            />
          </div>
        </div>
        <div className="submit-btn-parent">
          <button className="submit-btn" onClick={DataStoring}>
            Submit the Article
          </button>
        </div>
      </div>
    </>
  );
};

export default AddArticle;
