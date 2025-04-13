import "./Image.css"
import { useState } from "react";
import { saveAs } from 'file-saver';
import { LINK_API, PUBLIC_KEY} from "../../config";

const Image = (props) => {
    const urls = props.item.urls.regular;
    const [hoveredimage, setHoveredimage] = useState(false);
    function downloadHandle() {

        (async () => {
            let name = 'img' + '.jpg';
            const api_link_download = LINK_API + '/' + 'photos/' + props.item.id + '/download' + '?client_id=' + PUBLIC_KEY;
            let link_download = '';
            await fetch(api_link_download, {
                method: "GET",
            })
                .then(resp => resp.json()).then(resp => { link_download = resp.url }).then(error => console.log(error));
            let blob = await fetch(link_download).then((r) => r.blob());
            console.log(blob);
            saveAs(blob, name);
        })();

    }

    return (
        <>
            {
                hoveredimage === true ?
                    (<div className="item-image" onMouseEnter={() => { setHoveredimage(true) }} onMouseLeave={() => setHoveredimage(false)}>
                        <img src={urls} alt="" className="main-image-blur" />
                        {hoveredimage && (
                            <div className="button-download" onClick={() => downloadHandle()} />
                        )}
                    </div>
                    ) : (
                        <div className="item-image " onMouseEnter={() => { setHoveredimage(true) }} onMouseLeave={() => setHoveredimage(false)}>
                            <img src={urls} alt="" className="main-image" />
                        </div>
                    )
            }
        </>
    )
}

export default Image
