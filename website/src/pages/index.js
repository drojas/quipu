import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BrowserWindow from '../components/BrowserWindow';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Pixelify } from "react-pixelify";

const features = [
  {
    title: <>Simple And Efficient</>,
    imageUrl: 'img/Startup.svg',
    description: (
      <>
        Use any authenticator device as usual.
        Connect as many devices as you want for multi-factor authentication and sharing keys.
      </>
    ),
  },
  {
    title: <>Safe By Design</>,
    imageUrl: 'img/Technology.svg',
    description: (
      <>
        Your data is encrypted with blockchain-level cryptography
        and unencrypted data never leaves <code>trusted</code> devices.
      </>
    ),
  },
  {
    title: <>Open Source</>,
    imageUrl: 'img/Networking.svg',
    description: (
      <>
        All source code of this project is and will remain Open Source for life.
      </>
    ),
  },
];

const featuresDetail = [
  {
    title: <>Web Authentication</>,
    imageUrl: 'img/User Security.svg',
    description: (
      <>
        Public key cryptography is safer than passwords and should be the first choice the web. Webauthn is a new W3C standard and it is supported by many websites and devices. <Link>Learn more</Link>
      </>
    ),
    before: () => (
      <BrowserWindow
        url='https://supreme-unicorn.startup'
        dark={{background: '#000'}}
        light={{background: '#FFF'}}
        style={{boxShadow: '0px 0px 1px #151515'}}>
        <div className={styles.browserSiteBar}>
          <span>🦄 SupremeUnicorn</span>
          <span>
            Home | Blog | Help | Contact
          </span>
        </div>
        <br></br>
        <br></br>
        Dear friend,
        <br></br>
        <br></br>
        Please authenticate yourself to continue ❗
        <br></br>
        <br></br>
        <i>
          Psst!. Our website supports webauthn. Use KeyCircle for an easier life :)
        </i>
        <br></br>
        <br></br>
        <Link>Login</Link>
        &nbsp;
        &nbsp;
        &nbsp;
        <Link>Register</Link>
      </BrowserWindow>
    )
  },
  {
    title: <>Blockchain Storage</>,
    imageUrl: 'img/SaaS.svg',
    description: (
      <>
        Security keys can securely store private keys you own. You can use them to directly control access to sites you visit. With KeyCircle you can store and share keys with your other devices and with peers or anyone you want.
      </>
    ),
    before: () => {
      const initialFoundKeyPizelSize = 6;
      const [foundKeyPixelSize, setFoundKeyPixelSize] = useState(initialFoundKeyPizelSize);
      function start (e) {
        e.preventDefault();
        setFoundKeyPixelSize(0);
      };
      function reset (e) {
        e.preventDefault();
        setFoundKeyPixelSize(initialFoundKeyPizelSize);
      };
      return (
        <BrowserWindow
          url='https://my.key-circle.io'
          dark={{background: '#000'}}
          light={{background: '#FFF'}}
          style={{boxShadow: '0px 0px 1px #151515'}}>
          ⵥ
          <br/>
          <Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/walternate@email.com</Link>
          <br/>
          <Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/keys</Link>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/supreme-unicorn.startup
          <br/>
          <br/>
          <div className="alert alert--secondary" role="alert">
            <button aria-label="Close" className="close" type="button">
              <span aria-hidden="true">×</span>
            </button>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <i>
                🦄 SupremeUnicorn Key
                &nbsp;
                <b>
                  Found
                </b>
              </i>
              &nbsp;
              &nbsp;
              <Pixelify
                src={('../../static/img/icons8-key.svg')}
                pixelSize={foundKeyPixelSize}
                fillTransparencyColor='#ebedf0'
                centered={true}
              >
              </Pixelify>
            </div>
          </div>
          <br/>
          {
          foundKeyPixelSize ? (
              <button style={{width: '100%'}} className="button button--primary" onClick={start}>
                Authorize
              </button>
          ) : (
              <button style={{width: '100%'}} className="button button--secondary" onClick={reset}>
                Undo
              </button>
          )
          }
        </BrowserWindow>
      );
    }
  },
  {
    title: <>Your Workflow</>,
    imageUrl: 'img/Work Flow.svg',
    description: (
      <>
        Define authentication settings involving multiple devices you own or within your group or organization
      </>
    ),
    before: () => {
      const initialFoundKeyPizelSize = 6;
      const [foundKeyPixelSize, setFoundKeyPixelSize] = useState(initialFoundKeyPizelSize);
      const [numDevices, setNumDevices] = useState(1);
      function start (e) {
        e.preventDefault();
        setFoundKeyPixelSize(0);
      };
      function reset (e) {
        e.preventDefault();
        setFoundKeyPixelSize(initialFoundKeyPizelSize);
      };
      return (
        <BrowserWindow
          url='https://my.key-circle.io'
          dark={{background: '#000'}}
          light={{background: '#FFF'}}
          style={{boxShadow: '0px 0px 1px #151515'}}>
          ⵥ
          <br/>
          <Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/walternate@email.com</Link>
          <br/>
          <Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/settings</Link>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/supreme-unicorn.startup
          <br/>
          <br/>
          Sharing settings
          <br/>
          <br/>
          <div>
          <input type="checkbox" id="settingsChoice1" name="settings1" value="email" />
          <label>All my devices</label>
          <br/>
          <input type="checkbox" id="settingsChoice2" name="settings2" value="phone" />
          <label>walternate@blabs.io from blabs</label>
          <br/>
          <Link>
            Add trusted device
          </Link>
          </div>
          <br/>
          {
          foundKeyPixelSize ? (
            <button style={{width: '100%'}} className="button button--primary" onClick={start}>
              Save
            </button>
          ) : (
            <button style={{width: '100%'}} className="button button--secondary" onClick={reset}>
              Undo
            </button>
          )
          }
        </BrowserWindow>
      );
      }
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();

  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title hero-logo">
            {siteConfig.title}
            <img className={styles.featureImage} src='img/logo.svg' alt={siteConfig.title} />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg device',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.workflow}>
          <div className="container">
            <div className="row">
              <div className={styles.browser}>
                <h1>How It Works</h1>
                <p style={{textAlign: 'center', maxWidth: 600}}>
                  KeyCircle seamlessly enhances the functionality of Security Keys and FIDO authenticators with an optimized blockchain storage, allowing anyone to store and share authentication keys securely and efficiently over the network. Share your login credentials with your trusted devices or peers.
                </p>
              </div>
            </div>
            {featuresDetail.map(({ before, ...props }, idx) => ([
                before ? (
                  <div className="row" key={`feat-detail-before${idx}`}>
                    <div style={{margin: '0 auto'}}>
                      {before()}
                    </div>
                  </div>
                ): null,
                <br></br>,
              <div className="row" key={`feat-detail-${idx}`}>
                {(idx % 2) ? <div className="col col--6"></div> : <div className="col col--2"></div>}
                <Feature key={idx} {...props} />
                {(idx % 2) ? <div className="col col--2"></div> : <div className="col col--6"></div>}
              </div>
            ]))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
