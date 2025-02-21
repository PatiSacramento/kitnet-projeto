import { RiPhoneLine, RiWhatsappLine } from '@remixicon/react';
import Link from 'next/link';
// import { DatabaseLogo } from "../../../public/DatabaseLogo"
import { Button } from '../Button';
import ThemeSwitch from '../ThemeSwitch';

const navigation = {
  contato: [
    { name: '(11) 97362-3344', href: 'tel:+5511973623344', whatsapp: false },
    {
      name: '(11) 94453-1303',
      href: 'https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Tenho%20interesse%20nas%20kitnets.',
      whatsapp: true,
    },
  ],
  navegacao: [
    { name: 'Início', href: '#', button: false },
    { name: 'Nossas Kitnets', href: '/#nossas-kitnets', button: false },
    { name: 'A Região', href: '/#regiao', button: false },
    { name: '', href: '', button: true },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-[8rem] w-[90%] px-4 pb-8 pt-12 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-20">
          <div className="space-y-8">
            {/* <DatabaseLogo className="w-32 sm:w-40" /> */}
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Nós da KITUSP somos especializados no aluguel de moradias estudantis e kitnets
              mobiliadas na região do Butantã, próximo à USP.
              <br />
              Nossa prioridade é atender da melhor forma possível os nossos clientes.
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Contato
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Product">
                {navigation.contato.map((item) => (
                  <li key={item.name} className="w-fit">
                    <Link
                      className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 gap-2"
                      href={item.href}
                      target={item.whatsapp ? '_blank' : undefined}
                      rel={item.whatsapp ? 'noopener noreferrer' : undefined}
                    >
                      {item.whatsapp ? (
                        <RiWhatsappLine
                          aria-hidden="true"
                          size={20}
                          className="text-green-700 dark:text-green-400"
                        />
                      ) : (
                        <RiPhoneLine
                          aria-hidden="true"
                          size={20}
                          className="text-gray-600 dark:text-gray-600"
                        />
                      )}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Navegação
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Resources">
                {navigation.navegacao.map((item) => (
                  <li key={item.name} className="w-fit">
                    <Link
                      className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href={item.href}
                      target={item.button ? '_blank' : undefined}
                      rel={item.button ? 'noopener noreferrer' : undefined}
                    >
                      <span>{item.name}</span>
                      {item.button && <Button>Contato</Button>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 w-[90%] flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-8 sm:mt-16 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; 2025 Iati Tech Software.
          </p>
        </div>
      </div>
    </footer>
  );
}
