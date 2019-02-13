import { Config } from './../../models/config';

export interface ConfigState {
  config: Config;
}

export const initialConfigState: ConfigState = {
  config: {
    numberOfMessagesPerPage: 10,
    sortDirection: 'asc'
  }
};
