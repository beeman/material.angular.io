import {VERSION} from '@angular/material';

/** This material version will be used in footer and stackblitz. */
export const materialVersion = VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string;
  title: string;
}

/** Doc site versions. We update the urls and titles manually */
export const docVersions: VersionInfo[] = [
  {
    url: 'https://v5.material.angular.io/',
    title: '5.2.5',
  },
  {
    url: 'https://v6.material.angular.io/',
    title: '6.4.7'
  },
  {
    url: `https://material.angular.io/`,
    title: '7.0.0'
  }
];
