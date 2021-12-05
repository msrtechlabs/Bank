import Split from 'react-split';
import Panel2Content from './Panel2Content.js';


function Panel2View({setPageNumber}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel2Content setPageNumber={setPageNumber} />
		</Split>
	);
	
}


export default Panel2View;