var resumePersonal = [
    {name: "Maddie Conaway", career: "Data Scientist", description: "Wand Mistress"}
];
var interests = [ "Wand Making","Gaming","Social Networking","Automotive Repair","Tinkering"];
//company/place name, title, short description
var experience = [
    {name: "Apex",     title: "Consultant",     descr: "Coder"},
    {name: "Synovus",  title: "Developer",      descr: "Created SQL Server stored procedures and Crystal Reports"},
    {name: "Michaels", title: "Framing Artist", descr: "Design art frames"}
];

var skills = [
    {name: "C#", cool: true},
    {name: "Crystal Reports", cool: false},
    {name: "Excel VBA", cool: false},
    {name: "javascript", cool: true}
]

console.log("Name: " + resumePersonal[0].name.toUpperCase());
console.log("Career: " + resumePersonal[0].career);
console.log("Description: " + resumePersonal[0].description);

var i;
console.log("\nMy Interests");
for (i=0; i < interests.length; i++){
    console.log("* " + interests[i]);
}

console.log("\nMy Previous Experience");
for (i=0; i < experience.length; i++){
    displayPosition(experience[i].name,experience[i].title,experience[i].descr);
}

console.log("\nMy Skills");
for (i=0; i < skills.length; i++) {
    displaySkill(skills[i].name,skills[i].cool);
}

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* "+ jobDescription + " at " + companyName + " - " + jobTitle);
}

function displaySkill(skillName, cool) {
    var skillStr = "* ";
    if (cool) {
        skillStr = skillStr + "BAM: ";
    }
    console.log(skillStr + skillName);
}