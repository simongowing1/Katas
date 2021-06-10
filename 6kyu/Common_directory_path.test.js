import { describe, expect, it } from '@jest/globals';
import { getCommonDirectoryPath } from './Common_directory_path';

describe('getCommonDirectoryPath', () => {
  describe('when no paths are common', () => {
    it('returns an empty string', () => {
      const paths = ['/web/assets/style.css', '/web/scripts/app.js', 'home/setting.conf'];
      const result = getCommonDirectoryPath(paths);
      expect(result).toEqual('');
    });
  });
  describe('when only base path is common', () => {
    it('returns single backslash', () => {
      const paths = ['/web/assets/style.css', '/.bin/mocha', '/read.me'];
      const result = getCommonDirectoryPath(paths);
      expect(result).toEqual('/');
    });
    it('returns single backslash', () => {
      const paths = ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'];
      const result = getCommonDirectoryPath(paths);
      expect(result).toEqual('/');
    });
  });
  describe('when argument contains common directory path', () => {
    it('returns the common directory path', () => {
      const paths = ['/web/images/image1.png', '/web/images/image2.png'];
      const result = getCommonDirectoryPath(paths);
      expect(result).toEqual('/web/images/');
    });
  });
});
