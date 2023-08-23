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
public class EstimateVO {

	private int estimateNum;
	private String estimatePurpose;
	private String estimateProgress;
	private String estimateAgegroup;
	private String estimateUgender;
	private String estimateMgender;
	private String estimateDay;
	private String estimateTime;
	private String estimateDesireregion;
	private int estimateUserNum;
	private String estimateUpCategoryCode;
	private String estimateCategoryCode;
	
}
