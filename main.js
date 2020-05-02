const items = Array.from(document.getElementsByClassName("item"));

handleClick();
fallAnimation();

function spreadAnimation() {
	items.forEach((item, index) => {
		if (index < 5) {
			if (
				!item.className.includes("spreadLeft") &&
				!item.className.includes("spreadRight")
			)
				index % 2 === 0
					? (item.className += " spreadLeft")
					: (item.className += " spreadRight");
		}
	});
}

function fallAnimation() {
	items.forEach((item, index) => {
		let time;
		if (index > 4) {
			time = 70 * index;
		} else {
			time = 450 / (index + 1);
		}
		setTimeout(() => {
			item.className += " fall";
		}, time);
	});
}

function handleClick() {
	items.forEach((item) => {
		const viewfoil = document.getElementsByClassName("viewfoil")[0];
		item.onclick = function (event) {
			if (event.target.innerText === "About") {
				spreadAnimation();
				viewfoil.innerHTML = `
            <h2 class="about-title">I am a web developer who's looking for a new challenge.</h1>\
            <p>I love creating, learning and I strive to improve every day. Programming gives me an area with an\
                infinite amount of material to study and it is the single most engaging activity I've ever done.\
            </p>\
            <p>One day I hope to work on complex and meaningful projects. As a part of a motivated and remarkable team.</p>
            <p>As you can see, I'm very passionate about the subject. And I would love to find people who feel the same way :)</p>\
            <p>I am familiar with below technologies.</p>\
            <div class="devicon-container">\
                <i class="devicon-javascript-plain"></i>\
                <i class="devicon-css3-plain-wordmark"></i>\
                <i class="devicon-html5-plain-wordmark"></i>\
                <i class="devicon-react-original-wordmark"></i>\
                <i class="devicon-sass-original"></i>\
                <i class="devicon-nodejs-plain-wordmark"></i>\
                <i class="devicon-postgresql-plain-wordmark"></i>\
                <i class="devicon-git-plain-wordmark"></i>\
            </div>`;
			} else if (event.target.innerText === "Contact") {
				spreadAnimation();
				viewfoil.innerHTML = `
                <h2>Hi, my name is</h2>
                <br>
                <h1>K<span class="accent">aralius</span>
                    <br>
                    Simo<span class="accent">nas</span></h1>
                <br>
                <h2>Let's get in touch.</h2>
                <p>Write me an email at <a href="mailto:k.simonas@hotmail.com"\
                        class="accent">K.Simonas@hotmail.com</a></p>\
                <p>Or give me a call at <br> <span class="accent-orangered">+370 695 19 669</span></p>`;
			} else if (event.target.innerText === "Projects") {
				spreadAnimation();
				viewfoil.innerHTML = `
                <h2 class="projects-title">Projects</h2>\
                <p>This is the project that I would like to showcase the most.</p>\
                <div class="project-container">\
                    <div><a href="https://github.com/SKaralius/4Upgrade">\
                            <h2>4Upgrade</h2>\
                        </a>\
                    </div>\
                    <p>This is a small online game that I built from scratch using React, Node and PostgreSQL.</p>\
                    <p>This project uses JWT for authorization and authentification.</p>\
                    <div class="project-image">\
                        <h4>Preview</h4>\
                        <a href="https://4upgrade.now.sh">\
                            <img src="/Resource/Capture.JPG" alt="">\
                        </a>\
                    </div>\
                </div>\
                <div class="project-details">\
                <p>All gameplay sensitive user requests are validated on the server.</p>\
                    <p>The project uses an MIT license. Source code, a more in-depth project overview and set up instructions are available on\
                        my <a href="https://github.com/SKaralius/">Github</a>.</p>\
                </div>\
                `;
			}
		};
	});
}
