import React, { useState } from "react";

import useravtar from "./man.png";
import "./userstyle/profile.scss";

const Profile = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <section className="main-container">
        <div className="first-block">
          <img src={useravtar} alt="user avatar" height="128px" width="128px" />
          <div className="user-info">
            <h1 className="user-name">Jaydip Patel</h1>
            <p> jdpatel4405@gmail.com</p>
          </div>
        </div>
        <div className="nav-user">
          <button
            onClick={() => {
              setShow(true);
              setShow2(false);
            }}
          >
            Profile
          </button>
          <button
            onClick={() => {
              setShow2(true);
              setShow(false);
            }}
          >
            Activity
          </button>
          {show ? (
            <section className="profile-block">
              <div className="left-block">
                <h2>Profile Block</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi explicabo animi reiciendis consectetur iusto
                  accusantium voluptate! Harum dignissimos exercitationem
                  commodi delectus natus molestias explicabo libero? Voluptate
                  repudiandae praesentium quis maxime at, unde neque
                  consequuntur exercitationem! Dolores alias porro esse. Atque
                  mollitia nobis a cumque, adipisci tenetur dolore maiores autem
                  non? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas iusto nesciunt doloribus nemo delectus, amet
                  laudantium suscipit quisquam necessitatibus nihil aliquid
                  placeat debitis laborum
                </p>
              </div>
              <div className="right-block">
                <h2>Hello There</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus optio corporis quasi blanditiis adipisci
                  voluptatibus sapiente temporibus ducimus voluptates nobis.
                  Officiis suscipit enim sapiente veniam ipsum. Aliquid unde
                  magnam similique mollitia aliquam reprehenderit omnis rerum
                  accusamus maiores harum modi sed velit obcaecati cum itaque
                  dolor quasi, nihil iusto ullam. Eaque, excepturi vero rem
                  rerum doloribus vitae, odit autem ut voluptates nulla,
                  similique beatae. Harum fugit, odio dicta sit enim autem
                  facere ducimus quasi eveniet veniam repellendus, officiis
                  ipsum sapiente dolorum voluptatem unde blanditiis. Aperiam hic
                  velit inventore nesciunt ut ullam fugit porro, officia
                  doloremque labore, laudantium placeat ad quos. Totam!
                </p>
              </div>
            </section>
          ) : null}
          {show2 ? (
            <section className="activity-block">
              <h2>Activity Block</h2>
              <p>
                itaque recusandae voluptatum amet sapiente, nulla nihil numquam?
                Corporis, quidem unde. Ratione inventore animi quidem voluptatum
                placeat, quaerat similique ipsa itaque, eum quos deserunt a sed
                non maxime provident nesciunt earum officia quas perferendis
                amet quia illo voluptatibus eius accusamus? Ipsum eum facere ab
                ut ex quis illo quas accusantium officia. Eius tempora odit
                accusantium ipsam non perspiciatis voluptate error nemo illum
                ullam eum quas temporibus dolorem in quo quibusdam ab, inventore
                amet quia praesentium ratione asperiores modi officiis quis?
                Eligendi quam repellat enim aliquid eveniet asperiores ipsam non
                quisquam! Maiores ipsum neque officia animi non. Doloremque
                perspiciatis provident aut! Voluptatibus suscipit sapiente
                ratione commodi, odit deserunt accusantium optio.
              </p>
            </section>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Profile;
