import withRedux from 'next-redux-wrapper'
import configureStore from '../configureStore'

export default (mapStateToProps, mapDispatchToProps) =>
  withRedux(configureStore, mapStateToProps, mapDispatchToProps)
