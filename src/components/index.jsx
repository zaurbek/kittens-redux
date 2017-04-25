import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    componentDidMount() {
        this
            .props
            .getNewImage();
    }
    clickBad(current) {
        this
            .props
            .addToBad(current)
        this
            .props
            .getNewImage()
    }
    clickGood(current) {
        this
            .props
            .addToGood(current)
        this
            .props
            .getNewImage()
    }
    render() {
        return (
            <div className="row">
                    <div className="flex col-sm-3">
                        <div className="block-level"><h2 className="text-center">Not Cute:</h2>
                        </div>
                        {this
                            .props
                            .bad
                            .map((item, index) => {
                                return <img className='image-flex' src={item} key={index}/>
                            })}

                    </div>
                
                <div className="col-sm-6 full-height">
                    <div className="center--imageFrame">
                        <img className='main-img' src={this.props.current}/>
                    </div>
                    <div className="centered">
                    <Button.Group>
                        <Button color='google plus' onClick={() => this.clickBad(this.props.current)}>Not so cutie</Button>
                        <Button.Or text='or'/>
                        <Button positive onClick={() => this.clickGood(this.props.current)}>Super Cute</Button>
                    </Button.Group>
                    </div>
                </div>

                <div className="flex col-sm-3">
                            <div className="block-level"><h2 className="text-center">Cute:</h2>
                        </div>
                    {this
                        .props
                        .good
                        .map((item, index) => {
                            return <img className='image-flex' src={item} key={index}/>
                        })}
                </div>

            </div>
        )
    }
}