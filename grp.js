import React, {Component} from "react";

class Grp extends Component {
    render(props) {
        return(
            <div className="grp">
                <img src={this.props.pic} alt=""/>
                <div className="name">
                  <h3>{this.props.fname}</h3>
                  <h3><b className="sname">{this.props.sname}</b></h3>
                </div>
                <h4 className="job">{this.props.job1}</h4>
                <h4 className="job">{this.props.job2}</h4>
            </div>
        );
    }

}
export default Grp;