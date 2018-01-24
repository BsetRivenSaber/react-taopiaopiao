// export default (store) => ({
// 	path: 'movie/detail/:id',
// 	getComponent (nextState, cb) {
// 		const MovieDetailView = require('./containers/MovieDetailContainer').default
// 		const requestReducer =  require('../../store/request').default;
// 		cb(null, MovieDetailView)
// 	}
// })

import store from '../../store/createStore'
import { injectReducer } from '../../store/reducers'
import { connect } from 'react-redux';
import { requestData } from '../../store/request';
import MovieDetailView from './components/MovieDetailView';
import requestReducer from '../../store/request'
injectReducer(store, {key: 'request', reducer: requestReducer});

const mapDispatchtoProps = {
	requestData
}

const mapStateToProps = (state) => ({
  	request: state.request
})

export default connect(mapStateToProps, mapDispatchtoProps)(MovieDetailView)
