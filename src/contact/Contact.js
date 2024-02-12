import React from 'react';
import styles from './contact.module.css';
function Home() {
  return (
<div className={styles.div}>
  <div className={styles.holder}>
      <a className={styles.text} href= 'https://t.me/florairkutsk'target= '_blank'>
      Telegram
      </a>
      <a className={styles.text} href= 'https://www.twitch.tv/jake_mr'target= '_blank'>
      Twitch
      </a>
      </div>
    </div>
  );
}

export default Home;