import { FC } from 'react';

export const Carousel: FC = () => {
    const images = [
        "https://assets-19n.pages.dev/imgs/0.png",
        "https://assets-19n.pages.dev/imgs/8.png",
        "https://assets-19n.pages.dev/imgs/1.png",
        "https://assets-19n.pages.dev/imgs/2.png",
        "https://assets-19n.pages.dev/imgs/3.png",
        "https://assets-19n.pages.dev/imgs/4.png",
        "https://assets-19n.pages.dev/imgs/5.png",
        "https://assets-19n.pages.dev/imgs/6.png",
        "https://assets-19n.pages.dev/imgs/1.png",
        "https://assets-19n.pages.dev/imgs/7.png",
        "https://assets-19n.pages.dev/imgs/8.png",
        "https://assets-19n.pages.dev/imgs/9.png",
        "https://assets-19n.pages.dev/imgs/3.png",
        "https://assets-19n.pages.dev/imgs/5.png"
    ];

    return (
        <div className="footer-container w-full overflow-hidden -mt-4">
            <div className="slider">
                <div className="slide-track2">
                    {images.map((src, index) => (
                        <div className="slide" key={index}>
                            <img className="carouselIMG" src={src} alt={`img-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
