import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Link from 'next/link';

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
  if (index < 3) return 'text-xs'; // Top 3 technologies
  if (index < 7) return 'text-xs';
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
  description,
}: {
  title: string,
  url: string,
  description: string,
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm hover:underline w-full h-full max-w-md"
    >
      <div className="link-preview-content h-full flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold line-clamp-2 pb-1">{title}</h3>
          <p
            className="text-sm line-clamp-5 pt-1"
          >
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center space-x-1 mt-2">
          <span>{new URL(url).hostname}</span>
          <HiOutlineExternalLink />
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
    <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
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
      <section className="h-screen flex flex-col md:flex-row justify-center items-center">
        {staticOrbitSection()}
        <div className="md:w-3/4 xl:w-1/2 p-4 pt-20 md:pt-16 dotted-grid max-w-5xl">
          <div className="ml-6 mr-6">
            <h2 className="text-xl mb-2 font-extralight">
              Hi, I&apos;m
              {' '}
              <span className="font-normal">Isaac</span>
              .
            </h2>
            <span className="font-extralight space-y-1.5">
              <p>
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
              <p>
                I seek to build
                {' '}
                <span className="font-normal">
                  meaningful
                </span>
                {' '}
                products and experiences.
              </p>
            </span>
            <div
              className="flex flex-col lg:flex-row will-change-auto link-preview-container my-4"
            >
              <div className="link-preview-item flex-1">
                <LinkPreview
                  title="OpenTierBoy (Founder)"
                  url="https://www.opentierboy.com"
                  description="An open-source, non-commercial project that allows users to easily create and share tier lists with a focus on privacy and simplicity."
                />
              </div>
              <div className="link-preview-item flex-1">
                <LinkPreview
                  title="Levain (Former Lead SWE)"
                  url="https://developer.levain.tech/"
                  description="An enterprise-grade, self-custody wallet infrastructure with the mission to simplify the integration of blockchain technology into the foundation of every business."
                />
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex space-x-6 justify-center m-16 md:justify-start md:space-x-4 md:m-0 md:mt-8"
            >
              <button type="button" aria-label="github">
                <a
                  href="https://github.com/infinia-yzl"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <SiGithub className="text-3xl" />
                </a>
              </button>
              <button type="button" aria-label="linkedin">
                <a
                  href="https://www.linkedin.com/in/infinia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <SiLinkedin className="text-3xl" />
                </a>
              </button>
              <button type="button" aria-label="email">
                <a href="mailto:dev@infinia.space" aria-label="email">
                  <MdEmail className="text-3xl" />
                </a>
              </button>
            </div>
            <div
              className="font-thin mt-12 pb-8 max-w-screen-md text-center md:text-start"
            >
              {TECHNOLOGIES.map((tech, index) => {
                const fontSize = getTechnologiesFontSize(index);
                const isDifferentSize = index > 0
                  && fontSize !== getTechnologiesFontSize(index - 1);
                return (
                  <React.Fragment key={tech.name}>
                    {isDifferentSize ? <br /> : null}
                    {!isDifferentSize && index !== 0 ? <span className="mx-2">·</span> : null}
                    <span
                      className={`${fontSize} inline-block `}
                      style={{ color: 'rgb(var(--foreground-rgb))' }}
                    >
                      {tech.name}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
