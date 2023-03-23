import { useState } from 'react'

import { Container } from '@/components/Container'
import { Modal } from '@/components/Modal'

import paulBImage from '@/images/avatars/paul-brody-ey.jpg'
import aidenS from '@/images/avatars/aiden-slavin-wef.jpg'
import eyalEImage from '@/images/avatars/eyal-eithcowich-deepdao.jpg'
import kyleW from '@/images/avatars/kyle-weiss-gitcoin.jpg'
import johnnyC from '@/images/avatars/johnny-chin-origami.jpg'
import connorS from '@/images/avatars/connor-spelliscy-drc.jpg'
import priitL from '@/images/avatars/priit-laat-pwc.jpg'
import kaidoK from '@/images/avatars/kaido-kunnapas-sorainen.jpg'
import viljarK from '@/images/avatars/viljar-kahari-edau.jpg'
import aleksaM from '@/images/avatars/aleksa-dtp.jpg'
import mariL from '@/images/avatars/mari-liis-kukk-fi.jpg'
import astraT from '@/images/avatars/astra-tikas-ino.jpg'
import ottV from '@/images/avatars/ott-velsberg-mkm.jpg'
import stenverJ from '@/images/avatars/stenver-jerkku-swd.jpg'
import dimaS from '@/images/avatars/dima-sarle-earthians.jpg'
import georgeB from '@/images/avatars/george-basiladze-w.jpg'
import fredH from '@/images/avatars/frederic-hubin-coinspaid.jpg'
import magnusJ from '@/images/avatars/magnus-jones-ey.jpg'
import mariLi from '@/images/avatars/mari-lukkainen-icebreaker.jpg'
import amandeepT from '@/images/avatars/amandeep-thandi-chainalysis.jpg'
import romanG from '@/images/avatars/roman-german-kk.jpg'
import tarmoV from '@/images/avatars/tarmo-virki-single.earth.jpg'
import reimoH from '@/images/avatars/reimo-hammerberg-wallester.jpg'
import javierO from '@/images/avatars/javier-ortin-ino.jpg'
import toomasS from '@/images/avatars/toomas-seppel-hlf.jpg'
import kennethO from '@/images/avatars/kenneth-ofriel-toku.jpg'
import martaP from '@/images/avatars/marta-piekarska-consensys.jpg'
import jeanM from '@/images/avatars/jean-marc-seigneur-uniGeneve.jpg'
import franckN from '@/images/avatars/franck-nouyrigat-electis.jpg'
import vikramA from '@/images/avatars/vikram-aditya-daolens.jpg'
import vattanP from '@/images/avatars/vattan-ps-ino.jpg'

let days = [
  {
    name: 'DAO Day',
    date: 'March 28',
    dateTime: '2023-03-28',
    speakers: [
      {
        name: 'Paul R. Brody',
        role: 'Global Blockchain Leader, EY',
        image: paulBImage,
        twitter: 'https://twitter.com/pbrody',
        bio: 'Paul Brody is Global Blockchain Leader for EY (Ernst & Young). Under his leadership, EY has established a global presence in the blockchain space with a particular focus on public blockchains, assurance, and business application development in the Ethereum ecosystem. He led EY first blockchain strategy engagement, examining how digital services, payments and internet of things are coming together in new ecosystems, and building a strategy and technology road map for one of EY’s major clients. He has 20 years of consulting and strategy experience in mobile and electronics. Prior to joining EY, he served as Vice President and Global Industry Leader of Electronics at a multinational technology company.',
      },
      {
        name: 'Aiden Slavin',
        role: 'Crypto Impact and Sustainability Accelerator (CISA) Project Lead, World Economic Forum',
        image: aidenS,
        linkedin: 'https://www.linkedin.com/in/aiden-slavin-19ba18157/',
        bio: 'Aiden Slavin is the project lead of the World Economic Forum’s Crypto Impact and Sustainability Accelerator. At the Forum he leads initiatives across the public and private sectors to advance the Web3 policy and impact agenda. Prior to the World Economic Forum, he led policy and partnerships programs at ID2020, an alliance focused on realizing the benefits of blockchain-based digital ID. He holds a BA from Columbia University and an MSc from the University of Oxford.',
      },
      {
        name: 'Eyal Eithcowich',
        role: 'CEO, DeepDAO',
        image: eyalEImage,
        linkedin: 'https://www.linkedin.com/in/eyal-eithcowich-0810925/',
        bio: "20 years of experience developing and leading technology projects for companies such as Apple Computer, TIAA-CREF, and others in the U.S. and Israel. Fell in love with DAOs and never looked back. \nDeepDAO's mission is to provide comprehensive discoverability for the decentralized governance systems. DeepDAO provides comprehensive analytics and information gathering. The main dashboard product enumerates and ranks DAOs using several key metrics such as membership and assets under management (AUM). We are constantly expanding both coverage of DAOs and the metrics that quantify and measure the dynamics of governance processes in DAOs.DeepDAO is covering both financial and governance data on 100+ top DAOs.",
      },
      {
        name: 'Kyle Weiss',
        role: 'Executive Director, GitCoin',
        image: kyleW,
        twitter: 'http://twitter.com/kbw',
        bio: "Kyle is currently the Executive Director of the Gitcoin Foundation, and leads our Gitcoin Passport Protocol. He has been at Gitcoin for a few years now and has been instrumental in the launch of Gitcoin's Protocols and DAO. Before Gitcoin, Kyle was a Product Lead at Twitter and has led a number of Product Management teams in technology organizations. He is a three time startup founder who focuses on building incredible teams and sought after products.",
      },
      {
        name: 'Johnny Chin',
        role: 'Co-Founder, Origami',
        image: johnnyC,
        twitter: 'https://twitter.com/samclamdisco',
        bio: 'Genesis Member and Leader at Orange DAO.\nCo-founder of Origami, which is DAO Operating System for Communities. One of the leading minds in DAO-industry. ',
      },
      {
        name: 'Connor Spelliscy',
        role: 'Executive Director, DAO Research Collective',
        image: connorS,
        twitter: 'https://twitter.com/c_spelliscy',
        bio: 'Connor is a decentralized internet researcher and advocate, primarily focused on DAOs.\nHe is the Executive Director of the DAO Research Collective, which accelerates the functionality of DAOs by procuring and open sourcing targeted research foundational to effective DAO operation.\nHe co-founded the Canadian Web3 Council and the Blockchain Association, the leading Web3 industry association in Canada and the United States respectively. He is also a mentor at the University of Toronto’s Creative Destruction Lab, and advises non-profit foundations on advocacy. He was previously a lawyer at Goodmans LLP and a Venture Partner at Hangar. ',
      },
      {
        name: 'Priit Lätt',
        role: 'Partner, PwC Legal Baltics',
        image: priitL,
        linkedin: 'https://www.linkedin.com/in/priitlatt/',
        bio: 'Please welcome our next speaker at DAO DAY in Tallinn. Priit Lätt, who heads up the intellectual property/IT, tax dispute and public procurement law practices at PwC Legal in Estonia.\nPriit is a renowned specialist in IP, IT (including the internet of things and cryptocurrencies), tax and public procurement law, representing and advising Estonian and international companies and public institutions. Among other things, Priit has represented a client in Estonia’s biggest software dispute and in Estonia’s first bitcoin-related legal regulation lawsuit. Priit also successfully represented a client in a trademark dispute, in which the Supreme Court declared several important provisions of the Code of Civil Procedure, and Government Regulations that established limits to legal expenses in civil disputes, as invalid and unconstitutional.\nPriit is a founder and board member in numerous professional associations (e.g the Internet of Things and Estonian Cryptocurrency Association). He is also a member of the IP/IT commission of the Estonian Bar Association.',
      },
      {
        name: 'Kaido Künnapas',
        role: 'Partner, Sorainen Law Firm',
        image: kaidoK,
        linkedin: 'https://www.linkedin.com/in/kaidokunnapas/',
        bio: 'Please welcome our next speaker at DAO DAY in Tallinn. Kaido Künnapas - partner at Sorainen Law Firm. Kaido is the head of the Estonian Tax Law Working Group with a focus on direct taxes. Besides that, Kaido is involved in academic teaching and research, working with leaders in the technology sector.',
      },
      {
        name: 'Viljar Kähari',
        role: 'Board Member, Estonian Digital Assets Union',
        image: viljarK,
        linkedin: 'https://www.linkedin.com/in/viljarkahari/',
        bio: 'Viljar Kähari is a co-founder of PwC Legal Estonia with 22 years of experience in the financial services industry. His main focus is on financial services, regulatory compliance & risks and financial transactions and during past years also blockchain and digital assets (including cryptocurrencies).\nViljar advises local and international regulated entities such as banks, credit providers, payment and e-money institutions, fund managers, insurance undertakings and FinTech/RegTech companies on wide range of compliance, licensing and risk matters including setting up or restructuring regulated businesses in Estonia and providing cross-border services abroad. He has also advised cryptocurrency companies on such matters.',
      },
      {
        name: 'Aleksa Mil',
        role: 'Host, DAO Today podcast',
        image: aleksaM,
        linkedin: 'https://www.linkedin.com/in/aleksa-mil/',
        bio: 'Aleksa is an experienced DAO and tokenization consultant and advisor with legal background. With a deep understanding of the potential of blockchain technology to revolutionize traditional business models, she helps both Web2 and Web3 businesses navigate the complexities of the decentralized environment.\nIn addition to her consulting work, Aleksa is a host of DAO Today educational podcast, which discusses DAO and blockchain related topics with the focus on regulatory challenges of the industry.',
      },
      {
        name: 'Mari-Liis Kukk',
        role: 'Head of Innovation Department, Estonian Financial Supervision and Resolution Authority',
        image: mariL,
        linkedin: 'https://www.linkedin.com/in/mari-liis-kukk-ph-d-00762662/',
        bio: 'Mari-Liis is Head of the Innovation Department at the Estonian Financial Supervision and Resolution Authority. In parallel, she leads the work of the authority’s Innovation Hub, which is aimed at helping fintech companies to understand how their solution may fit the regulatory environment. She has a PhD in Economics and Finance and her academic work revolves around the role of FinTechs in building a novel financial sector. She has co-authored two editions of the Estonian FinTech Report.',
      },
      {
        name: 'Astra Tikas',
        role: 'Co-founder, Internet Native Organization',
        image: astraT,
        linkedin: 'https://www.linkedin.com/in/astratikas/',
        bio: 'Astra Tikas is the Co-Founder of INO (Internet Native Organization that brings DAO solutions to the mainstream), former Board Member of the Estonian Cryptocurrency Association, and a consultant on crypto regulations topics. She has worked with various crypto start-ups to help to build them up in her role as an AML strategist. She is also a strong spiritual mind and a musician. Being an entrepreneur since age 21, she will never stop to find solutions and fun in business. \nAs part of her desire to promote cooperation between crypto companies and regulators, she organized a conference titled "Crypto Companies Call to Comply and Cooperate" in spring 2022. In the web3 space she has found her true passion and is one of the knowledgeable persons regarding AML topics; since 2022 she is deep into DAO-related topics. Spring 2023 organizing a DAODAY Estonia www.daoday.ee.',
      },
      {
        name: 'Ott Velsberg',
        role: 'Chief Data Officer, Republic of Estonia',
        linkedin: 'https://www.linkedin.com/in/ott-velsberg/',
        bio: 'Ott Velsberg is the current Chief Data Officer of Estonian Government with experience in coordinating data governance and data science, including domains of artificial intelligence, open data, citizen-centric data governance, data privacy and regulation, once-only principle, and much more. Strong experience with innovation management, strategic thinking, data management, data science and digital transformation. Leading Estonia to a trendsetter status in data governance, open data and artificial intelligence. He also serves as a board member for various boards, such as board of Statistics, board of Estonian Language technology, IT Academy AI and machine learning advisory board. He holds a PhD in Informatics at Umea University.',
        image: ottV,
      },
      {
        name: 'Stenver Jerkku',
        role: 'Founder & CEO, Solid World DAO',
        image: stenverJ,
        linkedin: 'https://www.linkedin.com/in/stenver-jerkku-58003188/',
        bio: 'Founder and CEO of Solid World, which brings liquidity to carbon financing as it fixes carbon financing issues by creating diversified carbon offtake agreement pools. Stenver Jerkku has been in Venture-backed tech for over a decade in multiple growth startups, some of which have become unicorns. Founder of eAgronom where he worked for six years and helped to raise nearly 10M eur. Founder of early-Glia(Unicorn), Ex-VP of EFS. Member of LFCA, TTI, Voyagers and ReFi DAO.',
      },
      {
        name: 'Dima Sarle',
        role: 'Founder and CEO, Earthians',
        image: dimaS,
        linkedin: 'https://www.linkedin.com/in/sarle/',
        bio: 'Having founded five companies, invested in a dozen startups, exited a business, and bankrupted a couple - Dima is keenly exploring what “work” means in our society and what it is going to mean in the future. He is a philosopher, a father, a mentor, tea drinker and a martial artist. Dima explores humanity through entrepreneurship. ',
      },
      {
        name: 'George Basiladze',
        role: 'Co-Founder and CEO, Wert',
        image: georgeB,
        linkedin: 'https://www.linkedin.com/in/georgebasiladze/',
        bio: 'George Basiladze is co-founder and CEO of Wert, a fintech company dedicated to creating products that expand fiat payment access to NFTs and the Web3 space.\nBefore Wert he co-founded Cryptopay, which launched in 2013 and still is one of the oldest Bitcoin wallets available in the UK with more than 1.5 million customers worldwide.\nPrevious roles: Chief Analyst for NordWest Energy, Corporate Financial Analyst for Evli Bank PLC, and Deal Intelligence Analyst for ReDeal AG, gaining years of experience in the financial and technology sectors. George was born in Georgia and is currently based in Estonia.',
      },
      {
        name: 'Frédéric Hubin',
        role: 'Management Board, CoinsPaid',
        image: fredH,
        linkedin: 'https://www.linkedin.com/in/fhubin/',
        bio: "Frédéric has been working in the banking and financial sector for nearly 25 years with experience acquired in Switzerland, Luxembourg, the United Kingdom, Belgium, the Netherlands, France and now Estonia. His expertise spans most of a bank's businesses, from payments to        derivatives pricing or from compliance to clearing and settlement. Frédéric's interest in DLT dates back to 2013 and he started developing smart contracts mimicking derivatives as early as 2016. He is currently a board member of Dream Finance OÜ, the company operating the CoinsPaid, CryptoProcessing and Altra.House brands.",
      },
      {
        name: 'Magnus Jones',
        role: 'Nordic Blockchain & Innovation Lead, EY',
        image: magnusJ,
        linkedin: 'https://www.linkedin.com/in/magnus-jones-ey/',
        bio: 'Magnus Jones is the Nordic Blockchain & Innovation Lead at EY Tax & Law. He assists clients with everything from regulatory challenges to technical implementations. Experienced within the world of NFTs, DeFi and DAOs and has worked with some of the world’s largest brands on their Web3 projects. Magnus has among others assisted Norwegian Tax Authorities on creating the World’s first guidance’s on how to tax NFTs and also DeFi. He is part of the EY Global Metaverse team, and is an experienced international speaker within digital trends and technology, covering many different areas through some of his roles as co-founder of the Norwegian Computer Society Group for Blockchain, co-founder and board member of Oslo Blockchain Cluster, and a lecturer at EMBA classes at BI Norwegian Business School, NHH Norwegian School of Economics and the University of Oslo. He is also a member of the Metaverse Expert Group of Interpol and an advisor to the United Nations working group for Crypto and Counter-terrorism.',
      },
      {
        name: 'Roman German',
        role: 'Founder, Krüpto Klubi',
        image: romanG,
        linkedin: 'https://www.linkedin.com/in/romangerman/',
        bio: 'Roman started buying Bitcoins back in 2012 while one bitcoin cost was 7 euros. 2014 his bitcoins were stolen in the biggest BTC hack to date - over 1 million bitcoins were stolen from an exchange called Mt. Gox. 2017 he joined Yolo Group where he helped build the 2nd biggest crypto casino in the world. Company grew from a handful of people to more than a thousand, Roman became CPO and the crypto ambassador of the company. \nHe has trained Arsenal and Southampton football clubs on the different aspects of crypto and in 2022 started a non-profit Crypto Club in Estonia that has taught thousands of people the benefits of crypto. This triggered him to learn more about crypto and teach others about it in his Crypto Club initiative. ',
      },
      {
        name: 'Mari Luukkainen',
        role: 'Principal, Icebreaker.vc',
        image: mariLi,
        linkedin: 'https://www.linkedin.com/in/mariluukkainen/',
        bio: 'Mari is a principal at Icebreaker.vc with a portfolio of 100+ startups located in Finland, Estonia and Sweden. She is an ex-growth operator of a 15% profitable MoM startup. Founder of a non-profit creating tech jobs for immigrant women Herizon.io. Investor of the year in NWITA. ',
      },
      {
        name: 'Amardeep Thandi',
        role: 'Regulation & Compliance Lead, Chainanalysis',
        image: amandeepT,
        linkedin: 'linkedin.com/in/amardeepthandi',
        bio: 'Amardeep Thandi leads digital asset regulation and compliance at Chainalysis, a leading global blockchain analytics firm. He supports financial institutions, crypto native and enterprise businesses, embrace digital assets, navigate the complex digital asset regulatory landscape and implement best in class compliance solutions to prevent financial crime.\nAmardeep brings over a decade of financial crime investigations experience and has extensive knowledge in the blockchain and digital asset ecosphere, having supported large global crypto organizations navigate through exceptionally complex and contentious regulatory matters involving investigations into compliance breaches, AML/CTF assurance, monitoring and back testing.',
      },
      {
        name: 'Tarmo Virki',
        role: 'Startup Editor, Äripäev',
        image: tarmoV,
        linkedin: 'https://www.linkedin.com/in/virki/',
        bio: 'Heading startup portal FoundMe at Estonian business media Äripäev. Experienced journalist and entrepreneur. Former Head of Communications at SingleEarth and journalist at Reuters. ',
      },
      {
        name: 'Reimo Hammerberg',
        role: 'Chairman of Supervisory Board, Wallester',
        image: reimoH,
        linkedin: 'https://www.linkedin.com/in/reimohammerberg/',
        bio: 'Reimo co-founded and led (until exit in 2023) Ignium, a company that makes capital available for small businesses by enabling them to engage and monetize their communities and turn them into stakeholders.  \nPrior to this Reimo was  partner with Sorainen for more than 13 years and built a leading capital markets and financial services practice and over the last years been deeply engaged in FinTech and blockchain projects and companies.  Reimo was recognised by most major legal directories as leading expert on the market. \nReimo is experienced board member in regulated financial services companies.',
      },
      {
        name: 'Javier Ortin',
        role: 'Co-founder, Internet Native Organization',
        image: javierO,
        linkedin: 'https://www.linkedin.com/in/javier-ortín-cervera-a6112b1b7/',
        bio: 'Javier is a blockchain developer, who’s deep journey with DAO’s started 2022 as co-founding the INO. He leads Easy feedback Protocol development, has master degree from TalTech and is teaching programming and robotics. One of the leading minds in Estonia regarding DAO topics.',
      },
      {
        name: 'Toomas Seppel',
        role: 'Partner, Hedman Law Firm',
        image: toomasS,
        linkedin: 'https://www.linkedin.com/in/toomas-seppel/',
        bio: 'Partner of Hedman Law Firm, working with the creative and tech industries. Specialist areas include intellectual property, privacy law, FinTech and IT law. Founder of www.GDPRregister.eu, a data privacy management software.\nWithin the technology industry, he advises on EU laws concerning software-based services, implementation of new technologies and expansion into new business markets. He also covers matters related to companies with crypto-based business models and tokenization projects. ',
      },
      {
        name: 'Dr. habil. Jean-Marc Seigneur',
        role: 'Director of the CAS on Blockchain, University of Geneva',
        image: jeanM,
        linkedin: 'https://www.linkedin.com/in/jmseigneur/',
        bio: 'Jean-Marc Seigneur is the director of the blockchain certificate of advanced studies at the University of Geneva. He has published more than 150 peer-reviewed publications in the field of digital trust, from the social to the technical aspects. His habilitation was on augmented human trust. He has evaluated and directed multi-million Euros projects in the field for the European Commission. He is the UN ITU Digital Currency Global Initiative workstream leader for stablecoins, DeFi and NFT. He is the inventor of a patent for dual offline payments with Bitcoins or ERC-20-based CBDC. Dual offline payment was a feature required for the Chinese digital yuan CBDC to work in case of no Internet/data due to no coverage, natural disaster, or war. As part of the ArtistCert community and platform, he is helping artists to create trustworthy NFTs called Signed NFTs, including, in contrast to legacy NFT, the rights of the owner signed by the artist with a Qualified Electronic Signature (QES), equivalent legally in the EU and Switzerland as a handwritten artist signature.',
      },
      {
        name: 'Vikram Aditya',
        role: 'Co-Founder & CEO, DAOLens',
        image: vikramA,
        twitter: 'https://twitter.com/viks_rum',
        bio: "Vikram (aka viks_rum) here from DaoLens. Product, Design and Growth are what I've resonated with the most—been in Web3 2015 onwards. Personally on a mission in 2023 to make sure to shake hands with as many folks as I can working around DAOs. My interest lies at the intersection of DAOs and AI, impact, regenerative future, DAO Operations and Dao-to-Dao collaboration. Coming onto my product, Daolens is a platform with modules that support (gating, discussions, tasks, bounties, payout and reputation, grant management, partner promotion, courses, community calendar etc) by aggregating other players and building some custom modules of our own so that you don't have to jump between tools. Most of the stuff stays on-chain. You can switch these modules on and off hence DaoLens can look like a classroom for some, like Discourse for some, like Trello for some, like a leaderboard for some, like payout tooling for some and like a beautiful community home for others.",
      },
      {
        name: "Kenneth O'Friel",
        role: 'CEO & Co-Founder, Toku',
        image: kennethO,
        linkedin: 'https://www.linkedin.com/in/kenneth-o-friel-234ab073/',
        bio: "Ken O'Friel is the co-founder and CEO of Toku, the comprehensive and global solution for token payroll and tax compliance. Toku provides their customers peace of mind with 100% tax compliance on all token-based compensation in over 100 countries globally, via a comprehensive suite of services including token-based payroll, token-based grant administration, employment and tax compliance, and WorkDAO – a unique set of employment and compensation services tailored for the needs of DAOs",
      },
      {
        name: 'Marta Geater Piekarska',
        role: 'Director of DAO Strategy, ConsenSys',
        image: martaP,
        linkedin: 'linkendin.com/in/martapiekarska',
        bio: "An expert in Open Source and Ecosystem Leadership, Marta serves as Head DAO Strategist at ConsenSys. She has an impressive track record of leading communities in many organizations including Balancer Labs, The Linux Foundation, Hyperledger, the Sovrin Foundation, and consulting for a plethora of startups. She’s also known for her love of the spotlight fulfilled in public speaking and mentoring which has scored her some awards like Most Influential Person in Blockchain, Consensys’ Women in Crypto, and Coindesk's Top 100 people in Blockchain ones. Marta holds a Ph.D. in Computer Security and Privacy and worked in this space with Apple, Blockstream, Mozilla, Deutsche Telekom, and others. She is a founder of the W3C Blockchain Community Group and presently serves as Chair of the Sovrin Technical Governing Board. Marta is passionate about 3 C: communities (DAO governance), collaboration (decentralisation and blockchain) and cooking (virtually anything). ",
      },
      {
        name: 'Vattan PS',
        role: 'Board Member, Internet Native Organization',
        image: vattanP,
        bio: 'Vattan is a startup influencer whose multi-faceted career spans founding Founderly, venture investing, mentoring, and speaking at various startup conferences. He feels Web3 has a promising future and looks forward to helping startups adopt it. Talk to him about crypto funds, DAO, and programmable money.',
        linkedin: 'https://www.linkedin.com/in/vattan/',
      },
      {
        name: 'Franck Nouyrigat',
        role: 'Founder, Electis',
        image: franckN,
        linkedin: 'https://www.linkedin.com/in/francknouyrigat',
        bio: "Franck Nouyrigat is a French-American developer-turned-entrepreneur, making significant contributions to the tech and startup ecosystem. He co-founded Startup Weekend, a global movement promoting entrepreneurship through 54-hour events, and Massive, a venture-backed distributed computing platform. Franck is currently working on the first web3 e-voting platform: Electis.com. He actively volunteers to help founders in org like Unleash.org. Franck's passion and work continue to influence the technology landscape worldwide; he divides his time between Tallinn, France, and the United States where he is building the first peer to peer startup studio: one37 (Coming soon!)",
      },
    ],
  },
]

export function Schedule() {
  let [currentSpeaker, setCurrentSpeaker] = useState(days[0].speakers[0])
  let [modalVisible, setModalVisible] = useState(false)

  function openSpeakerModal(speakerIndex) {
    setCurrentSpeaker(days[0].speakers[speakerIndex])
    setModalVisible(true)
  }
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            DAO-Forward Agenda
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight text-blue-900 lg:text-2xl">
            We’ll delve into some operational, technical, governance and legal
            questions surrounding DAOs and discuss Estonia’s readiness for
            creating and managing DAOs—and plenty more.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Container className="relative">
          <div className="max-w-7xl space-y-16">
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Registration & Welcome
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T09:30">09:30 AM</time> -{' '}
                    <time dateTime="2023-03-28T10:00">10:00 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Doors Open
                  </p>
                  <p class="flex-none text-sm sm:ml-6">
                    Registration & Light Breakfast
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T10:00">10:00 AM</time> -{' '}
                    <time dateTime="2023-03-28T10:05">10:05 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Welcome & Opening words
                  </p>
                  <p class="flex-none text-sm sm:ml-6">
                    DAO Day Organizer / INO Team
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T10:05">10:05 AM</time> -{' '}
                    <time dateTime="2023-03-28T10:25">10:25 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - The vision of Internet Native Organization
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(29)}
                  >
                    Vattan PS
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                DAO Landscape
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T10:25">10:25 AM</time> -{' '}
                    <time dateTime="2023-03-28T10:50">10:50 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - Current state of DAOs
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(1)}
                  >
                    Aiden Slavin
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T10:50">10:50 AM</time> -{' '}
                    <time dateTime="2023-03-28T11:00">11:00 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - How to setup a DAO?
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(26)}
                  >
                    Vikram Aditya
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T11:00">11:00 AM</time> -{' '}
                    <time dateTime="2023-03-28T11:15">11:15 AM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - Government stack & fair data economy
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(12)}
                  >
                    Ott Velsberg
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T11:15">11:15 AM</time> -{' '}
                    <time dateTime="2023-03-28T12:00">12:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Panel - Estonia&apos;s readiness for DAOs
                  </p>
                  <p class="flex-none space-x-3 text-sm sm:ml-6">
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(6)}
                    >
                      Priit Lätt
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(30)}
                    >
                      Franck Nouyrigat
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(22)}
                    >
                      Reimo Hammerberg
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(23)}
                    >
                      Javier Ortin
                    </span>
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Distributed Governance
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T12:00">12:00 PM</time> -{' '}
                    <time dateTime="2023-03-28T12:15">12:15 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - Governance 101
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(3)}
                  >
                    Kyle Weiss
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T12:15">12:15 PM</time> -{' '}
                    <time dateTime="2023-03-28T13:00">13:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Panel - Is DAO really decentralized?
                  </p>
                  <p class="flex-none space-x-3 text-sm sm:ml-6">
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(14)}
                    >
                      Dima Sarle
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(5)}
                    >
                      Connor Spelliscy
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(2)}
                    >
                      Eyal Eithcowich
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(25)}
                    >
                      Jean-Marc Seigneur
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(17)}
                    >
                      Magnus Jones
                    </span>
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Lunch break
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T13:00">13:00 PM</time> -{' '}
                    <time dateTime="2023-03-28T14:00">14:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Lunch & Networking
                  </p>
                  <p class="flex-none text-sm sm:ml-6">
                    Network with other participants over a delicious lunch
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Decentralized Operations
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T14:00">14:00 PM</time> -{' '}
                    <time dateTime="2023-03-28T14:15">14:15 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - What entails running a DAO?
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(28)}
                  >
                    Marta Geater Piekarska
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T14:15">14:15 PM</time> -{' '}
                    <time dateTime="2023-03-28T15:00">15:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Panel - DAO Operations - Coordination, taxation & compliance
                  </p>
                  <p class="flex-none space-x-3 text-sm sm:ml-6">
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(18)}
                    >
                      Roman German
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(7)}
                    >
                      Kaido Künnapas
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(9)}
                    >
                      Aleksa Mil
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(4)}
                    >
                      Johnny Chin
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(15)}
                    >
                      George Basiladze
                    </span>
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Legal Structures
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T15:00">15:00 PM</time> -{' '}
                    <time dateTime="2023-03-28T15:45">15:45 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Panel - Virtual Assets Regulation and MiCA
                  </p>
                  <p class="flex-none space-x-3 text-sm sm:ml-6">
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(8)}
                    >
                      Viljar Kähari
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(10)}
                    >
                      Mari-Liis Kukk
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(16)}
                    >
                      Frédéric Hubin
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(20)}
                    >
                      Amardeep Thand
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(24)}
                    >
                      Toomas Seppel
                    </span>
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T15:45">15:45 PM</time> -{' '}
                    <time dateTime="2023-03-28T16:15">16:15 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Fireside chat - Blockchain and decentralized organizations
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(0)}
                  >
                    Paul Brody
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Coffee Break
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T13:00">16:15 PM</time> -{' '}
                    <time dateTime="2023-03-28T14:00">16:45 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Coffee o&apos;clock
                  </p>
                  <p class="flex-none text-sm sm:ml-6">
                    Drinks and light snacks
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                The Rise of Internet Native Economy
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T16:45">16:45 PM</time> -{' '}
                    <time dateTime="2023-03-28T17:00">17:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Keynote - DAOs, compliance challenges, and economic
                    gardening
                  </p>
                  <p
                    class="flex-none cursor-pointer text-sm hover:text-blue-600 sm:ml-6"
                    onClick={() => openSpeakerModal(17)}
                  >
                    Magnus Jones
                  </p>
                </li>
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T17:00">17:00 PM</time> -{' '}
                    <time dateTime="2023-03-28T17:45">17:45 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Panel - The future of companies & collaborations
                  </p>
                  <p class="flex-none space-x-3 text-sm sm:ml-6">
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(21)}
                    >
                      Tarmo Virki
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(27)}
                    >
                      Kenneth O&apos;Friel
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(19)}
                    >
                      Mari Luukkainen
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(26)}
                    >
                      Vikram Aditya
                    </span>
                    <span
                      class="cursor-pointer hover:text-blue-600"
                      onClick={() => openSpeakerModal(13)}
                    >
                      Stenver Jerkku
                    </span>
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Wrap
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T17:45">17:45 PM</time> -{' '}
                    <time dateTime="2023-03-28T18:00">18:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Closing remarks
                  </p>
                  <p class="flex-none text-sm sm:ml-6">
                    DAO Day Organizer / INO Team
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-blue-600">
                Reception
              </h2>
              <ol className="mt-2 divide-y divide-blue-200 text-sm leading-6 text-blue-900">
                <li className="items-center py-4 sm:flex">
                  <p class="w-56 flex-none">
                    <time dateTime="2023-03-28T19:00">19:00 PM EEST</time> -{' '}
                    <time dateTime="2023-03-28T21:00">21:00 PM EEST</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">
                    Speakers / VIP Dinner hosted by PwC Legal Estonia
                  </p>
                  <p class="flex-none text-sm sm:ml-6">Invitation-only</p>
                </li>
              </ol>
            </div>
          </div>
        </Container>
        <Modal
          speaker={currentSpeaker}
          image={currentSpeaker.image}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </div>
    </section>
  )
}
