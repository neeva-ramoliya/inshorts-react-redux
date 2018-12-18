import React from "react"
import { Button } from "reactstrap";
import { bookmark } from "../redux/actions/action";
import { connect } from "react-redux";

const BookmarkComponent = (props) => {
    const {bookmarked, id} = props
    return (
        <Button className="mx-2" color={bookmarked ? "warning": "secondary"} onClick={(event) => props.bookmark(id)} >
        <i class="material-icons text-white">bookmark</i>
        </Button>
    )
}

const mapDispatchToProps = {
    bookmark,
   };
export default connect(null, mapDispatchToProps)(BookmarkComponent);