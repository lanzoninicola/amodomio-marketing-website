import type { LinksFunction } from "@remix-run/node";
import { type V2_MetaFunction } from "@remix-run/node";

// https://smart-pizza-marketing.framer.ai/

export const meta: V2_MetaFunction = () => {
    return [
        { title: "A Modio Mio" },
        {
            name: "description",
            content: "Bem vindo a A Modo Mio - Pizza Delivery & Al Taglio",
        },
        {
            name: "keywords",
            content: "pizzaria, pizza, pizza delivery, pizza italiana, massa italiana, pizza romana, italia pizza, pizzaria italia",
        },
        {
            name: "og:title",
            content: "A Modio Mio - Pizza Delivery & Al Taglio",
        },
        {
            name: "og:description",
            content: "Pizza de massa italiana autêntica feita por um verdadeiro italiano, criado e crescido em Itália.",
        },
        {
            name: "og:image",
            content: "https://amodomio.com.br/images/logo.png",
        },
        {
            name: "og:url",
            content: "https://amodomio.com.br/",
        },
        {
            name: "og:type",
            content: "website",
        },
        {
            name: "og:site_name",
            content: "A Modio Mio - Pizza Delivery & Al Taglio",
        },
        {
            name: "og:locale",
            content: "pt_BR",
        },




    ];
};

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
    },
    {
        href: "https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Inconsolata&family=BioRhyme+Expanded:wght@700&display=swap",
        rel: "stylesheet",
    },
    {
        href: "/apple-touch-icon.png",
        rel: "apple-touch-icon"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
    },
    {
        rel: "manifest",
        href: "/site.webmanifest"
    }
];

/**
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            <link rel="manifest" href="/site.webmanifest">
 */

export default function HomePage() {

    return (
        <>
            <div className="relative w-screen h-screen bg-brand-black">

                <div className="grid place-items-center w-full h-full">
                    <LogoJSX />
                </div>

                <div className="absolute bottom-40 left-0 w-full z-20">
                    <div className="flex items-center justify-center text-center mx-6 mb-12">
                        <p className="text-white font-bold leading-tight tracking-wide max-w-prose">Pizza de massa italiana <span className="text-brand-yellow">autêntica</span> feita por um <span className="text-brand-yellow">verdadeiro italiano</span>, nascido e crescido na Itália.</p>
                    </div>
                    <div className="text-center">
                        <p className="font-accent text-white font-bold leading-tight tracking-wide text-sm">em breve a</p>
                        <p className="font-accent text-white font-bold leading-tight tracking-wide text-sm">PATO BRANCO</p>
                    </div>
                </div>

                <div className="absolute bottom-10 left-0 w-full z-10" data-element="flag">
                    <div className="flex items-center justify-center text-center">
                        <div className="flex gap-1">
                            <div className="bg-brand-green-italia w-3 h-5"></div>
                            <div className="bg-white w-3 h-5"></div>
                            <div className="bg-brand-red-italia w-3 h-5"></div>
                        </div>
                    </div>
                </div>

            </div>


            {/* <Container>
                <section className="bg-red-500 p-4 w-full">
                    <h3>A nossa pizza</h3>
                    <p>Primeira coisa: a nossa pizza não é redonda! Ela é retangular, às vezes com umas curvinhas que a gente deixa de propósito. Nada de máquinas para fazer a massa e as formas, é só com as nossas mãos que tiramos um monte de massa. E no final, adoramos aquele toque rústico</p>
                    <p>Nós nos orgulhamos de não sermos convencionais. Afinal, pizza não precisa ser sempre igual, né? Ah, e não se preocupe em comer com as mãos, afinal, pizza retangular pede um jeitinho especial. Aqui, a diversão é garantida!</p>
                </section>
                <section className="bg-green-500 p-4 w-full">
                    <h3>O tamanhno</h3>
                    <p>Olha só, a gente trabalha com uma medida só: 35cm de comprimento e 25cm ou 27cm de largura. É uma pizza feita especialmente para dois, mas se você estiver com muita fome, dá pra encarar sozinho também! A nossa massa é tão levinha e o sabor é tão espetacular que é impossível resistir</p>
                    <p>Ah, e não se esqueça de trazer a galera! Afinal, uma pizza gostosa é ainda melhor quando compartilhada com pessoas especiais. Vamos fazer desse momento uma festa cheia de sabor e diversão!</p>
                </section>
                <section className="bg-blue-500 h-[700px] w-full">
                    <h3>A massa</h3>
                    <p>E aí, chegamos ao ponto alto: nossa massa é simplesmente sensacional! Crocante, aerada, leve... É uma verdadeira obra de arte inspirada na tradição romana e feita pelo um verdadeiro italiano. Já vou te adiantando: ninguém na cidade oferece uma massa tão espetacular quanto a nossa. Depois que você experimentar, pode apostar que não vai querer saber de outra pizza.</p>
                    <p>Poucos e simples ingredientes: farinha, agua, sal, fermento e o que mais... Ah sim... o toque e a experiença do chef!</p>
                </section>
                <section className="bg-brown-500 h-[700px] w-full">
                    <h3>As combinações</h3>
                    <p>Na nossa pizzaria, a criatividade é a nossa marca registrada. Estamos sempre inovando e criando novas combinações para surpreender os nossos clientes mais exigentes. Então, esteja preparado para se encantar com sabores que vão além do convencional, levando você a uma jornada gastronômica única..</p>
                    <p>Cada semana queremos oferecer uma no</p>
                </section>
            </Container> */}
        </>
    )
}


function LogoJSX() {
    return (
        <div className="flex flex-col w-max text-center">
            <h1 className="relative font-logo text-[3.5rem] leading-none md:text-[5.25rem] text-white">a modo mio</h1>
            <div className="flex flex-col mb-2">
                <div className="bg-brand-green-italia h-1"></div>
                <div className="bg-white h-1"></div>
                <div className="bg-brand-red-italia h-1"></div>
            </div>
            <h2 className="relative font-accent text-xs md:text-lg text-white uppercase tracking-widest">pizza delivery & al taglio</h2>
        </div>
    )
}