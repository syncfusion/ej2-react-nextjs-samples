import "./badge.css";
import Image from "next/image";
import pic1 from "@/images/avatar/pic01.png"

const Badge = () => {

  return (
    <div className="control-pane">
      <div className="sample_container avatar-badge">
        <div className="avatar-block">
          {/* <!-- Card Component --> */}
          <div className="e-card e-avatar-showcase">
            <div className="e-card-content">
              <div className="avatar-sub-block">
                {/* <!-- xSmall Avatar--> */}
                <div className="e-avatar e-avatar-xsmall">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle"> 6 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Small Avatar--> */}
                <div className="e-avatar e-avatar-small">
                <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle"> 12 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Avatar--> */}
                <div className="e-avatar">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 46 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Large Avatar--> */}
                <div className="e-avatar e-avatar-large">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 82 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- xLarge Avatar--> */}
                <div className="e-avatar e-avatar-xlarge">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 99+ </span>
              </div>
            </div>
          </div>
        </div>
        <div className="circleAvatar avatar-block">
          {/* <!-- Card Component --> */}
          <div className="e-card e-avatar-showcase">
            <div className="e-card-content">
              <div className="avatar-sub-block">
                {/* <!-- xSmall Circle Avatar--> */}
                <div className="e-avatar e-avatar-circle e-avatar-xsmall">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle"> 6 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Small Circle Avatar--> */}
                <div className="e-avatar e-avatar-circle e-avatar-small">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle"> 12 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Circle Avatar--> */}
                <div className="e-avatar e-avatar-circle">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 46 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- Large Circle Avatar--> */}
                <div className="e-avatar e-avatar-circle e-avatar-large">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 82 </span>
              </div>
              <div className="avatar-sub-block">
                {/* <!-- xLarge Circle Avatar--> */}
                <div className="e-avatar e-avatar-circle e-avatar-xlarge">
                  <Image src={pic1} alt="profile_pic" />
                </div>
                {/* <!-- Notification Badge --> */}
                <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification"> 99+ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="action-description">
        <p>This sample demonstrates the integration of avatar component withmbadges to create notification avatars.</p>
      </div>
      <div id="description">
        <p>
          The avatar can be used with badges to indicate the new activities to users.
          The container needs <code>position: relative</code> property to achieve the
          notifications styled avatar. In this sample, the wrapper is applied with
          <code>position: relative</code> property with avatar and badge elements
          inside it.
        </p>
        <p>
          Since the avatar is a supportive and dependent component, it can be used in
          many ways and have wide variety of use-cases.
        </p>
      </div>
    </div>
  );
}
export default Badge;
