import React from "react"
import { Button } from "reactstrap";

export default (props) => {
    return (
        <Button className="mx-2" color={props.liked ? "info" : "secondary"} >
            <i class="material-icons text-white">thumb_up_alt</i>
            <span className="icon-btn-text">{props.likes || 0}</span>
        </Button>
    )
}