import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      <div className="flex items-center">
        <h1 className="inline-block text-transparent bg-clip-text font-bold text-3xl md:text-5xl tracking-[-1.25px] black-gradient py-4">
          Hi again,
        </h1>
      </div>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        As the famous saying goes,{" "}
        <strong>
          &ldquo;We grow old too soon and get smart too late,&ldquo;
        </strong>{" "}
        and this rings true for me as I reflect on my childhood. I grew up in a
        remote area of Bangladesh, where modern technology like televisions,
        computers, and the internet were not accessible. Despite this, I found
        joy in playing traditional Bengali games and exploring the natural
        beauty of my surroundings. However, this lack of exposure also meant
        that there were many things I didn&apos;t learn until later in life. I
        eventually learned these things the hard way, very late in my life.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        Then I began my journey into the world of technology as a student of{" "}
        <strong>
          Information & Communication Technology (ICT) at Comilla University.
        </strong>{" "}
        It was here that I discovered my passion for exploring the vast
        possibilities that the internet and modern technologies had to offer.
        During my first two years of graduation, I spent countless hours with my
        friends, immersing myself in the intricacies of the digital world. I
        learned the fundamentals of programming, delved into the inner workings
        of the internet, and began providing services that showcased my newfound
        knowledge.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        <strong>
          But it was during my third year of graduation, amidst the COVID-19
          pandemic, that my passion for coding truly ignited.
        </strong>{" "}
        I spent endless hours in front of my computer, learning{" "}
        <strong>Javascript</strong>,<strong>Typescript</strong> and popular
        frameworks like <strong>ReactJS</strong>, <strong>NextJS</strong>,{" "}
        <strong>NodeJS</strong>, and
        <strong> ExpressJS</strong>. I also delved into database management with{" "}
        <strong>SQL</strong> and
        <strong> MongoDB</strong>. As my skills grew, so did my desire to master
        the art of programming.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        <strong>
          Upon realizing that there were still gaps in my knowledge,
          particularly in solving complex programming problems and designing
          complex solutions
        </strong>
        , I decided to take action. I initially tried learning C++ and continued
        to solve problems using this language. However, I eventually found that
        my true passion lay in using Python. I
        <strong>migrated to Python and have been solving problems</strong> with
        it ever since. To further improve my skills, I entered on a journey to
        master <strong>data structures and algorithms</strong>. I tackled
        numerous problems on popular coding platforms such as{" "}
        <strong>LeetCode</strong> and <strong>HackerRank</strong>, ultimately
        solving over <strong>700 problems</strong>, including database-related
        problems.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        But it was my experience providing services that really put my skills to
        the test. Over the years,{" "}
        <strong>
          I successfully removed malware/virus from over 800 client sites and
          more than 2200 websites across 41% of countries worldwide
        </strong>
        , minimizing the impact of these vicious attacks. Through these
        experiences, I honed my problem-solving skills and learned how to work
        with clients to resolve complex issues.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        My journey has been one of growth, perseverance, and a relentless
        pursuit of knowledge. I look forward to continuing to challenge myself,
        pushing the limits of what is possible, and contributing my skills to
        the world of software engineering.
      </p>
      <p className="leading-relaxed text-gray-500 paragraphSize">
        If you want to chat, feel free to{" "}
        {
          <Link className="underline" href="/contact">
            reach out
          </Link>
        }
        .
      </p>
    </div>
  );
};

export default About;
