
export const getState = () => {
    return {
     type: "GET_NEWS"
    }
}

export const like = (id) => {
    return {
        type: "LIKE",
        id
    }
}

export const dislike = (id) => {
    return {
        type: "DISLIKE",
        id
    }
}

export const bookmark = (id) => {
    return {
        type: "BOOKMARK",
        id
    }
}