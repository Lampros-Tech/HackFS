import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { WithContext as ReactTags } from "react-tag-input";

export default function EditProfile({ mainContract, closeModal }) {
  const editorRef = useRef(null);
  const [tags, setTags] = useState([]);

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  //
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [description, setDescription] = useState(null);
  const [tag, setTag] = useState([]);

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    console.log(tag);
  };
  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const getUserDetails = async (e) => {    
    console.log(name);
    console.log(email);
    console.log(designation);
    console.log(description);
    console.log(tags);
    
    const tagList = [];
    for(let i=0;i<tags.length;i++){
      console.log(tags[i].text);
      tagList[i] = tags[i].text;
    }
    console.log(tagList);
    // console.log(mainContract);
    const tx= await mainContract.createProfile(name,email,designation,description,tagList);
    await tx.wait();
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          {/* <div className="titleCloseBtn">
            <img
              onClick={() => closeModal(false)}
              src={cancleButton}
              alt="user avatar"
              height="16px"
              width="16px"
            />
          </div> */}
          <div className="title">
            <h1>Edit Your Profile</h1>
            <svg className="svg-close"
              onClick={() => closeModal(false)}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.095 47.095"
            >
              <g>
                <path
                  d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21
		              L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831
		              c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0
                  C47.673,42.282,47.672,38.54,45.363,36.234z"
                />
              </g>
            </svg>
          </div>
          <div className="body">
            <h3>Display Name</h3>
            <input
              className="input-edit-profile"
              type="text"
              placeholder="Your Good Name"
              onChange={(event) => setName(event.target.value)}
            />
            <h3>Change Email</h3>
            <input
              className="input-edit-profile"
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <h3>Designation</h3>
            <input
              className="input-edit-profile"
              type="text"
              placeholder="e.g. 'Full Stack Developer'"
              onChange={(event) => setDesignation(event.target.value)}
            />
            <h3>About me</h3>
            <input
              className="input-edit-profile"
              type="text"
              placeholder="somthing about yourself"
              onChange={(event) => setDescription(event.target.value)}
            />            
            <h3>Tags</h3>
            <div>
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
          <div className="footer">
            <button
              className="save"
              onClick={() => {
                closeModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="save" onClick={(e) => getUserDetails()}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}
