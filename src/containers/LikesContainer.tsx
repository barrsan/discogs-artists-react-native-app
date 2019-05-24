import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Likes } from '../components/Likes';
import { likesActions } from '../actions';
import { likesSelectors } from '../selectors';
import { IReduxState, IArtist } from '../types';

interface IProps {
  items: IArtist[];
  unlikeArtist: (id: number) => void;
}

const { likesSelector } = likesSelectors;

const LikesContainer = (props: IProps) => <Likes {...props} />;

const mapStateToProps = (state: IReduxState) => ({
  items: likesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...likesActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikesContainer);
