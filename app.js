angular.module("app",[]).controller("MainController",function(){
	this.tasks=[
{  name:"Call Emma",
   done:false
},

{	name:"Text Mimi",
	done:false
},

{
	name:"Make a video call with Nephew",
	done:false
},

{
	name:"Check  mail from Glory",
	done:false
},

{
	name:"Read tweets",
	done:false
}



];


this.add = function (newtask) {
	// console.log(newtask.name)
	var task ={};
	task.name=newtask.name;
	task.done= false;
	this.tasks.push(task);
	newtask.name="";

};
this.delete = function (task) {
	for (var i =0; i< this.tasks.length;  i++) {
		if (this.tasks[i].name === task.name ) {
			this.tasks.splice(i,1);
			break;
		}
	}
	// body...
}; 

  	this.people =[
	{
		name: "Emma Nolis",
		number:"O7032111111"
	},
	{
		name: "Mimi Kevin",
		number:"O8052333333"
	},
	{
		name: "Ijele Nolis",
		number:"O7033122222"
	},
	{
		name: "Glory Kevin",
		number:"O7032111000"
	},
	{
		name: "Judas Crux",
		number:"O8066419000"
	},
	{	name: "Nephew",
	 	number: "09034217651"
		
		
	}


 ];

});

