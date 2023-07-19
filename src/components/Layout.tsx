import { useEffect, useState } from "react";
import Image from "next/image";
import alyah from "../assets/projetos/alyah.png";
import capivara from "../assets/projetos/Capivara.png";
import angel from "../assets/projetos/angel.png";
import owl from "../assets/projetos/owl.png";
import moon from "../assets/projetos/moonriver.png";

export default function Main() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Contrate nossos serviços");
  const [index, setIndex] = useState(0);

  const [textEmail, setTextEmail] = useState("");
  const [fullTextEmail, setFullTextEmail] = useState(
    "Email: email.example@gmail.com"
  );
  const [indexEmail, setIndexEmail] = useState(0);

  const [finishedText, setFinishedText] = useState(false);

  const [textTelefone, setTextTelefone] = useState("");
  const [fullTextTelefone, setFullTextTelefone] = useState(
    "Telefone: 99-99999-9999"
  );
  const [indexTelefone, setIndexTelefone] = useState(0);

  const [finishedEmail, setFinishedEmail] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
    if (text === fullText) {
      setFinishedText(true);
      if (indexEmail < fullTextEmail.length) {
        setTimeout(() => {
          setTextEmail(textEmail + fullTextEmail[indexEmail]);
          setIndexEmail(indexEmail + 1);
        }, 50);
      }
    }
    if (textEmail === fullTextEmail) {
      setFinishedEmail(true);
      if (indexTelefone < fullTextTelefone.length) {
        setTimeout(() => {
          setTextTelefone(textTelefone + fullTextTelefone[indexTelefone]);
          setIndexTelefone(indexTelefone + 1);
        }, 50);
      }
    }
  }, [index, indexEmail, indexTelefone]);

  return (
    <div className="grotesk max-w-8xl mx-auto bg-dark font-rajdhani">
      <section className="w-full text-black">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-primary inline-block">
              Descubra a facilidade da sua vida. Desenvolva com a gente.
            </h2>
          </div>
          <div className="mb-20 mt-44 inline-flex w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <div className="w-full">
              <div
                className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-terciary pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
              >
                <div className="top mb-2 flex justify-end">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-4 flex">
                  <span className="text-green-400">computer:~$</span>
                  <span className="flex-1 typing items-center pl-2">
                    {text}
                  </span>
                </div>
                {finishedText && (
                  <div className="mt-4 flex">
                    <a href="mailto:pontodigital.strans@gmail.com">
                      <span className="text-green-400">computer:~$</span>
                      <span className="flex-1 typing items-center pl-2">
                        {textEmail}
                      </span>
                    </a>
                  </div>
                )}
                {finishedEmail && (
                  <div className="mt-4 flex">
                    <span className="text-green-400">computer:~$</span>
                    <span className="flex-1 typing items-center pl-2">
                      {textTelefone}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="/images/placeholder.png" alt="image" />
          </div> */}
        </div>
        <div className="mt-0  lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-primary lg:text-3xl">
                  Principais Produtos
                </h2>
              </div>
              <div
                className="
                grid grid-cols-1
                gap-16
                text-center
                lg:grid-cols-5"
              >
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Alyah"
                    src={alyah}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Alyah
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Sistema Capivara"
                    src={capivara}
                    className="block h-24 object-contain rounded-3xl"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Capivara
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="App Angel"
                    src={angel}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    App Angel
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Sistema Coruja"
                    src={owl}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Coruja
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Sistema Moon River"
                    src={moon}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Moon River
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-primary">
            <div
              className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
            >
              <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                  Quer saber mais ?
                </h2>
                <div className="mb-4 text-lg leading-relaxed">
                  Oferecemos serviços amplos ... Entre em contato com a gente
                  enviando mensagem para o email
                  <a
                    href="mailto:pontodigital.strans@gmail.com"
                    className="underline-blue font-semibold"
                  >
                    {" "}
                    email.example@gmail.com{" "}
                  </a>
                  ou para o Whattsapp
                  <p className="underline-blue font-semibold">99-99999-9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
