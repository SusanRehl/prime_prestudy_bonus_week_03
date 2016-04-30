// simple functions to calculate how many sandwiches will be needed for a graduation.

var avgRelAttend = 0;   //average number of relatives attending per student
var sandPerStudent = 0;  //total number of sandwiches needed per student
var sandPerClass = 0;    //total number of sandwiches needed per class
var sandPerGroup = 0;    //total number of sandwiches needed per graduating year group

function studentSand(avgRelAttend) {             //calculating # of sandwiches per student
	sandPerStudent = (avgRelAttend + 1) * 1.5;
	return sandPerStudent;
}

function classSand(studentsPerClass) {           //calculating # of sandwiches per class
	var studentsPerClass = 30;    //average number of students per class
  	sandPerClass = sandPerStudent * studentsPerClass;
	return sandPerClass;
}

function groupSand(classPerGroup) {             //calculating # of sandwiches per group
	var classPerGroup = 5;      //average number of classes per graduating year group
  	sandPerGroup = sandPerClass * classPerGroup;
	return sandPerGroup;
}

function totalSand() {
	var tSand = groupSand(classSand(studentSand(3)));    //outputting total
	document.getElementById("Output Sandwich Total").innerHTML = tSand;
}
