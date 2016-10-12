import React from 'react';
import { render } from 'react-dom';

import Dialog from './react-dialog';

class DialogDemo extends React.Component {
    show () {
        this.refs.dialog.show();
    }
    hide () {
        this.refs.dialog.hide();
    }
    render () {
        return (
            <div>
                <button onClick={this.show.bind(this)}>show</button>
                <button onClick={this.hide.bind(this)}>hide</button>
                <Dialog ref="dialog" title="Dialog title">dialog body msg</Dialog>
            </div>
        );
    }
}

render(<DialogDemo />, document.getElementById('container'));
