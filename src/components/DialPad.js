import React from 'react';

export default class DialPad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row dial">
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 1
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 2
                            <span>ABC</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 3
                            <span>DEF</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 4
                            <span>GHI</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 5
                            <span>JKL</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 6
                            <span>MNO</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 7
                            <span>PQRS</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 8
                            <span>TUV</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 9
                            <span>WXYZ</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> *
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> 0
                            <span>+</span>
                        </button>
                    </div>
                    <div className="col-xs-4 col-md-4">
                        <button className="btn dialPad" type="button" onClick={this.props.dialPadClick.bind(this)}> #
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}