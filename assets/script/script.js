const news = [
    {
    title: `Minecraft's new frogs were briefly swallowing goats whole`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
    alt: 'Background image 1',
    category: 'Minecraft',
    body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
    date: '2022-02-01',
    },
    {
    title: `Portal Companion Collection marks Valve's first foray into Nintendo territory`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/4YPvYtD2rZqGcEPSvbZtLh-1024-80.jpg.webp`,
    alt: 'Background image 2',
    category: 'Nintendo',
    body: "Nintendo hosted one of its regular Nintendo Direct showcases today, and aside from the frankly troubling new Kirby game coming later this year, which should be of concern to everyone, it was a pretty unexciting affair for PC gamers. Aside from one big announcement: Valve is bringing both Portal games to the handheld later this year, marking the very first time a Valve-developed game has featured on a Nintendo platform. Yes, Bridge Constructor Portal exists on Switch, but that was developed by ClockStone and, according to its Steam page, wasn't even published by Valve. The Portal: Companion Collection marks Valve's Nintendo debut proper, and features both the original Portal and its sequel, both ported in collaboration with NVIDIA Lightspeed Studios. As the name implies, that's an internal NVIDIA studio that has, among other things, worked on the Quake 2 RTX project.",
    date: '2022-02-02',
    },
    {
    title: `Minecraft is experimenting with frogs ahead of the next update`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/GfuKjTgFtFNzWcTRdbiiEU-1024-80.jpg.webp`,
    alt: 'Background image 3',
    category: 'Minecraft',
    body: "Ahead of the Wild Update arriving sometime in 2022, Minecraft Bedrock is testing out those fun new frog mobs that will be joining officially in version 1.19. The new version of Minecraft for Windows includes frogs, their tiny tadpole babies, and several of their new features to test out. From what we know about the frog mobs so far, they spawn in swamp biomes where they'll spend time snapping fireflies out of the air and hopping on Dripleafs. We already knew some other neat things about frogs, like how they hatch as tadpoles and grow into one of three frog varieties based on the biome they mature in. Mojang had also let on that frogs would be useful to players in some fashion, but didn't initially let on how.",
    date: '2022-02-03',
    },
    {
    title: `You can now be a wookiee in Fortnite, but not Chewie`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/C2cxkttvDWTSbMYPuSmgGh-1024-80.jpg.webp`,
    alt: 'Background image 4',
    category: 'Fortnite',
    body: "The latest live action series set in a galaxy far, far away, The Book of Boba Fett, has introduced us to some cool new Star Wars characters, including Ming-Na Wen's Fennec Shand and new-wookiee-in-town Krrsantan, an arm-ripping fiend who towers over everybody else. Now you can play as both of them in Fortnite thanks to yet another crossover between Disney and the battle royale game. Boba Fett himself previously joined Fortnite earlier last month, and he's also back in the item shop so you can fill out your own Book of Boba.",
    date: '2022-02-03',
    },
    {
    title: `This Minecraft replica of Final Fantasy 14's Sharlayan is so good I thought it was an in-game screenshot`,
    headerBgSrc: `https://cdn.mos.cms.futurecdn.net/hkhr3YJhakUEfdFFUik3vV-1024-80.jpg.webp`,
    alt: 'Background image 5',
    category: 'Minecraft',
    body: "I am undeniably an absolute sucker for people recreating cool stuff in Minecraft, and nothing has hit my interests more than this fantastic Minecraft replica of Final Fantasy 14's Old Sharlayan. The Grecian-inspired city is the first new area you visit in Endwalker, the game's latest expansion. It's become one of my favourite zones in the game and this replica has done a great job at capturing how gosh-darn pretty the whole place is. The creation comes courtesy of a BiliBili user, who posted a two-minute video of their build to the Chinese social media site. It shows off the giant statue/fountain seen in the Endwalker trailer, the sage council building and the city's main aetheryte which is even spinning in the recreation. Sadly, there doesn't seem to be a way to check this out in Minecraft ourselves, so we'll just have to admire the trailer a few times.",
    date: '2022-02-04',
    },
    ];

const list = document.createElement('ul');
document.body.append(list);

const newsArr = news.map(n => createNewsArticle(n));
list.append(...newsArr);

function createNewsArticle (n) {
    const newsArticle = document.createElement('li');
    newsArticle.classList.add('article');
    
    const bgImgDiv = createBgImgDiv(n);
    const content = createContent(n);
    newsArticle.append(bgImgDiv, content);

    function changeBgColor (e) {
        // this.style.backgroundColor = 'rgb(223, 223, 223)';
        e.target.closest('li').classList.toggle('liDark');
    }

    newsArticle.addEventListener('click', changeBgColor);

    return newsArticle;
}

function createBgImgDiv({title, headerBgSrc, alt}) {
    const bgImgDiv = document.createElement('div');
    bgImgDiv.classList.add('bgImgDiv');

    const bgImg = document.createElement('img');
    bgImg.classList.add('bgImg');
    bgImg.src = headerBgSrc;
    bgImg.alt = alt;

    const header = document.createElement('h2');
    header.classList.add('title');
    header.textContent = title;

    const like = createLike();

    bgImgDiv.append(bgImg, header, like);

    return bgImgDiv;
}


function createLike () {
    const like = document.createElement('span');
    like.classList.add('like');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('likeIcon');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-heart');
    like.append(likeIcon);

    function changeColor (e) {
        e.target.closest('.likeIcon').classList.toggle('likeIconYellow');
        e.stopPropagation();
    }

    like.addEventListener('click', changeColor);

    return like;
}

function createContent (n) {
    const content = document.createElement('div');
    content.classList.add('content');

    const cathegory = document.createElement('h3');
    cathegory.classList.add('category');
    cathegory.textContent = n.category;

    const bodyy = document.createElement('p');
    bodyy.classList.add('`body');
    bodyy.textContent = n.body;

    const buttonDiv = createBtn(n);
    content.append(cathegory, bodyy, buttonDiv);

    return content;
}

function createBtn ({date}) {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const trashBtn = createTrashBtn();

    const dates = document.createElement('span');
    dates.classList.add('date');
    dates.textContent = date;
    buttonDiv.append(trashBtn, dates);

    return buttonDiv;
}

function createTrashBtn () {
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash');

    const trashBtnIcon = document.createElement('i');
    trashBtnIcon.classList.add('fa-solid');
    trashBtnIcon.classList.add('fa-trash');
    trashBtnIcon.classList.add('trashBtn');
    trashBtn.append(trashBtnIcon);

    function deleteNews (e) {
        e.target.closest('li').remove();
    }
    
    trashBtn.addEventListener('click', deleteNews);

    return trashBtn;
}


