package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.BoardVO;

@Mapper
public interface BoardMapper {
	
	List<BoardVO> boardList();
	BoardVO fetchBoardByID(int bid);
	void updateBoard(BoardVO board);
	void insertBoard(BoardVO board);
	void deleteBoard(int bid);

}
