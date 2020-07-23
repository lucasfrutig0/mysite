import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)

  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experiência" />
      <div className="jobs-center">
        {/** btn container */}
        <div className="btn-container">
          {jobs.map((item, idx) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(idx)}
                className={`job-btn ${idx === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>

        {/** job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        Mais info
      </Link>
    </section>
  )
}

export default Jobs
