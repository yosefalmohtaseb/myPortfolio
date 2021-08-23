import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hamdi Hijazi",
      title: "ReactJs Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQGGEY4LVpKTiw/profile-displayphoto-shrink_200_200/0/1626354735373?e=1635379200&v=beta&t=jhAMtDm9Gm-TjmhXMp8LZMZjMFXRleUz-K1jUeQCh5k",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Mohammed AL-Reai",
      title: "Full stack Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/D5635AQGKeASi-iBj1w/profile-framedphoto-shrink_200_200/0/1628016254894?e=1629810000&v=beta&t=t8t0JqHiGUqEevDxiMBG1sBG1GSyfdfolC4WixQ-TdA",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Omar Imad",
      title: "Front-end Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHA-r8CqXLbZw/profile-displayphoto-shrink_200_200/0/1627816741695?e=1635379200&v=beta&t=aFZEnMQSAtwiaZUTFgaXejOZzow8sKpvk_33R8PM260",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
