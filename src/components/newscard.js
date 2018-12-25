import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Bookmark from "./bookmarkbutton";
import Like from "./likebutton";
import Dislike from "./dislikebutton";

class NewsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, img, title, info, description, likes, dislikes, liked =false, disliked =false, bookmark = false } = this.props.data;
        return (
            <div className="flex-item">
                <Card className="m-4 p-0">
                    
                    <Col xs="12" sm="12">
                        <CardImg height="100%" src={img} alt="Card image cap" />
                    </Col>
                    <Col  xs="12" sm="12">
                        <CardBody>
                            <Link to={`/news/${id}`}><CardTitle className="text-body font-Oswald"><h3>{title}</h3> </CardTitle></Link>

                            <CardText className="font-roboto" dangerouslySetInnerHTML={{ __html: description.substring(0, 256) }}></CardText>
                            <ButtonGroup>
                                <Like liked = {liked} likes= {likes} id={id} />
                                <Dislike disliked = {disliked} dislikes= {dislikes} id={id} />
                                <Bookmark bookmarked = {bookmark} id={id} />
                            </ButtonGroup>
                        </CardBody>
                        <CardSubtitle className="blockquote-footer">{info}</CardSubtitle>
                    </Col>
                </Card>
            </div>

        )
    }
}

export default NewsCard;