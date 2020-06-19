import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default({children, pageMeta}) => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageMeta.title}</title>
        </Helmet>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)