import React, { PureComponent } from 'react'

class Demo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>
                        Demo Page
                    </h1>
                </div>

                <div>
                    <h4>
                        To create React App
                    </h4>
                </div>
                <br />
                <div className="container">
                    <blockquote className="text-justify">
                        Step 1: <br/>
                        To install React library/App use command <strong> npm install -g create-react-app </strong> <br /><br />
                        Step 2: <br/>
                            Use command for creating react app i.e.
                           <strong> npx create-react-app app_name</strong> <br /><br />
                        step 3 : <br/>
                        open your created app in visual studio <br /><br />
                        Step 4: <br/>
                        Some prerequesting modules which need i.e. Bootstrap & Routing.<br />
                        to install bootstrap <br />
                        <strong>npm install bootstrap --save</strong> <br/>
                        to install routing <br />
                        <strong>npm install react-router-dom</strong> <br /> <br/>
                        step 5: <br/>
                        Go to Structure tab <br/>
                    </blockquote>

                </div>
            </div>
        )
    }
}

export default Demo