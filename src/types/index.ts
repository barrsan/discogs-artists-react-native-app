import { ReactNode } from 'react';
import { Map } from 'immutable';

export interface IReactChildren {
  children: ReactNode;
}

export interface IReduxState {
  artists: Map<string, any>;
  likes: Map<string, any>;
}

export interface IApiInstance {
  baseURL: string;
  headers?: object;
}

export interface IArtist {
  uuid: string;
  id: number;
  title: string;
  thumb?: string;
  liked?: boolean;
}

export interface IErrors {
  request: boolean;
  network: boolean;
}

export interface IRequestParams {
  init?: boolean;
  refresh?: boolean;
  force?: boolean;
}

export interface ISvgProps {
  width?: number;
  height?: number;
  fill?: string;
}
