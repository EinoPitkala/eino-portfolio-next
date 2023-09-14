import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLanguage } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.testaustime.fi/users/Eino/activity/summary"
        );
        const jsonData = await response.json();
        setData(jsonData.last_month.languages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const projects = [
    {
      lang: ["ReactJS", "CSS"],
      name: "eino-it-www",
      description:
        "Website for my business. Made with ReactJS and CSS. Static website, no backend.",
      image: "/eino-it.png",
      url: "https://eino-it.fi",
    },
    {
      lang: ["ReactJS", "SCSS"],
      name: "eino-porfolio-react",
      description:
        "My old personal website. Made with ReactJS and SCSS. Static website, no backend.",
      url: "https://eino-it.fi",
      image: "/eino-portfolio-react.png",
      archived: true,
    },
    {
      lang: ["Next JS", "SCSS"],
      name: "eino-porfolio-next",
      description:
        "My personal website. Made with ReactJS and SCSS. Static website, no backend.",
      url: "https://eino.bio/",
      image: "/eino-portfolio-next.png",
    },
    {
      lang: ["NextJS", "SCSS", "WIP"],
      name: "lomakeitaat-www",
      description:
        "Cottage rental website. Made with NextJS and SCSS. Linkage to Lomarengas' booking system. WIP",
      url: null,
      private: true,
    },
    {
      lang: ["Wordpress"],
      name: "hanesbakery.fi",
      description: "Website for a local bakery. Made with Wordpress.",
      url: "https://hanesbakery.fi",
      image: "/hanesbakery.jpg",
      private: true,
    },
  ];
  const Stars = ({ filled }: { filled: number }) => {
    const maxStars = 5;
    const filledStars = Math.min(filled, maxStars);

    const filledStarElements = Array.from({ length: filledStars }, (_, i) => (
      <FontAwesomeIcon key={i} icon={faStar} />
    ));

    return <>{filledStarElements}</>;
  };
  return (
    <main className="bg-zinc-900 text-stone-300">
      <div className="min-h-screen px-4 flex flex-col pt-20 text-center content-center ">
        <div className="min-h-[200px]">
          <h1 className="text-6xl font-bold p-0 gradient-text">Eino Pitkälä</h1>
          <p className="text-xl mt-5">
            Tech nerd, front-end developer and entrepreneur @{" "}
            <Link href={"https://eino-it.fi"} className="link">
              eino-it.fi
            </Link>
          </p>
        </div>

        <h2 className="text-3xl font-bold p-0 mt-20 ">About me</h2>
        <p className="text-l px-0 mt-4 md:px-32 lg:px-72 ">
          Hi! I&apos;m Eino Pitkälä, 14 year old boy from Finland. Besides
          school, I work as an entrepreneur in my own company,{" "}
          <Link className="link" href={"https://eino-it.fi"}>
            Eino IT
          </Link>
          . I&apos;m interested in coding in different languages and I&apos;m
          learning to code more and more all the time. I do small projects with
          React and for my company&apos;s clients, I usually make websites with
          WordPress.
        </p>
        <h2 className="text-3xl font-bold p-0 mt-20 ">
          Coding stats past month
        </h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap  text-left">
          {Object.entries(data).map((item, index) => {
            const minutes = item[1] / 60;
            return Math.ceil(item[1] / 60) === 0 ? null : item[1] > 300 ? (
              <Card>
                <h2 className="text-2xl font-bold gradient-text font-sans py-2">
                  {item[0]}
                </h2>
                <p>{(minutes / 60).toFixed(2)} hours</p>
              </Card>
            ) : null;
          })}
        </div>
        <h2 className="text-3xl font-bold p-0 mt-20">My skills</h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap mb-[40px]">
          <Card>
            <i className="devicon-html5-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              HTML5
            </h2>
            <p>
              <Stars filled={5} />
            </p>
          </Card>
          <Card>
            <i className="devicon-css3-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              CSS3
            </h2>
            <p>
              <Stars filled={5} />
            </p>
          </Card>
          <Card>
            <i className="devicon-javascript-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              Javascript
            </h2>
            <p>
              <Stars filled={2} />
            </p>
          </Card>
          <Card>
            <i className="devicon-react-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              React JS
            </h2>
            <p>
              <Stars filled={2} />
            </p>
          </Card>
          <Card>
            <i className="devicon-nextjs-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              Next JS
            </h2>
            <p>
              <Stars filled={3} />
            </p>
          </Card>
        </div>
        <h2 className="text-3xl font-bold p-0 mt-20">My projects</h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap  text-left mb-[40px]">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="flex gap-3">
                {project.archived ? (
                  <h5 className="text-red-500 font-bold opacity-80 bg-zinc-600 p-1 rounded-lg">
                    Archived
                  </h5>
                ) : null}
                {project.private ? (
                  <h5 className="text-red-500 font-bold opacity-80 bg-zinc-600 p-1 rounded-lg">
                    Private
                  </h5>
                ) : null}
                {Array.isArray(project.lang)
                  ? project.lang.map((lang: string, index: number) => (
                      <h5
                        key={index}
                        className="font-bold opacity-80 bg-zinc-600 p-1 rounded-lg"
                      >
                        {lang}
                      </h5>
                    ))
                  : null}
              </div>
              <h2 className="text-2xl font-bold gradient-text font-sans py-2">
                {project.name}
              </h2>
              <p className="text-lg mb-4">{project.description}</p>
              <Image
                src={project.image!}
                className="mb-4 rounded-xl"
                width={600}
                height={400}
                alt="Image of the project."
              />
              {project.url == null ? null : (
                <Button
                  href={project.url}
                  text={project.archived ? "View on GitHub" : "View project"}
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
