const items = Array.from(document.getElementsByClassName("item"));

console.log(items);

items.forEach((item) => {
	const viewfoil = document.getElementsByClassName("viewfoil")[0];
	item.onclick = function (event) {
		if (event.target.innerText === "About") {
			viewfoil.innerHTML = `<h2 class="about-title">I am a web developer who's looking for a new challenge.</h1>\
        <p>I love creating, learning and I strive to improve every day. Programming gives me an area with an\
            infinite amount of material to study and it is the single most engaging activity I've ever done.\
        </p>\
        <p>I am familiar with these technologies.</p>\
        <i class="devicon-javascript-plain"></i>\
        <i class="devicon-css3-plain-wordmark"></i>\
        <i class="devicon-html5-plain-wordmark"></i>\
        <i class="devicon-react-original-wordmark"></i>\
        <i class="devicon-sass-original"></i>\
        <i class="devicon-nodejs-plain-wordmark"></i>\
        <i class="devicon-postgresql-plain-wordmark"></i>\
        <i class="devicon-git-plain-wordmark"></i>`;
		} else if (event.target.innerText === "Contact") {
			viewfoil.innerHTML = `<h2 class="contact-title">Contact</h2>\
            <p>Write me an email at <a href="mailto:k.simonas@hotmail.com"\
                    class="accent-orangered">K.Simonas@hotmail.com</a></p>\
            <p>Or give me a call at <br> <span class="accent-orangered">+370 695 19 669</span></p>`;
		}
	};
});
