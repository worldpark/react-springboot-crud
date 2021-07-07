import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import ApiService from '../ApiService';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@material-ui/core";

class PCBoardList extends Component {

    constructor(props) {
        super(props);

        this.state = {

            boards: [],
            paging: {},
            p_num: 1
        }
    }

    componentDidMount() {
        this.reloadBoardList();
    }

    reloadBoardList = () => {
        ApiService.fetchBoards(this.state.p_num)
            .then(res => {
                this.setState({
                    boards: res.data.list,
                    paging: res.data.pagingData,
                    p_num: res.data.pagingData.currentPageNum
                })
            })
            .catch(err => {
                console.log('reloadBoardList() 에러', err);
            })
    }

    listBoard(p_num) {
        console.log("pageNum : " + p_num);
        ApiService.fetchBoards(p_num)
            .then(res => {
                console.log(res.data);
                this.setState({
                    p_num: res.data.pagingData.currentPageNum,
                    paging: res.data.pagingData,
                    boards: res.data.list
                });
            });

    }

    viewPaging() {
        const pageNums = [];

        for (let i = this.state.paging.pageNumStart; i <= this.state.paging.pageNumEnd; i++) {
            pageNums.push(i);
        }

        return (pageNums.map((page) =>
            <li className="page-item" key={page.toString()}>
                <a className="page-link" onClick={() => this.listBoard(page)}>{page}</a>
            </li>
        ));
    }

    isPagingPrev() {
        if (this.state.paging.prev) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.paging.currentPageNum - 1))} tabIndex="-1">Prev</a>
                </li>
            );
        }
    }

    isPagingNext() {
        if (this.state.paging.next) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.paging.currentPageNum + 1))} tabIndex="-1">Next</a>
                </li>
            );
        }
    }

    isMoveToFirstPage() {
        if (this.state.p_num !== 1) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard(1)} tabIndex="-1">Move to First Page</a>
                </li>
            );
        }
    }

    isMoveToLastPage() {
        if (this.state.p_num !== this.state.paging.pageNumCountTotal) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.paging.pageNumCountTotal))} tabIndex="-1">LastPage({this.state.paging.pageNumCountTotal})</a>
                </li>
            );
        }
    }


    testBoard(bid) {
        this.props.history.push('/board/' + bid);
    }

    createBoard = () => {

        window.localStorage.removeItem("boardID");
        this.props.history.push('/createboard');
    }

    render() {
        return (
            <div>
                <Container>
                    <NavBar />
                </Container>
                <TableContainer component={Paper}>
                    <div className="cdiv">
                        <button type="button" className="btn btn-sm btn-primary" id="btnWrite" onClick={this.createBoard}>글쓰기</button>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell align="right">제목</TableCell>
                                    <TableCell align="right">닉네임</TableCell>
                                    <TableCell align="right">작성일</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.boards.map(board =>
                                    <TableRow key={board.id}>
                                        <TableCell component="th" scope="row">
                                            {board.bid}
                                        </TableCell>
                                        <TableCell align="right">
                                            <a onClick={() => this.testBoard(board.bid)}>{board.title}</a>
                                        </TableCell>
                                        <TableCell align="right">{board.nickname}</TableCell>
                                        <TableCell align="right">{board.createdate}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <div className="row">
                            <nav aria-label="Page Navigation">
                                <ul className="pagination">
                                    {
                                        this.isMoveToFirstPage()
                                    }
                                    {
                                        this.isPagingPrev()
                                    }
                                    {
                                        this.viewPaging()
                                    }
                                    {
                                        this.isPagingNext()
                                    }
                                    {
                                        this.isMoveToLastPage()
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </TableContainer>
            </div>
        );

    }

}


export default PCBoardList