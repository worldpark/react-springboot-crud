import axios from "axios";

const USER_API_BASE_URL2 = "http://localhost:8080/board";

class ApiService{
    
    fetchBoards(p_num) {
        return axios.get(USER_API_BASE_URL2 + "?p_num=" + p_num);
    }

    fetchBoardByID(boardID){
        return axios.get(USER_API_BASE_URL2 + '/' + boardID);
    }

    deleteBoard(boardID){
        return axios.delete(USER_API_BASE_URL2 + '/' + boardID);
    }

    addBoard(board){
        return axios.post(USER_API_BASE_URL2, board);
    }

    editBoard(board){
        return axios.put(USER_API_BASE_URL2 + '/' + board.bid, board);
    }
}

export default new ApiService();