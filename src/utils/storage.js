import { driverWithDefaultSerialization } from '@aveq-research/localforage-asyncstorage-driver';
import localforage from 'localforage';

export const registerRNAsyncDriver = async () => {
  const driver = driverWithDefaultSerialization();
  await localforage.defineDriver(driver);
  await localforage.setDriver(driver._driver);
};
