import React from 'react';
import styles from './flowers.module.css';

function Flowers() {
  return (
    <div className={styles.grid}>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652613857247314/IMG_20240213_012611_127.jpg?ex=65dcc9d1&is=65ca54d1&hm=562841fae2b4f68f9b84ba80796ce59b4aa0e4012b2d57d22717271da4cbd02a&=&format=webp&width=503&height=671' alt="Description" /></div>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652614238797914/IMG_20240213_012606_880.jpg?ex=65dcc9d1&is=65ca54d1&hm=3c4dadeb56b1c9f0d15b9b20d53d7c431cf828c55e45a1c50d02b7798b1a752f&=&format=webp&width=503&height=671' alt="Description" /></div>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652614544986153/IMG_20240213_012601_653.jpg?ex=65dcc9d1&is=65ca54d1&hm=f2f15fe6ddfc930a30c47cf52c78a8d025452c2fa50797e3e69c44b2c8b1e969&=&format=webp&width=503&height=671' alt="Description" /></div>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652614910152804/IMG_20240213_012556_024.jpg?ex=65dcc9d1&is=65ca54d1&hm=9496dc45e2b18458615c1198f0db70a6661908321ed9176aeaacb6d2d4e1b40c&=&format=webp&width=503&height=671' alt="Description" /></div>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652615203627049/IMG_20240213_012551_574.jpg?ex=65dcc9d1&is=65ca54d1&hm=876655f463b011bcc2f05df096809e1f8deee1944edeec7c8b0be948504f71d0&=&format=webp&width=503&height=671' alt="Description" /></div>
      <div className={styles.item}><img src='https://media.discordapp.net/attachments/1091797967779934209/1206652615518195792/IMG_20240213_012547_638.jpg?ex=65dcc9d2&is=65ca54d2&hm=db009bb2790f48973b5be1d8c6bfd9c323462089e62b64646f03469241496a87&=&format=webp&width=503&height=671' alt="Description" /></div>
    </div>
  );
}

export default Flowers;