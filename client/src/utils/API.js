import axios from "axios";

export default {
    getContent: function(page){
        return axios.get("/api/content/" + page)
    },
    postContent: function(content){
        return axios.post("/api/content", content)
    },
    updateContent: function(page, body){
        return axios.put("/api/content/" + page, body)
    },
    getAllContent: function(){
        return axios.get("/api/content")
    }
}