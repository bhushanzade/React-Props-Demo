import React, { PureComponent } from 'react'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1> React Demo </h1>
                </div>
                <br />

                <div className="jumbotron">
                    <p style={{fontSize: + '20'}}>
                        How to install ReactJS <br /><br /><br /><br />
                        Step 1: Download Nodejs from here <a href="https://nodejs.org/en/download/" target="_blank"> Link </a> <br /><br />
                        Step 2: Download Visual Code from here <a href="https://code.visualstudio.com/download" target="_blank"> Link </a> <br /><br />
                        Step 3: If you want github bash then click here <a href="https://git-scm.com/download/win" target="_blank"> Link </a>. Its not necessary.<br /><br />
                        Step 4: Check node path is available in your system environment variable. <br /> If not click here <a href="https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/" target="_blank"> Link </a> to check how to set node path to system environment variable <br /><br />
                        Step 5: click here for Routing Demo
                    </p>
                </div>
            </div>
        )
    }
}

export default Home