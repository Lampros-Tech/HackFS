import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { create } from "ipfs-http-client";
import Arrow from "./up-arrow";
import Axios from "axios";

const SingleQuestion = ({ account, mainContract, id }) => {
  const editorRef = useRef(0);

  const submitAnswer = async () => {
    const client = create("https://ipfs.infura.io:5001/api/v0");
    const { cid } = await client.add([editorRef.current.getContent()]);
    console.log(cid._baseCache.get("z"));
  };

  const [isLoading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = useState([]);
  const getArticles = async (e) => {
    const que_title = await mainContract.getQuestion(1);
    setTitle(que_title.q_title);
    console.log(que_title.q_cid);
    setLoading(false);
    const url = "https://ipfs.io/ipfs/" + que_title.q_cid;
    await Axios.get(url).then((response) => {
      console.log(response);
      setContent(response.data);
    });
    // const que_tag = await
  };

  useEffect(() => {
    getArticles();
  }, [mainContract]);

  if (isLoading) {
    return "loading";
  }
  return (
    <>
      <div className="single_Question">{title}</div>
      <div className="single_Question_description">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="custome_tags">
        <div className="disp-flex">
          <div className="left-side">
            <div className="tags">
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
              <div className="tag">hii</div>
            </div>
            <div className="vote-option">
              <div className="up-down-vote">
                <div className="upvote">
                  <Arrow />
                </div>
                <div className="downvote">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="profile right-side">
            <div className="profile-picture">
              <img></img>
            </div>
            <div className="profile-name"></div>
          </div>
        </div>
      </div>
      <div className="Answers">
        <div className="Answer-heading">Answers</div>
        <div className="Answer-component">
          {/* Answer title */}
          <div className="Answer_title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam
            suscipit temporibus doloribus qui expedita itaque rerum unde maxime,
            corporis, sint iste consequatur veritatis. Distinctio odit corporis
            labore ipsa vel.
          </div>
          {/* Answer description */}
          <div className="Answer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            possimus, ipsam labore fugiat quidem vel, blanditiis illum laborum
            doloribus tempore nobis nemo dolores laboriosam obcaecati cumque
            voluptatem eius. Quibusdam, quia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ea assumenda iste quo, soluta
            recusandae repellendus rerum maxime velit quos, ipsam aliquid?
            Beatae dolorum mollitia reiciendis. Ab quibusdam vel repellendus
            nisi?
          </div>
          {/* Answer Interaction */}
          <div className="Answer-engagement">
            <div className="answer-voting up-down-vote">
              <div className="upvote">
                <Arrow />
              </div>
              <div className="downvote">
                <Arrow />
              </div>
            </div>
            <div className="flex-grow"></div>

            <div className="profile">
              <div className="profile-picture">
                <img></img>
              </div>
              <div className="profile-name"></div>
            </div>
          </div>
        </div>
        {/* Enter the Answer */}
        <div className="Text-area">
          <div className="Instruction-title">Enter Answer below.</div>
          <Editor
            apiKey=""
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | image",
              image_title: true,
              automatic_uploads: true,
              file_picker_types: "image",
              file_picker_callback: function (callback, value, meta) {
                if (meta.filetype == "image") {
                  var input = document.getElementById("my-file");
                  input.click();
                  input.onchange = function () {
                    var file = input.files[0];
                    var reader = new FileReader();
                    reader.onload = function (e) {
                      console.log("name", e.target.result);
                      callback(e.target.result, {
                        alt: file.name,
                      });
                    };
                    reader.readAsDataURL(file);
                  };
                }
              },
              paste_data_images: true,

              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
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

        <div className="submit-answer">
          <button
            className="submit-answer-btn"
            onClick={() => {
              submitAnswer();
            }}
          >
            Submit the answer.
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
