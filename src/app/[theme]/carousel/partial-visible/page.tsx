'use client';
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from '@syncfusion/ej2-react-navigations';
import './partial-visible.css';
import Image from 'next/image';
import bridge from "@/images/carousel/bridge.jpg"
import trees from "@/images/carousel/trees.jpg"
import waterfall from "@/images/carousel/waterfall.jpg"
import sea from "@/images/carousel/sea.jpg"
import rocks from "@/images/carousel/rocks.jpeg"

const PartialVisible = () => {

    const itemTemplate1 = () => {
        return (
            <figure className="img-container">
                <Image src={bridge} alt="bridge" style={{ height: "100%", width: "100% " }} />
                <figcaption className="img-caption">Golden Gate Bridge, San Francisco</figcaption>
            </figure>
        );
    }
    const itemTemplate2 = () => {
        return (
            <figure className="img-container">
                <Image src={trees} alt="trees" style={{ height: "100%", width: "100% " }} />
                <figcaption className="img-caption">Spring Flower Trees</figcaption>
            </figure>
        );
    }
    const itemTemplate3 = () => {
        return (
            <figure className="img-container">
                <Image src={waterfall} alt="waterfall" style={{ height: "100%", width: "100% " }} />
                <figcaption className="img-caption">Oddadalen Waterfalls, Norway</figcaption>
            </figure>
        );
    }
    const itemTemplate4 = () =>{
        return (
            <figure className="img-container">
                <Image src={sea} alt="sea" style={{ height: "100%", width: "100% " }} />
                <figcaption className="img-caption">Anse Source d`Argent, Seychelles</figcaption>
            </figure>
        );
    }
    const itemTemplate5 = () => {
        return (
            <figure className="img-container">
                <Image src={rocks} alt="rocks" style={{ height: "100%", width: "100% " }} />
                <figcaption className="img-caption">Stonehenge, England</figcaption>
            </figure>
        );
    }

    return (
        <div className='control-pane'>
            <div className='control-section partial-carousel-section'>
                <div className='control carousel-sample'>
                    {/* Render the Carousel Component */}
                    <CarouselComponent cssClass="partial-carousel" partialVisible={true}>
                        <CarouselItemsDirective>
                            <CarouselItemDirective template={itemTemplate1} />
                            <CarouselItemDirective template={itemTemplate2} />
                            <CarouselItemDirective template={itemTemplate3} />
                            <CarouselItemDirective template={itemTemplate4} />
                            <CarouselItemDirective template={itemTemplate5} />
                        </CarouselItemsDirective>
                    </CarouselComponent>
                </div></div>
            <div id="action-description">
                <p>This sample demonstrates the partial visible functionality of the <a
                    href="https://www.syncfusion.com/react-ui-components/react-carousel" target="_blank">React Carousel</a> component.
                </p>
            </div>
            <div id="description">
                <p>
                    The <code>React Carousel</code> component shows partially visible previous/next slides by setting the
                    <code>partialVisible</code> property to true. By default, this property is set to <code>false</code>.
                </p>
                <p>See also</p>
                <p>
                    <a target='_blank'href="https://ej2.syncfusion.com/react/documentation/carousel/getting-started/">React Carousel Getting Started</a>.
                </p>
            </div>
        </div>
    );
}
export default PartialVisible;