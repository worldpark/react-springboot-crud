import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './PCNavBar';
import Container from '@material-ui/core/Container';
import ApiService from '../ApiService';


class PCCreateBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bid: this.props.match.params.bid,
            board: {},
            message: '',
            passwd: '',
            msg: '',
        }
    }

    componentDidMount() {
        ApiService.fetchBoardByID(this.state.bid).then(res => {
            this.setState({ board: res.data });
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editBoard = (BID) => {
        if (this.state.passwd !== this.state.board.password) {
            this.setState({
                msg: '암호가 틀립니다'
            });
        }
        else {
            window.localStorage.setItem("boardID", BID);
            this.props.history.push('/edit-board');
        }
    }

    deleteBoard = (BID) => {

        if (this.state.passwd !== this.state.board.password) {
            this.setState({
                msg: '암호가 틀립니다'
            });
        }
        else {
            ApiService.deleteBoard(BID)
                .then(res => {
                    this.setState({
                        message: 'Board Deleted Successfully'
                    });
                })
                .catch(err => {
                    console.log('deleteBoard() 에러' + err);
                })
            this.props.history.push('/');
        }
    }



    render() {
        return (
            <div className="cdiv">
                <Container>
                    <NavBar />
                </Container>
                <form>
                    <TextField type="text" placeholder="제목" name="title"
                        fullWidth margin="normal" value={this.state.board.title} onChange={this.onChange} 
                        InputProps={{
                            readOnly: true
                        }}
                        />
                    <label>{this.state.board.nickname} | {this.state.board.createdate}</label>

                    <TextField type="text" placeholder="내용" name="content" fullWidth margin="normal"
                        variant="outlined" value={this.state.board.content} onChange={this.onChange} multiline rows={20} 
                        InputProps={{
                            readOnly: true
                        }}
                        />

                    <TextField type="password" placeholder="비밀번호" name="passwd" variant="outlined"
                        value={this.state.passwd} onChange={this.onChange} />
                    <label>{this.state.msg}</label><br /><br />

                    <Button variant="contained" color="primary" onClick={() => this.editBoard(this.state.board.bid)}>수정</Button>
                    <Button variant="contained" color="primary" onClick={() => this.deleteBoard(this.state.board.bid)}>삭제</Button>

                </form>
            </div>
        )
    }

}

export default PCCreateBoard