import React from "react";
import { Container, Row, Col} from "reactstrap";
import { connect } from "react-redux";
import NewsCard from "./newscard";

const Home = (props) => {
    
    return (
        <Container className="flex-container">
          {
              props.newsfeed.map((news, index) => {
                  return <NewsCard data={news}></NewsCard>
              })
          }
        </Container>
    )
}

const mapStoreToProps = (state) => {
    return {
        newsfeed: state.newsfeed
    }
}
export default connect(mapStoreToProps)(Home);