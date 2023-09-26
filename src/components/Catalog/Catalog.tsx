import React from 'react'
import FormFilter from '../FormFilter/FormFilter'
import styles from './catalog.module.scss'
import Cards from '../Cards/Cards'

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <FormFilter />
      <Cards />
    </section>
  )
}

export default Catalog