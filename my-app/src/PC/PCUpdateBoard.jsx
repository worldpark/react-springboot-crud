import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from './PCNavBar';
import Container from '@material-ui/core/Container';
import ApiService from '../ApiService';


class PCUpdateBoard extends Component{

    constructor(props){
        super(props);

        this.state = {
            bid: 0,
            title: '',
            nickname: '',
            password: '',
            content: '',
            createdate: '',
            message: ''
        }
    }

    componentDidMount() {
        this.loadBoard();
    }

    loadBoard = () => {
        ApiService.fetchBoardByID(window.localStorage.getItem("boardID"))
        .then(res => {
            let board = res.data;
            this.setState({
                bid: board.bid,
                title: board.title,
                nickname: board.nickname,
                password: board.password,
                content: board.content,
                createdate: board.createdate
            })
        })
        .catch(err => {
            console.log('loadBoard() 에러', err);
        });
    }

    saveBoard = (e) => {
        e.preventDefault();

        let board = {
            bid: this.state.bid,
            title: this.state.title,
            nickname: this.state.nickname,
            password: this.state.password,
            content: this.state.content,
            createdate: this.state.createdate
        }

        ApiService.editBoard(board)
        .then(res => {
            this.setState({
                message: board.bid + '번 게시글 수정'
            })
            this.props.history.push('/board/' + window.localStorage.getItem("boardID"));
        })
        .catch(err => {
            console.log('saveBoard() 에러', err);
        })
        
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    goback = () => {
        this.props.history.push('/board/' + window.localStorage.getItem("boardID"))
    }

    render() {
        return (
            <div className="cdiv">
            <Container>
                <NavBar />
            </Container>
                <Typography variant="h4" style={style}>글쓰기</Typography>
                <form>

                    <TextField type="text" placeholder="작성자" name = "nickname"
                        fullWidth margin="normal" value = {this.state.nickname} onChange={this.onChange}
                        InputProps={{
                            readOnly: true
                        }}
                        />

                    <TextField type="text" placeholder="제목" name = "title"
                        fullWidth margin="normal" value = {this.state.title} onChange={this.onChange}/>
                    
                    <TextField type="text" placeholder="내용" name = "content" fullWidth margin="normal" 
                    value = {this.state.content} onChange={this.onChange} multiline rows={20}/>

                    <Button variant="contained" color="primary" onClick={this.saveBoard}>수정</Button>
                    <Button variant="contained" color="primary" onClick={this.goback}>취소</Button>

                </form>
            </div>
        )
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default PCUpdateBoard