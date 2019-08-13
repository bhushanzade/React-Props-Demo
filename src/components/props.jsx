import React, { PureComponent } from 'react';

class Props extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h2>Demo of props in React</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card" style={{ width: + '300' }}>
                                <img src={this.props.data.image} alt="" width="300" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.data.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{this.props.data.address}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-8">
                            <div className="jumbotron" style={{marginTop : + '40'}}>
                                <h3>{this.props.desc}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="jumbotron">
                    <h4>Multiple list of cards using props.</h4>
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.multiple.map((res, key) => (
                            <div className="col-sm-3">
                                <div className="card" style={{ width: + '300' }}>
                                    <img src={res.image} alt="" width="300" />
                                    <div className="card-body">
                                        <h5 className="card-title">{res.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{res.address}</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default Props