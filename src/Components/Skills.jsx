import React from "react";

const Skills = () => {
  // Reusable SkillCard component inside the Skills file
  const SkillCard = ({ imgSrc, altText, link }) => {
    return (
      <div className="w-60 h-56 md:w-60 md:h-60 bg-white border border-gray-200 rounded-lg shadow m-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="p-8 rounded-t-lg" src={imgSrc} alt={altText} />
        </a>
      </div>
    );
  };

  // Array of skills data
  const skills = [
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcode-institute-org.github.io%2FFull-Stack-Web-Developer-Stream-0%2Fassets%2Fhtml5-css3.png&f=1&nofb=1&ipt=b9116d2fda4306d9a7959dacaef526f9fd978fb84301a1d34ca683a48ad42a8a&ipo=images",
      altText: "HTML CSS",
      link: "#",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chapter247.com%2Fwp-content%2Fuploads%2F2019%2F11%2F110-1106837_proj4js-by-proj4js-javascript-icon-logo-png-clipart-904x1024.png&f=1&nofb=1&ipt=0ec27099c995287f01111bd4d2ce99802414cf39fc9941a6c4a8efbbcba3d667&ipo=images",
      altText: "JavaScript",
      link: "#",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png&f=1&nofb=1&ipt=580f357ae9477c1449096bcca5e2ed3b312d6abf99f632c2f099e4c2b0c46209&ipo=images",
      altText: "React",
      link: "#",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fbrands-and-social-media%2Ftailwind-css-icon.png&f=1&nofb=1&ipt=04c0a04fb8cb18ab8954fbec008285372e26287e66f86ae6af832d6a0b48ba1a&ipo=images",
      altText: "Tailwind CSS",
      link: "#",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5gf2JQQmWla-GU-WXTrGcgHaE8%26pid%3DApi&f=1&ipt=bab7a25a2e81b4a7e0bd37725aa526c95022963cf184af1b2a059f5fa592a19f&ipo=images",
      altText: "GitHub",
      link: "#",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGitHub-Logo.png&f=1&nofb=1&ipt=725e6a0f858176d697a17262fd7fb24fa269ca481d8bb0384e84e58272d75329&ipo=images",
      altText: "Git",
      link: "#",
    },
  ];

  return (
    <>
      <div
        id="skills"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <div className="flex justify-center m-10 font-serif text-5xl font-bold">
          <p>Skills</p>
        </div>
        <div className="container w-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                imgSrc={skill.imgSrc}
                altText={skill.altText}
                link={skill.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
