import React from 'react';

export default class Dialog extends  React.Component {
    constructor (props) {

        super(props);
        this.state =  {
            className: 'modal fade'
        };
    }

    show () {
        this.setState({ className: 'modal fade show' });
        setTimeout(() => {
            this.setState({ className: 'modal fade show in' });
        }, 0);
    }
    hide () {
      // Fade out the help dialog, and totally hide it after a set timeout
      // (once the fade completes)
      this.setState({ className: 'modal fade show' });
      setTimeout(() => {
        this.setState({ className: 'modal fade' });
      }, 400);
    }
    render () {
      var centerStyle = {textAlign:"center"};
      return (
        <div className={this.state.className}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" aria-hidden="true" onClick={this.hide.bind(this)}>X</button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body detail-page">
                {this.props.children}
              </div>
              <div className="modal-footer" style={centerStyle}>
                <button type="button" className="btn btn-default" onClick={this.hide.bind(this)}>关闭</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

