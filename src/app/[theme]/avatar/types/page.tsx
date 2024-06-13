import './types.css';
import Image from "next/image";
import pic1 from "@/images/avatar/pic01.png"

const Types = ()  => {

    return (
        <div className='control-pane'>
            <div className="sample_container avatar-types">
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                                <Image className="image" src={pic1} alt="avatar" />
                            </div>
                        </div>
                        <div className="e-card-content">
                            <div>Image</div>
                        </div>
                    </div>
                </div>
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                                <div className="svg_icons chrome"></div>
                            </div>
                        </div>
                        <div className="e-card-content">
                            <div>SVG</div>
                        </div>
                    </div>
                </div>
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle">GR</div>
                        </div>
                        <div className="e-card-content">
                            <div>Initial</div>
                        </div>
                    </div>
                </div>
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                                <div className="e-people icons"></div>
                            </div>
                        </div>
                        <div className="e-card-content">
                            <div>Font Icon</div>
                        </div>
                    </div>
                </div>
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle">User</div>
                        </div>
                        <div className="e-card-content">
                            <div>Word</div>
                        </div>
                    </div>
                </div>
                <div className="avatar-block">
                    {/* <!-- Card Component --> */}
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {/* <!-- XLarge Circle Avatar Component --> */}
                            <div className="e-avatar e-avatar-xlarge e-avatar-circle custom">
                                <div className="e-people icons"></div>
                            </div>
                        </div>
                        <div className="e-card-content">
                            <div>Custom</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the different types of content that are used with avatar component like SVG icons, Font icons, words, letters, and images.</p>
            </div>
            <div id="description">
                <p>
                    The avatar component is flexible to support various types of icons and
                    images. In this sample, the content like SVG, font icons, and letters will
                    be wrapped by the avatar element.
                </p>
            </div>
        </div>
    );
}
export default Types;