import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image"
export default () => (
   <Layout
        pageMeta={{
            title:"Comp"
        }}
    >
        <div class="container">
            <h1 class="header">Fall 2020 COMP</h1>
            <p></p>
            <p class="text">
                Unfortunately, due to the limitations imposed by the remote fall semester, The Harvard Advocate has decided to suspend its planned
                Fall 2020 comp. We feel that holding a comp remotely at present would pose issues of accessibility, due to varying degrees of access
                to digital resources, while preventing the magazine from welcoming new members to our community in a meaningful and substantive way.
                In lieu of a comp, we will be hosting open events, workshops, and projects — all of which will provide opportunities for new students
                to become involved in Advocate life. Please fill out the form linked here if you would like to be kept in the loop about ways to participate
                in Advocate activities this semester. We anticipate returning to our comp cycle in Spring 2021, with a redesigned comp that responds to the
                structure of the spring term.
            </p>
            <p></p>
        </div>
   </Layout>
)
