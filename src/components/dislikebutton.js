import React from "react"
import { Button } from "reactstrap";
import { dislike } from "../redux/actions/action";
import { connect } from "react-redux";

const DislikeComponent =  (props) => {
    let { disliked, dislikes, id} = props;
    return (
        <Button className="mx-2" color={disliked ? "danger" : "secondary"} onClick={(event) => props.dislike(id)} >
            <i class="material-icons text-white">thumb_down_alt</i>
            <span className="icon-btn-text">{dislikes || 0}</span>
        </Button>
    )
}

const mapDispatchToProps = {
    dislike,
   };
export default connect(null, mapDispatchToProps)(DislikeComponent);