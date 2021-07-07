import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from './PCNavBar';
import Container from '@material-ui/core/Container';
import ApiService from '../ApiService';


class PCCreateBoard extends Component{

    constructor(props){
        super(props);

        this.state = {
            nickname: '',
            password: '',
            title: '',
            content: '',
            message: null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveBoard = (e) => {
        e.preventDefault();

        let board = {
            nickname: this.state.nickname,
            password: this.state.password,
            title: this.state.title,
            content: this.state.content
        }

        ApiService.addBoard(board)
        .then( res => {
            this.setState({
                message: board.nickname + '의 게시글 등록'
            })
        console.log(this.state.message);
        this.props.history.push('/board');
        })
        .catch(err => {
            console.log('saveBoard() 에러' + err);
        });
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
                        fullWidth margin="normal" value = {this.state.nickname} onChange={this.onChange}/>

                    <TextField type="password" placeholder="비밀번호" name = "password"
                        fullWidth margin="normal" value = {this.state.password} onChange={this.onChange}/>

                    <TextField type="text" placeholder="제목" name = "title"
                        fullWidth margin="normal" value = {this.state.title} onChange={this.onChange}/>
                    
                    <TextField type="text" placeholder="내용" name = "content" fullWidth margin="normal" 
                    value = {this.state.content} onChange={this.onChange} multiline rows={20}/>

                    <Button variant="contained" color="primary" onClick = {this.saveBoard}>작성</Button>

                </form>
            </div>
        )
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default PCCreateBoard