const POSTS = [
    {
        author: {
            name: "Linus Torvalds",
            avatar: "torvalds.png",
        },
        post: `Change my mind: All software should
support Linux, and companies that
don't can eff-off!`,
    },
    {
        author: {
            name: "Richard Stallman",
            avatar: "stallman.jpg",
        },
        post: "I'm a GNUru!",
    },
    {
        author: {
            name: "Jaden Smith",
            avatar: "jaden.jpg",
        },
        post: "I am just like my daddy, slap the clowns",
    },
    {
        author: {
            name: "Elon Musk",
            avatar: "elon.jpg",
        },
        post: "thanks SalmanM for great support",
    },
    {
        author: {
            name: "David Alaba",
            avatar: "alaba.png",
        },
        post: "Danke dir Enes für die Unterstützung die zahlreichen Jahre <3",
    },
    {
        author: {
            name: "Khamzat Chimaev",
            avatar: "chimaev.png",
        },
        post: `BRZ
@mivra < best fighting coach
New Comer Chiken
Manager @MicrasRuleStudio`,
    },
    {
        author: {
            name: "Island Boys",
            avatar: "island.jpg",
        },
        post: "Hate your mum 🚀",
    },
    {
        author: {
            name: "Donald Trump",
            avatar: "donald.jpg",
        },
        post: "@fakeDonaldTrump @jokeDonaldTrump Donald Trup knows what he did - shame on him!",
    },
    {
        author: {
            name: "Donald J. Drumpf",
            avatar: "drumpf.jpg",
        },
        post: `
I ask all citizens to ignore the half-baked brainfarts masking as my opinion AT ANY COST!
I'm the most common of lower demoninators, so it will be difficult -
to ease my transition to critical thinking in the meantime, please flog and humiliate
me publicly while staying deaf to the verbal sewage I call rethoric. Thank You.
        `,
    },
];

for (let i = 0; i < POSTS.length; i++) {
    const postElement = document.createElement("div");
    postElement.className = "post";

    const postAuthorElement = document.createElement("div");
    postAuthorElement.classList.add("post-author");

    const imgEl = document.createElement("img");
    imgEl.classList.add("post-author-avatar");
    imgEl.src = `./images/${POSTS[i].author.avatar}`;

    const authorNameEl = document.createElement("div");
    authorNameEl.classList.add("post-author-name");
    authorNameEl.innerText = POSTS[i].author.name;

    const postBodyEl = document.createElement("div");
    postBodyEl.classList.add("post-body");
    postBodyEl.innerText = POSTS[i].post;

    postAuthorElement.appendChild(imgEl);
    postAuthorElement.appendChild(authorNameEl);
    postElement.appendChild(postAuthorElement);
    postElement.appendChild(postBodyEl);

    const postsEl = document.querySelector(".posts");
    postsEl.appendChild(postElement);
}

