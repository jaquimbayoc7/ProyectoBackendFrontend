import Layout from '@/modules/layouts/layout'
import ProjectLayout from '@/modules/project/components/layouts/project-layout.component'
import Project from '@/modules/project/components/project.components'
import React from 'react'

export default function PagePortfolio() {
  return (
    <Layout>
      <ProjectLayout/>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <Project/>
        <Project/>
        <Project/>
      </section>
    </Layout>
  )
}
