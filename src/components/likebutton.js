import React from "react"
import { Button } from "reactstrap";
import { like } from "../redux/actions/action";
import { connect } from "react-redux";


const LikeComponent =  (props) => {
    let { liked, likes, id } = props;
    return (
        <Button className="mx-2" color={liked ? "info" : "secondary"} onClick={(event) => props.like(id)}>
            <i className="material-icons text-white">thumb_up_alt</i>
            <span className="icon-btn-text">{likes || 0}</span>
        </Button>
    )
}

const mapDispatchToProps = {
    like,
   };
export default connect(null, mapDispatchToProps)(LikeComponent);