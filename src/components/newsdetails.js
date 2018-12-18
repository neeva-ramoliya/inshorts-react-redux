import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, CardImg, CardTitle, ButtonGroup, CardSubtitle, Button } from "reactstrap";
import Bookmark from "./bookmarkbutton";
import Like from "./likebutton";
import Dislike from "./dislikebutton";

class NewsDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.newsDetails
        }
    }

 

    render() {
        const { id, img, title, info, description, likes, dislikes, liked, disliked, bookmark } = this.props.newsDetails
        return (
            <Container className="mx-auto w-sm-75 w-xs-100" >
                <Row className="my-2">
                  <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                    <CardImg src={img}></CardImg>
                    <CardTitle className="my-3 display-4 font-Oswald"> {title}</CardTitle>
                    <ButtonGroup className="my-3">
                        <Like liked={liked} likes={likes} id={id}/>
                        <Dislike disliked={disliked}  dislikes = {dislikes} id={id} />
                        <Bookmark bookmarked={bookmark} id={id}/>
                    </ButtonGroup>
                    <article className="font-roboto my-3" dangerouslySetInnerHTML={{ __html: description }}>

                    </article>
                    <CardSubtitle className="blockquote-footer">{info}</CardSubtitle>
                  </Col>
                </Row>
            </Container>
        )
    }
}


const mapStoreToProps = (state, ownProps) => {
    return {
        newsDetails: Object.assign({}, state.newsfeed.find((news) => { return news.id == ownProps.match.params.id }))
    }
}

export default connect(mapStoreToProps)(NewsDetails);