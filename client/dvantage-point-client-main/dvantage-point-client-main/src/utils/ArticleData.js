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
  },{
    id:13,
    name:'hybrid operating model',
    img:'https://media.licdn.com/dms/image/v2/D4D22AQEWav762inF1Q/feedshare-shrink_800/feedshare-shrink_800/0/1707833095101?e=2147483647&v=beta&t=JkM851IWk7oQkD6obTFVVcg2f1a8OuE9l3h_yJokiWU',
    description:'Are you planing for hybrid operating model for your technology operations with engagement of offshore augmented resources?'
, url: "article/hybrid-operating-model",
  }
];

export default articleData;
