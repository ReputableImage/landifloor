
    const MainHeroVideoTexts = [
        "We bring expertise to every flooring project. Count on us for reliable results.",
        "Choose from carpet, hardwood, vinyl, and more. We use durable, high-quality materials.",    
        "Customer satisfaction drives us. We provide expert advice and seamless installation."
    ];
    let MainHeroVideoCount = 0;
    let MainHeroVideoIndex = 0;
    let MainHeroVideoCurrentText = '';
    let MainHeroVideoLetter = '';
    let MainHeroVideoIsErasing = false;
    let MainHeroVideoTypeSpeed = 150;

    (function MainHeroVideoType() {
        if (MainHeroVideoCount === MainHeroVideoTexts.length) MainHeroVideoCount = 0;
        MainHeroVideoCurrentText = MainHeroVideoTexts[MainHeroVideoCount];

        if (!MainHeroVideoIsErasing) {
            MainHeroVideoLetter = MainHeroVideoCurrentText.slice(0, ++MainHeroVideoIndex);
            MainHeroVideoTypeSpeed = 3000 / MainHeroVideoCurrentText.length;
        } else {
            MainHeroVideoLetter = MainHeroVideoCurrentText.slice(0, --MainHeroVideoIndex);
            MainHeroVideoTypeSpeed = 1000 / MainHeroVideoCurrentText.length;
        }

        document.querySelector('.typed-text').textContent = MainHeroVideoLetter;

        if (!MainHeroVideoIsErasing && MainHeroVideoLetter.length === MainHeroVideoCurrentText.length) {
            MainHeroVideoIsErasing = true;
            setTimeout(MainHeroVideoType, 5000);
        } else if (MainHeroVideoIsErasing && MainHeroVideoLetter.length === 0) {
            MainHeroVideoIsErasing = false;
            MainHeroVideoCount++;
            setTimeout(MainHeroVideoType, 500);
        } else {
            setTimeout(MainHeroVideoType, MainHeroVideoTypeSpeed);
        }
    }());

