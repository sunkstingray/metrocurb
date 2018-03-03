import axios from "axios";

export default {
    getContent: function(page){
        return axios.get("/api/content/" + page)
    },
    postContent: function(content){
        return axios.post("/api/content", content)
    }
}