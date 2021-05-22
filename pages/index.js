import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Posts from './components/Posts';
import AddTweet from './components/AddTweet';
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddTweet />
      <Posts />
    
    </div>
  )
}
