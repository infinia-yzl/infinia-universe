import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import logo from '../../public/logo-2.png';

const SECTIONS = ['Home', 'OpenTierBoy', 'Levain'];

const TECHNOLOGIES: { name: string }[] = [
  { name: 'React' },
  { name: 'NextJS' },
  { name: 'NestJS' },
  { name: 'Typescript' },
  { name: 'Javascript' },
  { name: 'Expo (React Native)' },
  { name: 'Supabase' },
  { name: 'REST' },
  { name: 'GraphQL' },
  { name: 'Jest' },
  { name: 'Mocha' },
  { name: 'Cypress' },
  { name: 'Playwright' },
  { name: 'SQL' },
  { name: 'PostgreSQL' },
  { name: 'TypeORM' },
  { name: 'Sequelize' },
  { name: 'KnexJS' },
  { name: 'Redis' },
  { name: 'NodeJS' },
  { name: 'BunJS' },
  { name: 'Vite' },
  { name: 'HTML' },
  { name: 'Material UI' },
  { name: 'Tailwind CSS' },
  { name: 'Blockchain' },
  { name: 'Web 3' },
  { name: 'UTXO' },
  { name: 'EVM' },
  { name: 'SVM' },
  { name: 'TVM' },
  { name: 'Unreal Engine' },
];

// Function to calculate font size based on index
const getTechnologiesFontSize = (index: number) => {
  if (index < 3) return 'text-lg'; // Top 3 technologies
  if (index < 7) return 'text-base';
  return 'text-xs'; // All remaining technologies
};

// interface Experience {
//   title: string,
//   company: string,
//   description: string,
//   link?: string,
// }
//
// const EXPERIENCES: Experience[] = [
//   {
//     title: 'Lead Software Engineer',
//     company: 'Levain, Cake Group',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://developer.levain.tech',
//   },
//   {
//     title: 'Software Engineer',
//     company: 'Bake, Cake Group',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://bake.io',
//   },
//   {
//     title: 'Software Engineer',
//     company: 'Zynesis Pte Ltd',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://zynesis.com/',
//   }
// ];

function LinkPreview({
  title,
  url,
  imageSrc,
  description,
}: {
  title: string,
  url: string,
  imageSrc: string | StaticImport,
  description: string,
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm hover:underline my-4 max-w-3xl"
    >
      <div className="flex flex-row-reverse overflow-hidden border rounded-lg shadow-sm">
        <div className="relative w-1/4 min-w-[120px] h-[120px]">
          <Image
            src={imageSrc}
            alt={`${title} Preview`}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold line-clamp-2 pb-2">{title}</h3>
          <p className="text-sm line-clamp-2">{description}</p>
          <div className="flex flex-row items-center space-x-1 mt-2">
            <span>{new URL(url).hostname}</span>
            <HiOutlineExternalLink />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  // Define the base size for the sun or galaxy core
  const CORE_SIZE_BASE = 15;

  // Calculate orbit sizes based on the core size
  const ORBIT_SIZES = [CORE_SIZE_BASE + 10, CORE_SIZE_BASE + 25, CORE_SIZE_BASE + 40];

  // Define pulse animation
  const PULSE_ANIMATION_DURATION = 10; // Duration in seconds
  const PULSE_ANIMATION = `pulse ${PULSE_ANIMATION_DURATION}s infinite cubic-bezier(0.4, 0, 0.6, 1)`;

  // Function to determine the correct rotation animation based on index
  const getRotationAnimation = (index: number) => (index % 2 === 0 ? 'spin-cw 120s linear infinite' : 'spin-ccw 120s linear infinite');

  const staticOrbitSection = () => (
    <div className="w-full md:w-1/2 relative items-center justify-center hidden md:flex">
      {/* Orbits */}
      {ORBIT_SIZES.map((size, index) => {
        const animationDelay = `${(PULSE_ANIMATION_DURATION / ORBIT_SIZES.length) * index * 0.1}s`;
        const rotationAnimation = getRotationAnimation(index);
        return (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={`orbit-${index}`}
            className="orbit absolute rounded-full border"
            style={{
              animation: `${PULSE_ANIMATION} ${animationDelay}, ${rotationAnimation}`,
              width: `${size}vw`,
              height: `${size}vw`,
              maxWidth: `${(index + 1) * 13.5}vw`,
              maxHeight: `${(index + 1) * 13.5}vw`,
            }}
          />
        );
      })}

      {/* Sun or Galaxy Core */}
      <div
        className="z-10 rounded-full flex items-center justify-center"
        style={{
          width: `${CORE_SIZE_BASE}vw`,
          height: `${CORE_SIZE_BASE}vw`,
        }}
      >
        <h1 className="font-thin" style={{ fontSize: `${CORE_SIZE_BASE / 12}vw` }}>
          infinia.space
        </h1>
      </div>
    </div>
  );

  return (
    <main>
      <nav className="fixed top-0 right-0 p-4 z-50">
        {SECTIONS.map((section, index) => (
          <a
            key={section}
            href={`#section-${index}`}
            className="mx-2 p-2 bg-opacity-50 bg-gray-800 text-white rounded"
          >
            {section}
          </a>
        ))}
      </nav>
      <section className="h-screen flex flex-col md:flex-row justify-center items-center">
        {staticOrbitSection()}
        <div className="md:w-1/2 p-4 pt-20 md:pt-4 dotted-grid max-w-5xl">
          <div className="ml-6 mr-6">
            <h2 className="text-xl mb-2 font-extralight">
              Hi, I&apos;m
              {' '}
              <span className="font-normal">Isaac</span>
              .
            </h2>
            <p className="mb-2 font-extralight">
              I specialize in
              {' '}
              <span className="font-normal">software engineering</span>
              {' '}
              and
              {' '}
              <span className="font-normal">web development</span>
              {' '}
              with recent
              working experience
              in the
              {' '}
              <span className="font-normal">blockchain</span>
              {' '}
              industry.
            </p>
            <div className="font-thin border-l-2 border-gray-700 pl-2 mb-2 max-w-screen-md">
              {TECHNOLOGIES.map((tech, index) => {
                const fontSize = getTechnologiesFontSize(index);
                const isDifferentSize = index > 0
                  && fontSize !== getTechnologiesFontSize(index - 1);
                return (
                  <React.Fragment key={tech.name}>
                    {isDifferentSize ? <br /> : null}
                    {!isDifferentSize && index !== 0 ? <span className="mx-2">·</span> : null}
                    <span
                      className={`${fontSize} inline-block mb-2`}
                      style={{ color: 'rgb(var(--foreground-rgb))' }}
                    >
                      {tech.name}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>

            <LinkPreview
              title="OpenTierBoy"
              url="https://www.opentierboy.com"
              imageSrc={logo}
              description="OpenTierBoy as an open-source project that allows users to create and share tier lists."
            />
            <LinkPreview
              title="Levain"
              url="https://developer.levain.tech/"
              imageSrc={logo}
              description="Levain is an enterprise-grade, self-custody wallet infrastructure with the mission to simplify the integration of blockchain technology into the foundation of every business."
            />
            {/* CTA */}
            <div
              className="flex space-x-6 justify-center m-8 md:justify-start md:space-x-4 md:m-0"
            >
              <button type="button" aria-label="github">
                <a
                  href="https://github.com/infinia-yzl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <SiGithub className="text-4xl" />
                </a>
              </button>
              <button type="button" aria-label="linkedin">
                <a
                  href="https://www.linkedin.com/in/infinia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <SiLinkedin className="text-4xl" />
                </a>
              </button>
              <button type="button" aria-label="email">
                <a href="mailto:explore@infinia.space" aria-label="email">
                  <MdEmail className="text-4xl" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
