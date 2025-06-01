import { JSX, useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CustomNavigationMenu } from './CustomNavigationMenu';

type HeaderProps = {
  navigation: { name: string; href: string }[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export default function Header({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps): JSX.Element {

  const [typedText, setTypedText] = useState(""); // Estado para el texto que se escribe
  const fullText = "git checkout dev ↵"; // Texto completo que se escribirá
  const [showTypedText, setShowTypedText] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => {
          const next = `${prev}${fullText[index]}`;
          return next.slice(-10);
        });
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowTypedText(false); // Cambiar el estado después de un tiempo adicional
        }, 500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Oscar Cortez</span>
            <div className="w-40 h-15 bg-black text-green-500 font-mono text-lg rounded-md shadow-md border border-green-500">
              <div className="flex space-x-1 px-3 py-1 bg-gray-800 rounded-t-md">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              </div>
              <div className="px-4 py-2">
                {
                  showTypedText ? (
                    <span className="text-white">{typedText}</span>
                  ) : (<>
                    <span className="text-white">luco</span>
                    <span className="text-green-500">(dev)</span>
                    <span className="text-white ml-2">$</span>
                  </>
                  )}
              </div>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <CustomNavigationMenu />
          {/* {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300"
            >
              {item.name}
            </a>
          ))} */}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800 dark:ring-gray-700">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header >
  );
}