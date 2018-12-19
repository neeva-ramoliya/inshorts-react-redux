import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, CardImg, CardTitle, ButtonGroup, CardSubtitle, Nav } from "reactstrap";
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


    onBackClick() {
        window.history.back()
    }
 

    render() {
        const { id, img, title, info, description, likes, dislikes, liked, disliked, bookmark } = this.props.newsDetails
        return (
            <Container className="mx-auto w-sm-75 w-xs-100" >
            <Nav className="only-mobile" onClick={this.onBackClick}><i className="material-icons fixed-top m-3 text-light display-4">reply</i></Nav>
                <Row className="my-2">
                  <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                    <CardImg src={img}></CardImg>
                    <CardTitle className="my-3 font-Oswald"> <h4>{title}</h4></CardTitle>
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