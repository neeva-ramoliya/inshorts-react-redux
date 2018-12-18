import defaultState from "../../data";

export default (state = defaultState, action) => {
        switch (action.type) {
                case "GET_NEWS":
                        return state;
                        break;

                case "LIKE": {
                        let newsfeed = state.newsfeed.map((news) => {
                                if (news.id == action.id) {
                                        news.liked ? news.likes-- : news.likes++;
                                        news.liked = !news.liked
                                        return news
                                }
                                return news;
                        })
                        return { newsfeed }
                }
                       

                case "DISLIKE": {
                        let newsfeed = state.newsfeed.map((news) => {
                                if (news.id == action.id) {
                                        news.disliked ? news.dislikes-- : news.dislikes++;
                                        news.disliked = !news.disliked
                                        return news
                                }
                                return news;
                        })
                        return { newsfeed }
                    
                }

                case "BOOKMARK": {
                        let newsfeed = state.newsfeed.map((news) => {
                                if (news.id == action.id) {
                                        news.bookmark = !news.bookmark
                                        return news
                                }
                                return news;
                        })
                        return { newsfeed }
                        
                }

                default:
                        return state;
                       
        }
}