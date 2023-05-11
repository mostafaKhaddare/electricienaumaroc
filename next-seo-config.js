export const SEO = {
    title:'',
    description:"",
    useAppDir :false,
    themeColor  : "0075ff" ,
    titleTemplate : "ELECTRICIENAUMAROC - %s ",
    canonical:'https://electricienaumaroc.ma',
    defaultTitle : "ELECTRICIENAUMAROC - website numero 1 au maroc  ",
    openGraph:{
        type : "website",
        locale : "ar_MA",
        siteName : "electricienaumaroc",
        url : "https://electricienaumaroc.ma",
        images : {
          url: 'https://electricienaumaroc.ma/poster.jpg',
          width: 850,
          height: 650,
          alt: 'Photo of text',
        }
    },
    twitter : {
        handle : '@handle',
        site : '@site',
        cardType : "summary_large_image"
    },
    additionalMetaTags :[
     {
      name: 'application-name',
      content: 'beinfoot'
    }, 
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1'
    },
    
    ],
    additionalLinkTags :[
      {
        rel: 'icon',
        href: '/favicon-16x16.png',
      },
      {
          rel: 'icon',
          href: '/favicon-32x32.png',
      },
      {
          rel: 'icon',
          href: '/favicon-192x192.png',
      },
      {
          rel: 'icon',
          href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png"',
        sizes: '180x180'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'preload',
        href: 'https://www.test.ie/font/sample-font.woof2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      }
    ]
}