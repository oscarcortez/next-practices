'use client';

import Link from 'next/link'
// import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CustomTerminal } from '@/components/custom-ui/CustomTerminal'
import DevLayout from '@/components/layout/DevLayout'
// import TerminalIcon from "@/components/icons/TerminalIcon"
import Image from 'next/image';
import { CarouselPlugin } from '@/components/hero/CustomCarousel'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Terminal, FileCode } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { US, BO, ES, DE, DK, BR, IN } from 'country-flag-icons/react/3x2'
import ReactIcon from '@/svg/reactIcon.svg'
import NextIcon from '@/svg/nextIcon.svg'
import NestIcon from '@/svg/nestIcon.svg'
import SupabaseIcon from '@/svg/supabaseIcon.svg'
import VercelIcon from '@/svg/vercelIcon.svg'
import PrismaIcon from '@/svg/prismaIcon.svg'
import GraphQLIcon from '@/svg/graphqlIcon.svg'
import TailwindIcon from '@/svg/tailwindIcon.svg'
import ShadcnIcon from '@/svg/shadcnIcon.svg'
import PostgresIcon from '@/svg/postgresIcon.svg'
import GmailIcon from '@/svg/gmailIcon.svg'


const navigation = [
  { name: 'Sobre mi', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Productos', href: '#' },
  { name: 'Preguntame', href: '#' },
]

export default function Page() {

  // create array of strings
  const softwareDeveloperLanguages: { title: string; flag: React.ReactNode }[] = [
    { title: 'Software Developer', flag: <US title="English" width={24} /> },
    { title: 'Desarrollador de Software', flag: <ES title="Espaniol" width={24} /> },
    { title: 'Softwareudvikler', flag: <DK title="Danish" width={24} /> },
    { title: 'Desenvolvedor de software', flag: <BR title="Portugues" width={24} /> },
    { title: 'Softwareentwickler', flag: <DE title="German" width={24} /> },
    { title: 'सॉफ़्टवेयर डेवलपर', flag: <IN title="Hindi" width={24} /> }
  ];

  const techStackIcons = [
    { src: ReactIcon, alt: 'React', link: 'https://reactjs.org/', width: 48, height: 48, textColor: 'hover:text-cyan-500' },
    { src: NextIcon, alt: 'NextJS', link: 'https://nextjs.org/', width: 64, height: 48, textColor: 'hover:text-black dark:text-white' },
    { src: NestIcon, alt: 'NestJS', link: 'https://nestjs.com/', width: 48, height: 48, textColor: 'hover:text-red-400' },
    { src: SupabaseIcon, alt: 'Supabase', link: 'https://supabase.com/', width: 48, height: 48, textColor: 'hover:text-emerald-500' },
    { src: VercelIcon, alt: 'Vercel', link: 'https://vercel.com/', width: 40, height: 48, textColor: 'hover:text-black dark:text-white' },
    { src: PrismaIcon, alt: 'Prisma', link: 'https://www.prisma.io/', width: 48, height: 48, textColor: 'hover:text-gray-400' },
    { src: GraphQLIcon, alt: 'GraphQL', link: 'https://graphql.org/', width: 48, height: 48, textColor: 'hover:text-pink-500' },
    { src: TailwindIcon, alt: 'TailwindCSS', link: 'https://tailwindcss.com/', width: 56, height: 48, textColor: 'hover:text-sky-400' },
    { src: ShadcnIcon, alt: 'Shadcn/ui', link: 'https://ui.shadcn.com/', width: 48, height: 48, textColor: 'hover:text-gray-500' },
    { src: PostgresIcon, alt: 'PostgreSQL', link: 'https://www.postgresql.org/', width: 48, height: 48, textColor: 'hover:text-blue-300' }
  ];
  // const [terminalLineData, setTerminalLineData] = useState<React.ReactElement[]>(
  //   [<TerminalOutput key={0}>Hola Developer Bienvenido :)</TerminalOutput>],
  // );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <DevLayout navigation={navigation}>
      <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
        <h1 className="text-4xl font-bold text-gray-400 mb-6">
          <span className="inline-flex items-center">
            <BO title="Bolivia" width={30} className='rounded-sm' />
            <span className="ml-2"> {' '} Hi, I'm Oscar Cortez</span>
          </span>
        </h1>
        <h1 style={{ wordBreak: 'break-word', hyphens: 'auto' }} className="mx-auto text-4xl text-justify max-w-4xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent whitespace-pre-line break-words hyphens-auto">
          {softwareDeveloperLanguages.map((lang, index) => (
            <span key={index} >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a className="cursor-pointer transition duration-200 ease-in-out">
                    {lang.title}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  {lang.flag}
                </TooltipContent>
              </Tooltip>
              {index < softwareDeveloperLanguages.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-stretch">
          <div className="flex-1 flex flex-col justify-center text-2xl text-gray-400 max-w-2xl space-y-7 sm:mt-0 mt-10">
            <p>
              Get to know my{' '}
              <span className="text-gray-300 hover:text-blue-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                professional
              </span>
              {' '} world ... and the {' '}
              <span className="text-gray-300 hover:text-pink-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                personal
              </span> {' '} side that drives it.
            </p>
            <p>
              No fluff. Just free, real-world{' '}
              <span className="text-gray-300 hover:text-blue-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                tech tips
              </span>.
            </p>
            <p>
              Behind the code: true dev{' '}
              <span className="text-gray-300 hover:text-pink-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                stories
              </span>.
            </p>
            <p>
              <span className="text-gray-300 hover:text-pink-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                Developers
              </span> and{' '}
              <span className="text-gray-300 hover:text-blue-400 font-semibold hover:underline cursor-pointer transition duration-200 ease-in-out">
                mentors
              </span> who inspire my work.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/hero/developer.svg" alt="Developer" width={500} height={250} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-balance text-5xl font-semibold tracking-tight bg-gradient-to-r from-slate-300 via-gray-400 to-slate-500 bg-clip-text text-transparent sm:text-7xl dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 drop-shadow-md">
            And that’s a wrap — no more, no less.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            💡 Did you know? This site runs on a tasty tech stack: <br />
            <span className="font-medium text-gray-800 dark:text-gray-300">
              {techStackIcons.map((tech, index) => (
                <span key={index}>
                  <Link href={tech.link} target="_blank" rel="noopener noreferrer" className={`hover:underline ${tech.textColor} transition duration-200 ease-in-out`}>
                    {tech.alt}
                  </Link>
                  {index < techStackIcons.length - 1 ? ', ' : ' '}
                </span>
              ))}
            </span>

            — and a pinch of magic ✨. Built with love, bugs, and lots of coffee ☕.

          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {techStackIcons.map((tech) => (
              <Tooltip key={tech.alt}>
                <TooltipTrigger asChild>
                  <Link href={tech.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Image src={tech.src} alt={tech.alt} width={tech.width} height={tech.height} className="transition-transform duration-200 hover:scale-110" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {tech.alt}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-stretch">
          <div className="flex items-center gap-3 flex-1 basis-1/2">
            <Image src={GmailIcon} alt="Gmail Icon" width={24} height={24} className="transition-transform duration-200 hover:scale-110" />
            <span>oscarkortez@gmail.com</span>
          </div>
          <div className="flex-1 basis-1/2 flex justify-center">
            <div className="flex flex-col w-full gap-2">
              <Textarea className="w-full h-30" placeholder="Type your message here." />
              <Button
                className="w-full cursor-pointer transition-all duration-200 bg-pink-500 hover:bg-blue-500"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>



    </DevLayout >
  )
}
