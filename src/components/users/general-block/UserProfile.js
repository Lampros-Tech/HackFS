import React from "react";
import "../general-block/userprofile.scss";

export default function UserProfile() {
  // const [show, setShow] = useState(true);
  // const [show2, setShow2] = useState(true);

  return (
    <>
      <section className="profile-block">
        <div className="left-block">
          <h3>Profile Left Block</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            explicabo animi reiciendis consectetur iusto accusantium voluptate!
            Harum dignissimos exercitationem commodi delectus natus molestias
            explicabo libero? Voluptate repudiandae praesentium quis maxime at,
            unde neque consequuntur exercitationem! Dolores alias porro esse.
            Atque mollitia nobis a cumque, adipisci tenetur dolore maiores autem
            non? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptas iusto nesciunt doloribus nemo delectus, amet laudantium
            suscipit quisquam necessitatibus nihil aliquid placeat debitis
            laborum
          </p>
        </div>
        <div className="right-block">
          <div className="about-block">
            <div className="card-title">
              <h3>About</h3>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="badges-block">
            <div className="card-title">
              <h3>Badges</h3>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="tags-block">
            <div className="card-title">
              <h3>Top Tags</h3>
              <button>Score</button>
              <button>Newest</button>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="post-block">
            <div className="card-title">
              <h3>Top Posts</h3>
              <button>Score</button>
              <button>Newest</button>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
