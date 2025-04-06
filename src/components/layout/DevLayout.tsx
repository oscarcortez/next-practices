import React, { JSX, ReactNode } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Navigation from './Navigation';

type LayoutProps = {
  children: ReactNode;
  navigation: { name: string; href: string }[];
};

export default function DevLayout({ children, navigation }: LayoutProps): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        {children}
      </div>
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <div className="max-w-sm">
              <div className="mb-4">
                {/* Logo o ícono */}
                <span className="text-indigo-400 text-2xl font-bold">⤴</span>
              </div>
              <p className="text-sm leading-relaxed">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Marketing</a></li>
                  <li><a href="#" className="hover:underline">Analytics</a></li>
                  <li><a href="#" className="hover:underline">Automation</a></li>
                  <li><a href="#" className="hover:underline">Commerce</a></li>
                  <li><a href="#" className="hover:underline">Insights</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Submit ticket</a></li>
                  <li><a href="#" className="hover:underline">Documentation</a></li>
                  <li><a href="#" className="hover:underline">Guides</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Jobs</a></li>
                  <li><a href="#" className="hover:underline">Press</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Terms of service</a></li>
                  <li><a href="#" className="hover:underline">Privacy policy</a></li>
                  <li><a href="#" className="hover:underline">License</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}