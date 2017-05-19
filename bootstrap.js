// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				link2,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.link2 = link2;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Worlds Largest Chickens and Chicken Stories', 		// this is the TITLE place in the class
				'http://www.latimes.com/entertainment/la-caw-wordplay11-2009jan11-story.html',	// this is the LINK place in the class
				'',
				'The Topher',			// this is the AUTHOR place in the class
				'https://www.vyperlook.com/wp-content/uploads/2012/04/hen-and-smallest-egg.jpg',	// this is the IMAGE place in the class
				'What a chicken, what a day. When I come home, my chickens say hey.', // this is the BODY place in the class
				),

			new Post(
				'Most Impressive Domino Runs',
				'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjT_Yru-OrTAhUEwFQKHW8GDDwQ3ywIJzAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvDy2xWpZWVc&usg=AFQjCNGR6yNiNsXRRITKbC8F-CqSCwhPXA',
				'',
				'The Topher',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c7ZxSYHq2yhECvQTW1MhV-POjnlMUoo3Qjp4mp-P0TxGhCUM', // this is a local image in the same folder as the js script
				''
				),

			new Post(
				'The great Tyson Harjit',
				'',
				'',
				'The Topher',
				'Dr.-Duncan-tyson.jpg',
				'Hit Ty up here. Dont spam him too much. +1 (530) 574-5634'
				),

			new Post(
				'Some shoes',
				'https://vuejs.org',
				'',
				'Jonah Myles',
				'il_fullxfull.830824728_otwb.jpg',
				'F I G H T  M E'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'',
				'Anptoght Author',
				'',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



