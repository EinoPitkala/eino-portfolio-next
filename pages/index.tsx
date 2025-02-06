import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLanguage } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
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
          Hi! I&apos;m Eino Pitkälä, 16 year old boy from Finland. Besides
          school, I work as an entrepreneur in my own company,{" "}
          <Link className="link" href={"https://eino-it.fi"}>
            Eino IT
          </Link>
          . I&apos;m interested in coding in different languages and I&apos;m
          learning to code more and more all the time. I do small projects with
          React and for my company&apos;s clients, I usually make websites with
          WordPress.
        </p>
        <h2 className="text-3xl font-bold p-0 mt-20">My skills</h2>
        <div className="mt-[40px] px-4 sm:px-24 font-rubik flex justify-center gap-3 flex-wrap mb-[40px]">
          <Card>
            <i className="devicon-html5-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              HTML5
            </h2>
            <p>
              <Stars filled={4} />
            </p>
          </Card>
          <Card>
            <i className="devicon-css3-plain colored text-4xl" />
            <h2 className="text-2xl font-bold gradient-text font-sans py-2">
              CSS3
            </h2>
            <p>
              <Stars filled={4} />
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
              <Stars filled={2} />
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
