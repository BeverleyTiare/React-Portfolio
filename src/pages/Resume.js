import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import pdf from '../assets/Resume.pdf';
// import {Document, Page} from 'react-pdf';
// import { useState } from 'react';
// import { useEffect } from 'react';

function Resume() {
    // const [numPages, setNumPages] = useState(null);

    // useEffect(() => {
        // setWidth(window.innerWidth);
        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <Container fluid>
            <Container className="resume">
                <h2>Resume</h2>
                {/* <Button variant="primary" href={pdf} target="_blank">Download</Button> */}
                {/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} width={width} />
                </Document> */}
            </Container>
        </Container>
    );
}

export default Resume;

//Link Resume.js to App.js:
//Do Resume  