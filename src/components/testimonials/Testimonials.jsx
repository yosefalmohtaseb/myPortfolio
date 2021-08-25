import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hamdi Hijazi",
      title: "ReactJs Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQGGEY4LVpKTiw/profile-displayphoto-shrink_200_200/0/1626354735373?e=1635379200&v=beta&t=jhAMtDm9Gm-TjmhXMp8LZMZjMFXRleUz-K1jUeQCh5k",
      icon: "assets/linkedin.png",
      desc:
        "Yousef is an expert in web design and ICT facilitator, I have worked with him more than once, who ready to do the best to reach the best results, Yousef is hardworking and I highly recommend him.",
        link:"https://www.linkedin.com/in/hamdihijazi97"
    },
    {
      id: 2,
      name: "Mohammed AL-Reai",
      title: "Full stack Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/D5635AQGKeASi-iBj1w/profile-framedphoto-shrink_200_200/0/1628016254894?e=1629810000&v=beta&t=t8t0JqHiGUqEevDxiMBG1sBG1GSyfdfolC4WixQ-TdA",
      icon: "assets/linkedin.png",
      desc:
        "Yousef is a cool developer who thinks outside the box and in general made decision to build a creative solutions with the best performance.",
        link:"https://www.linkedin.com/in/mohammed-al-reai",
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
        "Yousef is a great team leader, he is helpful, organised, hardworking and meticulous.",
        link:"https://www.linkedin.com/in/omarimad/"
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d,index) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href={d.link} key={`index-${index}`} rel="noopener noreferrer" target="_blanck" >
              <img className="right" src={d.icon} alt="" />
              </a>
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
