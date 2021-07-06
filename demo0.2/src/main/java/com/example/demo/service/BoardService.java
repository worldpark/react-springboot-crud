package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.BoardMapper;
import com.example.demo.util.PagingUtil;
import com.example.demo.vo.BoardVO;

@Service
public class BoardService {
	
	@Autowired
	private BoardMapper boardmapper;
	
	public int findAllCount() {
		
		System.out.println(boardmapper.count());
		return (int) boardmapper.count();
	}
	
	public ResponseEntity<Map> getPagingBoard(int p_num){
		Map result=null;
		
		PagingUtil pu = new PagingUtil(p_num, 5, 5); //($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )
		List<BoardVO> list = boardmapper.boardList(pu.getObjectStartNum(), pu.getObjectCountPerPage());
		pu.setObjectCountTotal(findAllCount());
		
		
		pu.setCalcForPaging();
		
		System.out.println("p_num : "+p_num);
		System.out.println(pu.toString());
		
		if (list == null || list.size() == 0) {
			return null;
		}
		
		result = new HashMap<>();
		result.put("pagingData", pu);
		result.put("list", list);
		
		return ResponseEntity.ok(result);
		
		
	}
	
	

}
