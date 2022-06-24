import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  let router = useRouter();

  return (
    <div onClick={() => {router.push({
          pathname: '/post/[pid]',
          query: { pid: 1 },
        })}} className={styles.container}>
     Игорь красавчик
    </div>
  )
}

export default Home
