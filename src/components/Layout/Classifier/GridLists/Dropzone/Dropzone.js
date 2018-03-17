import React from 'react'
import Dropzone from 'react-dropzone'


class FullScreen extends React.Component {
    constructor() {
      super()
      this.state = {
        accept: '',
        files: [],
        dropzoneActive: false
      }
    }
  
    onDragEnter() {
      this.setState({
        dropzoneActive: true
      });
    }
  
    onDragLeave() {
      this.setState({
        dropzoneActive: false
      });
    }
  
    onDrop(files) {
      this.setState({
        files,
        dropzoneActive: false
      });
    }
  
    applyMimeTypes(event) {
      this.setState({
        accept: event.target.value
      });
    }
  
    render() {
      const { accept, files, dropzoneActive } = this.state;
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        width: '50%',
        padding: '2.5em 0',
        background: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        color: '#fff'
      };
      return (
        <Dropzone
          disableClick
          style={{position: "relative"}}
          accept={accept}
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}
        >
          { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
            
            <input
              type="file"
              id="mimetypes"
              onChange={this.applyMimeTypes.bind(this)}
            />

            <div>
              {
                files.map(f => <li>{f.name} - {f.size} bytes</li>)
              }
            </div>
        </Dropzone>
      );
    }
  }
  
  <FullScreen />

  export default Dropzone