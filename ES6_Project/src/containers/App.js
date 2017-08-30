import React, {PropTypes} from 'react';
import '../stylesheets/style.css';
import {Grid} from 'react-bootstrap';
import List from '../components/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData,remove,add} from '../actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentWillMount() {
        this.props.loadData();
    }
    remove(item) {
        this.props.remove(item);
    }
    add(item) {
        this.props.add(item);
    }
    render() {
        if (!this.props.myList && !this.props.recommendations) return null;
        return (
          <Grid fluid>
            <List backgroundColor="aqua" data = {this.props.recommendations} button = "Add" header = "Recommendations" onClick = {(title) => {this.add(title)}}/>
            <List backgroundColor="antiquewhite" data = { this.props.myList } button = "Remove" header = "My List" onClick = {(title) => {this.remove(title)}}/>
          </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        myList: state.reducer.mylist,
        recommendations: state.reducer.recommendations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: bindActionCreators(loadData, dispatch),
        remove: bindActionCreators(remove, dispatch),
        add: bindActionCreators(add, dispatch)
    }
}

App.propTypes = {
    myList: PropTypes.array,
    recommendations: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
