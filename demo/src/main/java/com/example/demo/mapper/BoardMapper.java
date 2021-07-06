package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.vo.BoardVO;

@Mapper
public interface BoardMapper {
	
	List<BoardVO> boardList(@Param("getObjStartNum") int getObjStartNum, @Param("getObjEndNum") int getObjEndNum);
	BoardVO fetchBoardByID(int bid);
	void updateBoard(BoardVO board);
	void insertBoard(BoardVO board);
	void deleteBoard(int bid);
	int count();
	

}
