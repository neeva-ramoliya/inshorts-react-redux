import React from "react"
import { Button } from "reactstrap";

export default (props) => {
    return (
        <Button className="mx-2" color={props.disliked ? "danger" : "secondary"} >
            <i class="material-icons text-white">thumb_down_alt</i>
            <span className="icon-btn-text">{props.dislikes || 0}</span>
        </Button>
    )
}