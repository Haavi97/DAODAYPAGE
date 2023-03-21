import { useId, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { Modal } from '@/components/Modal'
import paulBImage from '@/images/avatars/paul-brody-ey.jpg'
import aidenS from '@/images/avatars/aiden-slavin-wef.jpg'
import eyalEImage from '@/images/avatars/eyal-eithcowich-deepdao.jpg'
import kevinO from '@/images/avatars/kevin-owocki-gitcoin.jpg'
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
        name: 'Kevin Owocki',
        role: 'Founder, GitCoin/Supermodular',
        image: kevinO,
        twitter: 'https://twitter.com/owocki',
        bio: 'Kevin Owocki is a blockchain expert, computer scientist, co-founder of Gitcoin and CEO/founder of SuperModular, a venture studio that builds regen web3 projects. After completing his BS in Computer Science, Kevin spent 15 years in the world of web2, working in engineering leadership serving as a CTO and founder for open source software and web startups.\nKevin co-founded Gitcoin in 2017 where his vision of a positive-sum ecosystem supported by public goods helped raise and distribute over $72 million to projects in the ecosystem. Kevin is now fully focused on building his new project, SuperModular, aiming to build a modular stack of products used specifically for public goods and funding tools. Kevin is also the host of the Green Pill podcast on the Bankless network, where he discusses regenerative crypto-economic systems that create positive externalities for the world.',
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
        role: 'Director of the CAS on Blockchain, University of Geneva',
        image: vikramA,
        twitter: 'https://twitter.com/viks_rum',
        bio: "Vikram (aka viks_rum) here from DaoLens. Product, Design and Growth are what I've resonated with the most—been in Web3 2015 onwards. Personally on a mission in 2023 to make sure to shake hands with as many folks as I can working around DAOs. My interest lies at the intersection of DAOs and AI, impact, regenerative future, DAO Operations and Dao-to-Dao collaboration. Coming onto my product, Daolens is a platform with modules that support (gating, discussions, tasks, bounties, payout and reputation, grant management, partner promotion, courses, community calendar etc) by aggregating other players and building some custom modules of our own so that you don't have to jump between tools. Most of the stuff stays on-chain. You can switch these modules on and off hence DaoLens can look like a classroom for some, like Discourse for some, like Trello for some, like a leaderboard for some, like payout tooling for some and like a beautiful community home for others.",
      },
      // {
      //   name: 'Franck Nouyrigat',
      //   role: 'Founder, Electis',
      //   image: franckN,
      // linkedin: 'https://www.linkedin.com/in/francknouyrigat',
      // bio: "Franck Nouyrigat is a French-American developer-turned-entrepreneur, making significant contributions to the tech and startup ecosystem. He co-founded Startup Weekend, a global movement promoting entrepreneurship through 54-hour events, and Massive, a venture-backed distributed computing platform. Franck is currently working on the first web3 e-voting platform: Electis.com. He actively volunteers to help founders in org like Unleash.org. Franck's passion and work continue to influence the technology landscape worldwide; he divides his time between Tallinn, France, and the United States where he is building the first peer to peer startup studio: one37 (Coming soon!)",
      // },
      {
        name: "Kenneth O'Friel",
        role: 'CEO & Co-Founder, Toku',
        image: kennethO,
        linkedin: 'https://www.linkedin.com/in/kenneth-o-friel-234ab073/',
        bio: 'Kenneth is an entrepreneur, angel investor, and co-founder of Toku (prev. WorkDAO), a company that provides a global crypto-native solution to hire and compensate contributors legally and compliantly. Before founding WorkDAO, Ken studied at Bates College and worked at Bank of America Tokyo.',
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
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [currentSpeaker, setCurrentSpeaker] = useState(days[0].speakers[0])
  let [modalVisible, setModalVisible] = useState(false)

  function openSpeakerModal(speakerIndex) {
    setCurrentSpeaker(days[0].speakers[speakerIndex])
    setModalVisible(true)
  }

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight text-blue-900 lg:text-2xl">
            Featuring an impressive lineup of industry experts, innovators, and
            thought leaders.
          </p>
        </div>

        <div className="mt-14 lg:mt-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none">
            {days[0].speakers.map((speaker, speakerIndex) => (
              <div
                key={speakerIndex}
                onClick={() => openSpeakerModal(speakerIndex)}
                className="cursor-pointer"
              >
                <Image
                  className="aspect-square w-full rounded-2xl object-cover"
                  src={speaker.image}
                  alt={speaker.name}
                />
                <h3 className="mt-8 font-display text-lg font-bold tracking-tight text-slate-900 md:text-xl">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm tracking-tight text-slate-500 md:text-base">
                  {speaker.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Modal
        speaker={currentSpeaker}
        image={currentSpeaker.image}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </section>
  )
}
