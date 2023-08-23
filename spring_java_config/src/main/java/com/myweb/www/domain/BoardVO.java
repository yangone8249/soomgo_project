package com.myweb.www.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardVO {

	private long bno;
	private String title;
	private String content;
	private String writer;
	private String regDate;
	private String modDate;
	private int readCount;
	
}
