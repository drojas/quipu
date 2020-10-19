/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './styles.module.css';

function BrowserWindow({children, minHeight, url, dark, light, style}) {
  const {isDarkTheme} = useThemeContext();
  const theme = isDarkTheme ? dark : light;
  return (
    <div className={styles.browserWindow} style={{minHeight, ...theme, ...style}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>
        {children}
      </div>
    </div>
  );
}

export default BrowserWindow;
