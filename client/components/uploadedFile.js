import React from "react";
import "bootstrap/dist/css/bootstrap.css"
class UploadedFile extends React.Component {


    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        if (e.type === "mousedown") {
            this.setState({ message: "Mouse Down" });
        } else {
            this.setState({ message: "Mouse Up" });
        }
    };

    render() {
        return (
            <div>
                <form action="/uploadFile" method="post" encType="multipart/form-data">
                    <h3>select any pdf file and upload it,then you can read the content of Your pdf file</h3>
                    <input type="file" name="file" id="file" encType="multipart/form-data"></input>
                    <button type="submit" className="btn btn-primary">Upload</button>
                </form>
            </div>
        )
    }
}

export default UploadedFile;