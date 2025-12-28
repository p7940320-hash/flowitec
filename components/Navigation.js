'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Pumps', href: '/products#pumps' },
        { name: 'Valves', href: '/products#valves' },
        { name: 'Motors', href: '/products#motors' },
        { name: 'Control Panels', href: '/products#control-panels' },
        { name: 'Spare Parts', href: '/products#spare-parts' },
        { name: 'Mixers', href: '/products#mixers' },
      ]
    },
    { name: 'Applications', href: '/applications' },
    { name: 'Industries', href: '/industries' },
    { name: 'Services', href: '/services' },
    { name: 'References', href: '/references' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo - Large and fits within header */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img 
              src="/flowitec-logo.png" 
              alt="Flowitec" 
              className="h-56 lg:h-60 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Ash background */}
          <div className="hidden lg:flex items-center bg-[#B0B6BB] rounded-lg px-2 py-2 space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-white/50 hover:text-primary rounded-md transition-colors flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-white/50 hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn primary text-sm px-5 py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left px-4 py-3 text-foreground hover:bg-muted flex justify-between items-center touch-manipulation"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-8">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary touch-manipulation"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-3">
              <Link href="/contact" className="btn primary w-full text-center touch-manipulation" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;