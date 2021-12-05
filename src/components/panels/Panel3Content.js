import React, {useState, Fragment} from 'react';
import { Document, Page } from 'react-pdf';
import falcon from '../../pdf/falcon.pdf';

function Panel3Content({pageNumber}) {
	
	const [numPages, setNumPages] = useState(null);
    //const [pageNumber, setPageNumber] = useState(1);
	const [scale, setScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
	
	function changeScale(txt) {
		if(txt === 'zoomin') {
			setScale(scale + 1)
		} else {
			setScale(scale - 1)
		}
	}

    return (
      <div>
	    {scale === 1 ? (<button onClick={() => changeScale('zoomin')}>zoom in</button>) : (<button onClick={() => changeScale('zoomout')}>zoom out</button>)}
        <Document
          file={falcon}
		  loading="please wait,loading..."
		  error="Sorry, not able to display"
          onLoadSuccess={onDocumentLoadSuccess}
		  renderMode="svg"
        >
		<Page scale={scale} pageNumber={pageNumber} />
		  
        </Document>
      </div>
    );
	
}


export default Panel3Content;