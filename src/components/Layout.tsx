import { useEffect, useState } from "react";
import Image from "next/image";
import base from "../assets/projetos/base.png";
import capivara from "../assets/projetos/Capivara.png";
import eagle from "../assets/projetos/eagle.png";
import glc from "../assets/projetos/glc.png";
import note from "../assets/projetos/note.svg";

export default function Main() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Contrate nossos serviços");
  const [index, setIndex] = useState(0);

  const [textEmail, setTextEmail] = useState("");
  const [fullTextEmail, setFullTextEmail] = useState(
    "Email: pontodigital.strans@gmail.com"
  );
  const [indexEmail, setIndexEmail] = useState(0);

  const [finishedText, setFinishedText] = useState(false);

  const [textTelefone, setTextTelefone] = useState("");
  const [fullTextTelefone, setFullTextTelefone] = useState(
    "Telefone: 86-98767-2920"
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
                    alt="Sistema Base"
                    src={base}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Base
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
                    alt="Sistema Base"
                    src={eagle}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Vigia
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Sistema Base"
                    src={glc}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Glc
                  </p>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center hover:bg-primary h-72 rounded-xl group">
                  <Image
                    alt="Sistema Base"
                    src={note}
                    className="block h-24 object-contain"
                  />
                  <p className="text-center text-primary group-hover:text-terciary font-semibold text-lg">
                    Sistema Notificação
                  </p>
                </div>
              </div>
              {/* <div className="my-12 flex w-full flex-col pl-8 text-center">
                <a
                  href="/"
                  className="
                  underline-blue
                  mb-8
                  mt-6
                  text-xl
                  font-bold
                  text-black
                "
                >
                  Ut eleifend.
                </a>
              </div> */}
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
                    pontodigital.strans@gmail.com{" "}
                  </a>
                  ou para o Whattsapp
                  <p className="underline-blue font-semibold">86-98767-2920</p>
                </div>
              </div>
              {/* <img
                className="
                lg:w-5/7
                mb-40
                hidden
                w-5/6
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
                src="/images/placeholder.png"
                alt="img"
              />

              <img
                className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
                src="/images/placeholder.png"
                alt="img"
              /> */}
            </div>
          </div>
        </div>
        {/* 
        <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              Lorem ipsum elit sit unar,{" "}
              <br className="hidden lg:inline-block" />
              consectetur adipiscing elit.
            </h2>
          </div>
          <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className="text-2xl text-black">
              Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
              pellentesque <br className="hidden lg:inline-block" />
              tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
              ac mus. Arcu quis feugiat.
            </h3>
          </div>
          <div className="flex w-full flex-row justify-center pt-24 text-center">
            <a
              href="/"
              className="underline-blue px-8 text-xl font-semibold text-black"
            >
              Ut eleifend.
            </a>
            <a
              href="/"
              className="underline-gray px-6 text-xl font-semibold text-gray-700"
            >
              Tempus in.
            </a>
          </div>
        </div>
        <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
          <img src="/images/placeholder.png" alt="img" />
        </div>
        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Bibendum tortor et sit convallis nec morbi.
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                Lorem ipsum auctor sit amet, consectetur adipiscing elit. Sit a
                egestas tortor viverra nisl, in non. Neque viverra sollicitudin
                amet volutpat auctor amet. Aliquam pellentesque condimentum
                mauris sit tincidunt egestas ullamcorper sit.{" "}
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="/images/placeholder.png" alt="img" />
            </div>
          </div>
          <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Eu diam in magna blandit sit magna dolor proin velit.
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                  Lorem ipsum ac neque, consectetur adipiscing elit. Nibh neque,
                  ut purus donec sed donec semper ac vestibulum. Mi urna,
                  facilisis arcu, auctor elit. Ut nunc non aenean netus ut.
                </p>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="my-24 p-4 text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                  Lorem ipsum mi at amet, consecteturadipiscing elit. Mattis.
                </h2>
                <p className="text-md mb-8 lg:text-xl">
                  Lorem ipsum praesent amet, consectetur adipiscing elit. Cursus
                  ullamcorper id tristique tincidunt. Tincidunt feugiat at mi
                  feugiat hendrerit. Ac faucibus accumsan, quis lacus, lectus
                  eget bibendum. At praesent quisque sollicitudin fusce.
                </p>
              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="/images/placeholder.png"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="image"
                />
                <img
                  src="/images/placeholder.png"
                  className="inline-block object-cover object-center lg:hidden"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center">
                <h3 className="mb-8 text-5xl font-bold text-black">
                  Dui tellus quis magna id ultricies eu sed.
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                  Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                  accumsan arcu, aenean viverra penatibus quis. Laoreet.
                </h3>
              </div>
              <img src="/images/placeholder.png" alt="img" />
            </div>
          </div>
          <div className="text-black">
            <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
              <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <img
                  className="rounded object-cover object-center"
                  alt="image"
                  src="/images/placeholder1.png"
                />
              </div>
              <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                  Viverra enim diam gravida risus nisl.
                </h2>
                <h2 className="mb-6 text-lg font-bold sm:text-lg">
                  Lectus eu.
                </h2>
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed
                  eget enim vel.
                </h2>
                <a
                  href="/"
                  className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                >
                  Ut convallis massa.
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
