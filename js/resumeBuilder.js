// Variables for formatting into HTML
var bio = {
	"name": "Vincent Lee",
	"role": "Software Developer",
	"contacts": {

		"mobile": "N/A",
		"email": "tienche.lee@gmail.com",
		"github": "tienchil.github.io",
		"location": "Toronto"

	},
	"welcomeMessage": "I am Vincent, and you're looking at his resume!",
	"skills": [
		"Javascript", "HTML and CSS", "Python", "C/C++", "Java", "Awesomeness"
	],
	"bioPic": "./images/fry.jpg"
};

var education = {

	"schools": [
		{
			"name": "Jedi Temple",
			"location": "Boston, MA",
			"degree": "Bachelor of Jedi Trainer",
			"majors": ["Computer Science", "Physics"],
			"dates": "2016-2016",
			"url": "http://something.com"
		}
	],

	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": "2016-2016",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2016-2016",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		}
	],

	"display": function() {

		var allschool = education.schools;
		var allonline = education.onlineCourses;

		if (allschool.length > 0) {

			for (var i = 0; i < allschool.length; i++) {

				$("#education").append(HTMLschoolStart);

				var formatschoolName = 
					HTMLschoolName.replace("%data%", allschool[i].name);
				$(".education-entry:last").append(formatschoolName);

				var formatDegree = 
					HTMLschoolDegree.replace("%data%", allschool[i].degree);
				$(".education-entry:last").append(formatDegree);

				var formatschoolDates = 
					HTMLschoolDates.replace("%data%", allschool[i].dates);
				$(".education-entry:last").append(formatschoolDates);

				var formatschoolLocation =
					HTMLschoolLocation.replace("%data%", allschool[i].location);
				$(".education-entry:last").append(formatschoolLocation);

				var formatMajor =
					HTMLschoolMajor.replace("%data%", allschool[i].majors);
				$(".education-entry:last").append(formatMajor);
			
			}
		}

		if (allonline.length > 0) {

			$("#education").append(HTMLonlineClasses);

			for (var i = 0; i < allonline.length; i++) {

				$("#education").append(HTMLschoolStart);

				var formatonlineTitle = 
					HTMLonlineTitle.replace("%data%", allonline[i].title);
				$(".education-entry:last").append(formatonlineTitle);

				var formatonlineSchool = 
					HTMLonlineSchool.replace("%data%", allonline[i].school);
				$(".education-entry:last").append(formatonlineSchool);

				var formatonlineDates =
					HTMLonlineDates.replace("%data%", allonline[i].dates);
				$(".education-entry:last").append(formatonlineDates);

				var formatonlineURL =
					HTMLonlineURL.replace("%data%", allonline[i].url);
				$(".education-entry:last").append(formatonlineURL);
			
			}
		}
	}
}

var work = {};

var projects = {

	"projects": [
		{
			"title": "Pizza Joke",
			"dates": "2015-2016",
			"description": "Never mind, it's too cheesy.",
			"images": []
		},
		{
			"title": "Cloudy Sky",
			"dates": "2014-2016",
			"description": "The sky is too cloudy. No outdoor activity today.",
			"images": ["./images/fry.jpg", "./images/fry.jpg"]
		}

	],

	"display": function() {

		var allProject = projects.projects;

		if (allProject.length > 0) {

			for (var i = 0; i < allProject.length; i++) {

				$("#projects").append(HTMLprojectStart);

				var formatProjectTitle = 
					HTMLprojectTitle.replace("%data%", allProject[i].title);
				$(".project-entry:last").append(formatProjectTitle);

				var formatProjectDates = 
					HTMLprojectDates.replace("%data%", allProject[i].dates);
				$(".project-entry:last").append(formatProjectDates);

				var formatProjectDes = 
					HTMLprojectDescription.replace("%data%", allProject[i].description);
				$(".project-entry:last").append(formatProjectDes);

				if (allProject[i].images.length > 0) {
				
					for (var j = 0; j < allProject[i].images.length; j++) {

						var formatProjectIm = 
							HTMLprojectImage.replace("%data%", allProject[i].images[j]);
						$(".project-entry:last").append(formatProjectIm);

					}
				
				}
			
			}

		}

	}

};




// Formatting Section
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedMsg);


function displaySkills() {

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);

		}

	}

}

displaySkills();
projects.display();
education.display();


function inName(name) {

	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() +
	          name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);