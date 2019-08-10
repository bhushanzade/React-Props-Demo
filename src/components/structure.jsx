import React, { PureComponent } from 'react';
import Image1 from '../assets/images/image 1.jpg';
import Image2 from '../assets/images/image 2.jpg';
class Structure extends PureComponent {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>
                        Structure Page
                </h1>
                </div>

                <div>
                    <h4>
                        To create React App
                </h4>
                </div>
                <br />
                    <h5>Structure of Files in our app</h5>
                <img src={Image1} alt="" width="100%" height="50%" /> <br/><br/>

                <div className="container">
                    <p>
                        In above image we already see App.js file content. Under this file we use Header.jsx react file for root app. Other files we use as routing.
                    </p>
                </div>
                <div className="container">
                    <p>
                        We use Routing in header.jsx file see example
                    </p>
                </div>
                <img src={Image2} alt="" width="100%" height="700px" /> <br/><br/>
                <div className="container">
                    <p>
                        Same as we use html view in Demo.jsx Home.jsx & Structure.jsx and design simple react app.
                    </p>
                </div>
                <div className="jumbotron">
                    <h3>Thank You !</h3>
                </div>
            </div>
        )
    }
}

export default Structure