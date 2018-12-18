import React from "react"
import { Button } from "reactstrap";

export default (props) => {
    return (
        <Button className="mx-2" color={props.bookmark ? "warning": "secondary"} ><i class="material-icons text-white">bookmark</i></Button>
    )
}