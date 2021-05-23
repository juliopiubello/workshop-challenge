import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Posts from './components/Posts';
import AddTweet from './components/AddTweet';
import Navbar from './components/Navbar'
export default function Home() {

  return (
      <div>
        <Navbar />
        <div className={styles.container, "container"}>
          <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <AddTweet />
          <div class="row justify-content-center">
            <div class="col-8">
              <Posts />
            </div>
          </div>
        </div>
      </div>
  )
}
