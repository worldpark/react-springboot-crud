package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.UserMapper;
import com.example.demo.vo.UserVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserMapper userMapper;
	
	//유저리스트 출력
	@GetMapping
	public List<UserVO> userList(){
		System.out.println(userMapper.userList());
		System.out.println("유저리스트 출력 성공");
		return userMapper.userList();
	}

	//유저 정보 저장
	@PostMapping
	public void insertUser(@RequestBody UserVO user) {
		userMapper.insertUser(user);
		System.out.println("유저 db 저장 성공");
	}
	
	//유저정보수정 선택시 유저 정보 출력
	@GetMapping("/{id}")
	public UserVO fetchUserByID(@PathVariable int id) {
		System.out.println(userMapper.fetchUserByID(id));
		UserVO fetchUser = userMapper.fetchUserByID(id);
		
		return fetchUser;
	}
	
	//유저정보 수정
	@PutMapping("/{id}")
	public void updateUser(@PathVariable int id, @RequestBody UserVO user) {
		UserVO updateuser = user;
		System.out.println("업데이트 유저 => " + updateuser);
		
		updateuser.setFirstName(user.getFirstName());
		updateuser.setLastName(user.getLastName());
		updateuser.setUsername(user.getUsername());
		updateuser.setAge(user.getAge());
		updateuser.setSalary(user.getSalary());
		
		userMapper.updateUser(updateuser);
	}
	
	//유저삭제
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable int id) {
		userMapper.deleteUser(id);
		System.out.println("유저 삭제 성공");
	}

}
