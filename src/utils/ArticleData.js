const articleData = [
  {
    id: 1,
    name: "Core Principles for GTM Strategy and Tech Partner selection",
    img: "https://media.licdn.com/dms/image/v2/D5612AQG146V4SGRxtA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732267377102?e=2147483647&v=beta&t=5c2_7_BXVteGsL43gWWqeB1527_SMu1L34pk5bWRMo0",
    description: ``,
    url: "article/core-principle-for-gmt",
  },
  {
    id: 2,
    name: "Next-Generation Data Centers: Revolutionizing Application-Centric Infrastructure for Generative AI",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGINFZV2nFlCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726751034289?e=2147483647&v=beta&t=cRVZVsorOrj3Ew8ofsuwpqLossGL1M0B7EXwRujxYsw",
    description: `In the evolving landscape of digital transformation, the traditional compute-centric data center is being overtaken by a new paradigm—an application-centric data center tailored for the high demands of modern-day apps.`,
    url: "article/next-generation-data-centers",
  },
  {
    id: 3,
    name: "Service Resilience Posture is a board room discussion now!",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGE1-qZclAJLg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722226160541?e=2147483647&v=beta&t=KKnrVGg806z9stJMcg0OtF97Nj9I5ikP89ty65N04lM",
    description: `Zero Data Loss (RPO) and Recovery Time Objectives (RTO) Are No Longer Objectives, They're Necessities`,
    url: "article/service-resilience-posture",
  },
  {
    id: 4,
    name: "Navigating the Go-to-Market Strategy: First to Market vs. Best in Market and the MVP Trade-Off",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQEpJBzzy_39zQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726135549381?e=2147483647&v=beta&t=c-q8DD-4NPpJPRFhF4SazFcmLBFgVf5H8hJuhM9S7MY",
    description: `In the highly competitive and fast-evolving landscape of product development, a debate persists: Should a company aim to be the first in the market or focus on being the best in the market? `,
    url: "article/navigating-the-go-to-market-strategy",
  },
  {
    id: 5,
    name: "Leveraging Advanced Automation Tools to Achieve Agility, Error-Free Releases, Resiliency and Immunity",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGDElcBGLa1iA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726309751368?e=2147483647&v=beta&t=Ibc46RzZGX7dyzPBZHW8Y_vL1kPx_9qzaxgb6o9maBA",
    description: `Automation is rapidly transforming the way organizations develop, test, and maintain applications, especially in the era of AI and DevOps. 
    `,
    url: "article/leveraging-advanced-automation-tools",
  },
  {
    id: 6,
    name: "Leveraging Blockchain for Strengthening E-KYC and Combatting Synthetic Identities",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFlyNNNYZDxXw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1721199713327?e=2147483647&v=beta&t=kq0syFEWrrgCgdzjvPo_1zAZgpSa212qi_dLFBbbqMA",
    description: `Leveraging blockchain technology to combat synthetically generated malicious identities and strengthen E-KYC data security can be approached through several key strategies. 
    `,
    url: "article/leveraging-blockchain-technology",
  },
  {
    id: 7,
    name: "Composable Banking as a Service: Revolutionizing Modern Banking with Scalable Integration",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGkr6UvVn6t5g/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1716440330413?e=2147483647&v=beta&t=5qNDW5KgdOYFkKWQeB1uIiNNr3-8tSHbdUSxmWKaKxs",
    description: `In an era where technology is reshaping every industry, banking is no exception. The traditional banking....`,
    url: "article/composable-banking",
  },
  {
    id: 8,
    name: "When designing an orchestrated IT system",
    img: "https://media.licdn.com/dms/image/v2/D5622AQGIg0FV5Ss-mw/feedshare-shrink_800/feedshare-shrink_800/0/1710673452890?e=2147483647&v=beta&t=Mcyllpmix64Ek7V4kK4iu6zXdKmSthlOGo4gsnqQvFM",
    description: `When designing an orchestrated IT system, several key parameters must be...`,
    url: "article/when-designing-an-orchestrated-it-system",
  },
  {
    id: 9,
    name: "Key aspects of information security tailored to the contemporary IT environment",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHkkSJrqHF4sw/feedshare-shrink_800/feedshare-shrink_800/0/1710093469935?e=2147483647&v=beta&t=IbpP0o0Jn8NBpn834lW6fVGNvRj0Bz-oRJM5kFcCj7A",
    description:
      "Cloud Security: Specific to protecting data, applications, and infrastructures involved in cloud computing, addressing....",
    url: "article/key-aspects-of-information-security",
  },
  {
    id: 10,
    name: "Service Delivery Maturity Model",
    img: "https://media.licdn.com/dms/image/v2/D5622AQFyLH6txVj9BQ/feedshare-shrink_800/feedshare-shrink_800/0/1706954074594?e=2147483647&v=beta&t=9yG2uIbBS1K_6g9mXvY2ZaKF4efLd0Nt5urPqoqGGhI",
    description:
      "Make sure your account management and excellence management have tightly coupled collaboration process to fulfill business needs and vantage success together with customer. It’s always about a win-win deal!",
    url: "article/service-delivery-maturity-model",
  },
  {
    id: 11,
    name: "CISO",
    img: "https://media.licdn.com/dms/image/v2/D5622AQFE4NKQc5wrUg/feedshare-shrink_800/feedshare-shrink_800/0/1706806462766?e=2147483647&v=beta&t=kmZHq7Fd9-TiBHEujq08Ta2IODYafdUZNmEZhxWzJaU",
    description:
      "CISOs, are you ready to take your organization's IT security to the next level?",
    url: "article/ciso",
  },
  {
    id: 12,
    name: "As organizations grow",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQH_0nRxpBw-Tg/feedshare-shrink_800/feedshare-shrink_800/0/1708523230655?e=2147483647&v=beta&t=Y27hIF47nvXbaKAmq7co50R9YiaJFbRLr4lLK7AOwhM",
    description:
      "As organizations grow, so do their PCI DSS responsibilities and scope ......",
    url: "article/as-organizations-grow",
  },
  {
    id: 13,
    name: "hybrid operating model",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQEWav762inF1Q/feedshare-shrink_800/feedshare-shrink_800/0/1707833095101?e=2147483647&v=beta&t=JkM851IWk7oQkD6obTFVVcg2f1a8OuE9l3h_yJokiWU",
    description:
      "Are you planing for hybrid operating model for your technology operations with engagement of offshore augmented resources?",
    url: "article/hybrid-operating-model",
  },
  {
    id: 14,
    name: "Unified Knowledge Center Solution: A Nucleus in knowledge driven culture!",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFopyXU2q5TNw/article-cover_image-shrink_720_1280/B56ZVchIuSGsAM-/0/1741013960934?e=2147483647&v=beta&t=KSvG2cPAEBgzPE5l5o7DeGGdMlDZAJJDFyxREFPqVT4",
    description:
      "In today’s rapidly evolving business landscape, leveraging knowledge assets is critical for both operational efficiency and employee engagement.",
    url: "article/unified-Knowledge-center-solution",
  },
  {
    id: 15,
    name: `Rewire hybrid workspace with "Digital Colleagues"`,
    img: "https://media.licdn.com/dms/image/v2/D4D12AQGZiDfYe98kdA/article-cover_image-shrink_720_1280/B4DZZtxvOCH4AI-/0/1745598486183?e=2147483647&v=beta&t=U168N0X1Y3QI1Qhz-sxD2ZKEJ5jvJX5lymwiBZ7Mng4",
    description: `We are entering a new reality where AI can reason and solve problems in remarkable ways, acting as  "Intelligence on tap"`,
    url: "article/Rewire-hybrid-workspace-with-Digital-Colleagues",
  },
  {
    id: 16,
    name: `Champion of innovation and the guardian of the Enterprise: A Strategic Guide for CISOs`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQGwKyCPrsRkuQ/article-cover_image-shrink_720_1280/B56Za0yTRcGUAI-/0/1746789813426?e=2147483647&v=beta&t=meBuvol85ckeOkchFm8ZDMHi7DRC5IVpSYPwhJoAayo",
    description:
      "Generative AI (GenAI) is transforming business at a breakneck pace, offering breakthroughs in efficiency and innovation.",
    url: "article/Champion-of-innovation-and-the-guardian-of-the-Enterprise",
  },
  {
    id: 17,
    name: "WINA: Making LLMs Smarter, Faster, and Greener",
    img: "https://media.licdn.com/dms/image/v2/D5612AQEDmCZjZvKYvw/article-cover_image-shrink_720_1280/B56ZdBHgsYHoAU-/0/1749144183918?e=2147483647&v=beta&t=4lFQGrUNtTlOzJdrajtGeWYH17a0P84QHbFVMrrh4Rk",
    description: `"Unlocking the LLM Revolution: How WINA is Making AI Smarter, Faster, and Greener" discusses the critical need for efficient Large Language Model (LLM) inference and introduces WINA (Weight Informed Neuron Activation) as a significant advancement in this area.`,
    url: "article/WINA-Making-LLMs-Smarter-Faster-and-Greener",
  },
  {
    id: 18,
    name: "SIEM at the Helm: Transforming Cybersecurity Through Intelligent Threat Management",
    img: "https://media.licdn.com/dms/image/v2/D5612AQH7Nocj4JybwA/article-cover_image-shrink_720_1280/B56ZZR7rivGUAI-/0/1745131326686?e=2147483647&v=beta&t=WGOXEV3CfnZ19T9_hyZOdfoG5Syf4axwzNvOY84tGSM",

    description:
      "Security Information and Event Management (SIEM) solutions have emerged as the cornerstone of modern security operations, providing the critical capability to detect, analyze, and respond to security threats effectively and efficiently",
    url: "article/SIEM-at-the-Helm",
  },
  {
    id: 19,
    name: "Quishing- QR version of phishing attack: The Sneaky New Kid on the Block!",
    img: "https://media.licdn.com/dms/image/v2/D5612AQHSEEm_RzSILQ/article-cover_image-shrink_720_1280/B56ZdaoyCPHEAM-/0/1749572335862?e=2147483647&v=beta&t=BOdD9AC4xG63rK7nxDiCp87Hg8-UNKvZd3Fw7Tuugts",
    description:
      "QR codes are truly ubiquitous, appearing on menus, advertisements, payment terminals, and even in your hotel room.",
    url: "article/Quishing-QR-version-of-phishing-attack-The-Sneaky-New-Kid-on-the-Block",
  },
  {
    id: 20,
    name: "BurpAI, an AI-Elevated Penetration Testing",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFVAj-HfdOcbQ/article-cover_image-shrink_720_1280/B56ZdlbwOcH8AI-/0/1749753467160?e=2147483647&v=beta&t=Jcst_D_Nf4rKiu4JBG2PkICvWISZ1XX_VTAUoioF0T8",
    description:
      "This article delves into the practical application of AI in web application penetration testing, specifically focusing on the new Burp AI features integrated within Burp Suite Professional.",
    url: "article/BurpAI-an-AI-Elevated-Penetration-Testing",
  },
  {
    id: 21,
    name: `Fortifying AI- 'Doughnut of Defense': one cannot secure what remains unseen`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQHZw69oP6kmcg/article-cover_image-shrink_720_1280/B56Zdpf54cG0AI-/0/1749821667554?e=2147483647&v=beta&t=4wOktOWG7meMVfcw88fBM-LecJPIrPKD7_k_U5_2PQY",
    description:
      "As Artificial Intelligence (AI) rapidly integrates into the core of our digital operations, a critical question emerges: how robust are the protective layers surrounding this central intelligence?",
    url: "article/Fortifying-AI-Doughnut-of-Defense-one-cannot-secure-what-remains-unseen",
  },
  {
    id: 22,
    name: "Understanding AI Agents: Architecting the Future of Autonomous Systems",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGYysMxT_666w/article-cover_image-shrink_720_1280/B56Zdu8ACcGoAQ-/0/1749912915309?e=2147483647&v=beta&t=MBaHny8s10QK_G_UqqRMNrdoduKDvpbYlcxTN7RsYM0",
    description: `To grasp the essence of an AI agent, it's crucial to first understand what it is not. A simple, one-shot prompt to an AI model—such as asking a Large Language Model (LLM) to "write an essay on topic X from start to finish"—does not constitute an AI agent.`,
    url: "article/Understanding-AI-Agents-Architecting-the-Future-of-Autonomous-Systems",
  },
  {
    id: 23,
    name: "Autonomy of the Evolving AI Agent Ecosystem!",
    img: "https://media.licdn.com/dms/image/v2/D5612AQH-svOhe6h3Mw/article-cover_image-shrink_720_1280/B56ZeSOj6cH8AI-/0/1750504986275?e=2147483647&v=beta&t=JNa4ENYoqLt5LL3y5LDgxcgdYMMlok0qBOdICS2Qnkk",
    description: `The artificial intelligence paradigm is experiencing a profound shift, moving beyond assistive tools to sophisticated, autonomous agents capable of complex reasoning, proactive action, and seamless integration across diverse workflows.`,
    url: "article/Autonomy-of-the-Evolving-AI-Agent-Ecosystem",
  },
  {
    id: 24,
    name: "AI Search and Generative Engine Optimization (GEO): A Paradigm Shift in Digital Visibility",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGq8RvUQUgNkA/article-cover_image-shrink_720_1280/B56ZeEbVkWGQAQ-/0/1750273455611?e=2147483647&v=beta&t=ejQ3Enc4cTjg0fdUzQxWv0QDhT3cCSNKSx9FBu46ffs",
    description: `The Evolution of Search: From Keywords to Conversations, contexts and Intents!`,
    url: "article/AI-Search-and-Generative-Engine-Optimization-(GEO)-A-Paradigm-Shift-in-Digital-Visibility",
  },
  {
    id: 25,
    name: "LLMs as Operating Systems: The Intelligent Future is Here",
    img: "https://media.licdn.com/dms/image/v2/D5612AQHodWyhsWcPFQ/article-cover_image-shrink_720_1280/B56ZeeTLf6HoAM-/0/1750707524363?e=2147483647&v=beta&t=kIWeXSl-SsZZ1q7c5mBnxEinvUiq383zsK6im35Wh0k",
    description: `LLMs as Operating Systems or AIOS represent a fundamental shift in computing, in an era where software is inherently intelligent.`,
    url: "article/LLMs-as-Operating-Systems-The-Intelligent-Future-is-Here",
  },
  {
    id: 26,
    name: `Software 3.0: "English" is the new programming Language!`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQEyqvXZyL4-Uw/article-cover_image-shrink_720_1280/B56ZeofUufG0AI-/0/1750878477819?e=2147483647&v=beta&t=npfJE-EErgRw7T0uphTWpxygBAJRTsVJLaZspHZ06WE",
    description: `The world of software is experiencing its biggest shake-up in decades. We're moving into a new age powered by Artificial Intelligence, and it's changing everything. The most exciting part? You don't need to be a traditional coder to build with it. The new programming language is simply English.`,
    url: "article/Software-English-is-the-new-programming-Language",
  },
  {
    id: 27,
    name: `Deep Contribution of Ds in 9s (Uptime)`,
    img: "https://media.licdn.com/dms/image/v2/D4D12AQG9QHC2w5te-w/article-cover_image-shrink_720_1280/B4DZerVa7.HkAI-/0/1750926218570?e=2147483647&v=beta&t=aKkQ6p6cIn5mXyFz0hObO-B8sQcPVlDqBGoNdMEml80",
    description: `Uptime or Service continuity is the core target or KPI for any enterprise IT operation in running business critical functions. And depending on time criticality, RTO and RPO are two three-letter acronyms which objectively drives the journey from design to implementation to achieve service continuity during a micro or macro disaster.`,
    url: "article/Deep-Contribution-of-Ds-in-9s-Uptime",
  },
  {
    id: 28,
    name: `Deep Contribution of Ds in 9s (Uptime)`,
    img: "https://media.licdn.com/dms/image/v2/D4D12AQG9QHC2w5te-w/article-cover_image-shrink_720_1280/B4DZerVa7.HkAI-/0/1750926218570?e=2147483647&v=beta&t=aKkQ6p6cIn5mXyFz0hObO-B8sQcPVlDqBGoNdMEml80",
    description: `Uptime or Service continuity is the core target or KPI for any enterprise IT operation in running business critical functions. And depending on time criticality, RTO and RPO are two three-letter acronyms which objectively drives the journey from design to implementation to achieve service continuity during a micro or macro disaster.`,
    url: "article/Deep-Contribution-of-Ds-in-9s-Uptime",
  },
  {
    id: 29,
    name: `Marvel that augments human potentials and creates new opportunities.`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQFhi--RBxJo3A/article-cover_image-shrink_720_1280/B56Zes6phqGoAM-/0/1750952746794?e=2147483647&v=beta&t=Tf-05GxwsA50gD48S6SyTAuXiTthggGsKDxi8c9bXGc",
    description: `The narrative surrounding AI and employment often evokes fear of job displacement. However, a more precise understanding reveals that it's not AI itself, but rather individuals proficient in AI, who will gain a significant competitive edge.`,
    url: "article/Marvel-that-augments-human-potentials-and-creates-new-opportunities",
  },
  {
    id: 30,
    name: `HarmonyOS NEXT: Built for "Internet of Everything."`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQFYJHb6mx1gWg/article-cover_image-shrink_720_1280/B56ZeuEgaHH8AI-/0/1750972111550?e=2147483647&v=beta&t=VuOV3E5dP0E8rOcHL2jxsMey0v0sK6ND6oaSOmud7kQ",
    description: `
The global technology landscape is witnessing a tectonic shift, and its epicenter is Huawei's Developer Conference (HDC 2025). The launch of HarmonyOS NEXT is not a mere version update; it is a profound declaration of technological sovereignty and the birth of a true third global operating system.`,
    url: "article/HarmonyOS-NEXT-Built-for-Internet-of-Everything",
  },
  {
    id: 31,
    name: `The Agricultural Revolution: Integration with Technologies and A Connected Future`,
    img: "https://media.licdn.com/dms/image/v2/D5612AQE1pGW2s__87w/article-cover_image-shrink_720_1280/B56ZexPn6fGQAI-/0/1751025358915?e=2147483647&v=beta&t=vK8miuJykPo6n8rvSwZp6xkbNNZ1yZuDRLSQSEUZcMw",
    description: `The agricultural landscape is experiencing an unprecedented transformation, fueled by a multi-trillion-dollar capital inflow and the re-engagement of millions of young people.`,
    url: "article/The-Agricultural-Revolution-Integration-with-Technologies-and-A-Connected-Future",
  },
];
export default articleData;
