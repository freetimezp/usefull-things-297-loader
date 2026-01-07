const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const title = document.querySelector(".intro-title:not(.shadow)");
const shadow = document.querySelector(".intro-title.shadow");

setTimeout(() => {
    loader.animate(
        [
            { opacity: 1, transform: "scale(1) rotateX(0deg)" },
            { opacity: 0, transform: "scale(0.6) rotateX(90deg)" },
        ],
        {
            duration: 1200,
            easing: "cubic-bezier(.4,0,.2,1)",
            fill: "forwards",
        }
    );

    setTimeout(() => {
        intro.style.pointerEvents = "auto";

        intro.animate(
            [
                { opacity: 0, transform: "scale(1.3)" },
                { opacity: 1, transform: "scale(1)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "forwards",
            }
        );

        const wallTitle = document.querySelector(".intro-title.wall");
        const fallingTitle = document.querySelector(".intro-title.falling");

        wallTitle.style.animation = "wallHit 0.4s ease-out";

        setTimeout(() => {
            fallingTitle.style.animation = "wallPeelFall 2.6s linear forwards";

            setTimeout(() => {
                fallingTitle.style.animation += ", settleWiggle 0.6s ease-out";
            }, 2400);
        }, 2000);
    }, 600);
}, 5000);
