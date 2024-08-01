import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Link from 'next/link';

const TECHNOLOGIES: { name: string; projects: string[] }[] = [
  {
    name: 'React',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'NextJS',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'NodeJS',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Typescript',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Javascript',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Docker',
    projects: ['Levain'],
  },
  {
    name: 'Open-Source',
    projects: ['OpenTierBoy'],
  },
  {
    name: 'Enterprise',
    projects: ['Levain'],
  },
  {
    name: 'Expo (React Native)',
    projects: [],
  },
  {
    name: 'Supabase',
    projects: [],
  },
  {
    name: 'REST',
    projects: ['Levain'],
  },
  {
    name: 'GraphQL',
    projects: ['Levain'],
  },
  {
    name: 'Jest',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Mocha',
    projects: [],
  },
  {
    name: 'Cypress',
    projects: ['Levain'],
  },
  {
    name: 'Playwright',
    projects: ['Levain'],
  },
  {
    name: 'SQL',
    projects: ['Levain'],
  },
  {
    name: 'PostgreSQL',
    projects: ['Levain'],
  },
  {
    name: 'TypeORM',
    projects: ['Levain'],
  },
  {
    name: 'Sequelize',
    projects: ['Levain'],
  },
  {
    name: 'KnexJS',
    projects: [],
  },
  {
    name: 'Redis',
    projects: [],
  },
  {
    name: 'NestJS',
    projects: ['Levain'],
  },
  {
    name: 'BunJS',
    projects: [],
  },
  {
    name: 'Vite',
    projects: [],
  },
  {
    name: 'HTML',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Material UI',
    projects: [],
  },
  {
    name: 'Tailwind CSS',
    projects: ['OpenTierBoy', 'Levain'],
  },
  {
    name: 'Shadcn UI',
    projects: ['OpenTierBoy'],
  },
  {
    name: 'Blockchain',
    projects: ['Levain'],
  },
  {
    name: 'Web 3',
    projects: ['Levain'],
  },
  {
    name: 'UTXO',
    projects: ['Levain'],
  },
  {
    name: 'EVM',
    projects: ['Levain'],
  },
  {
    name: 'SVM',
    projects: ['Levain'],
  },
  {
    name: 'TVM',
    projects: ['Levain'],
  },
  {
    name: 'Unreal Engine',
    projects: [],
  },
];

// Function to calculate font size based on index
const getTechnologiesFontSize = (index: number) => {
  if (index < 3) return 'text-xs'; // Top 3 technologies
  if (index < 7) return 'text-xs';
  return 'text-xs'; // All remaining technologies
};

function LinkPreview({
  title,
  url,
  description,
  projectId,
}: {
  title: string,
  url: string,
  description: string,
  projectId: string,
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block text-sm w-full h-full max-w-lg xs:max-w-full group project-${projectId}`}
    >
      <div
        className="
          link-preview-content h-full flex flex-col justify-between p-4
          transition-colors duration-500 ease-in-out
          group-hover:bg-[rgb(var(--foreground-rgb))]
          group-hover:text-[rgb(var(--background-start-rgb))]
          rounded
        "
      >
        <div>
          <h3
            className="text-lg font-semibold line-clamp-2 pb-1 group-hover:underline underline-offset-2"
          >
            {title}
          </h3>
          <p className="text-sm line-clamp-5 pt-1">
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      <header className="relative md:w-1/2">
        <h1 className="md:hidden pt-4 ">infinia.space</h1>
        <div className="hidden md:flex items-center justify-center">
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
      </header>
      <main className="md:w-3/4 xl:w-1/2 p-4 pt-8 md:pt-16 dotted-grid max-w-5xl mx-6">
        <section id="about">
          <h2 className="text-xl mb-2 font-extralight">
            Hi, I&apos;m
            {' '}
            <span className="font-normal">Isaac</span>
            .
          </h2>
          <span className="font-extralight space-y-2">
            <p>
              I specialize in
              {' '}
              <span className="font-normal">software engineering</span>
              {' '}
              and
              {' '}
              <span
                className="font-normal"
              >
                web development
              </span>
              , with recent experience in
              {' '}
              <span
                className="font-normal"
              >
                blockchain
              </span>
              {' '}
              technologies.
            </p>
            <p>
              I&apos;m dedicated to crafting
              {' '}
              <span className="font-normal">meaningful</span>
              {' '}
              digital solutions that
              {' '}
              <span className="font-normal">inspire</span>
              {' '}
              positive change.
            </p>
          </span>
        </section>
        <section
          id="projects"
          className="flex flex-col lg:flex-row will-change-auto link-preview-container my-4"
        >
          <article id="OpenTierBoy" className="link-preview-item flex-1">
            <LinkPreview
              title="OpenTierBoy (Founder)"
              url="https://www.opentierboy.com"
              description="An open-source, non-commercial project that allows users to easily create and share tier lists with a focus on privacy and simplicity."
              projectId="OpenTierBoy"
            />
          </article>
          <article id="Levain" className="link-preview-item flex-1">
            <LinkPreview
              title="Levain (Former Lead SWE)"
              url="https://developer.levain.tech/"
              description="An enterprise-grade, self-custody wallet infrastructure with the mission to simplify the integration of blockchain technology into the foundation of every business."
              projectId="Levain"
            />
          </article>
        </section>
        <section id="connect" className="mt-4 text-center md:text-start">
          <p className="font-extralight ">
            Pleased to meet you.
          </p>
          <div
            className="flex space-x-6 mt-4 justify-center md:justify-start md:space-x-4 md:m-0 md:mt-4"
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
        </section>
        <footer
          className="relative font-thin pt-2 mt-8 pb-8 max-w-screen-md text-center md:text-start"
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
                  className={`${fontSize} inline-block transition-opacity duration-300 ease-in-out technology ${tech.projects.map((project) => `project-${project}`)
                    .join(' ')}`}
                >
                  {tech.name}
                </span>
              </React.Fragment>
            );
          })}
        </footer>
      </main>
    </div>
  );
}
