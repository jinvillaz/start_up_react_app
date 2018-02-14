import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {List, ListItem} from 'material-ui/List';
import SampleStore from '../stores/store';

class _SampleContainer1 extends Component {
    static getStores() {
        return [SampleStore];
    }

    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <AppBar title="Sample App"/>
                <Toolbar>
                    <ToolbarTitle text="Container: SampleContainer1"/>
                </Toolbar>
                <List>
                    <ListItem><Link to="/">Top</Link></ListItem>
                    <ListItem><Link to="/sample1">Sample1</Link></ListItem>
                    <ListItem><Link to="/sample2">Sample2</Link></ListItem>
                </List>
            </div>
        );
    }
}

const SampleContainer1 = Container.create(_SampleContainer1);
export default SampleContainer1;
