import React from 'react'
import Head from 'next/head'
import css from 'next/css'

export default () => (
  <div>
    <Head>
      <title>afterwhen.co</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <style>{`
        html, body { height: 100%; }
        body { font-family: Menlo, monospace; display: flex; justify-content: center; align-items: center; }
      `}</style>
    </Head>

    <div>
      <style jsx>{`
        div { text-align: center; }
      `}</style>
      <div>
        <img src="/static/after_when.svg" width="75" height="75" alt="afterwhen logo"/>
      </div>
      <h1>afterwhen</h1>
      <style jsx>{`
        h1 { font-weight: normal; font-size: 13px; }
      `}</style>
    </div>
  </div>
)
