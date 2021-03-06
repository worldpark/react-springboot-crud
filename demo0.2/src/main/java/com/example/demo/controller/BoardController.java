package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.BoardMapper;
import com.example.demo.service.BoardService;
import com.example.demo.vo.BoardVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/board")
public class BoardController {
	
	@Autowired
	BoardMapper boardMapper;
	
	@Autowired
	private BoardService boardService;
	
	//게시글리스트 출력
	@GetMapping
	public ResponseEntity<Map> boardList(@RequestParam(value = "p_num", required=false) Integer p_num){
		
		System.out.println("받은값 : " + p_num);
		
		if(p_num == null || p_num <= 0) {
			p_num = 1;
		}
		
		
		return boardService.getPagingBoard(p_num);
	}

	//게시글 정보 저장
	@PostMapping
	public void insertUser(@RequestBody BoardVO board) {
		boardMapper.insertBoard(board);
		System.out.println("게시판 db 저장 성공");
	}
	
	//게시글정보수정 선택시 게시글 정보 출력
	@GetMapping("/{bid}")
	public BoardVO fetchUserByID(@PathVariable int bid) {
		System.out.println(boardMapper.fetchBoardByID(bid));
		BoardVO fetchBoard = boardMapper.fetchBoardByID(bid);
		
		return fetchBoard;
	}
	
	//게시글정보 수정
	@PutMapping("/{bid}")
	public void updateBoard(@PathVariable int bid, @RequestBody BoardVO board) {
		BoardVO updateboard = board;
		System.out.println("업데이트 게시글 => " + updateboard);
		
		updateboard.setTitle(board.getTitle());
		updateboard.setNickname(board.getNickname());
		updateboard.setPassword(board.getPassword());
		updateboard.setContent(board.getContent());
		updateboard.setCreatedate(board.getCreatedate());
		
		boardMapper.updateBoard(updateboard);
	}
	
	//게시글삭제
	@DeleteMapping("/{bid}")
	public void deleteUser(@PathVariable int bid) {
		boardMapper.deleteBoard(bid);
		System.out.println("게시글 삭제 성공");
	}

}
