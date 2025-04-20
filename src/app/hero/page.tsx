'use client';

// import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CustomTerminal } from '@/components/custom-ui/CustomTerminal'
import DevLayout from '@/components/layout/DevLayout';

const navigation = [
  { name: 'Sobre mi', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Productos', href: '#' },
  { name: 'Preguntame', href: '#' },
]

export default function Page() {
  // const [terminalLineData, setTerminalLineData] = useState<React.ReactElement[]>(
  //   [<TerminalOutput key={0}>Hola Developer Bienvenido :)</TerminalOutput>],
  // );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <DevLayout navigation={navigation}>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <CustomTerminal initMessage="hola" />
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-gray-100">
            Te invito a curiosear mi portafolio
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </DevLayout>
  )
}
