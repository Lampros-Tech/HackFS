import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EditProfile({ closeModal }) {
  const editorRef = useRef(null);

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
            <h1>Edit Your Profile</h1>
          </div>
          <div className="body">
            <h3>Display Name</h3>
            <input className="input-edit-profile" type="text" placeholder="Your Good Name" />
            <h3>Change Email</h3>
            <input className="input-edit-profile" type="text" placeholder="email" />
            <h3>About me</h3>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>Tell the world about yourself.</p>"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
          <div className="footer">
            <button className="save"
              onClick={() => {
                closeModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="save" >Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}
