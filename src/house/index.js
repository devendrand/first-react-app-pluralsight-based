import React, { Component } from 'react';
import "./house.css";
import eamilIcon from "./Email.png";
import Inquiry from "./Inquiry";


class house extends Component {
    state = {inquiryShown: false}

    toogleInquiry = () => {
        this.setState({ inquiryShown: !this.state.inquiryShown });
    }

    render() { 
        const house = this.props.house;
        const inquiry = !this.state.inquiryShown ? null:
                        <Inquiry house={house} />;
        return (
            <div>
                <div className="row mt-2">
                    <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-md-12">{house.country}</h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House" />
                    </div>
                    <div className="col-md-5">
                        <p className="price">${house.price}</p>
                        <p>{house.description}</p>
                        <img src={eamilIcon} height="50" alt="Inquiry"
                            onClick={this.toogleInquiry} />
                        {inquiry}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default house;